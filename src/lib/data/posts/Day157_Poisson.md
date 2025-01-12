---
title: Day 157
description: Poisson
date: "2024-12-21"
categories:
  - Probabilitas Statistika
published: true
---

## Table of Contents

## Distribusi Poisson

Distribusi Poisson adalah distribusi probabilitas yang digunakan untuk menghitung jumlah kejadian dalam interval waktu atau ruang tertentu, di mana kejadian tersebut terjadi dengan rata-rata yang diketahui dan secara independen satu sama lain.

### Rumus

Distribusi Poisson dinyatakan dengan rumus:

$$
\large poisson(x; \lambda) = \frac{e^{-\lambda} \lambda^x}{x!}
$$

- $e$ = bilangan natural (sekitar 2.71828)
- $x$ = banyaknya unsur BERHASIL dalam sampel
- $\lambda$ = rata-rata keberhasilan (sebuah bilangan tetap)

### Rata-rata dan Varians

- Rata-rata: $\mu = \lambda$
- Varians: $\sigma^2 = \lambda$

### Pendekatan Poisson untuk Distribusi Binomial

- $n$ besar $(n > 20)$
- $p$ sangat kecil $(p < 0,01)$
- Dengan menetapkan $\lambda = n \times p$
