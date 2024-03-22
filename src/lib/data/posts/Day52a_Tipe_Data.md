---
title: Day 52a
description: Tipe Data
date: '2024-3-18'
categories:
  - Logika dan Algoritma
published: true
---

## Table of Contents

## Tipe Data

Tipe adalah pola representasi suatu data dalam komputer. Gunanya untuk mendefinisikan objek yang akan diprogram

Ada tipe dasar yang sudah diberikan dan siap dipakai, ada tipe bentukan yang dibentuk dari tipe dasar atau dari tipe bentukan/komposisi yang sudah dibuat

### TIPE DASAR(ORDINARY)

Tipe dasar yang tersedia dalam suatu bahasa adalah tipe yang sudah didefinisikan,maka pemrogram dapat memakai nama tipe dan semua operator yang tersedia dan mentaati domain nilai yang disimpan dalam tipe tersebut

Tipe dasar biasanya tersedia dalam suatu bahasa pemrograman
dan digunakan dalam notasi algoritmik adalah :

- bilangan logika/boolean
- bilangan bulat
- bilangan riil
- karakter

#### Bilangan Logika / Boolean

- Nama: Boolean
- Domain: [true, false]
- Contoh konstanta: true false
- Operator yang digunakan: AND, OR, NOT

#### Bilangan Bulat / Integer

- Nama: Integer
- Domain: himpunan semua bilangan bulat
- Contoh konstanta: 0 -3 123 -89 999
- Bilangan integer mempunyai keterurutan. Keterurutan ini didefinisikan dengan:
  - suksesor x adalah x+1
  - predesesor x adalah x-1

#### Bilangan Riil

- Nama: Real
- Domain: himpunan semua bilangan berkoma
- Konstanta: angka mengandung ‘.’
- Contoh: 0.2 3.233 123.00

#### Karakter

- Nama: character
- Domain: Himpunan yang terdefinisi oleh suatu enumerasi, misalnya [‘0’..’9’, ‘a’..’z’, ‘A’..’Z’ ,RETURN, SPACE]
- Ada karakter (suksesor dan predesesor) yang ditentukan oleh representasi di dalam komputer, misalnya pengkodean ASCII
- Konstanta: dituliskan diantara tanda petik atau suatu nama, misal ‘A’ ‘P’ ‘M’

#### String

- Nama: string
- Tipe: string
- Domain: Untaian karakter yang didefinisikan pada domain karakter
- konstanta: ‘AKU’ ‘ rumah sakit’ ‘pisang’ ‘K’

#### Tipe Bentukan

Tipe bentukan adalah suatu tipe yang dirancang/ dibentuk (dan diberi nama) dari beberapa komponen bertipe tertentu, jadi merupakan sekumpulan elemen bertipe dasar atau bertipe yang sudah dikenal

```
type nama type <
    elemen1 : tipe1,
    elemen2 : tipe2,
    ......
    elemenN : tipeN,
>
```

## VARIABEL

Variabel adalah suatu tempat atau “wadah data” untuk menampung suatu nilai.

Variabel yang akan dipakai harus “dipesan” dulu dengan dideklarasikan dalam deklarasi variabel (kamus).

## KONSTANTA

Konstanta adalah data yang isinya tetap dan tidak berubah-ubah dalam program

## Operator matematika

Operand-operand yang dipergunakan untuk operasi penjumlahan, pengurangan, perkalian, pembagian dan sisa pembagian (modulus) yang berbeda untuk real maupun integer

## Operator logika

digunakan untuk mengoperasikan operand (konstanta, variabel,dll) secara logis. Operator-operator logika yang umum dalam bahasa pemrograman adalah AND, OR, NOT
