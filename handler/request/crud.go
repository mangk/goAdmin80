package request

type CRUDRequest struct {
	Query    []CRUDCondition `json:"query,omitempty"`
	Page     int             `json:"page,omitempty"`
	PageSize int             `json:"pageSize,omitempty"`
	Id       string          `json:"id,omitempty"`
	Ids      []string        `json:"ids,omitempty"`
}

type CRUDCondition struct {
	Column string `json:"c"`
	Type   uint8  `json:"t"` // TODO 是否只在后台定义搜索类型，前端不需要这个字段？
	Value  string `json:"v"`
}
