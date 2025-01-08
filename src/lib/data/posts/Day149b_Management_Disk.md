---
title: Day 149b
description: Management Disk
date: "2024-12-04"
categories:
  - SO
published: true
---

## Table of Contents

## Manajemen Disk

### Struktur Disk

- **Disk** adalah media penyimpanan sekunder modern, menggantikan pita magnetik.
- **Blok logika**: Unit terkecil transfer data (umumnya 512 bytes).
- **Pemetaan**:
  - Disk dipetakan ke sektor secara berurutan dari silinder terluar ke terdalam.
  - Metode **CLV**: Kecepatan putar meningkat di zona dalam, digunakan pada CD/DVD-ROM.
  - Metode **CAV**: Kecepatan rotasi konstan, dengan kepadatan bit menurun ke zona luar.

### Penjadwalan Disk

- **Tujuan**: Meningkatkan efisiensi waktu akses dan bandwidth.
- **Komponen waktu akses**:
  - Waktu pencarian (seek time): Pergerakan disk arm ke silinder.
  - Waktu rotasi (rotational latency): Menunggu sektor sampai di bawah head.

### Macam-macam Penjadwalan Disk

#### Penjadwalan FCFS (First-Come-First-Served)

- **Keunggulan**: Sederhana dan adil.
- **Kelemahan**: Tidak efisien, total pergerakan head tinggi.

#### Penjadwalan SSTF (Shortest-Seek-Time-First)

- **Keunggulan**: Memilih permintaan terdekat, meningkatkan efisiensi.
- **Kelemahan**: Risiko starvation pada permintaan jauh.

#### Penjadwalan SCAN

- **Keunggulan**: Disk arm bergerak bolak-balik seperti lift.
- **Kelemahan**: Potensi starvation dan pergerakan tidak efisien di ujung silinder.

#### Penjadwalan C-SCAN (Circular SCAN)

- **Keunggulan**: Disk arm hanya melayani satu arah, mengurangi starvation.
- **Kelemahan**: Perlu bergerak cepat ke ujung lain tanpa melayani permintaan.

#### Penjadwalan LOOK

- **Keunggulan**: Lebih efisien, disk arm berbalik arah jika tidak ada permintaan di depan.
- **Kelemahan**: Masih terdapat risiko starvation.

#### Penjadwalan C-LOOK

- **Keunggulan**: Memadukan keunggulan LOOK dan C-SCAN, mengurangi starvation lebih baik.

### Pemilihan Algoritma Penjadwalan

- Tidak ada algoritma terbaik untuk semua keadaan.
- **SSTF**: Umum digunakan.
- **SCAN & C-SCAN**: Cocok untuk beban kerja berat.
- Sistem operasi sering menggunakan **SSTF** atau **LOOK** sebagai algoritma dasar.
- Kinerja dipengaruhi oleh jumlah permintaan dan metode penempatan berkas.

### Implementasi pada Disk Modern

- **Rotational latency** sulit diperhitungkan oleh sistem operasi.
- Produsen disk mengintegrasikan algoritma penjadwalan ke perangkat keras.
