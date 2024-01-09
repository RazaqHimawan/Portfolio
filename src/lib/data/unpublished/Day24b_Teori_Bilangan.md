---
title: Day 24b
description: Teori Bilangan
date: '2023-11-11'
categories:
  - matematika diskrit
  - teori bilangan

published: true
---

## Table of Contents

## Teori Bilangan

Teori bilangan adalah salah satu cabang matematika yang mempelajari sifat-sifat dan hubungan bilangan, khususnya bilangan bulat.

### Simbol-simbol baku

- $\N$ = himpunan bilangan alami (natural) = $\{1,2,...\}$
- $\Z$ = himpunan bilangan bulat = $\{...,-1,0,1,...\}$
- $Q$ = himpunan bilangan rasional = $\set{{1 \over 2},3.4}$
- $\R$ = himpunan bilangan riil
- $C$ = himpunan bilangan kompleks

### Bilangan bulat

Bilangan bulat adalah bilangan yang tidak mempunyai pecahan desimal,  
misalnya $8, 21, 8765, -34, 0$

### Bilangan riil

Bilangan real mencakup semua bilangan pada garis bilangan, mencakup bilangan rasional dan irasional. Mereka bisa positif, negatif, atau nol.

### Bilangan rasional

Bilangan rasional adalah bilangan yang dapat dinyatakan sebagai hasil bagi pecahan $a/b$, dimana $a$ dan $b$ adalah bilangan bulat dan $b$ tidak sama dengan nol,  
misalnya ${1 \over 2}, 5.4, {7 \over 1}$

### Bilangan irrasional

Bilangan irasional adalah bilangan riil yang tidak dapat dinyatakan sebagai pecahan dari dua bilangan bulat. Ekspansi desimalnya tidak berhenti dan tidak berulang,  
misalnya $\sqrt{2}, \pi, e$

### Bilangan kompleks

Bilangan kompleks adalah bilangan yang berbentuk $a+bi$, dengan $a$ dan $b$ adalah bilangan real, dan $i$ adalah satuan imajiner $(i2=−1)$,  
misalnya $3+2i, −4−7i−4−7i$

## Sifat Pembagian pada bilangan bulat

$$
a|b\ jika\ b = ac, c \in \Z\ dan\ a \neq 0
$$

Artinya: $a$ habis membagi $b$ ($a$ divides $b$) jika terdapat bilangan bulat c sehingga $b = ac$

## Teorema Euclidean

### Teorema 1

Teorema 1, juga dikenal sebagai Teorema Dasar Aritmatika, menyatakan bahwa setiap bilangan bulat positif yang lebih besar dari 1 dapat direpresentasikan secara unik sebagai hasil kali bilangan prima.

Dengan kata lain, Teorema Pertama Euclid menyatakan bahwa bilangan bulat positif apa pun yang lebih besar dari 1 dapat dipecah menjadi himpunan bilangan prima unik yang dikalikan. Penguraian ini sering disebut sebagai faktorisasi prima suatu bilangan.

### Euclidean Division

Misalkan $m$ dan $n$ bilangan bulat, $n \neq 0$. maka terdapat bilangan bulat unik $q$ (quotient) dan $r$ (remainder), sehingga

$m = nq + r$

dengan

$0 \leq r < n$

Pada teorema di atas, masing-masing bilangan bulat mempunyai namanya sendiri:  
$m$ disebut pembagian  
$n$ disebut pembagi  
$q$ disebut hasil bagi  
$r$ disebut sisanya.

Contoh:  
$m = nq + r$  
$1987 \div 97 = 20$, sisa $47$  
$1987 = 97 \cdot 20 + 47$

### Pembagi Bersama Terbesar

Pembagi Bersama Terbesar (PBB), juga dikenal sebagai Faktor Persekutuan Terbesar (FPB) adalah konsep matematika yang menyatakan bilangan bulat positif terbesar yang membagi dua bilangan atau lebih tanpa menyisakan sisa. Dengan kata lain, bilangan terbesar itulah yang membagi masing-masing bilangan tersebut.

Misal  
$a$ dan $b \neq 0$

PBB dari $a$ dan $b$ adalah $\Z$ terbesar d, sehingga $d|a$ dan $d|b$

Dalam hal ini kita nyatakan bahwa $PBB(a,b) = d$.

Contoh:

Mencari $PBB(45,36)$

$45 = 36 \cdot 1 + 9$  
$36 = 9 \cdot 4 + 0$

Jadi, $PBB(45,36) = 9$
