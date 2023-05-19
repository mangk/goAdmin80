package config

type System struct {
	Env               string `json:"env" yaml:"env"`                     // 环境值
	Host              string `json:"host" yaml:"host"`                   // 监听地址
	Port              int    `json:"port" yaml:"port"`                   // 端口值
	DbType            string `json:"dbType" yaml:"dbType"`               // 数据库类型:mysql(默认)|sqlite|sqlserver|postgresql
	OssType           string `json:"ossType" yaml:"ossType"`             // Oss类型
	UseMultipoint     bool   `json:"useMultipoint" yaml:"useMultipoint"` // 多点登录拦截
	UseRedis          bool   `json:"useRedis" yaml:"useRedis"`           // 使用redis
	LimitCountIP      int    `json:"ipLimitCount" yaml:"ipLimitCount"`
	LimitTimeIP       int    `json:"ipLimitTime" yaml:"ipLimitTime"`
	FrontRouterPrefix string `json:"frontRouterPrefix" yaml:"frontRouterPrefix"`
	Name              string `json:"name" yaml:"name"`
	FullHttpLog       bool   `json:"fullHttpLog" yaml:"fullHttpLog"`
}
