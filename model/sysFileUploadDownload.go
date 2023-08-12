package model

import (
	"errors"
	"github.com/mangk/goAdmin80/db"
	"github.com/mangk/goAdmin80/handler/request"
	"github.com/mangk/goAdmin80/handler/upload"
	"gorm.io/gorm"
)

type SysFileUploadAndDownload struct {
	MODEL
	Name string `json:"name" gorm:"comment:文件名"` // 文件名
	Url  string `json:"url" gorm:"comment:文件地址"` // 文件地址
	Tag  string `json:"tag" gorm:"comment:文件标签"` // 文件标签
	Key  string `json:"key" gorm:"comment:编号"`   // 编号
}

func (s SysFileUploadAndDownload) Upload(file *SysFileUploadAndDownload) error {
	return db.DB().Create(file).Error
}

func (s SysFileUploadAndDownload) GetFileRecordInfoList(info request.PageInfo) (list interface{}, total int64, err error) {
	limit := info.PageSize
	offset := info.PageSize * (info.Page - 1)
	keyword := info.Keyword
	cdb := db.DB().Model(&SysFileUploadAndDownload{})
	var fileLists []SysFileUploadAndDownload
	if len(keyword) > 0 {
		cdb = cdb.Where("name LIKE ?", "%"+keyword+"%")
	}
	err = cdb.Count(&total).Error
	if err != nil {
		return
	}
	err = cdb.Limit(limit).Offset(offset).Order("updated_at desc").Find(&fileLists).Error
	return fileLists, total, err
}

func (s SysFileUploadAndDownload) FindFile(id int) (SysFileUploadAndDownload, error) {
	var file SysFileUploadAndDownload
	err := db.DB().Where("id = ?", id).First(&file).Error
	return file, err
}

func (s SysFileUploadAndDownload) EditFileName(file SysFileUploadAndDownload) (err error) {
	var fileFromDb SysFileUploadAndDownload
	return db.DB().Where("id = ?", file.ID).First(&fileFromDb).Update("name", file.Name).Error
}

func (s SysFileUploadAndDownload) DeleteFile(file SysFileUploadAndDownload) (err error) {
	var fileFromDb SysFileUploadAndDownload
	fileFromDb, err = s.FindFile(file.ID)
	if err != nil {
		return
	}
	err = db.DB().Where("id = ?", file.ID).Unscoped().Delete(&file).Error

	oss := upload.NewOss()
	if err = oss.DeleteFile(fileFromDb.Key); err != nil {
		return errors.New("文件删除失败")
	}
	return err
}

func (s SysFileUploadAndDownload) FindOrCreateFile(fileMd5 string, fileName string, chunkTotal int) (file ExaFile, err error) {
	var cfile ExaFile
	cfile.FileMd5 = fileMd5
	cfile.FileName = fileName
	cfile.ChunkTotal = chunkTotal

	if errors.Is(db.DB().Where("file_md5 = ? AND is_finish = ?", fileMd5, true).First(&file).Error, gorm.ErrRecordNotFound) {
		err = db.DB().Where("file_md5 = ? AND file_name = ?", fileMd5, fileName).Preload("ExaFileChunk").FirstOrCreate(&file, cfile).Error
		return file, err
	}
	cfile.IsFinish = true
	cfile.FilePath = file.FilePath
	err = db.DB().Create(&cfile).Error
	return cfile, err
}

func (s SysFileUploadAndDownload) CreateFileChunk(id int, fileChunkPath string, fileChunkNumber int) error {
	var chunk ExaFileChunk
	chunk.FileChunkPath = fileChunkPath
	chunk.ExaFileID = id
	chunk.FileChunkNumber = fileChunkNumber
	err := db.DB().Create(&chunk).Error
	return err
}

func (s SysFileUploadAndDownload) DeleteFileChunk(fileMd5 string, filePath string) error {
	var chunks []ExaFileChunk
	var file ExaFile
	err := db.DB().Where("file_md5 = ? ", fileMd5).First(&file).
		Updates(map[string]interface{}{
			"IsFinish":  true,
			"file_path": filePath,
		}).Error
	if err != nil {
		return err
	}
	err = db.DB().Where("exa_file_id = ?", file.ID).Delete(&chunks).Unscoped().Error
	return err
}

// file struct, 文件结构体
type ExaFile struct {
	MODEL
	FileName     string
	FileMd5      string
	FilePath     string
	ExaFileChunk []ExaFileChunk
	ChunkTotal   int
	IsFinish     bool
}

// file chunk struct, 切片结构体
type ExaFileChunk struct {
	MODEL
	ExaFileID       int
	FileChunkNumber int
	FileChunkPath   string
}
