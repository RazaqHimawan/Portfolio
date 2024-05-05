---
title: Day 72
description: Mesin Abstrak
date: '2024-4-29'
categories:
  - Logika dan Algoritma
published: true
---

## Table of Contents

## Mesin Abstrak

Mesin abstrak menggambarkan dalam suatu mesin terdapat pita yang bertipe karakter dan tipe numerik.

Jika Pita bertipe karakter maka akhir dari pita tersebut ditandai dengan `.` atau `*`.  
Jika Pita bertipe numerik maka diakhiri dari pita tersebut ditandai dengan 9999.

Jika Pita hanya berisi akhiran `.` , `*` dan 9999 berarti pita kosong.

Contoh: Pita Karakter

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
| S   | A   | Y   | A   | \*  |

### Notasi Algoritma

```js
// Pita Karakter
{inisialisasi}
read(x)
while x != "*" {
    aksi
    read(x)
}

// Pita Integer
{inisialisasi}
read(x)
while x != 9999 {
    aksi
    read(x)
}
```
