package config

type AliyunOSS struct {
	Endpoint        string `json:"endpoint" yaml:"endpoint"`
	AccessKeyId     string `json:"accessKeyId" yaml:"accessKeyId"`
	AccessKeySecret string `json:"accessKeySecret" yaml:"accessKeySecret"`
	BucketName      string `json:"bucketName" yaml:"bucketName"`
	BucketUrl       string `json:"bucketUrl" yaml:"bucketUrl"`
	BasePath        string `json:"basePath" yaml:"basePath"`
}
