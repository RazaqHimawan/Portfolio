---
title: Day 79a
description: Jaringan Wireless dan IP Adress
date: '2024-5-08'
categories:
  - Hardware dan Jaringan
published: true
---

## Table of Contents

## Wireless

Wireless merujuk pada teknologi yang memungkinkan komunikasi nirkabel antara perangkat, seperti Wi-Fi dan Bluetooth. Ini memungkinkan transmisi data tanpa kabel fisik.

## Standar IEEE

IEEE adalah singkatan dari "Institute of Electrical and Electronics Engineers". Mereka mengembangkan banyak standar untuk teknologi, termasuk standar untuk jaringan komputer seperti Ethernet (IEEE 802.3) dan Wi-Fi (IEEE 802.11).

## Hotspot

Hotspot adalah area di mana Anda dapat mengakses internet nirkabel melalui jaringan lokal (biasanya Wi-Fi). Misalnya, ketika Anda berada di kafe yang menawarkan Wi-Fi gratis, itu adalah contoh hotspot.

## IP Adress

IP Address adalah alamat numerik yang unik diberikan kepada setiap perangkat yang terhubung ke internet.

Ada dua versi IP yang umum digunakan:

- IPv4 (dalam format xxx.xxx.xxx.xxx)
- IPv6 (dalam format xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx).

## ISO (International Organization for Standardization)

ISO adalah singkatan dari "International Organization for Standardization." Mereka mengembangkan standar internasional di berbagai bidang, termasuk dalam hal jaringan komputer seperti OSI (Open Systems Interconnection) model.

## Model OSI (Open Systems Interconnection)

Model OSI adalah model referensi yang menggambarkan cara komunikasi jaringan komputer seharusnya berlangsung. Model ini terdiri dari 7 lapisan, dimulai dari lapisan fisik hingga lapisan aplikasi.

### Lapisan-Lapisan OSI

1. **Fisik** (Physical): Menangani transmisi data fisik melalui media seperti kabel atau gelombang radio.
1. **Data Link**: Memastikan pengiriman data yang dapat diandalkan antara dua node terdekat dalam jaringan.
1. **Jaringan** (Network): Mengelola rute dan pengiriman data antara dua node yang tidak berdekatan dalam jaringan.
1. **Transport**: Menangani pengaturan koneksi dan kontrol kesalahan untuk pengiriman data yang andal.
1. **Sesi** (Session): Bertanggung jawab atas pembentukan, pemeliharaan, dan penghentian sesi antara aplikasi yang berkomunikasi.
1. **Presentasi** (Presentation): Menangani enkripsi, dekripsi, dan konversi format data.
1. **Aplikasi** (Application): Menyediakan antarmuka untuk pengguna dan aplikasi jaringan.

## Model DARPA

Model DARPA adalah model yang dikembangkan oleh DARPA (Defense Advanced Research Projects Agency) yang menjadi dasar bagi pengembangan TCP/IP.

## TCP/IP

TCP/IP Transmission Control Protocol/Internet Protocol adalah seperangkat protokol yang digunakan untuk mengelola komunikasi data di internet. TCP bertanggung jawab untuk pengiriman data yang andal, sedangkan IP bertanggung jawab atas pengalamatan dan routing.

### Kelas IP Adress

#### Kelas A (Class A)

- Rentang Alamat: 0.0.0.0 hingga 127.255.255.255
- Format: N.H.H.H (di mana N = Network, H = Host)
- Karakteristik: Kelas A ditandai dengan bit pertama (bit yang paling kiri) pada alamat IP yang selalu bernilai 0. Bit pertama ini menandakan bahwa alamat ini adalah kelas A.
- Penggunaan: Kelas A sering dialokasikan untuk organisasi besar karena menyediakan sejumlah besar alamat IP.

#### Kelas B (Class B)

- Rentang Alamat: 128.0.0.0 hingga 191.255.255.255
- Format: N.N.H.H (di mana N = Network, H = Host)
- Karakteristik: Kelas B ditandai dengan dua bit pertama yang selalu bernilai 10. Bit pertama dan kedua ini menandakan bahwa alamat ini adalah kelas B.
- Penggunaan: Kelas B umumnya digunakan oleh organisasi menengah yang membutuhkan sejumlah alamat IP yang cukup besar.

#### Kelas C (Class C)

- Rentang Alamat: 192.0.0.0 hingga 223.255.255.255
- Format: N.N.N.H (di mana N = Network, H = Host)
- Karakteristik: Kelas C ditandai dengan tiga bit pertama yang selalu bernilai 110. Bit pertama, kedua, dan ketiga ini menandakan bahwa alamat ini adalah kelas C.
- Penggunaan: Kelas C sering digunakan oleh organisasi kecil karena memberikan jumlah alamat IP yang lebih terbatas dibandingkan kelas A dan B.

#### Kelas D (Class D)

- Rentang Alamat: 224.0.0.0 hingga 239.255.255.255
- Format: N.N.N.N
- Karakteristik: Kelas D ditandai dengan empat bit pertama yang selalu bernilai 1110. Bit pertama, kedua, ketiga, dan keempat ini menandakan bahwa alamat ini adalah kelas D.
- Penggunaan: Kelas D digunakan untuk multicast, yaitu pengiriman paket data kepada sekelompok penerima yang berada di jaringan yang sama.

#### Kelas E (Class E)

- Rentang Alamat: 240.0.0.0 hingga 255.255.255.255
- Format: N.N.N.N
- Karakteristik: Kelas E ditandai dengan empat bit pertama yang selalu bernilai 1111. Bit pertama, kedua, ketiga, dan keempat ini menandakan bahwa alamat ini adalah kelas E.
- Penggunaan: Kelas E tidak digunakan secara umum di internet dan dialokasikan untuk keperluan khusus, seperti penelitian dan eksperimen.
