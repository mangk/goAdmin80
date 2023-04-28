package response

type CRUDResponse struct {
	Count     int64       `json:"count"`
	Page      int         `json:"page"`
	PageCount int         `json:"pageCount"`
	PageSize  int         `json:"pageSize"`
	List      interface{} `json:"list"`
}
