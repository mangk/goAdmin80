package model

import (
	"github.com/mangk/goAdmin80/db"
	"github.com/mangk/goAdmin80/handler/request"
	"time"
)

// 如果含有time.Time 请自行import time包
type SysOperationRecord struct {
	MODEL
	Ip           string        `json:"ip" form:"ip" gorm:"column:ip;comment:请求ip"`                                   // 请求ip
	Method       string        `json:"method" form:"method" gorm:"column:method;comment:请求方法"`                       // 请求方法
	Path         string        `json:"path" form:"path" gorm:"column:path;comment:请求路径"`                             // 请求路径
	Status       int           `json:"status" form:"status" gorm:"column:status;comment:请求状态"`                       // 请求状态
	Latency      time.Duration `json:"latency" form:"latency" gorm:"column:latency;comment:延迟" swaggertype:"string"` // 延迟
	Agent        string        `json:"agent" form:"agent" gorm:"column:agent;comment:代理"`                            // 代理
	ErrorMessage string        `json:"error_message" form:"error_message" gorm:"column:error_message;comment:错误信息"`  // 错误信息
	Body         string        `json:"body" form:"body" gorm:"type:text;column:body;comment:请求Body"`                 // 请求Body
	Resp         string        `json:"resp" form:"resp" gorm:"type:text;column:resp;comment:响应Body"`                 // 响应Body
	UserID       int           `json:"user_id" form:"user_id" gorm:"column:user_id;comment:用户id"`                    // 用户id
	User         SysUser       `json:"user"`
}

func (s SysOperationRecord) Create() (err error) {
	err = db.DB().Create(&s).Error
	return err
}

func (s SysOperationRecord) DeleteSysOperationRecordByIds(ids []int) (err error) {
	err = db.DB().Delete(&s, "id in (?)", ids).Error
	return err
}

func (s *SysOperationRecord) GetSysOperationRecord(id int) (sysOperationRecord SysOperationRecord, err error) {
	err = db.DB().Where("id = ?", id).First(&sysOperationRecord).Error
	return
}

func (s SysOperationRecord) GetSysOperationRecordInfoList(info struct {
	SysOperationRecord
	request.PageInfo
}) (list interface{}, total int64, err error) {
	limit := info.PageSize
	offset := info.PageSize * (info.Page - 1)
	// 创建db
	cdb := db.DB().Model(&SysOperationRecord{})
	var sysOperationRecords []SysOperationRecord
	// 如果有条件搜索 下方会自动创建搜索语句
	if info.Method != "" {
		cdb = cdb.Where("method = ?", info.Method)
	}
	if info.Path != "" {
		cdb = cdb.Where("path LIKE ?", "%"+info.Path+"%")
	}
	if info.Status != 0 {
		cdb = cdb.Where("status = ?", info.Status)
	}
	err = cdb.Count(&total).Error
	if err != nil {
		return
	}
	err = cdb.Order("id desc").Limit(limit).Offset(offset).Preload("User").Find(&sysOperationRecords).Error
	return sysOperationRecords, total, err
}
