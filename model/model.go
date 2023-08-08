package model

import (
	"time"

	"gorm.io/gorm"
)

type MODEL struct {
	ID        int            `gorm:"primarykey" json:"id"`
	CreatedAt time.Time      `json:"ct"`
	UpdatedAt time.Time      `json:"ut"`
	DeletedAt gorm.DeletedAt `gorm:"index" json:"-"`
}

type MODEX_EXTEND struct {
	Cb int `json:"-"` // 创建者
	Ub int `json:"-"` // 更新者
	Db int `json:"-"` // 删除者
}

func Find(tx *gorm.DB) (data []map[string]interface{}, err error) {
	rows, err := tx.Rows()
	if err != nil {
		return
	}
	defer rows.Close()

	columns, err := rows.Columns()
	if err != nil {
		return
	}

	// 列的个数
	count := len(columns)

	// 返回值 Map切片
	data = make([]map[string]interface{}, 0)
	// 一条数据的各列的值（需要指定长度为列的个数，以便获取地址）
	values := make([]interface{}, count)
	// 一条数据的各列的值的地址
	valPointers := make([]interface{}, count)
	for rows.Next() {

		// 获取各列的值的地址
		for i := 0; i < count; i++ {
			valPointers[i] = &values[i]
		}

		// 获取各列的值，放到对应的地址中
		rows.Scan(valPointers...)

		// 一条数据的Map (列名和值的键值对)
		entry := make(map[string]interface{})

		// Map 赋值
		for i, col := range columns {
			var v interface{}

			// 值复制给val(所以Scan时指定的地址可重复使用)
			val := values[i]
			b, ok := val.([]byte)
			if ok {
				// 字符切片转为字符串
				v = string(b)
			} else {
				v = val
			}
			entry[col] = v
		}

		data = append(data, entry)
	}

	return
}
