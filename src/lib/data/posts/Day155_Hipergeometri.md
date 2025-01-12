---
title: Day 155
description: Hipergeometri
date: "2024-12-16"
categories:
  - Probabilitas Statistika
published: true
---

## Table of Contents

## Distribusi Hipergeometrik

- Distribusi hipergeometrik adalah distribusi probabilitas yang digunakan untuk menghitung peluang keberhasilan dalam pengambilan sampel tanpa pengembalian dari populasi yang terbatas.
- Dalam distribusi ini, terdapat dua kategori objek: "BERHASIL" dan "GAGAL".

### Rumus Distribusi Hipergeometrik

Peluang mendapatkan x keberhasilan dalam n pengambilan dari populasi N dengan k keberhasilan dapat dihitung dengan rumus:

$$
h(x; N, n, k) = \frac{C(k, x)\ \cdot\ C(N-k, n-x)}{C(N, n)}
$$

- **Populasi (N)**: Jumlah total objek dalam populasi.
- **Keberhasilan (k)**: Jumlah objek yang termasuk dalam kategori "BERHASIL".
- **Sampel (n)**: Jumlah objek yang diambil dari populasi.
- **Keberhasilan dalam sampel (x)**: Jumlah objek "BERHASIL" yang diharapkan dalam sampel.

### Rata-rata dan Varians

- **Rata-rata (μ)**:

  $\large
  \mu = \frac{nk}{N}
  $

- **Varians (σ²)**:

  $\large
  \sigma^2 = (\frac{N-n}{N-1}) \frac{nk}{N} (1 - \frac{k}{N})
  $

### Aplikasi

- Distribusi hipergeometrik sering digunakan dalam situasi di mana pengambilan sampel dilakukan tanpa pengembalian, seperti dalam pengujian kualitas, survei, dan eksperimen ilmiah.
