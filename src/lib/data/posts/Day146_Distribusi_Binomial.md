---
title: Day 146
description: Distribusi Binomial
date: "2024-11-30"
categories:
  - Probabilitas Statistika
published: true
---

## Table of Contents

## Distribusi Binomial

Percobaan Binomial adalah percobaan yang mempunyai ciri-ciri sebagai berikut:

1. Percobaan diulang sebanyak n kali
2. Hasil setiap ulangan hanya dapat dikategorikan ke dalam 2 kelas (hanya ada dua kejadian yang mungkin), misal : "BERHASIL" atau "GAGAL" ; "YA" atau "TIDAK"; "SUCCESS" or "FAILED"
3. Peluang keberhasilan = p dan dalam setiap ulangan nilai p tidak berubah. Sedangkan, Peluang gagal = q = 1 - p
4. Setiap ulangan bersifat bebas satu dengan yang lain

Untuk memudahkan membedakan p dan q, anda terlebih dahulu harus dapat menetapkan mana kejadian SUKSES mana kejadian GAGAL. Anda dapat menetapkan bahwa **kejadian yang ditanyakan adalah = kejadian SUKSES**.

### Definisi

$$
\large
b(x, n, p) = C(n, x) \cdot p^x \cdot q^{n-x}
$$

Dengan:  
$n$: banyaknya ulangan  
$x$: banyak keberhasilan dalam peubah acak $X$  
$p$: peluang berhasil di setiap ulangan  
$q$: peluang gagal = $1-p$ di setiap ulangan

### Rata-rata

$$
\large
\mu = np
$$

### Varians

$$
\large
\sigma^2 = npq
$$
