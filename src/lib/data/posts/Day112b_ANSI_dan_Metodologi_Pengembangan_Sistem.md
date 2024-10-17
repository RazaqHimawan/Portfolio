---
title: Day 112b
description: ANSI dan Metodologi Pengembangan Sistem
date: '2024-10-02'
categories:
  - APSI
published: true
---

## Table of Contents

## Konsep Analisis dan Desain Sistem Informasi (ANSI)

Analisis sistem didefinisikan bagaimana memahami dan menspesifikasi dengan detail apa yang harus dilakukan oleh sistem.

Sementara sistem desain diartikan menjelaskan dengan detail bagaimana bagian-bagian dari sistem informasi diimplementasikan.

Dengan demikian, analisis dan desain sistem informasi (ANSI) biasa didefinisikan sebagai: Proses organisasional kompleks dimana sistem informasi berbasis komputer diimplementasikan.

Atau bisa diringkas sebagai berikut :

Analysis : mendefinisikan masalah (From requirements to specification).  
Design : memecahkan masalah (From specification to implementation).

## Metodologi Pengembangan Sistem

Systems Development Life Cycle (SDLC) yang merupakan metodologi umum dalam pengembangan sistem yang menandai kemajuan usaha analisis dan desain.

### Fase-Fase SDLC

#### 1. Identifikasi dan seleksi proyek

Merupakan langkah pertama dalam SDLC keseluruhan informasi yang dibutuhkan oleh sistem: identifikasi, analisis, prioritas, dan susun ulang.

Dalam tahapan ini ada beberapa hal yang harus dilakukan, diantaranya :

- Mengidentifikasi proyek-proyek yang potensial
- Melakukan klasifikasi dan merangking proyek
- Memilih proyek untuk dikembangkan

#### 2. Inisiasi dan perencanaan proyek

Pada tahap ini ditentukan secara detail rencana kerja yang harus dikerjakan, durasi yang diperlukan masing-masing tahap, sumber daya manusia, perangkat lunak, perangkat keras, maupun financial diestimasi.Biasanya hal-hal tadi dituangkan dalam jadwal pelaksanaan proyek.

#### 3. Analisis

1. Pengumpulan Informasi
2. Mendefinisikan sistem requirement (kebutuhan sistem)
3. Memprioritaskan kebutuhan
4. Menyusun dan mengevaluasi alternatif
5. Mengulas kebutuhan dengan pihak manajemen

#### 4. Desain

Tahapan desain sistem dapat dibagi menjadi 2 tahap, yaitu desain logis (logical design) dan tahapan desain fisik (physical design).

Adapun perbedaan dari keduanya dijelaskan sebagai berikut :

1. Desain Logikal  
   Hasil dari tahapan ini adalah :

   - Deskripsi fungsional mengenai data dan proses yang ada dalam sistem baru
   - Deskripsi yang detail dari spesifikasi sistem, meliputi: **Input** (data apa saja yang menjadi input) , **Output** (informasi apa saja yang menjadi output), **Process** (prosedur apa saja yang harus dieksekusi untuk mengubah input menjadi output).

2. Desain Fisikal  
   Deskripsi teknis, mengenai pilihan teknologi perangkat lunak dan perangkat keras yang digunakan
   - Deskripsi yang detail dari spesifikasi sistem meliputi:
   - Modul-modul program, meliputi : File-file , Sistem jaringan , Sistem perangkat lunak
   - Pada tahapan desain, ada beberapa aktivitas utama yang dilakukan, yaitu :
     1. Merancang dan mengintegrasikan jaringan
     2. Merancang arsitektur aplikasi
     3. Mendesain antar muka pengguna
     4. Mendesain sistem antar muka
     5. Mendesain dan mengintegrasikan database
     6. Membuat prototype untuk detail dari desain
     7. Mendesain dan mengintegrasikan kendali sistem.

#### 5. Implementasi

Pada tahapan kelima SDLC ini terdapat beberapa hal yang perlu dilakukan, yaitu :

1. Testing (program, konfirmasi dng pengguna)
2. Instalasi

#### 6. Pemeliharaan

Langkah terakhir dari SDLC dimana pada tahapan ini sistem secara sistematis diperbaiki dan
ditingkatkan.

### Kelemahan SDLC Tradisional

Kelebihan sistem tradisional adalah langkah-langkah yang sekuensial memungkinkan pengembang system focus pada 1 langkah terlebih dahulu, baru setelah selesai berpindah ke langkah berikutnya. Untuk pemula langkah ini sangat bermanfaat.

Tetapi ada beberapa kelemahan sebagai akibat darilangkah-langkah sekuensial ini, diantaranya :

1. Terlalu boros, baik dari segi biaya maupun waktu, saat terjadi perubahan ketika sistem
   sudah dikembangkan. Hal ini disebabkan perubahan padasatu tahap akan berakibat pada
   tahap berikutnya. Dengan demikian, SDLC harus dilaksanakan dengan asumsi setiap tahap
   tidak boleh salah.

2. SDLC merupakan metode dengan pendekatan terstruktur yang mensyaratkan mengikuti semua langkah yang ada. Jika pengembang menginginkan proses pembuatan lebih cepat dengan meniadakan satu atau beberapa langkah maka hasilnya justru sistem yang dibangun akan gagal.

### Pendekatan Dalam Pengembangan Sistem Informasi

#### Pendekatan Berorientasi Proses

Fokus pada alur, penggunaan dan transformasi data dalam suatu sistem informasi. Menggunakan representasi grafik seperte Data Flow Diagram dan Bagan Data mengalir dari sumber ke tujuan melalui beberapa tahapan diantaranya Struktur data tidak dispesifikasikan
Kerugian: Berkas Data bergantung pada bentuk aplikasi.

#### Pendekatan Berorientasi Data

Menggambarkan bentuk organisasi data yang tidak bergantung pada aplikasi.  
Model data menggambarkan data dan hubungan bisnis antar data  
Aturan bisnis menggambarkan bagaimana organisasi merepresentasikan dan memproses data

### Metodologi Pengembangan Sistem

1. Model Waterfall
2. Rapid Application Development (RAD)
3. Prototyping
4. Spiral
5. Incremental
