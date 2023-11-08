package main

import (
	"github.com/mangk/goAdmin80/core"
	_ "github.com/mangk/goAdmin80/front"
)

func main() {
	g80 := core.New()

	g80.ListenAndServer()
}
