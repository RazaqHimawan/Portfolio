---
title: Day 143
description: Peluang, Permutasi, dan Kombinasi
date: "2024-11-23"
categories:
  - Probabilitas Statistika
published: true
---

## Table of Contents

## Peluang

**Peluang** adalah ukuran kemungkinan terjadinya suatu peristiwa dalam suatu percobaan acak. Nilai peluang berkisar antara 0 (mustahil) hingga 1 (pasti terjadi).

### Rumus Peluang

$$
P(A) = \frac{\text{Jumlah Kejadian Favorable}}{\text{Jumlah Kejadian Total}}
$$

- $P(A)$: Peluang terjadinya peristiwa $A$.
- Kejadian Favorable: Jumlah hasil yang mendukung peristiwa $A$.
- Jumlah Kejadian Total: Total semua kemungkinan hasil.

**Contoh:**
Dari satu lemparan dadu, peluang mendapatkan angka 3 adalah:

$$
P(3) = \frac{1}{6}
$$

Karena hanya ada satu angka 3 di dadu, dan total ada 6 kemungkinan hasil.

## Permutasi

**Permutasi** adalah cara menyusun atau mengatur elemen dalam urutan tertentu. Dalam permutasi, **urutan elemen penting**.

### Rumus Permutasi

$$
P(n, r) = \frac{n!}{(n - r)!}
$$

- $n!$: Faktorial dari $n$, yaitu $n \times (n-1) \times (n-2) \times \dots \times 1$.
- $r$: Jumlah elemen yang diambil dari $n$.

**Contoh:**
Ada 3 huruf: A, B, C. Berapa banyak cara untuk menyusun 2 huruf?

$$
P(3, 2) = \frac{3!}{(3-2)!} = \frac{3 \times 2 \times 1}{1} = 6
$$

Penyusunan: **AB, BA, AC, CA, BC, CB**.

## Kombinasi

**Kombinasi** adalah cara memilih elemen dari suatu kelompok **tanpa memperhatikan urutannya**. Dalam kombinasi, **urutan elemen tidak penting**.

### Rumus Kombinasi

$$
C(n, r) = \frac{n!}{r! \times (n - r)!}
$$

- $n!$: Faktorial dari $n$.
- $r!$: Faktorial dari $r$.

**Contoh:**
Ada 3 huruf: A, B, C. Berapa banyak cara untuk memilih 2 huruf?

$$
C(3, 2) = \frac{3!}{2! \times (3-2)!} = \frac{3 \times 2 \times 1}{2 \times 1 \times 1} = 3
$$

Pemilihan: **AB, AC, BC** (urutan tidak diperhatikan).

## Perbedaan Antara Permutasi dan Kombinasi

- **Permutasi**: Urutan elemen penting.
- **Kombinasi**: Urutan elemen tidak penting.
