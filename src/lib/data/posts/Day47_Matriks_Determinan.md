---
title: Day 47
description: Matriks Determinan
date: '2024-3-08'
categories:
  - Aljabar Linier
published: true
---

## Table of Contents

## Matriks Determinan

Determinan adalah nilai numerik yang dihitung dari matriks persegi. Untuk matriks $n \times n$. Fungsi determinan $A$ sering dituliskan sebagai determinan (disingkat $det(A)$ atau $|A|$)

Determinan memberikan informasi tentang bagaimana matriks tersebut memetakan volume atau luas, dan apakah matriks tersebut mempersempit atau memperluas ruang.

### Rumus

Untuk matriks $2 \times 2$, determinan dihitung dengan rumus sederhana:

$
det(A) =
\begin{bmatrix}
    a & b \\
    c & d 
\end{bmatrix}
= ad - bc
$

Sementara untuk matriks $3 \times 3$, rumusnya lebih kompleks:

Cara ke 1 (menggunakan aturan sarrus)

$
det(A) =
\begin{bmatrix}
a & b & c & | & a & b \\
d & e & f & | & d & e \\
g & h & i & | & g & h
\end{bmatrix}
$

$
det(A) = aei + bfg + cdh - ceg - afh - bdi
$

Cara ke 2

$
\begin{bmatrix}
    1 & 2 & 3 \\
    \_ & \_ & \_ \\
    2 & 2 & 1 \\
    1 & 3 & 1
\end{bmatrix}
$

$
= 1
\begin{bmatrix}
    2 & 1 \\
    3 & 1
\end{bmatrix}
-2
\begin{bmatrix}
    2 & 1 \\
    1 & 1
\end{bmatrix}
+3
\begin{bmatrix}
    2 & 2 \\
    1 & 3
\end{bmatrix}
$

$= 1(2 \times 1 - 1 \times 3) - 2(2 \times 1 - 1 \times 1) + 3(2 \times 3 - 2 \times 1)$

$= 1(-1) - 2(1) + 3(4)$

$= -1 - 2 + 12$

$= 9$

### Sifat-sifat Determinan

1. Jika matriks $A$ dan $B$ adalah matriks persegi yang berordo sama maka.  
   $det(AB) = det(BA) = det(A) \times det(B)$
2. $det(A) = det(A)^T$
3. Jika A adalah matriks diagonal atau matriks skalar, maka.  
   $det(A) = a_{11} \times a_{22} \times \dots \times a_{nn}$
4. Jika A adalah matriks diagonal atas/bawah, maka.  
   $det(A) = a_{11} \times a_{22} \times \dots \times a_{nn}$
5. Jika $A$ adalah matriks persegi yang memuat baris nol atau kolom nol maka.  
   $det(A) = 0$
6. Jika $A$ adalah matriks persegi berordo $n \times n$ dan $k$ adalah sembarang bilangan maka  
   $det(kA) = k^n \times det(A)$
