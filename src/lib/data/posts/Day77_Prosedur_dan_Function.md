---
title: Day 77
description: Prosedur dan Function
date: '2024-5-06'
categories:
  - Logika dan Algoritma
published: true
---

## Table of Contents

## Prosedur

Prosedur adalah serangkaian instruksi yang dikelompokkan bersama untuk mencapai tujuan tertentu.

Prosedur sering disebut sebagai subrutin atau modul.

### Deklarasi Prosedur

```php
// NamaProsedur
PROCEDURE NamaProsedur
DEKLARASI
    {isi deklarasi}
ALGORITMA
    {isi algoritma}

// ProgramUtama
PROGRAM JudulProgram
DEKLARASI
    procedure NamaProsedur
ALGORITMA
    {NamaProcedure()}
```

## Variabel Lokal vs Global

**Variabel Lokal**: nama-nama di dalam bagian DEKLARASI prosedur. Hanya dapat digunakan di dalam prosedur yang melingkupinya saja.

**Variabel Global**: nama-nama yang dideklarasikan di dalam program utama. Dapat digunakan di bagian manapun di dalam program.

## Parameter

Penggunaan parameter menawarkan mekanisme pertukaran informasi antara
prosedur (atau fungsi) dan titik di mana ia dipanggil.

Tiap item data ditransfer antara parameter aktual dan parameter formal yang bersangkutan.

- Parameter aktual: parameter yang disertakan pada waktu pemanggilan.
- Parameter Formal: parameter yang dideklarasikan di dalam bagian header prosedur itu sendiri.

Aturan Penggunaan Parameter :

- Jumlah parameter aktual pada pemanggilan prosedur harus sama dengan jumlah parameter formal pada deklarasi prosedurnya.
- Tiap parameter aktual harus bertipe sama dengan tipe parameter formal yang bersesuaian.

Parameter Masukan adalah parameter yang nilainya berlaku sebagai masukan untuk prosedur.

Parameter keluaran digunakan apabila prosedur menghasilkan satu atau lebih nilai yang digunakan oleh program pemanggil maka nilai keluaran ditampung di dalam parameter keluaran

```php
PROCEDURE HitungLuasSegitiga(input a, t: real, output L:real)
DEKLARASI

ALGORITMA
    L <- (a * t) / 2

PROGRAM LuasSegitiga
DEKLARASI
    alas, tinggi: real
    procedure HitungLuasSegitiga(input a, t: real, output L: real)
ALGORITMA
    read(alas)
    read(tinggi)
    HitungLuasSegitiga(alas, tinggi, luas)
    write(luas)
```

## Function

Function adalah modul program yang memberikan/mengembalikan (return) sebuah nilai dari tipe tertentu (tipe data atau tipe bentukan).

Fungsi diakses dengan cara memanggil namanya dari program pemanggil, diikuti dengan daftar parameter aktual (bila ada).

```php
function Genap(input n: integer) -> boolean
DEKLARASI

ALGORITMA
    return (n mod 2 = 0)

PROGRAM BilanganGenap
DEKLARASI
    bil: integer
    function Genap(input n: integer) -> boolean
ALGORITMA
    read(bil)
    if Genap(bil) {
        write(n, ' adalah bilangan genap')
    } else {
        write(n, ' adalah bilangan ganjil')
    }
```

## Prosedur vs Function

Fungsi digunakan apabila modul program mengembalikan sebuah nilai.

Prosedur digunakan bila modul menghasilkan efek bersih dari satu atau sekumpulan aksi.
