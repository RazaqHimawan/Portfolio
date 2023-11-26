---
title: Day 25b
description: Kombinatorial
date: '2023-11-18'
categories:
  - matematika diskrit
  - kombinatorial

published: true
---

## Table of Contents

## Kombinatorial

Kombinatorial adalah cabang matematika untuk menghitung jumlah penyusunan objek-objek
tanpa harus mengenumerasi (pencacahan satu per satu) semua kemungkinan susunannya.

### Kaidah dasar menghitung

Menghitung semua kemungkinan pengaturan obyek

#### Kaidah perkalian (_rule of products_)

Jika ada $n$ cara untuk melakukan suatu hal dan $m$ cara untuk melakukan hal lain, maka terdapat $n \times m$ cara untuk melakukan **kedua hal tersebut secara bersamaan.**

Misal: Ada 5 kemeja dengan warna yang berbeda **dan** 4 Celana dengan gaya yang berbeda.

Jadi, Jumlah total kombinasi adalah $5 \times 4 = 20$

Kaidah ini sering digunakan dalam skenario yang melibatkan beberapa pilihan atau tindakan independen, misalnya saat memilih dari kategori berbeda atau membuat keputusan berurutan.

#### Kaidah penjumlahan (_rule of sums_)

Jika terdapat $n$ cara untuk melakukan suatu hal dan $m$ cara untuk melakukan hal lain, dan **kedua hal tersebut tidak dapat dilakukan secara bersamaan**, maka terdapat $n + m$ cara untuk memilih salah satu opsi.

Misal: Bayangkan Anda sedang merencanakan hidangan penutup, dan Anda bisa menikmatinya kue dengan 4 pilihan rasa **atau** es krim dengan 3 pilihan rasa.

Jadi, Jumlah total pilihan antara kue atau es krim adalah $4 + 3 = 7$

Ini diterapkan ketika Anda dihadapkan pada pilihan eksklusif atau pilihan yang tidak dapat terjadi secara bersamaan. Misalnya, memilih di antara berbagai kategori yang hanya satu yang dapat dipilih.

### Permutasi

Permutasi mengacu pada susunan objek dalam urutan tertentu.

Rumus untuk menghitung banyaknya permutasi $r$ item yang dipilih dari himpunan $n$ item berbeda adalah:

$$
\Large P(n,r) = {n! \over (n-r)!}
$$

$n$ = jumlah total item atau elemen berbeda yang Anda miliki.  
$r$ = jumlah item yang Anda pilih atau susun dari total set.  
$!$ = simbol faktorial

- Contoh:  
  Ada 5 buku yang berbeda, dan 3 buku itu akan disusun ke rak buku.

  Sejumlah cara untuk menyusun buku-buku ini (mengingat urutannya) adalah

  $\large P(n,r) = {n! \over (n-r)!}$

  $\large P(5,3) = {5! \over (5-3)!}$

  $\large P(5,3) = {5 \times 4 \times 3 \times 2 \times 1 \over 2 \times 1}$

  $\large P(5,3) = 60$

### Kombinasi

Kombinasi fokus pada pemilihan subset item tanpa mempertimbangkan urutannya.

Rumus untuk menghitung banyaknya kombinasi $r$ item yang dipilih dari himpunan $n$ item berbeda adalah:

$$
\Large C(n,r) = {n! \over r!(n-r)! }
$$

$n$ = jumlah total item atau elemen berbeda yang Anda miliki.  
$r$ = jumlah item yang Anda pilih dari total set.  
$!$ = simbol faktorial

- Contoh: Anda memiliki setumpuk 52 kartu remi, dan Anda ingin memilih 5 kartu untuk satu kartu poker.

  $\large C(n,r) = {n! \over r!(n-r)!}$

  $\large C(52,5) = {52! \over 5!(52-5)!}$

  $\large C(52,5) = {52 \times 51 \times 50 \times 49 \times 48! \over 5 \times 4 \times 3 \times 2 \times 1}$

  $\large C(52,5) = 2.598.960$
