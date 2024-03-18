---
title: Day 50b
description: Minor-Kofaktor, Adjoin dan Matriks Invers
date: '2024-3-15'
categories:
  - Aljabar Linier
published: true
---

## Table of Contents

## Minor-Kofaktor

### Minor

Minor matriks adalah determinan dari submatriksnya. Submatriks diperoleh dengan menghapus satu atau lebih baris dan/atau kolom dari matriks asli. Misalnya, jika kita memiliki matriks 3x3, kita dapat membentuk minor 2x2 dengan menghapus satu baris dan satu kolom.

Dilambangkan dengan:

$$
M_{ij}
$$

#### Contoh

$
A =
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9 
\end{bmatrix}
$

$
M_{32} =
\begin{bmatrix}
1 & 3 \\
4 & 6 
\end{bmatrix}
$

Baris 3 dan kolom 2 dihilangkan.

### Kofaktor

Kofaktor diperoleh dari minor dengan mengalikan setiap elemen minor dengan faktor penentu yang sesuai (1 untuk elemen pada posisi ganjil dan -1 untuk elemen pada posisi genap).

Rumus:

$$
C_{ij} = (-1)^{i+j} \cdot M_{ij}
$$

Secara sederhana, kofaktor dapat menggunakan pola:

$
\begin{bmatrix}
\text{+} & \text{-} & \text{+} \\
\text{-} & \text{+} & \text{-} \\
\text{+} & \text{-} & \text{+} 
\end{bmatrix}
$

#### Contoh

$
A =
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9 
\end{bmatrix}
$

$
C_{32} = (-1)^{3+2} \cdot
\begin{bmatrix}
1 & 3 \\
4 & 6 
\end{bmatrix}
$

$C_{32} = (-1)^{5} \cdot ((1 \times 6) - (3 \times 4))$

$C_{32} = -1 \cdot (6 - 12)$

$C_{32} = -1 \cdot (-6)$

$C_{32} = 6$

## Adjoin

Matriks adjoin adalah matriks yang dihasilkan dari matriks kofaktor yang telah di-transpose. Proses ini biasanya dilakukan untuk matriks persegi.

Dilambangkan dengan:

$$
Adj(A)
$$

### Contoh

$
A =
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9 
\end{bmatrix}
$

Hitung Matriks Kofaktor (agar lebih singkat, kofaktor telah dihitung):

$
Adj(A) = C^T =
\begin{bmatrix}
-3 & 6 & 3 \\
6 & -12 & 6 \\
-3 & 6 & -3
\end{bmatrix}^T
$

$
Adj(A) = C^T =
\begin{bmatrix}
-3 & 6 & 3 \\
6 & -12 & 6 \\
-3 & 6 & -3
\end{bmatrix}
$

## Teorema Laplace

Teorema Laplace adalah salah satu cara untuk menghitung determinan matriks dengan menggunakan ekspansi kofaktor berdasarkan baris atau kolom tertentu.

Teorema Laplace digunakan untuk menghitung determinan matriks $A$ dengan mengalikan setiap elemen pada baris pertama dengan kofaktornya dan kemudian menjumlahkannya.

Determinan dari suatu matriks = jumlah perkalian elemen-elemen dari sembarang baris atau kolom dengan kofaktor-kofaktornya.

Rumus:

$$
\large det(A) = \sum\limits_{j=1}^n (-1)^{i+j} \cdot A_{ij} \cdot M_{ij}
$$

### Contoh

$
A =
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9 
\end{bmatrix}
$

Determinan matriks ini dapat dihitung dengan menggunakan ekspansi Laplace sepanjang salah satu baris atau kolomnya. Misalnya, ekspansi di sepanjang baris pertama menghasilkan:

$det(A) =$

$
1 \cdot
\begin{bmatrix}
5 & 6 \\
8 & 9
\end{bmatrix}
\text{- } 2 \cdot
\begin{bmatrix}
4 & 6 \\
7 & 9
\end{bmatrix}
\text{+ } 3 \cdot
\begin{bmatrix}
4 & 5 \\
7 & 8
\end{bmatrix}
$

$det(A) = 1(-3) - 2(-6) + 3(-3)$

$det(A) = 0$

## Matriks Invers

Invers matriks adalah operasi yang dilakukan pada matriks untuk mendapatkan matriks yang jika dikalikan dengan matriks asalnya akan menghasilkan matriks identitas.

Misalkan kita memiliki matriks $A$ yang berukuran $n \times n$, dan kita ingin mencari inversnya. Invers matriks $A$ dilambangkan dengan $A^{−1}$ dan memiliki sifat berikut:

$A \cdot A^{-1} = A^{-1} \cdot A = I$

Rumus:

$$
\large A^{-1} = {1 \over det(A)} \cdot Adj(A)
$$

$$
\large A^{-1} = {1 \over det(A)} \cdot C^T
$$

### Contoh

$
A =
\begin{bmatrix}
1 & 3 & 3 \\
1 & 4 & 3 \\
1 & 3 & 4 
\end{bmatrix}
$

Langkah 1: Mencari determinan

Rumus (Menggunakan Teorema Laplace):

$det(A) = 1(7) - 3(1) + 3(-1)$

$det(A) = 7 - 3 + (-3)$

$det(A) = 1$

Langka 2: Mencari Adjoin

Rumus: $C_{ij} = (-1)^{i+j} \cdot M_{ij}$

$C_{11} = 1(7) = 7$  
$C_{12} = -1(1) = -1$  
$C_{13} = 1(-1) = -1$

$C_{21} = -1(3) = -3$  
$C_{22} = 1(1) = 1$  
$C_{23} = -1(0) = 0$

$C_{31} = 1(3) = -3$  
$C_{32} = -1(1) = 0$  
$C_{33} = 1(1) = 1$

$
Adj(A) = C^T = 
\begin{bmatrix}
7 & -3 & -3 \\
\text{-}1 & 1 & 0 \\
\text{-}1 & 0 & 1 
\end{bmatrix}
$

Langkah 3: Masukan ke rumus

$A^{-1} = {1 \over det(A)} \cdot Adj(A)$

$
A^{-1} = {1 \over 1} \cdot
\begin{bmatrix}
7 & -3 & -3 \\
\text{-}1 & 1 & 0 \\
\text{-}1 & 0 & 1 
\end{bmatrix}
$

$
A^{-1} =
\begin{bmatrix}
7 & -3 & -3 \\
\text{-}1 & 1 & 0 \\
\text{-}1 & 0 & 1 
\end{bmatrix}
$
