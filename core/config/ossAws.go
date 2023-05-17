package config

type AwsS3 struct {
	Bucket           string `json:"bucket" yaml:"bucket"`
	Region           string `json:"region" yaml:"region"`
	Endpoint         string `json:"endpoint" yaml:"endpoint"`
	S3ForcePathStyle bool   `json:"s3ForcePathStyle" yaml:"s3ForcePathStyle"`
	DisableSSL       bool   `json:"disableSsl" yaml:"disableSsl"`
	SecretID         string `json:"secretId" yaml:"secretId"`
	SecretKey        string `json:"secretKey" yaml:"secretKey"`
	BaseURL          string `json:"baseUrl" yaml:"baseUrl"`
	PathPrefix       string `json:"pathPrefix" yaml:"pathPrefix"`
}
