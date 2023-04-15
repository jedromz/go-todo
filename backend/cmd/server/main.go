package main

import (
	"fmt"
	"go-todo/router"
	"net/http"
)

func main() {
	r := router.Router()
	fmt.Println("starting the server on port 9000...")
	err := http.ListenAndServe(":9000", r)
	if err != nil {
		fmt.Println(err)
	}
}
