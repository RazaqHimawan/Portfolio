---
title: Day 154b
description: Pengujian (Testing)
date: "2024-12-11"
categories:
  - APSI
published: true
---

## Table of Contents

## Konsep Pengujian dan Implementasi Sistem

- Pengujian perangkat lunak adalah elemen penting dari jaminan kualitas yang mencakup spesifikasi, desain, dan pengkodean.
- Pengujian bertujuan untuk menemukan kesalahan dalam perangkat lunak yang telah dibangun.

### Sasaran Pengujian

- Menemukan kesalahan dalam program.
- Mengembangkan test case yang efektif untuk mengungkap kesalahan.
- Mengungkap semua kesalahan yang belum ditemukan.

### Prinsip Pengujian

- Pengujian harus dapat ditelusuri ke persyaratan pelanggan.
- Pengujian harus direncanakan sebelum dimulai.
- Prinsip Pareto: 80% kesalahan berasal dari 20% modul.
- Pengujian harus dimulai dari yang kecil ke yang besar.
- Pengujian mendalam tidak mungkin dilakukan.
- Pengujian yang efektif sebaiknya dilakukan oleh pihak ketiga yang independen.

### Testabilitas

- Testabilitas adalah kemudahan dalam menguji perangkat lunak.
- Karakteristik yang mendukung testabilitas meliputi operabilitas, observabilitas, kontrolabilitas, dekomposabilitas, kesederhanaan, stabilitas, dan kemampuan untuk dipahami.

### Desain Test Case

- Metode desain test case meliputi pengujian black box dan white box.
- Pengujian black box fokus pada fungsi perangkat lunak, sedangkan white box fokus pada struktur internal.

### Pengujian White-Box

- Menggunakan struktur kontrol desain untuk membuat test case.
- Menjamin semua jalur independen telah digunakan.

### Pengujian Basis-Path

- Teknik untuk mengukur kompleksitas logis dan menetapkan jalur eksekusi.
- Menggunakan notasi diagram alir untuk menggambarkan aliran kontrol.

### Pengujian Struktur Kontrol

- Meliputi pengujian kondisi, aliran data, dan loop.
- Pengujian kondisi fokus pada kesalahan logis dalam kondisi program.

## Pengujian Black-Box

- Fokus pada persyaratan fungsional perangkat lunak.
- Menggunakan metode seperti partisi ekivalensi dan analisis nilai batas untuk mendesain test case.

### Metode Pengujian Graph-based

- Membuat grafik objek dan hubungan untuk menentukan test case.
- Menggunakan model aliran transaksi dan pemodelan keadaan terbatas.

### Partisi Ekivalensi

- Membagi domain input menjadi kelas data untuk mengurangi jumlah test case.

### Analisis Nilai Batas

- Memfokuskan pada nilai batas untuk mendeteksi kesalahan.

### Pengujian Perbandingan

- Menggunakan versi perangkat lunak independen untuk memastikan konsistensi output.

## Pengujian untuk Aplikasi dan Lingkungan Khusus

- Pengujian GUI, arsitektur client-server, dokumentasi, dan sistem real-time.
- Masing-masing memiliki tantangan dan pendekatan pengujian yang unik.

### Pengujian GUI

- Menguji interaksi pengguna dengan antarmuka grafis.

### Pengujian Arsitektur Client-Server

- Menghadapi tantangan distribusi dan komunikasi jaringan.

### Pengujian Dokumentasi

- Memastikan dokumentasi akurat dan berguna bagi pengguna.

### Pengujian Sistem Real-Time

- Menguji respons sistem terhadap kejadian dan waktu.

## Metodologi Pengujian

- Metodologi pengujian mencakup pendekatan sistematis untuk merencanakan, melaksanakan, dan mengevaluasi pengujian perangkat lunak.

### Agile Testing

- Pengujian dilakukan secara iteratif dan berkelanjutan dalam siklus pengembangan Agile.
- Kolaborasi antara pengembang dan penguji sangat penting.

### Waterfall Testing

- Pengujian dilakukan setelah tahap pengembangan selesai.
- Pendekatan ini lebih terstruktur tetapi kurang fleksibel.

### DevOps Testing

- Integrasi pengujian dalam proses pengembangan dan operasi.
- Fokus pada otomatisasi dan pengujian berkelanjutan.

## Alat dan Teknik Pengujian

- Berbagai alat dan teknik digunakan untuk mendukung proses pengujian.

### Alat Otomatisasi

- Alat seperti Selenium dan JUnit digunakan untuk mengotomatiskan pengujian.
- Mengurangi waktu dan usaha yang diperlukan untuk pengujian manual.

### Alat Manajemen Pengujian

- Alat seperti TestRail dan JIRA membantu dalam perencanaan dan pelacakan pengujian.
- Memastikan semua test case terdokumentasi dengan baik.

### Teknik Pengujian Manual

- Pengujian manual tetap penting untuk kasus-kasus yang kompleks dan tidak dapat diotomatisasi.
- Memerlukan pemahaman mendalam tentang aplikasi dan kebutuhan pengguna.
