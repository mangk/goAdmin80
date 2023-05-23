package upload

import (
	"context"
	"errors"
	"fmt"
	"github.com/mangk/goAdmin80/core"
	"mime/multipart"
	"net/http"
	"net/url"
	"time"

	"github.com/tencentyun/cos-go-sdk-v5"
	"go.uber.org/zap"
)

type TencentCOS struct{}

// UploadFile upload file to COS
func (*TencentCOS) UploadFile(file *multipart.FileHeader) (string, string, error) {
	client := NewClient()
	f, openError := file.Open()
	if openError != nil {
		core.Log().Error("function file.Open() Filed", zap.Any("err", openError.Error()))
		return "", "", errors.New("function file.Open() Filed, err:" + openError.Error())
	}
	defer f.Close() // 创建文件 defer 关闭
	fileKey := fmt.Sprintf("%d%s", time.Now().Unix(), file.Filename)

	_, err := client.Object.Put(context.Background(), fileKey, f, nil)
	if err != nil {
		panic(err)
	}

	if core.Config().TencentCOS.BaseURL != "" {
		return core.Config().TencentCOS.BaseURL + "/" + fileKey, fileKey, nil
	}
	return client.BaseURL.BucketURL.Host + "/" + fileKey, fileKey, nil
}

// DeleteFile delete file form COS
func (*TencentCOS) DeleteFile(key string) error {
	client := NewClient()
	_, err := client.Object.Delete(context.Background(), key)
	if err != nil {
		core.Log().Error("function bucketManager.Delete() Filed", zap.Any("err", err.Error()))
		return errors.New("function bucketManager.Delete() Filed, err:" + err.Error())
	}
	return nil
}

// NewClient init COS client
func NewClient() *cos.Client {
	urlStr, _ := url.Parse("https://" + core.Config().TencentCOS.Bucket + ".cos." + core.Config().TencentCOS.Region + ".myqcloud.com")
	baseURL := &cos.BaseURL{BucketURL: urlStr}
	client := cos.NewClient(baseURL, &http.Client{
		Transport: &cos.AuthorizationTransport{
			SecretID:  core.Config().TencentCOS.SecretID,
			SecretKey: core.Config().TencentCOS.SecretKey,
		},
	})
	return client
}
