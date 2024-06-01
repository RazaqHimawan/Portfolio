---
title: Day 93a
description: Konsep Dasar dan Perhitungan Subnetting IP Address
date: '2024-5-29'
categories:
  - Hardware dan Jaringan
published: true
---

## Table of Contents

## Subnetting

Subnetting adalah teknik memecah network menjadi beberapa sub network/jaringan yang lebih kecil atau lebih spesifik lagi.

Sub jaringan yang lebih kecil disebut dengan subnet.

Subnetting digunakan oleh pengelola jaringan untuk melakukan alokasi IP address sesuai kebutuhan jaringan.

Prosedur subnetting sendiri dilakukan dengan memakai nilai CIDR (Classless Inter Domain Routing).

## Classless Inter Domain Routing (CIDR)

CIDR biasanya menggunakan network prefix dengan panjang tertentu. Network Prefix suatu kelas IP Address menggunakan tanda garis miring (/) diikuti dengan angka yang menunjukkan panjang Network Prefix ini dalam bit.

**Contoh penulisan: 192.168.1.1/24**

Dari IP Address tersebut memiliki arti IP Address kelas C **192.168.1.1** yang memiliki 24 bit sebagai Network ID.

### Klasifikasi Subnetting dengan CIDR

- `/5` sd `/8` hanya bisa digunakan oleh Network kelas A
- `/16` sd `/23` hanya bisa digunakan oleh Network kelas A dan kelas B
- `/24` sd `/30` bisa digunakan oleh Network kelas A, kelas B, dan kelas C.

## Contoh Subnetting Kelas C

Diketahui sebuah IP Address: **192.168.1.1/26**

Dengan teknik subnetting, tentukan:

a. Jumlah Subnet
b. Jumlah Host
c. Blok Subnet
d. Host Address dan Broadcast Address yang valid.

### Penyelesaian

Mencari Subnet Mask:

```
IP Address: 192.168.1.1/26

26 angka 1: 11111111.11111111.11111111.11000000

Konversi ke bilangan desimal: 11000000

128 64 32 16 8 4 2 1
1   1  0  0  0 0 0 0

128 + 64 = 192

Subnet Mask: 255.255.255.192
```

#### Jawab A. Jumlah Subnet

```
Jumlah Subnet = 2^x

x: banyak angkat 1 pada segmen ke-4 IP Address.

Jadi: 2^x = 2^2 = 4

Jumlah Subnet = 4 buah subnet
```

#### Jawab B. Jumlah Host

```
Jumlah Host = 2^y - 2

x: banyak angka 0 pada segment ke-4 IP Address

Jadi: 2^y - 2 = 2^6 - 2 = 64 - 2

Jumlah Host = 62 buah host
```

#### Jawab C. Blok Subnet

```
Blok Subnet = 256 - z

z: nilai subnet mask segment ke-4

Jadi: 256 - 192 = 64

Untuk mencari Blok Subnet berikutnya,
hanya ditambahkan nilai 64, sehingga menjadi:

64 + 64 = 128
128 + 64 = 192

Sehingga Blok Subnet lengkapnya = 0, 64, 128, 192
```

#### Jawab D. Host & Broadcast Address

Untuk menentukan nilai Host & Broadcast diatas, kita buat tabelnya

Host pertama adalah 1 angka setelah subnet
Host terakhir adalah 1 angka sebelum broadcast
Broadcast adalah 1 angka sebelum subnet berikutnya

<div style="overflow-x: scroll;">

|                   |              |               |               |
| ----------------- | ------------ | ------------- | ------------- | ------------- |
| **Subnet**        | 192.168.1.0  | 192.168.1.64  | 192.168.1.128 | 192.168.1.192 |
| **Host Pertama**  | 192.168.1.1  | 192.168.1.65  | 192.168.1.129 | 192.168.1.193 |
| **Host Terakhir** | 192.168.1.62 | 192.168.1.126 | 192.168.1.190 | 192.168.1.254 |
| **Broadcast**     | 192.168.1.63 | 192.168.1.127 | 192.168.1.191 | 192.168.1.255 |

</div>
