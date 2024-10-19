---
title: Day 116
description: Pembuatan Model dan Desain Database
date: '2024-10-07'
categories:
  - SIA
published: true
---

## Table of Contents

## Perancangan dan Implementasi Sistem Database

Enam langkah dasar dalam mendesain dan mengimplementasikan sistem database,

diantaranya:

1. Identifikasi kebutuhan informasi para pemakai.
2. Tahap pertama terdiri dari perencanaan awal untuk menetapkan kebutuhan dan kelayakan pengembangan sistem baru.
3. Pengembangan berbagai skema berbeda untuk sistem yang baru, pada tingkat konseptual, eksternal dan internal.
4. Penerjemahan skema tingkat internal ke struktur database sesungguhnya, yang akan diimplementasikan ke dalam sistem yang baru tersebut.
5. Mentransfer semua data dari sistem sebelumnya ke database SIA yang baru.
6. Penggunaan dan pemeliharaan sistem yang baru.

## Model Data REA

Model data REA (Resources, Events, Agents) adalah kerangka kerja konseptual yang digunakan dalam akuntansi dan sistem informasi untuk memodelkan proses bisnis. REA dikembangkan oleh William E. McCarthy pada tahun 1982 dan digunakan untuk menggambarkan bagaimana sumber daya (resources), peristiwa (events), dan agen (agents) berinteraksi dalam suatu organisasi atau sistem bisnis.

### Elemen-Elemen Kunci Model REA

1. Resources (Sumber Daya): Merupakan hal-hal berwujud atau tidak berwujud yang dimiliki dan dikendalikan oleh perusahaan dan yang bernilai dalam menjalankan proses bisnis. Contohnya termasuk uang tunai, persediaan, layanan, aset, dll.
2. Events (Peristiwa): Merupakan tindakan atau transaksi yang terjadi selama proses bisnis yang mengubah sumber daya perusahaan. Peristiwa ini bisa berupa pembelian, penjualan, penerimaan pembayaran, atau pengeluaran, yang semuanya mempengaruhi status sumber daya.
3. Agents (Agen): Merupakan orang atau entitas yang berpartisipasi dalam peristiwa bisnis. Agen ini dapat berupa karyawan perusahaan, pelanggan, vendor, atau pihak eksternal lainnya yang terlibat dalam transaksi bisnis.

### Membangun Diagram REA

1. **Identifikasi Peristiwa (Events)**  
   Langkah pertama dalam membangun diagram REA adalah mengidentifikasi peristiwa bisnis utama yang terjadi dalam proses bisnis.  
   Peristiwa ini biasanya melibatkan pertukaran atau pemanfaatan sumber daya. Ada dua jenis peristiwa dalam model REA:
   - **Peristiwa Ekonomi**: Peristiwa yang menyebabkan perubahan langsung pada sumber daya, misalnya, pembelian, penjualan, penerimaan pembayaran, atau pengiriman barang.
   - **Peristiwa Komitmen**: Peristiwa yang mendahului atau mendukung peristiwa ekonomi, seperti menempatkan pesanan pembelian atau menandatangani kontrak.
2. **Identifikasi Sumber Daya (Resources)**  
   Setelah mengidentifikasi peristiwa, langkah berikutnya adalah mengidentifikasi sumber daya yang terlibat dalam setiap peristiwa. Sumber daya adalah sesuatu yang bernilai bagi perusahaan, yang bisa berupa barang, jasa, atau uang tunai.
3. **Identifikasi Agen (Agents)**  
   Agen adalah orang atau entitas yang terlibat dalam setiap peristiwa bisnis. Agen bisa berasal dari dalam perusahaan (internal) seperti karyawan atau dari luar (eksternal) seperti pelanggan dan pemasok.
4. **Menetapkan kardinalitas hubungan**  
   Kardinalitas menunjukkan bagaimana perumpamaan dalam satu entitas dapat dihubungkan ke perumpamaan tertentu dalam entitas lainnya.  
   Kardinalitas sering diungkapkan sebagai pasangan nomor di setiap entitas.  
   Nomor pertama adalah kardinalitas minimum, dan nomor kedua adalah kardinalitas maksimum.

### Hubungan antar Entitas

Terdapat kemungkinan tiga jenis dasar hubungan antar entitas, tergantung dari kardinalitas maksimum yang berhubungan dengan setiap entitas.

yaitu:

1. Hubungan satu-ke-satu (1:1)
2. Hubungan satu-ke-banyak (1:N)
3. Hubungan banyak-ke-banyak (M:N)

### Mengimplementasikan Diagram REA Dalam Database Relasional

Mengimplementasikan diagram REA ke dalam database relasional melibatkan proses tiga tahap,

yaitu:

1. Membuat sebuah tabel untuk setiap entitas berbeda dan untuk setiap hubungan banyak-ke-banyak
2. Memberikan atribut ke tabel yang tepat
3. Menggunakan kunci luar untuk mengimplementasikan hubungan satu-ke-satu dan hubungan satu-ke-banyak

#### Menetapkan Atribut untuk Setiap Tabel

Menetapkan Kunci Utama: Biasanya, kunci utama dari suatu tabel yang mewakili suatu entitas adalah satu atribut.  
Atribut Lainnya: Atribut tambahan disertakan dalam setiap tabel untuk memenuhi persyaratan pemrosesan transaksi.
