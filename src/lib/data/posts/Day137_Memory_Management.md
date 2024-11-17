---
title: Day 137
description: Memory Management
date: "2024-11-13"
categories:
  - SO
published: true
---

## Table of Contents

## Manajemen Memori

### Apa itu Memori

Memori adalah komponen dalam komputer yang digunakan untuk menyimpan data atau instruksi baik sementara maupun permanen.

### Jenis-jenis Memori

- **RAM (Random Access Memory)**  
  Memori sementara yang digunakan untuk menyimpan data aktif saat sistem berjalan. Volatile (hilang jika daya mati).
- **ROM (Read Only Memory)**  
  Memori permanen yang hanya bisa dibaca, berisi instruksi penting seperti bootloader. Non-volatile.
- **PROM (Programmable ROM)**  
  ROM yang bisa diprogram satu kali oleh pengguna.
- **EPROM (Erasable Programmable ROM)**  
  ROM yang dapat dihapus dengan sinar UV dan diprogram ulang.
- **EEPROM (Electrically Erasable Programmable ROM)**  
  Versi EPROM yang dapat dihapus dan diprogram ulang secara elektrik.

### Hirarki Memori

- **Register**: Memori tercepat dalam prosesor, menyimpan data yang sedang diproses.
- **Cache**: Memori cepat yang berfungsi menyimpan data sering digunakan.
  - **L1 Cache**: Cache di dalam CPU, sangat cepat, tetapi kecil kapasitasnya.
  - **L2 Cache**: Cache lebih besar dari L1, bisa di dalam atau di luar CPU.
- **Main Memory**: RAM, digunakan untuk menyimpan data aktif aplikasi.
- **Local Secondary Memory**: Penyimpanan lokal seperti HDD atau SSD.
- **Remote Secondary Memory**: Penyimpanan di lokasi jauh, misalnya cloud storage.

### Multiprogramming Partisi Dinamis dan Statis

- **Partisi Statis**: Memori dibagi menjadi partisi tetap. Tidak fleksibel karena pembagian tetap.
- **Partisi Dinamis**: Ukuran partisi ditentukan sesuai kebutuhan program. Lebih efisien.

### Memory Compaction

- Proses merapikan memori dengan menggabungkan blok kosong sehingga program baru dapat dialokasikan secara efisien.

### Multiprogramming Tanpa Abstraksi Memori

- Sistem tanpa abstraksi memori memerlukan program untuk mengetahui lokasi fisik data di memori.

### Relokasi Statis dan Dinamis

- **Statis**: Proses menentukan lokasi program di memori sebelum dieksekusi.
- **Dinamis**: Lokasi program bisa berubah selama eksekusi menggunakan tabel relokasi.

### Manajemen Memori: Bitmap dan Linked List

- **Bitmap**: Menggunakan bit untuk menandai blok memori yang kosong atau terpakai.
- **Linked List**: Daftar terhubung yang menunjukkan blok memori bebas dan terpakai.

### Alokasi Memori

- **First Fit**: Memilih blok kosong pertama yang cukup besar.
- **Next Fit**: Sama seperti First Fit, tetapi pencarian dimulai dari lokasi terakhir alokasi.
- **Best Fit**: Memilih blok terkecil yang cukup besar untuk program.
- **Worst Fit**: Memilih blok terbesar untuk alokasi.

### Virtual Memory

    - Memori virtual memungkinkan penggunaan memori lebih besar dari RAM dengan memanfaatkan penyimpanan sekunder (swap space).

### Paging

    - Memori dibagi dalam blok ukuran tetap yang disebut halaman (page). Tiap halaman bisa dialokasikan secara tidak berurutan di memori fisik.

### Segmentasi

    - Memori dibagi berdasarkan segmen logis seperti fungsi, array, atau modul. Setiap segmen memiliki panjang variabel.
