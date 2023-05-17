package config

type Local struct {
	Path      string `json:"path" yaml:"path"`           // 本地文件访问路径
	StorePath string `json:"storePath" yaml:"storePath"` // 本地文件存储路径
}
