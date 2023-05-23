package config

type Config struct {
	System  System           `json:"system" yaml:"system"`
	JWT     JWT              `json:"jwt" yaml:"jwt"`
	Captcha Captcha          `json:"captcha" yaml:"captcha"`
	Zap     Zap              `json:"zap" yaml:"zap"`
	Redis   map[string]Redis `json:"redis" yaml:"redis"`
	DB      map[string]DB    `json:"db,omitempty" yaml:"db,omitempty"`
	File    map[string]File  `json:"file" yaml:"file"`
	Qiniu   Qiniu            `json:"qiniu" yaml:"qiniu"`
	AwsS3   AwsS3            `json:"awsS3" yaml:"awsS3"`
	//Local      Local            `json:"local" yaml:"local"`
	//AliyunOSS  AliyunOSS        `son:"aliyunOss" yaml:"aliyunOss"`
	//TencentCOS TencentCOS       `json:"tencentCos" yaml:"tencentCos"`

	Cors CORS `json:"cors" yaml:"cors"`
}
