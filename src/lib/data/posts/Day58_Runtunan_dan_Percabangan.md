---
title: Day 58
description: Runtunan dan Percabangan
date: '2024-3-25'
categories:
  - Logika dan Algoritma
published: true
---

## Table of Contents

## Pernyataan dan Aksi

Sebuah algoritma merupakan deskripsi langkah-langkah pelaksanaan suatu proses. Setiap langkah di dalam algoritma dinyatakan dalam sebuah **pernyataan** (statement) atau istilah lainnya **instruksi**.

Sebuah pernyataan berisi aksi (action) yang dilakukan. Bila sebuah pernyataan dieksekusi oleh pemroses, maka aksi yang bersesuaian dengan pernyataan itu dikerjakan.

Contoh :

```
Jika nilai_ujian < 60 maka tulis ”tidak lulus ujian”
```

Keterangan : terdiri dari dua aksi, yaitu membandingkan nilai variabel nilai_ujian dengan 60, dan aksi tulis pesan ’tidak lulus ujian’ jika perbandingan itu benar.

## Runtunan

Runtunan adalah struktur algoritma paling dasar yang berisi rangkaian instruksi yang diproses secara sekuensial, satu persatu, mulai dari instruksi pertama sampai instruksi terakhir.

### Struktur Dasar

```
PROGRAM nama_algoritma
DEKLARASI
    {variabel dan tipe data}
ALGORITMA
    {isi algoritma}
```

## Percabangan

Percabangan adalah suatu kondisi dimana sebuah instruksi tidak dijalankan secara sekuensial, tetapi lebih berdasarkan pada kondisi tertentu yang ditetapkan oleh pembuat program.

Pada inti pemrograman, percabangan memegang peranan yang sangat penting dalam penyusunan program.

### JENIS PERCABANGAN

- Percabangan Tunggal
- Percabangan Ganda
- Percabangan Lebih dari 2

#### Percabangan Tunggal

Percabangan tunggal bekerja apabila hanya ada 1 alternatif instruksi saja yang dijalankan.

Logika ini memungkinkan kompiler untuk menjalankan sebuah instruksi atau tidak sama sekali.

Kompiler baru akan menjalankan instruksi yang ada di dalam notasi percabangan apabila kondisi yang diinginkan terpenuhi atau memberikan nilai akhir true.

Apabila kondisi tersebut memberikan nilai akhir false maka
tidak akan ada instruksi yang dijalankan.

Notasi:

```vb
If kondisi Then
    Pernyataan
End If
```

#### Percabangan Ganda

Percabangan ganda apabila terdapat 2 alternatif instruksi yang dijalankan. Logika ini memungkinkan kompiler menjalankan salah satu dari 2 alternatif instruksi yang ada, dan salah satu instruksi pasti dijalankan.

Notasi:

```vb
If kondisi Then
    Pernyataan
Else
    Pernyataan
End If
```

#### Percabangan Lebih dari Dua

Pada dasarnya hanya terdapat 2 jenis seleksi dalam struktur algoritma pemrograman, namun bukan berarti hanya bisa dikembangkan pada 2 jenis tersebut saja.

Struktur seleksi dapat dikembangkan menjadi bentuk yang tidak terbatas dan dapat dikombinasikan kedalam bentuk perulangan selama notasi penulisannya tidak terdapat kesalahan. Kemampuan logika seseorang dalam merancang program dan mengamati dari permasalahan yang ada menjadi bagian yang paling penting dalam melakukan pengembangan dari bentuk seleksi ini.

Notasi:

```vb
If kondisi Then
    Pernyataan
ElseIf kondisi Then
    Pernyataan
Else
    Pernyataan
End If
```

### Switch Case

Struktur case sebenarnya memiliki fungsi yang sama dengan struktur if yang telah kita pelajari diatas. Struktur case ini dapat meringkaskan alur logika yang terjadi apabila diaplikasikan pada pada alur seleksi yang memiliki lebih dari 2 kondisi.

Notasi:

```
case ekspresi
    nilai_1 pernyataan_1
    nilai_2 pernyataan_2
    nilai_3 pernyataan_3
    .
    .
    .
    nilai_n pernyataan_n
    otherwise pernyataan_x
endcase
```
