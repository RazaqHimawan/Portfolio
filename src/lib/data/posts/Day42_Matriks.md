---
title: Day 42
description: Matriks
date: '2024-3-01'
categories:
  - Aljabar Linier
published: true
---

## Table of Contents

## Matriks

Matriks adalah adalah susunan skalar elemen-elemen dalam bentuk baris dan kolom.  
Contoh matriks yang berukuran $m \times n$:

$$
A =
\begin{bmatrix}
  a_{11} & a_{12} & \cdots & a_{1n} \\
  a_{21} & a_{22} & \cdots & a_{2n} \\
  \vdots & \vdots &  & \vdots \\
  a_{m1} & a_{m2} & \cdots & a_{mn}
\end{bmatrix}
$$

Matriks persegi adalah matriks yang berukuran $n \times n$.

Dalam praktek, kita lazim menuliskan matriks dengan notasi ringkas $A = [a_{ij}]$.

Matriks zero-one (0/1) adalah matriks yang setiap elemennya hanya bernilai 0 atau 1.

$$
\begin{bmatrix}
  0 & 1 & 1 & 0 \\
  0 & 1 & 1 & 1 \\
  0 & 0 & 0 & 0 \\
  1 & 0 & 0 & 1
\end{bmatrix}
$$

### Jenis-Jenis Matriks

#### Matriks Diagonal

Matriks diagonal adalah jenis matriks persegi khusus yang semua elemen di luar diagonal utamanya adalah nol.

Diagonal utama suatu matriks terdiri dari elemen-elemen yang berjalan dari kiri atas ke kanan bawah matriks.

$$
\begin{bmatrix}
  3 & 0 & 0 \\
  0 & 7 & 0 \\
  0 & 0 & 2 \\
\end{bmatrix}
$$

#### Matriks Identitas

Matriks identitas adalah matriks diagonal yang elemen diagonalnya bernilai 1

$$
I_3 =
\begin{bmatrix}
  1 & 0 & 0 \\
  0 & 1 & 0 \\
  0 & 0 & 1 \\
\end{bmatrix}
$$

#### Matriks Segitiga

**Matriks segitiga bawah** jika semua elemen di atas diagonal utama bernilai nol.

$$
\begin{bmatrix}
    1 & 0 & 0 \\
    1 & 2 & 0 \\
    1 & 2 & 3
\end{bmatrix}
$$

**Matriks segitiga atas** jika semua elemen di bawah diagonal utama bernilai nol.

$$
\begin{bmatrix}
    1 & 2 & 3 \\
    0 & 2 & 3 \\
    0 & 0 & 3
\end{bmatrix}
$$

#### Matriks Transpose

Operasi dalam aljabar linier yang melibatkan pembalikan matriks pada diagonal utamanya, sehingga menghasilkan matriks baru yang barisnya menjadi kolom dan kolomnya menjadi baris.

Dengan kata lain, Matriks Transpose dibentuk dengan menukarkan baris dan kolomnya.

$
A =
\begin{bmatrix}
  1 & 2 & 3 \\
  4 & 5 & 6
\end{bmatrix}
$

$
A^T =
\begin{bmatrix}
  1 & 4 \\
  2 & 5 \\
  3 & 6
\end{bmatrix}
$

#### Matriks Setangkup (Symmetry)

Matriks Setangkup jika elemen dibawah diagonal adalah pencerminan dari elemen diatas diagonal terhadap sumbu diagonal matriks.

$$
A =
\begin{bmatrix}
  1 & 2 & 3 \\
  2 & 4 & 5 \\
  3 & 5 & 6
\end{bmatrix}
$$

#### Matriks Invers

Matriks invers adalah kebalikan.

notasi: $A^{-1}$

contoh:

$
A =
\begin{bmatrix}
    a & b \\
    c & d
\end{bmatrix}
$

$
A^{-1} = {1 \over ad-bc}
\begin{bmatrix}
    d & -b \\
    -c & a
\end{bmatrix}
$

### Operasi Matriks

#### Penjumlahan Matriks

Syarat: Dua matriks harus ber-ordo (dimensi) sama.

$$
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
+
\begin{bmatrix}
e & f \\
g & h
\end{bmatrix}
=
\begin{bmatrix}
a+e & b+f \\
c+g & d+h
\end{bmatrix}
$$

#### Pengurangan Matriks

Syarat: Dua matriks harus ber-ordo (dimensi) sama.

$$
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
-
\begin{bmatrix}
e & f \\
g & h
\end{bmatrix}
=
\begin{bmatrix}
a-e & b-f \\
c-g & d-h
\end{bmatrix}
$$

#### Perkalian Matriks

Syarat: Kolom di matriks A = Baris di matriks B

$A_{mn} \times B_{pq} = C_{mq}$

contoh:

$
A \times B =
\begin{bmatrix}
    a & b & d \\
    e & f & g
\end{bmatrix}_{2 \times 3}
\times
\begin{bmatrix}
    p & q \\
    r & s \\
    t & u
\end{bmatrix}_{3 \times 2}
$

$
A \times B =
\begin{bmatrix}
ap + br + dt & aq + bs + du \\
ep + fr + gt & eq + fs + gu
\end{bmatrix}_{2 \times 2}
$

#### Perkalian Skalar Matriks

$$
k
\begin{bmatrix}
a & b & c \\
f & g & h
\end{bmatrix}
=
\begin{bmatrix}
ka & kb & kc \\
kf &kg & kh
\end{bmatrix}
$$

### Sifat-Sifat Matriks

- $A + B = B + A$
- $A + (B + C) = (A + B) + C$
- $AB \neq BA$
- $A(BC) = (AB)C$
- $(A^t)^t = A$
- $(AB)^t = B^tA^t$

#### Sifat-Sifat Invers

- $(A^{-1})^{-1} = A$
- $AA^{-1} = I$
- $(AB)^{-1} = B^{-1}A^{-1}$
