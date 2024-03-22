---
title: Day 53
description: Array dan Stack
date: '2024-3-19'
categories:
  - struktur data
published: true
---

## Table of Contents

## Array

Array adalah suatu tipe data terstruktur yang berupa sejumlah data sejenis (bertipe data sama) yang jumlahnya bisa statis ataupun dinamis dan diberi suatu nama tertentu

Elemen-elemen array tersusun secara berderet dan sekuensial di dalam memori sehingga memiliki alamat yang bersebelahan/berdampingan.

Array dapat berupa array 1 dimensi, 2 dimensi, bahkan n-dimensi.

Elemen-elemen array bertipe data sama tetapi bisa bernilai sama atau berbeda-beda.

Elemen array akan dimulai dari 0 dan berakhir max. index (index saat array di create) - 1.

### Contoh Array

```py
binatang = ["ikan", "semut", "kuda"]
```

### Konsep Logika Array

1.  Array numeric
    ```py
    nilai_ujian = [80, 95, 70, 85, 90]
    ```
2.  Array Associative
    ```py
        informasi_buku = {
       "judul": "Belajar Python",
       "penulis": "John Doe",
       "tahun_terbit": 2023
     }
    ```

### Sifat-sifat Array

1. Homogen: Seluruh elemen di dalam struktur array mempunyai tipe data yang sama.
2. Random Access: Setiap elemen didalam struktur array dicapai secara individual langsung ke lokasi elemen yang diinginkan, tidak harus memulai dari elemen pertama.

## Stack

Stack atau tumpukan adalah kumpulan data dimana data yang diletakkan diatas data yang lain.

adalah kumpulan elemen yang hanya dapat ditambahkan dan atau di hapus dari satu ujung (gerbang) yang sama.

Stack mempunyai batas maksimal banyak data.

Stack bisa diimplementasikan dengan array dan linked list.

### Karakteristik Stack

Karakteristik penting stack adalah bersifat LIFO (Last In First Out) artinya data yang terakhir masuk merupakan data yang akan keluar lebih dulu.

### Operasi Standar pada Stack

| Operasi | Deksripsi                                                  |
| ------- | ---------------------------------------------------------- |
| Push    | Menambahkan elemen ke atas stack tumpukan                  |
| Pop     | Menghapus satu data ditumpukan teratas.                    |
| isFull  | Memeriksa apakah ruang stack sudah penuh atau belum        |
| isEmpty | Memeriksa apakah ruang stack kosong atau tidak.            |
| Peek    | Melihat atau mengintip data diposisi terentu               |
| Count   | Menghitung banyak data pada stack                          |
| Change  | Mengubah data diposisi tertentu                            |
| Display | Mencetak semua data pada stack                             |
| Destroy | Menghapus atau membersihkan semua data yang ada pada stack |
