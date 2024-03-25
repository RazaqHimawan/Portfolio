---
title: Day 57c
description: Queue
date: '2024-3-23'
categories:
  - struktur data
published: true
---

## Table of Contents

## Queue

Queue (antrian) adalah suatu kumpulan data yang mana penambahan data/ elemen hanya dapat dilakukan pada sisi belakang sedangkan penghapusan/pengeluaran elemen dilakukan pada sisi depan.

Karakteristik penting queue adalah bersifat FIFO ( First In First Out) artinya data yang terlebih dahulu masuk merupakan data yang akan keluar terlebih dahulu. seperti halnya pada antrian yang biasa kita lakukan sehari-hari , dimanapun.

Antrian dimulai dari depan ke belakang, jika yang berada didepan belum pergi meninggalkan antrian maka antrian yang ada di belakang akan terus bertambah dan antrian paling belakang disini dinamakan rear/tail.

Jika ada yang keluar dari antrian (dequeue) maka data tersebut adalah yang paling depan (head/front), dan data berikutnya setelah data yang keluar berubah menjadi yang paling depan (head/front).

### Operasi Standar pada queue

- Enqueue: Menambahkan elemen ke antrian
- Dequeue: Menghapus data pertama pada antrian
- IsFull: Memeriksa apakah ruang queue sudah penuh atau belum
- IsEmpty: Memeriksa apakah ruang queue kosong atau tidak
- Count: Menghitung banyak data pada antrian
- Display/View: Mencetak semua data pada antrian
- Destroy/Clear: Menghapus atau Membersihkan semua data pada queue.
