---
title: Day 118b
description: Level DFD
date: '2024-10-09'
categories:
  - APSI
published: true
---

## Table of Contents

## Level-Level DFD

### 1. DFD Level 0 (Context Diagram)

- **Pengertian**: Level paling sederhana dalam DFD yang juga disebut sebagai _Context Diagram_. Sistem diwakili sebagai satu proses tunggal dan memperlihatkan interaksi dengan entitas eksternal.
- **Ciri-ciri**:
  - Menunjukkan satu proses utama (sistem keseluruhan).
  - Interaksi dengan entitas eksternal (misalnya, pengguna atau sistem lain).
  - Aliran data masuk dan keluar dari sistem.
- **Contoh**: Sistem pemesanan tiket yang ditampilkan sebagai satu proses, menerima input dari pelanggan, dan mengeluarkan tiket sebagai output.

### 2. DFD Level 1

- **Pengertian**: Pemecahan dari proses tunggal pada DFD level 0 menjadi beberapa proses utama. Tujuannya adalah menunjukkan fungsi-fungsi utama yang dilakukan oleh sistem.
- **Ciri-ciri**:
  - Proses utama dari DFD level 0 dipecah menjadi beberapa sub-proses.
  - Aliran data antar entitas eksternal dan sub-proses lebih rinci.
  - Menunjukkan penyimpanan data (data store).
- **Contoh**: Pada sistem pemesanan tiket, dipecah menjadi sub-proses seperti "Pemesanan Tiket," "Pembayaran," dan "Penerbitan Tiket," serta menambahkan data store seperti "Database Pelanggan" dan "Database Tiket."

### 3. DFD Level 2

- **Pengertian**: Setiap proses dari DFD level 1 dipecah lagi menjadi sub-proses yang lebih spesifik. Level ini memberikan detail lebih lanjut tentang cara setiap sub-proses bekerja.
- **Ciri-ciri**:
  - Setiap sub-proses dari level 1 dipecah menjadi sub-sub-proses.
  - Aliran data ditunjukkan secara lebih rinci.
  - Interaksi antara proses-proses yang lebih spesifik, data store, dan entitas eksternal diperlihatkan.
- **Contoh**: Sub-proses "Pemesanan Tiket" dari level 1 dipecah menjadi "Mengecek Ketersediaan Tiket," "Memilih Kursi," dan "Konfirmasi Pemesanan."

### 4. DFD Level 3

- **Pengertian**: Pemecahan lebih lanjut dari sub-sub-proses pada level 2. Level ini digunakan untuk memberikan rincian yang sangat detail pada sistem yang kompleks.
- **Ciri-ciri**:
  - Proses dari level 2 dipecah menjadi sub-proses yang lebih kecil.
  - Aliran data digambarkan secara rinci hingga komponen terkecil dari sistem.
- **Contoh**: Sub-proses "Mengecek Ketersediaan Tiket" dari level 2 dipecah menjadi proses "Memeriksa Database," "Menampilkan Ketersediaan," dan "Memberikan Opsi Tiket."

### Ringkasan

- **Level 0**: Sistem sebagai satu proses tunggal, interaksi dengan entitas eksternal.
- **Level 1**: Proses tunggal dipecah menjadi beberapa sub-proses utama dan aliran data di antara mereka.
- **Level 2**: Sub-proses pada level 1 dipecah lagi menjadi proses yang lebih kecil.
- **Level 3**: Memecah lebih jauh sub-proses di level 2 untuk menunjukkan aliran data yang sangat rinci.
