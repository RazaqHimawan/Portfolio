---
title: Day 81b
description: Searching
date: '2024-5-11'
categories:
  - struktur data
published: true
---

## Table of Contents

## Sequential Search

Pencarian Sekuensial (sequential searching) atau pencarian berurutan sering disebut encparian linear merupakan metode pencarian yang paling sederhana.

Pencarian beruntun adalah proses membandingkan setiap elemen larik satu per satu secara beruntun, mulai dari elemen pertama sampai elemen yang dicari ditemukan atau seluruh elemen sudah diperiksa.

### Algoritma/Caranya

mencari data $array = [1,2,3,4,5]$

maka akan mengecek dari awal sampai data ketemu, jadi akan di periksa satu persatu, dengan cara membandingkan seperti ini

$apakah\ 5 = 1\ False$  
$apakah\ 5 = 2\ False$  
$apakah\ 5 = 3\ False$  
$apakah\ 5 = 4\ False$  
$apakah\ 5 = 5\ True$

Jika ada ada di tengah maka akan berhenti ketika kondis menjadi true, dan tidak akan di ualang lagi contoh kita mencari data 5 dari array [,1,2,5,3,4]

$apakah\ 5 = 1\ False$  
$apakah\ 5 = 2\ False$  
$apakah\ 5 = 5\ True$

Jika data sudah ketemu maka tdk akan diproses lagi.

## Binary Search

Binary Search adalah algoritma pencarian untuk data yang telah terurut, yaitu data yang diurutkan dari yang besar ke kecil ataupun sebaliknya, pencarian dilakukan dengan langsung menebak apakah data yang dicari berada ditengah-tengah data yang lainnya, kemudian membandingankan data yang ditengah dengan data yang dicari, apabila sama maka dapat dikatakan data ditemukan, namun apabila data yang dicari ternyata lebih kecil daripada elemen tengah, maka pencarian dilakukan dari bagian tengah ke bawah.

### Algoritma/Caranya

1. Tentukan posisi awal = 0 dan posisi akhir = N – 1.
2. Hitung posisi tengah = (posisi awal + posisi akhir) / 2.
3. Bandingkan data yang dicari dengan elemen posisi tengah.
4. Jika data yang dicari sama maka catat posisi dan cetak kemudian berhenti.
5. Jika lebih besar maka akan dilakukan pencarian kembali ke bagian kiri dengan nilai posisi awal = posisi tengah + 1 dan posisi akhir tetap kemudian ulangi mulai poin 2
6. Jika nilai datanya lebih kecil maka akan dilakukan pencarian kembali ke bagian kiri dengan nilai posisi awal tetap dan nilai posisi akhir = posisi tengah – 1 kemudian ulangi mulai poin 2.

### Contoh

Misalkan kita memiliki `int arr[] = {70, 60, 30,50, 40,20}`, data para int arr harus diurutkan terlebih dahulu menggunakan teknik sorting seperti bubble sort. Sehingga array kita akan menjadi `int arr[] = {20,30,40,50,60,70}`.

Apabila angka yang dicari adalah angka 40, berikut gambaran dari implementasi Binary Search:

1st Cycle:

```js
(20,30,40,50,60,70)
LOW = 0
HIGH = N - 1
MID = (LOW + HIGH)/2 = (0+6)/2 = 3
(arr[MID] == 40)
(20,30,40,50,60,70)
(50==40) // FALSE
HIGH = MID - 1
```

2nd Cycle:

```js
(20,30,40,50,60,70)
MID = (LOW + HIGH)/2 = (0+2)/2 = 1
(arr[MID] == 40)
(20,30,40,50,60,70)
(30==40) // FALSE
LOW = MID + 1
```

3rd Cycle:

```js
(20,30,40,50,60,70)
MID = (LOW + HIGH)/2 = (2+2)/2=2
(arr[MID] == 40)
(20,30,40,50,60,70)
(40==40) // TRUE
```

## Kesimpulan

Dari pembahasan contoh soal di atas dapat disimpulkan bahwa jika mencari data yang sudah terurut maka metode yang paling efisien digunakan adalah metode Binary Search dan sebaliknya jika kita ingin mencari data yang teracak metode yang sebaiknya digunakan adalah metode Sequential Search.
