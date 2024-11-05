---
title: Day 131c
description: Deadlock
date: "2024-10-30"
categories:
  - SO
published: true
---

## Table of Contents

## Deadlock

Deadlock adalah situasi dalam sistem operasi di mana dua atau lebih proses saling menunggu sumber daya yang tidak bisa dilepaskan, sehingga tidak ada proses yang dapat melanjutkan eksekusi.

### Preemptable vs Non-Preemptable

1. **Preemptable**

   - Sumber daya yang **dapat dihentikan** sementara dari satu proses dan dialihkan ke proses lain tanpa menyebabkan kerusakan atau kehilangan data.
   - Contoh: CPU, memori.

2. **Non-Preemptable**
   - Sumber daya yang **tidak dapat dihentikan** dari suatu proses hingga proses tersebut selesai menggunakannya.
   - Contoh: Printer, file terbuka.

### Deadlock vs Starvation

- **Deadlock**: Semua proses yang terlibat saling menunggu sumber daya sehingga tidak ada proses yang dapat melanjutkan.
- **Starvation**: Sebuah proses mengalami penundaan tanpa batas waktu karena sumber daya yang diperlukan terus dialokasikan ke proses lain (biasanya karena kebijakan prioritas).

### Karakteristik Deadlock

1. **Mutual Exclusion** (Eksklusi Bersama)

   - Hanya satu proses yang dapat menggunakan sumber daya tertentu pada satu waktu.

2. **Hold and Wait** (Menahan dan Menunggu)

   - Proses yang sedang menahan sumber daya tertentu dapat meminta sumber daya tambahan lain tanpa melepaskan sumber daya yang sudah dimilikinya.

3. **No Preemption** (Tidak Ada Penghentian)

   - Sumber daya tidak dapat dipaksa untuk dilepaskan dari proses sebelum proses tersebut selesai menggunakannya.

4. **Circular Wait** (Tunggu Melingkar)
   - Terdapat rantai proses yang saling menunggu sumber daya satu sama lain, membentuk siklus atau lingkaran.

Deadlock hanya terjadi jika keempat kondisi diatas terpenuhi secara bersamaan.

### Strategi Menghadapi Deadlock

1. **Ostrich Algorithm**

   - Mengabaikan deadlock dengan asumsi bahwa deadlock jarang terjadi dan lebih murah untuk mengabaikannya daripada mencoba mencegah atau menangani.
   - Cocok untuk sistem di mana deadlock jarang atau dampaknya kecil.

2. **Resource Allocation Graph (RAG)**
   - Representasi grafis dari alokasi sumber daya dalam sistem.
   - Digunakan untuk menganalisis potensi deadlock, di mana node graf mewakili proses dan sumber daya, serta edge menunjukkan permintaan atau alokasi sumber daya.
   - Deadlock terdeteksi jika terdapat siklus dalam graf.

### Deadlock Recovery

1. **Preemption**

   - Mengambil paksa sumber daya dari proses yang sedang menggunakannya, meskipun ini sulit dilakukan dengan sumber daya non-preemptable.

2. **Rollback**

   - Mengembalikan satu atau lebih proses ke keadaan sebelumnya dan mencoba lagi. Ini dilakukan dengan menggunakan checkpoint dari status sebelumnya.

3. **Termination**
   - Menghentikan satu atau lebih proses yang terlibat dalam deadlock. Proses ini dapat dipilih berdasarkan prioritas atau jumlah sumber daya yang dipegang.
