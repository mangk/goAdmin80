package upload

import (
	"github.com/mangk/goAdmin80/core"
	"mime/multipart"
)

type OSS interface {
	UploadFile(file *multipart.FileHeader) (string, string, error)
	DeleteFile(key string) error
}

func NewOss(ossType ...string) OSS {
	t := core.Config().System.OssType
	if len(ossType) > 0 {
		t = ossType[0]
	}
	switch t {
	case "local":
		return &Local{}
	case "qiniu":
		return &Qiniu{}
	case "tencent-cos":
		return &TencentCOS{}
	case "aliyun-oss":
		return &AliyunOSS{}
	case "aws-s3":
		return &AwsS3{}
	default:
		return &Local{}
	}
}
