---
title: Day 59
description: Pointer dan Linked List
date: '2024-3-26'
categories:
  - struktur data
published: true
---

## Table of Contents

## Alamat dan Memori Komputer

- Sebelum memahami tentang pointer, sebaiknya memahami dulu tentang alamat dalam memori komputer.
- Lokasi pada memori komputer memiliki alamat dan menyimpan sebuah nilai.
- Alamat atau address yang dimaksud bernilai numerik (umumnya dalam bentuk hexadecimal) yang sulit
  untuk digunakan secara langsung oleh programmer.
- Setiap variabel yang dibuat pada program akan diberi lokasi di memori komputer. Nilai dari variabel sebenarnya disimpan pada alamat yang diberikan.
- Untuk mengetahui dimana data di simpan, pada C++ digunakan operator & (referensi).

Bayangkan pointer seperti sebuah kartu pos yang menunjukkan alamat rumah. Alamat rumah (memori) adalah tempat di mana data disimpan, dan kartu pos (pointer) adalah alat untuk mengakses data tersebut.

## Pointer

- Variabel biasa digunakan untuk menyimpan nilai.
- Variabel pointer digunakan untuk menyimpan alamat dari variabel lainnya.
- Pointer adalah representasi simbolik dari alamat.
- Pointer adalah fitur yang powerful pada C++ dibandingkan pada Bahasa pemrograman lain seperti Java atau Python.
- Pointer digunakan untuk mengakses memori dan memanipulasi alamat.

### Operator Dereference/Indirection ?

- Operator dereference/indirection (\*) digunakan untuk mendapatkan nilai pada alamat tertentu.
- Operator inditrection (\*) adalah operator unary yang membutuhkan hanya satu operan.
- Operator inditrection (\*) adalah komplemen dari operator alamat (&)
- Jika (&) akan menghasilkan alamat dari variabel lain, (\*) akan menghasilkan isi nilai dari variabel lain.

### Contoh Code

```go
	num := 5

	// Deklarasi Pointer
	var ptrNum *int = &num

	// Menampilkan alamat dan nilai variabel
	fmt.Printf("num: %v\n", num)
	fmt.Printf("&num: %v\n", &num)
	fmt.Printf("ptrNum: %v\n", ptrNum)
	fmt.Printf("*ptrNum: %v\n", *ptrNum)

  //  Memanipulasi nilai variabel
	*ptrNum = 10
	fmt.Printf("num: %v\n", num)

  // Output:
  // num: 5
  // &num: 0xc0000120e8
  // ptrNum: 0xc0000120e8
  // *ptrNum: 5
  // num: 10
```

## Linked List

- Linked List adalah elemen yang berurutan yang dihubungkan dengan pointer.
- Elemen terakhir menunjuk ke NULL (untuk Linked List non Circular).
- Elemen pada Single Linked List dapat bertambah atau berkurang (dinamis) selama program dijalankan.
- Dapat dibuat selama diperlukan (hingga memori sistem habis).
- Linked List tidak membuang ruang memori (tetapi membutuhkan beberapa memori ekstra untuk pointer).

### Single Linked List

- Single Linked List merupakan suatu linked list yang hanya memiliki satu variabel pointer saja. Dimana pointer tersebut menunjuk ke node selanjutnya dan pointer pada tail menunjuk ke NULL.
- Navigasi item maju saja.
- Single Linked List terdiri dari sejumlah elemen (node) dimana setiap node memiliki penunjuk berikutnya ke elemen (node) berikutnya.
- Penunjuk node terakhir adalah NULL, yang menunjukkan akhir dari Single Linked List.

### Contoh Code Linked List Sederhana

```go
type Node struct {
	data interface{}
	next *Node
}

type List struct {
	head *Node
}

// Memasukkan data ke awal list
func (list *List) Insert(data interface{}) {
	newNode := &Node{data: data}
	newNode.next = list.head
	list.head = newNode
}

// Memasukkan data ke akhir list
func (list *List) Append(data interface{}) {
	newNode := &Node{data: data}
	if list.head == nil {
		list.head = newNode
		return
	}
	currentNode := list.head
	for currentNode.next != nil {
		currentNode = currentNode.next
	}
	currentNode.next = newNode
}

func (list *List) PrintList() {
	currentNode := list.head
	for currentNode != nil {
		fmt.Print(currentNode.data, " -> ")
		currentNode = currentNode.next
	}
	fmt.Println("nil")
}

func main() {
	myList := List{}

	myList.Insert(10)
	myList.Insert(20)
	myList.Append(30)

	myList.PrintList() // Output: 20 -> 10 -> 30 -> nil
}
```
