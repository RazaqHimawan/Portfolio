---
title: Day 142a
description: Function
date: "2024-11-20"
categories:
  - Pemograman Web 2
published: true
---

## Table of Contents

## Function

- Sebuah sub-program/sub-routine yang dapat dipanggil di bagian lain pada program.
- Sebagai prosedure (kumpulan statement untuk melakukan tugas atau menghitung sebuah nilai).
- Dalam penggunaannya, kita harus membuat terlebih dahulu function lalu memanggilnya.
- Dua kategori Function:
  - Built-in Function
  - User-Defined Function

### Alasan

- Reusability (DRY: Do not Repeat Yourself)
- Dekomposisi/abstraksi: menyembunyikan kompleksitas program menjadi sub program agar mudah tracking kesalahan program
- Modularitas

### Built-in Function

- Referensi
  - https://www.php.net/manual/en/funcref.php
- Date/Time
  - Time()
  - Date()
  - Mktime()
  - Strtotime()

### User-Defined Function

- Input: masukan bahan/material ke dalam function
- Function: aksi terhadap bahan/material
- Output: menghasilkan sesuatu sesuai kebutuhan/nilai baru
- Function yang baik hanya mengerjakan 1 hal saja
- Blok kode yang dibuat untuk melakukan tugas spesifik
- Dapat dipanggil berulang kali
- Memudahkan penelurusan
- reusability
- Fungsi yang dibuat sendiri
- Menggunakan keyword function
- Harus didefiniskan function
- Dapat mengembalikan nilai (return value)/ tidak mengembalikan nilai
- Parameter/argument (bahan baku)
- Disimpan di dalam()
- Boleh ada atau tidak, jika ada boleh lebih dari dari sat
- Dipisahkan dengan koma `(,)`
- Function body, dibungkus dengan `{}`

### Contoh User-Defined Function

```php
<?php
    function mulai($nama) {
        return "Selamat Datang, $nama~";
    }
?>
```
