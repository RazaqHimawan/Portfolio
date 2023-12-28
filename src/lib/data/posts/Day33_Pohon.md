---
title: Day 34
description: Pohon
date: '2023-12-28'
categories:
  - matematika diskrit
  - pohon

published: true
---

## Table of Contents

## Pohon

Pohon didefinisikan sebagai graf tak berarah terhubung yang tidak mengandung
rangkaian. Sedangkan graf tak berarah tak terhubung dan tidak mengandung rangkaian
disebut pohon. Atau dengan kata lain, hutan adalah kumpulan pohon-pohon yang saling
lepas.

### Teorema

Misalkan $G = (V, E)$ adalah graf tak-berarah sederhana dan jumlah simpulnya $n$. Maka, semua pernyataan di bawah ini adalah ekivalen:
<br>

1. $G$ adalah pohon.
2. Setiap pasang simpul di dalam $G$ terhubung dengan lintasan tunggal.
3. $G$ terhubung dan memiliki $m = n - 1$ buah sisi.
4. $G$ tidak mengandung rangkaian dan memiliki $m = n - 1$ buah sisi.
5. $G$ tidak mengandung rangkaian dan penambahan satu sisi pada graf akan membuat hanya satu rangkaian.
6. $G$ terhubung dan semua sisinya adalah jembatan

### Pohon Rentang (Spanning Tree)

Pohon rentang dari graf terhubung adalah upagraf rentang yang berupa pohon. Pohon
rentang didapat dengan cara memutus rangkaian di dalam graf.

Setiap graf terhubung paling sedikit mempunyai satu buah pohon rentang. Graf tak
terhubung dengan $k$ komponen mempunyai $k$ buah hutan rentang yang disebut hutan
rentang.

#### Pohon Rentang Minimum

Dalam lingkup permasalahan pohon rentang minimum. Untuk mencari pohon rentang dengan total bobot minimum, cara yang paling sederhana adalah dengan mendaftarkan semua pohon rentang yang dibuat dan menghitung bobotnya. Selanjutnya dipilih total bobot yang paling kecil. Metode ini tidak efisien terutama pada graf yang cukup besar.
<br>

- Algoritma kruskal  
  Sebelum langkah pertama, yang harus dilakukan adalah sisi-sisi dari graf diurut menaik berdasarkan bobotnya mulai dari bobot terkecil sampai terbesar. Pada setiap langkah dipilih sisi dengan bobot terkecil, tetapi tidak membentuk loop dengan sisi-sisi yang sudah dipilih terdahulu (rangkaian). Langkah-langkah pada Algoritma Kruskal, adalah:

  1. $T$ masih kosong
  2. Pilih sisi $(u,v)$ dengan bobot minimum yang tidak membentuk rangkaian di $T$. Tambahkan $(u,v)$ ke dalam $T$.
  3. Ulangi langkah $2$ sebanyak $(n-1)$ kali

<br>

- Algoritma prim  
  Algoritma prim dimulai dari graf yang kosong sama sekali. Langkah-langkah pada algoritma prim dapat ditunjukkan sebagai berikut:

  1. Ambil sisi dari graf $G$ yang berbobot minimum, masukkan ke dalam $T$.
  2. Pilih sisi $(u,v)$ yang mempunyai bobot minimum dan bersisian dengan dengan simpul $T$, tetapi $(u,v)$ tidak membentuk rangkaian di $T$. Masukkan $(u,v)$ ke dalam $T$.
  3. Ulangi langkah $2$ sebanyak $(n-1)$ kali
