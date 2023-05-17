package config

type TencentCOS struct {
	Bucket     string `json:"bucket" yaml:"bucket"`
	Region     string `json:"region" yaml:"region"`
	SecretID   string `json:"secretId" yaml:"secretId"`
	SecretKey  string `json:"secretKey" yaml:"secretKey"`
	BaseURL    string `json:"baseUrl" yaml:"baseUrl"`
	PathPrefix string `json:"pathPrefix" yaml:"pathPrefix"`
}
