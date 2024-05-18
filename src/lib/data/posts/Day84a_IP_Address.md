---
title: Day 84a
description: IP Address Lanjutan
date: '2024-5-15'
categories:
  - Hardware dan Jaringan
published: true
---

## Table of Contents

## Jenis IP Address

### IP Private

IP Private adalah alamat IP yang digunakan dalam jaringan lokal dan tidak dapat diakses langsung dari internet. IP ini digunakan untuk mengidentifikasi perangkat dalam jaringan internal seperti rumah, kantor, atau organisasi. IP Private tidak unik secara global, sehingga alamat yang sama dapat digunakan di jaringan yang berbeda tanpa konflik.

#### Rentang IP Private

- IPv4:
  - Kelas A: 10.0.0.0 - 10.255.255.255
  - Kelas B: 172.16.0.0 - 172.31.255.255
  - Kelas C: 192.168.0.0 - 192.168.255.255

### IP Public

IP Public adalah alamat IP yang digunakan untuk mengidentifikasi perangkat di jaringan global (internet). IP ini unik secara global dan diberikan oleh penyedia layanan internet (ISP) atau otoritas penomoran internet. Perangkat dengan IP Public dapat berkomunikasi langsung melalui internet.

#### Rentang IP Public

IPv4: Selain dari rentang yang dialokasikan untuk IP Private.

## Address Khusus

Alamat khusus (special addresses) dalam konteks IP Address merujuk pada alamat-alamat tertentu yang memiliki fungsi atau tujuan khusus dalam jaringan komputer. Berikut adalah beberapa contoh alamat khusus beserta penjelasannya:

1. Alamat Loopback  
   Alamat loopback digunakan oleh perangkat untuk mengirimkan paket data ke dirinya sendiri. Ini berguna untuk pengujian dan debugging.  
   IPv4: 127.0.0.1

## Aturan Dasar Pemilihan Net ID dan Host ID

- Net ID tidak boleh 127
- Net ID dan Host ID tidak boleh 255
- Net ID dan Host ID tidak boleh 0
- Net ID dan Host ID harus unik dalam suatu network

## IPv6

IPv6 adalah versi terbaru dari Protokol Internet (IP) yang dirancang untuk menggantikan IPv4, memberikan ruang alamat yang lebih besar dan berbagai peningkatan lainnya. Alamat IPv6 terdiri dari 128 bit, yang memungkinkan sekitar 340 undecillion alamat unik, jauh lebih banyak dibandingkan dengan IPv4 yang hanya memiliki 32 bit.

### Format Alamat IPv6

#### Preferred Format (Format Standar)

Alamat IPv6 dalam format standar ditulis sebagai delapan kelompok heksadesimal, masing-masing terdiri dari empat digit, dipisahkan oleh tanda titik dua (:). Setiap grup merepresentasikan 16 bit.

Contoh:

```
2001:0db8:85a3:0000:0000:8a2e:0370:7334
```

#### Compressed Format (Format Terkompresi)

Format terkompresi memungkinkan penyederhanaan penulisan alamat IPv6 dengan menghilangkan nol yang memimpin dalam setiap kelompok dan menggantikan kelompok nol berturut-turut dengan tanda titik dua ganda (::). Tanda titik dua ganda hanya boleh digunakan sekali dalam satu alamat untuk menghindari ambiguitas.

Contoh:

```
2001:0db8:85a3:0000:0000:8a2e:0370:7334
```

dapat dikompresi menjadi:

```
2001:db8:85a3::8a2e:370:7334
```

Dan alamat dengan banyak nol:

```
2001:0db8:0000:0000:0000:0000:0000:0001
```

dapat dikompresi menjadi:

```
2001:db8::1
```

#### Mixed Format (Format Campuran)

Mixed format digunakan ketika sebuah alamat IPv6 berisi bagian yang merupakan alamat IPv4 yang disisipkan. Ini sering digunakan dalam skenario transisi dari IPv4 ke IPv6. Alamat IPv4 diintegrasikan dalam format IPv6 dan ditulis dalam notasi desimal bertitik di bagian akhir dari alamat IPv6.

Contoh:

```
::ffff:192.168.1.1
```

Dalam alamat ini, ::ffff: menunjukkan bahwa ini adalah alamat IPv6 yang mencakup alamat IPv4 192.168.1.1.

#### Kesimpulan

IPv6 dirancang untuk mengatasi kekurangan IPv4 dan menyediakan ruang alamat yang jauh lebih besar.

Terdapat beberapa format untuk menulis alamat IPv6:

- Preferred Format: Alamat lengkap dengan delapan kelompok heksadesimal.
- Compressed Format: Penyederhanaan dengan menghilangkan nol yang memimpin dan menggantikan kelompok nol berturut-turut dengan ::.
- Mixed Format: Menggabungkan alamat IPv4 dalam format IPv6, digunakan dalam skenario transisi.

Pemahaman tentang format-format ini penting untuk administrasi jaringan dan pengelolaan alamat IP dalam era IPv6.
