package config

type Qiniu struct {
	Zone          string `json:"zone" yaml:"zone"`                   // 存储区域
	Bucket        string `json:"bucket" yaml:"bucket"`               // 空间名称
	ImgPath       string `json:"imgPath" yaml:"imgPath"`             // CDN加速域名
	UseHTTPS      bool   `json:"useHttps" yaml:"useHttps"`           // 是否使用https
	AccessKey     string `json:"accessKey" yaml:"accessKey"`         // 秘钥AK
	SecretKey     string `json:"secretKey" yaml:"secretKey"`         // 秘钥SK
	UseCdnDomains bool   `json:"useCdnDomains" yaml:"useCdnDomains"` // 上传是否使用CDN上传加速
}
