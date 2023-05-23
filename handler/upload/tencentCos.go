package upload

import (
	"context"
	"errors"
	"fmt"
	"github.com/mangk/goAdmin80/core"
	"github.com/mangk/goAdmin80/core/config"
	"mime/multipart"
	"net/http"
	"net/url"
	"strings"
	"time"

	"github.com/tencentyun/cos-go-sdk-v5"
	"go.uber.org/zap"
)

type TencentCOS struct {
	cfg config.File
}

func (t *TencentCOS) UploadFile(file *multipart.FileHeader) (string, string, error) {
	client := NewClient(t.cfg)
	f, openError := file.Open()
	if openError != nil {
		core.Log().Error("function file.Open() Filed", zap.Any("err", openError.Error()))
		return "", "", errors.New("function file.Open() Filed, err:" + openError.Error())
	}
	defer f.Close() // 创建文件 defer 关闭
	fileKeyBuild := make([]string, 0)
	if t.cfg.PrefixPath != "" {
		fileKeyBuild = append(fileKeyBuild, t.cfg.PrefixPath)
	}
	fileKeyBuild = append(fileKeyBuild, fmt.Sprintf("%d_%s", time.Now().Unix(), file.Filename))
	fileKey := strings.Join(fileKeyBuild, "/")

	_, err := client.Object.Put(context.Background(), fileKey, f, nil)
	if err != nil {
		panic(err)
	}

	if t.cfg.CdnURL != "" {
		return t.cfg.CdnURL + "/" + fileKey, fileKey, nil
	}
	return client.BaseURL.BucketURL.Host + "/" + fileKey, fileKey, nil
}

func (t *TencentCOS) DeleteFile(key string) error {
	client := NewClient(t.cfg)
	_, err := client.Object.Delete(context.Background(), key)
	if err != nil {
		core.Log().Error("function bucketManager.Delete() Filed", zap.Any("err", err.Error()))
		return errors.New("function bucketManager.Delete() Filed, err:" + err.Error())
	}
	return nil
}

func NewClient(cfg config.File) *cos.Client {
	urlStr, _ := url.Parse("https://" + cfg.Bucket + ".cos." + cfg.Region + ".myqcloud.com")
	baseURL := &cos.BaseURL{BucketURL: urlStr}
	client := cos.NewClient(baseURL, &http.Client{
		Transport: &cos.AuthorizationTransport{
			SecretID:  cfg.ID,
			SecretKey: cfg.Key,
		},
	})
	return client
}
