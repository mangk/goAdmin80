package upload

import (
	"fmt"
	"github.com/mangk/goAdmin80/core"
	"mime/multipart"
)

type OSS interface {
	UploadFile(file *multipart.FileHeader) (string, string, error)
	DeleteFile(key string) error
}

func NewOss(ossType ...string) OSS {
	t := "default"
	if len(ossType) > 0 {
		t = ossType[0]
	}
	cfg, ok := core.Config().File[t]

	if ok {
		switch cfg.Driver {
		case "local":
			return &Local{cfg: cfg}
		case "cos":
			return &TencentCOS{cfg: cfg}
		case "oss":
			return &AliyunOSS{cfg: cfg}
		//case "qiniu":
		//	return &Qiniu{}
		//case "aws-s3":
		//	return &AwsS3{}
		default:
			core.Log().Panic(fmt.Sprintf("[%s]未知的对象存储", t))
			return nil
		}
	}
	core.Log().Panic(fmt.Sprintf("[%s]未知的对象存储", t))
	return nil
}
