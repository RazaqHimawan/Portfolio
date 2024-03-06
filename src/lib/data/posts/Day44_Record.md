---
title: Day 41
description: Record
date: '2024-3-05'
categories:
  - struktur data
published: true
---

## Table of Contents

## Record

Record merupakan tipe data buatan yang berisi kumpulan variabel dengan tipe data asli.

Record ialah membungkus sejumlah variabel dengan tipe data asli.

Operasi dalam menggunakan tipe data buatan memiliki perilaku yang sama dengan operasi pada tipe data dasar, hanya perbedaannya adalah pada cara mengaksesnya.

Tipe data buatan memiliki beberapa variabel / elemen yang berbeda didalamnya, untuk mengakses nya kita perlu menggunakan tanda dot/titik '.'.

### Contoh

Jika akan mendefinisikan nama variabel Mhs dengan tipe data Mahasiswa maka pendeklarasiannya adalah :

```ts
Mhs: Mahasiswa;
```

Berikut adalah Bentuk umum deklarasi record

```ts
type Nama_Variabel = <
Elemen1 : tipedata1,
Elemen2 : tipedata2,
Elemen-n : tipedata-n
>
```

### Record di Dalam Record

```ts
type alamat = <Kelurahan,Kecamatan: string>
```

Fungsi Record ialah membungkus variabel-variabel yang
memiliki konteks yang sama agar penulisan kode lebih
efisien.
