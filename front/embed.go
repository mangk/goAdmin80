package front

import "embed"

//go:embed dist/assets
var Front embed.FS

//go:embed dist/index.html
var FrontIndex string

//go:embed convert.vue
var Convert string
