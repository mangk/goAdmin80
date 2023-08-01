package front

import (
	"embed"
	"github.com/gin-gonic/gin"
	"github.com/mangk/goAdmin80/admin"
	"github.com/mangk/goAdmin80/config"
	"github.com/mangk/goAdmin80/core"
	"io/fs"
	"net/http"
	"strings"
)

func init() {
	core.ModuleAdd(f{})
}

//go:embed dist
var Front embed.FS

//go:embed convert.vue
var Convert string

type f struct {
}

func (f) Init() uint8 {
	root := core.HttpEngine()

	assets, _ := fs.Sub(Front, "dist/assets")

	root.StaticFS(strings.TrimRight(config.ServerCfg().FrontRouterPrefix, "/")+"/assets", http.FS(assets))
	root.GET(strings.TrimRight(config.ServerCfg().FrontRouterPrefix, "/")+"/", func(ctx *gin.Context) {
		index, _ := fs.ReadFile(Front, "dist/index.html")
		ctx.Header("Content-Type", "text/html; charset=utf-8")
		ctx.String(200, "%s", index)
	})

	admin.SetTmpStr(Convert)

	return core.ModuleFront
}
