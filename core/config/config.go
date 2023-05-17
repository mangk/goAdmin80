package config

type Config struct {
	System  System        `json:"system" yaml:"system"`
	JWT     JWT           `json:"jwt" yaml:"jwt"`
	Captcha Captcha       `json:"captcha" yaml:"captcha"`
	Zap     Zap           `json:"zap" yaml:"zap"`
	Redis   Redis         `json:"redis" yaml:"redis"`
	DB      map[string]DB `json:"db,omitempty" yaml:"db,omitempty"`
	// oss
	Local      Local      `json:"local" yaml:"local"`
	Qiniu      Qiniu      `json:"qiniu" yaml:"qiniu"`
	AliyunOSS  AliyunOSS  `son:"aliyunOss" yaml:"aliyunOss"`
	TencentCOS TencentCOS `json:"tencentCos" yaml:"tencentCos"`
	AwsS3      AwsS3      `json:"awsS3" yaml:"awsS3"`
}
