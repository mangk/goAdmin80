package config

type CORS struct {
	Mode      string          `mapstructure:"mode" json:"mode" yaml:"mode"`
	Whitelist []CORSWhitelist `mapstructure:"whitelist" json:"whitelist" yaml:"whitelist"`
}

type CORSWhitelist struct {
	AllowOrigin      string `json:"allowOrigin" yaml:"allowOrigin"`
	AllowMethods     string `json:"allowMethods" yaml:"allowMethods"`
	AllowHeaders     string `json:"allowHeaders" yaml:"allowHeaders"`
	ExposeHeaders    string `json:"exposeHeaders" yaml:"exposeHeaders"`
	AllowCredentials bool   `json:"allowCredentials" yaml:"allowCredentials"`
}
