package config

type Config struct {
	System  System  `mapstructure:"system" json:"system" yaml:"system"`
	JWT     JWT     `mapstructure:"jwt" json:"jwt" yaml:"jwt"`
	Captcha Captcha `mapstructure:"captcha" json:"captcha" yaml:"captcha"`

	Zap   Zap   `mapstructure:"zap" json:"zap" yaml:"zap"`
	Redis Redis `mapstructure:"redis" json:"redis" yaml:"redis"`
	// gorm
	Mysql  Mysql  `mapstructure:"mysql" json:"mysql" yaml:"mysql"`
	Mssql  Mssql  `mapstructure:"mssql" json:"mssql" yaml:"mssql"`
	Pgsql  Pgsql  `mapstructure:"pgsql" json:"pgsql" yaml:"pgsql"`
	Oracle Oracle `mapstructure:"oracle" json:"oracle" yaml:"oracle"`
	// oss
	Local      Local      `mapstructure:"local" json:"local" yaml:"local"`
	Qiniu      Qiniu      `mapstructure:"qiniu" json:"qiniu" yaml:"qiniu"`
	AliyunOSS  AliyunOSS  `mapstructure:"aliyun-oss" json:"aliyun-oss" yaml:"aliyun-oss"`
	TencentCOS TencentCOS `mapstructure:"tencent-cos" json:"tencent-cos" yaml:"tencent-cos"`
	AwsS3      AwsS3      `mapstructure:"aws-s3" json:"aws-s3" yaml:"aws-s3"`
}
