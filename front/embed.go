package front

import "embed"

//go:embed dist
var Front embed.FS

//go:embed dist/convert.vue
var Convert string
