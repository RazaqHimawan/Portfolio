---
title: Day 115
description: Peringkasan Data Tunggal
date: '2024-10-05'
categories:
  - Probabilitas Statistika
published: true
---

## Table of Contents

## Ukuran Pemusatan Data

1. **Ukuran gejala pusat** adalah ukuran statistik yang menggambarkan gejala pusat pengelompokan data, artinya ukuran statistik ini dapat mengisyaratkan pada bilangan apa data yang ada cenderung untuk berkelompok. Yang termasuk kedalam ukuran gejala pusat adalah rata-rata hitung, rata-rata ukur, rata-rata harmonik dan modus.

2. **Ukuran letak** adalah ukuran statistik yang menggambarkan letak data. Yang termasuk ukuran letak adalah median, kuartil, desil dan persentil.

### Ukuran Gejala Pusat

#### Rata-Rata (Mean)

Rata-rata hitung (mean) adalah jumlah total semua nilai dibagi dengan jumlah data.

Rumus:

- Populasi

  $\Large \mu = {\Sigma\ x_i \over N}$

- Sampel

  $\Large \bar{x} = {\Sigma\ x_i \over n}$

#### Rata-rata Ukur (Geometric Mean)

Rata-rata ukur atau geometrik adalah akar pangkat nn dari hasil kali semua nilai. Rata-rata ini digunakan untuk data yang pertumbuhannya bersifat multiplikatif, seperti dalam perhitungan pertumbuhan populasi atau investasi.

$$
\Large G = \sqrt[n]{x_1 \times x_2 \times \cdots \times x_n}
$$

<hr>

$$
\Large \log G = {\Sigma \log{x} \over n}
$$

#### Rata-rata Harmonik (Harmonic Mean)

Rata-rata harmonik digunakan ketika nilai-nilai lebih terkait dengan rasio atau kecepatan (Kebalikan dari rata-rata aritmetik).

$$
\Large H = {1 \over \Sigma {1 \over x_i}}
$$

#### Modus

Modus merupakan ukuran yang digunakan untuk menyatakan fenomena yang paling banyak terjadi atau paling sering muncul.

Untuk data kualitatif (data dengan tingkat pengukuran sekurang-kurangnya nominal) modus sering dipakai sebagai pengganti rata-rata.

Sedangkan untuk data kuantitatif, modus diperoleh dengan jalan menentukan frekuensi terbesar di antara serangkaian data.

Serangkaian data mungkin memiliki satu modus (unimodal), dua modus (bimodal) atau lebih dari dua (multimodal).

### Ukuran Letak

#### Median

- Median dapat berlaku sebagai rata-rata untuk variabel dengan skala ukur ordinal.

- Median menentukan posisi tengah data setelah data diurutkan menurut besarnya. Jika nilai median sama dengan Me, maka 50% dari data nilainya paling tinggi sama dengan Me dan 50% lagi nilainya paling rendah sama dengan Me.

- Median Untuk data tunggal ditentukan sebagai berikut:

  - jika banyak data ganjil, setelah data disusun menurut nilainya dari kecil ke besar, maka median merupakan data yang paling tengah.

  - jika banyak data genap, setelah data disusun menurut nilainya dari kecil ke besar, maka median merupakan rata-rata hitung dua data tengah.

  - Letak median (indeks median) untuk data tunggal menyatakan pada data ke berapa letak median berada.

- Indeks Median:
  - $\large I\ ME = {N + 1 \over 2}$

#### Kuartil

- Kuartil adalah bilangan-bilangan yang membagi deretan bilangan yang telah diurutkan dari kecil ke besar menjadi 4 bagian yang sama.

- Karena data dibagi menjadi 4 bagian yang sama, maka akan ada 3 buah kuartil (Q1, Q2 dan Q3).

- Letak kuartil ke-i (indeks kuartil) untuk data tunggal menyatakan pada data ke berapa letak kuartil ke-i berada.

- Indeks Kuartil:
  - $\large I\ Q_i = {i(N + 1) \over 4}$

#### Desil

- Desil adalah bilangan-bilangan yang membagi deretan bilangan yang telah diurutkan dari kecil ke besar menjadi 10 bagian yang sama.

- Karena data dibagi menjadi 10 bagian yang sama, maka akan ada 9 buah desil (D1, D2,..,D9).

- Letak desil ke-i (indeks desil) untuk data tunggal menyatakan pada data ke berapa letak desil ke-i berada.

- Indeks Desil:
  - $\large I\ D_i = {i(N + 1) \over 10}$

#### Persentil

- Persentil adalah bilangan-bilangan yang membagi deretan bilangan yang telah diurutkan dari kecil ke besar menjadi 100 bagian yang sama.

- Karena data dibagi menjadi 100 bagian yang sama, maka akan ada 99 buah persentil (P1, P2,...,P99).

- Letak persentil ke-i (indeks persentil) menyatakan pada data ke berapa letak persentil ke-i berada.

- Indeks Persentil:
  - $\large I\ P_i = {i(N + 1) \over 100}$
