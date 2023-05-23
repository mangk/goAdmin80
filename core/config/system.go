package config

type System struct {
	Env               string `json:"env" yaml:"env"`                     // 环境值
	Host              string `json:"host" yaml:"host"`                   // 监听地址
	Port              int    `json:"port" yaml:"port"`                   // 端口值
	UseMultipoint     bool   `json:"useMultipoint" yaml:"useMultipoint"` // 多点登录拦截
	LimitCountIP      int    `json:"ipLimitCount" yaml:"ipLimitCount"`
	LimitTimeIP       int    `json:"ipLimitTime" yaml:"ipLimitTime"`
	FrontRouterPrefix string `json:"frontRouterPrefix" yaml:"frontRouterPrefix"`
	Name              string `json:"name" yaml:"name"`
}
