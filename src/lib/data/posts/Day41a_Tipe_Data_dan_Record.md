---
title: Day 41a
description: Tipe Data dan Record
date: '2024-2-26'
categories:
  - struktur data
published: true
---

## Table of Contents

## Tipe Data

Tipe data adalah klasifikasi data yang digunakan untuk menentukan jenis nilai yang dimiliki variabel. Tipe data membantu komputer memahami dan menafsirkan data dengan tepat, serta memungkinkan operasi yang tepat dilakukan pada data tersebut.

### Integer

Integer merupakan tipe data numerik berupa bilangan bulat

Tipe data yang mengenal nilai positif dan negatif

Beberapa tipe data numerik yang termasuk bilangan bulat

<div style="overflow: scroll">

| Tipe Data | Ukuran(Bit) | Range                                        |
| --------- | ----------- | -------------------------------------------- |
| Byte      | 8           | -128 s/d 127                                 |
| Short     | 16          | -32768 s/d 32767                             |
| Int       | 32          | -2147483648 s/d 2147483647                   |
| Long      | 64          | -9223372036854775808 s/d 9223372036854775807 |

</div>

Tipe data integer dianggap lebih efisien merepresentasikan angka dalam pemrograman serta digunakan untuk indeks dalam struktur perulangan maupun dalam array.

### Floating Point

Floating Point merupakan tipe data pecahan yang menangani bilangan desimal.

Terdapat 2 tipe data pecahan yaitu:

<div style="overflow: scroll">

| Tipe   | Ukuran(Bit) | Range                  | Presisi(Jumlah Digit) |
| ------ | ----------- | ---------------------- | --------------------- |
| Float  | 32          | +/- 3.4 $\times$ 1038  | 6-7                   |
| Double | 64          | +/- 1.8 $\times$ 10308 | 15                    |

</div>

Float tipe data yang menandai nilai presisi tunggal (single precision)  
Float memiliki kemampuan yang jauh lebih cepat dibanding prosesor-prosesor lain  
Serta memiliki ruang penyimpanan lebih kecil dari pada tipe double.  
Kelemahan tipe float adalah pada saat nilainya terlalu kecil atau terlalu besar, karena pada penerapannya nilai tersebut menjadi tidak akurat.

### Boolean

Boolean merupakan tipe yang hanya memiliki dua nilai yaitu benar (true) atau salah (false).

Nilai yang digunakan pada tipe ini sangat penting dalam mengambil keputusan suatu kejadian tertentu.

### Char

Tipe data karakter tunggal yang biasa didefinisikan dengan tanda petik (‘) di awal dan di akhir karakternya. Tipe ini mengikuti aturan “unicode” sehingga bilangan harus diawali kode “/u”. Tetapi juga biasa menggunakan bilangan heksadesimal.

## Record

Record merupakan tipe data buatan yang berisi kumpulan variabel dengan tipe data asli.
