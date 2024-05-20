---
title: Day 85
description: Sistem Bilangan
date: '2024-5-16'
categories:
  - Hardware dan Jaringan
published: true
---

## Table of Contents

## Sistem Bilangan

Sistem bilangan digunakan untuk mewakili data angka/numerik dalam sistem komputer, baik integer maupun real. Sistem bilangan juga diimplementasikan pada IP Address dalam jaringan.

Sistem bilangan yang digunakan dalam sistem komputer adalah:

1. Bilangan biner
2. Bilangan oktal
3. Bilangan desimal

## Contoh Soal Konversi IP Adress

Tentukan kelas, Net ID, Host ID, dan Konversikan IP Address berikut:

```
a. 11000000.00000001.00000000.00000010
b. 44.132.1.20
```

### Penyelesaian A

Kelas C

```
11000000.00000001.00000000.00000010
N.N.N.H (N = Net Id, H = Host Id)
```

#### A Bagian 1

1. Tuliskan bilangan biner.

   $11000000$

2. Identifikasi posisi setiap digit biner: Mulai dari kanan ke kiri, berikan posisi mulai dari 0. Sebagai contoh, untuk $11000000$:

3. Kalikan setiap digit dengan 2 pangkat posisinya:

   - Untuk digit di posisi 0: $0 \times 2^0 = 0$
   - Untuk digit di posisi 1: $0 \times 2^1 = 0$
   - Untuk digit di posisi 2: $0 \times 2^2 = 0$
   - Untuk digit di posisi 3: $0 \times 2^3 = 0$
   - Untuk digit di posisi 4: $0 \times 2^4 = 0$
   - Untuk digit di posisi 5: $0 \times 2^5 = 0$
   - Untuk digit di posisi 6: $1 \times 2^6 = 64$
   - Untuk digit di posisi 7: $1 \times 2^7 = 128$

4. Jumlahkan hasil perkalian tersebut
   - $64 + 128 = 192$

#### A Bagian 2

1. Tuliskan bilangan biner.

   $00000001$

2. Identifikasi posisi setiap digit biner: Mulai dari kanan ke kiri, berikan posisi mulai dari 0. Sebagai contoh, untuk $00000001$:

3. Kalikan setiap digit dengan 2 pangkat posisinya:

   - Untuk digit di posisi 0: $1 \times 2^0 = 1$
   - Untuk digit di posisi 1: $0 \times 2^1 = 0$
   - Untuk digit di posisi 2: $0 \times 2^2 = 0$
   - Untuk digit di posisi 3: $0 \times 2^3 = 0$
   - Untuk digit di posisi 4: $0 \times 2^4 = 0$
   - Untuk digit di posisi 5: $0 \times 2^5 = 0$
   - Untuk digit di posisi 6: $0 \times 2^6 = 0$
   - Untuk digit di posisi 7: $0 \times 2^7 = 0$

4. Jumlahkan hasil perkalian tersebut
   - $1$

#### A Bagian 3

1. Tuliskan bilangan biner.

   $00000000$

2. Identifikasi posisi setiap digit biner: Mulai dari kanan ke kiri, berikan posisi mulai dari 0. Sebagai contoh, untuk $00000000$:

3. Kalikan setiap digit dengan 2 pangkat posisinya:

   - Untuk digit di posisi 0: $0 \times 2^0 = 0$
   - Untuk digit di posisi 1: $0 \times 2^1 = 0$
   - Untuk digit di posisi 2: $0 \times 2^2 = 0$
   - Untuk digit di posisi 3: $0 \times 2^3 = 0$
   - Untuk digit di posisi 4: $0 \times 2^4 = 0$
   - Untuk digit di posisi 5: $0 \times 2^5 = 0$
   - Untuk digit di posisi 6: $0 \times 2^6 = 0$
   - Untuk digit di posisi 7: $0 \times 2^7 = 0$

4. Jumlahkan hasil perkalian tersebut
   - $0$

#### A Bagian 4

1. Tuliskan bilangan biner.

   $00000010$

2. Identifikasi posisi setiap digit biner: Mulai dari kanan ke kiri, berikan posisi mulai dari 0. Sebagai contoh, untuk $00000010$:

3. Kalikan setiap digit dengan 2 pangkat posisinya:

   - Untuk digit di posisi 0: $0 \times 2^0 = 0$
   - Untuk digit di posisi 1: $1 \times 2^1 = 2$
   - Untuk digit di posisi 2: $0 \times 2^2 = 0$
   - Untuk digit di posisi 3: $0 \times 2^3 = 0$
   - Untuk digit di posisi 4: $0 \times 2^4 = 0$
   - Untuk digit di posisi 5: $0 \times 2^5 = 0$
   - Untuk digit di posisi 6: $0 \times 2^6 = 0$
   - Untuk digit di posisi 7: $0 \times 2^7 = 0$

4. Jumlahkan hasil perkalian tersebut
   - $2$

#### Jawaban

```
11000000.00000001.00000000.00000010 -> 192.1.0.2
```

### Penyelesaian B

Kelas A

```
44.132.1.20
N.N.H.H (N = Net Id, H = Host Id)
```

#### B Bagian 1

1. Tuliskan bilangan desimal.
   $44$

2. Bagikan dengan 2 dan catat sisa baginya:

   $44 \div 2 = 22 sisa 0$
   $22 \div 2 = 11 sisa 0$
   $11 \div 2 = 5 sisa 1$
   $5 \div 2 = 2 sisa 1$
   $2 \div 2 = 1 sisa 0$
   $1 \div 2 = 0 sisa 1$

3. Tuliskan sisa bagi dari bawah ke atas untuk mendapatkan bilangan biner
   - Hasil Konversi: $101100$

#### B Bagian 2

1. Tuliskan bilangan desimal.
   $132$

2. Bagikan dengan 2 dan catat sisa baginya:

   $132 \div 2 = 66 sisa 0$
   $66 \div 2 = 33 sisa 0$
   $33 \div 2 = 16 sisa 1$
   $16 \div 2 = 8 sisa 0$
   $8 \div 2 = 4 sisa 0$
   $4 \div 2 = 2 sisa 0$
   $2 \div 2 = 1 sisa 0$
   $1 \div 2 = 0 sisa 1$

3. Tuliskan sisa bagi dari bawah ke atas untuk mendapatkan bilangan biner
   - Hasil Konversi: $10000100$

#### B Bagian 3

1. Tuliskan bilangan desimal.
   $1$

2. Untuk nilai 1, karena tidak dapat dibagi maka hasilnya tetap.
   $1$

#### B Bagian 4

1. Tuliskan bilangan desimal.
   $20$

2. Bagikan dengan 2 dan catat sisa baginya:

   $20 \div 2 = 10 sisa 0$
   $10 \div 2 = 5 sisa 0$
   $5 \div 2 = 2 sisa 1$
   $2 \div 2 = 1 sisa 0$
   $1 \div 2 = 0 sisa 1$

3. Tuliskan sisa bagi dari bawah ke atas untuk mendapatkan bilangan biner
   - Hasil Konversi: $10100$

#### Jawaban

Jika nilai desimal kurang dari 1 byte / 8 bit, tambahkan nilai 0 sampai berjumlah 1 byte

```
44.132.1.20 -> 00101100.10000100.00000001.00010100
```
