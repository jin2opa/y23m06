package main

import "fmt"

type CheckId00 struct{
	id string
	pw string
}

func (c CheckId00) CheckId() {
	if c.id == "admin" && c.pw == "1234" {
			fmt.Println("yes")
	} else {
		fmt.Println("no")
	}
}

func main() {
	fmt.Println("id : ")
	var id string
	fmt.Scanln(&id)
	fmt.Println("pw : ")
	var pw string
	fmt.Scanln(&pw)
	
	ckd := CheckId00{id, pw}
	ckd.CheckId()
}