---
title: Day 48a
description: Generasi Komputer dan POST
date: '2024-3-13'
categories:
  - Hardware dan Jaringan
published: true
---

## Table of Contents

## Generasi Komputer

### Generasi Pertama (1940-1959)

- Program dibuat dalam bahasa mesin.
- Menggunakan konsep storage program.
- Komponen yang digunakan adalah tabung hampa udara.
- Ukuran fisiknya besar, sehingga membutuhkan daya listrik yang besar.
- Dapat disimpan di magnetic tape dan magnetic disk.
- Contohnya komputer IBM 701 buatan tahun 1953 sebagai komputer komersial berukuran besar dan IBM 705 yang dibuat tahun 1959 untuk industri.

### Generasi Kedua (1959-1965)

- Kapasitas memori utama cukup besar.
- Komponen yang digunakan adalah transistor yang jauh lebih kecil dibandingkan tabung hampa udara.
- Menggunakan magnetic tape dan magnetic disk yang berbentuk removable disk.
- Mempunyai kemampuan proses real-time dan time sharing.
- Proses operasinya lebih cepat.
- Orientasinya pada aplikasi bisnis dan teknik.
- Contohnya komputer PDP-5 dan PDP-8 buatan tahun 1963 sebagai komputer mini komersial pertama. Selain itu ada pula komputer IBM 7070, IBM 1400, NCR 300, dan sebagainya.

### Generasi Ketiga (1965-1970)

- Komponen yang dipakai adalah IC (Integrated Circuits) yang terdiri atas ratusan atau ribuan transistor berbentuk hybrid integrated circuits dan monolithic integrated circuits.
- Proses operasinya jauh lebih cepat dan lebih tepat, kapasitas memori komputer jauh lebih besar.
- Ukuran fisik jauh lebih kecil sehingga penggunaan listrik lebih hemat.
- Menggunakan magnetic disk yang sifatnya random access.
- Dapat melakukan multiprocessing dan multiprogramming.
- Alat input-output mengalami pengembangan dengan menggunakan visual display terminal.
- Dapat melakukan komunikasi data dari satu komputer dengan komputer lainnya.
- Contohnya komputer IBM S/30. NOVA, CDC 3000, PDP-11, dan sebagainya.

### Generasi Keempat (1965-Sekarang)

- Penggunaan LSI (Large Scale Integration) yang disebut juga sebagai Bipolar Large Scale Integration.
- Menggunakan mikroprosesor dan semikonduktor yang berbentuk chip untuk memori komputer.
- Contohnya, komputer IBM 370 menggunakan Intel 4004 mikroprosesor yang dikembangkan pertama kali pada tahun 1971 oleh perusahaan Intel Corporation dengan menggunakan chip mikroprosesor.
- Personal computer atau PC mulai berkembang sejak tahun 1977. Contohnya komputer Apple II dan komputer dekstop oleh Xerox Corporation.
- Pada tahun 1981, komputer mulai banyak menggunakan sistem Window dan mouse.

### Generasi Kelima (Masa Depan)

- Komponen yang dipakai adalah VLSI (Very Large Scale Integration).
- Kemampuan komputer dikembangakan untuk memecahkan masalah sendiri dengan bantuan AI (Artificial Intelligence). AI dapat diterapkan untuk mengoperasikan robot.
- Mulai dikembangkan komputer yang dapat menggantikan chip.
- Jepang adalah negara yang memelopori komputer generasi kelima.

## Power On Self Test (POST)

POST adalah built-in program diagnostik yang memeriksa hardware anda untuk memastikan bahwa semuanya hadir dan berfungsi dengan baik, sebelum mulai boot BIOS yang sebenernya. Ini kemudian berlanjut dengan tes tambahan (seperti uji memori yang anda lihat tercetak pada layar) sebagai proses boot melanjutkan.

## Jenis Kesalahan POST

### Fatal Error

Fatal error adalah kesalahan yang mencegah komputer untuk melanjutkan proses booting.

Contoh fatal error:

- CPU tidak terdeteksi
- RAM tidak terdeteksi
- Motherboard rusak
- Kesalahan fatal pada BIOS

Ketika terjadi fatal error, komputer biasanya akan menampilkan pesan error di layar atau mengeluarkan bunyi beep panjang.

### Non-Fatal Error

Non-fatal error adalah kesalahan yang tidak mencegah komputer untuk melanjutkan proses booting, tetapi dapat menyebabkan masalah pada kinerja komputer.

Contoh non-fatal error:

- Hard disk tidak terdeteksi
- Perangkat keras yang tidak kompatibel
- Konfigurasi BIOS yang salah

Ketika terjadi non-fatal error, komputer biasanya akan menampilkan pesan error di layar atau mengeluarkan bunyi beep pendek.
