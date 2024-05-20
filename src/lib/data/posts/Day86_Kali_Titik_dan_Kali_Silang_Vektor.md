---
title: Day 86
description: Hasil Kali Titik dan Hasil Kali Silang Vektor
date: '2024-5-17'
categories:
  - Aljabar Linier
published: true
---

## Table of Contents

## Hasil Kali Titik

Perkalian skalar akan menghasilkan suatu skalar. Perkalian skalar dua buah vektor A dan B didefinisikan sebagai berikut:

### Geometris

$\large A \cdot B = |A||B| \cos \theta$

Dimana $\theta$ adalah sudut antara vektor $A$ dan $B$.

#### Contoh

$A = (2, -1, 1)$  
$B = (1, 1, 2)$  
$\theta = 60$

$A \cdot B = |A||B| \cos \theta$

$A \cdot B = \sqrt{2^2 + (-1)^2 + 1^2} \cdot \sqrt{1^2 + 1^2 + 2^2} \cdot \cos 60\degree$

$A \cdot B = \sqrt{6} \cdot \sqrt{6} \cdot \frac{1}{2}$

$A \cdot B = 6 \cdot \frac{1}{2}$

$A \cdot B = 3$

### Komponen

$\large A_1 B_1 + A_2 B_2 + A_3 B_3$

#### Contoh

$A = (2, -1, 1)$  
$B = (1, 1, 2)$

$A \cdot B = (2 \times 1) + (-1 \times 1) + (1 \times 2)$

$A \cdot B = 2 - 1 + 2$
$A \cdot B = 3$

### Mencari Sudut

$\Large \cos \theta = \frac{A \cdot B}{|A| |B|}$

$\Large \cos \theta = \frac{3}{6}$

$\Large \cos \theta = \frac{1}{2}$

$\Large \theta = 60\degree$

### Mencari Titik Sudut

$A(3, 0, 2)$  
$B(4, 3, 0)$  
$C(8, 1, -1)$

$\overrightarrow{AB} \cdot \overrightarrow{BC} = (1, 3, -2) \cdot (4, -2, -1)$

$\overrightarrow{AB} \cdot \overrightarrow{BC} = (1 \times 4) + (3 \times (-2)) + (-2 \times (-1))$

$\overrightarrow{AB} \cdot \overrightarrow{BC} = 4 - 6 + 2$

$\overrightarrow{AB} \cdot \overrightarrow{BC} = 0$

\*note: untuk notasi $\overrightarrow{AB}$ berarti ujung dikurangi pangkal.

## Hasil Kali Silang (cross product)

$\large U = (U_1, U_2, U_3)$

$\large V = (V_1, V_2, V_3)$

\*note: untuk kolom pertama, tutup kolom pertama, tuliskan variabel yang tidak tertutup. lakukan hal yang sama pada kolom selanjutnya.

$
U \cdot V = (
\begin{vmatrix}
U_2 & U_3 \\
V_2 & V_3
\end{vmatrix}
, -
\begin{vmatrix}
U_1 & U_3 \\
V_1 & V_3
\end{vmatrix}
,
\begin{vmatrix}
U_1 & U_2 \\
V_1 & V_2
\end{vmatrix}
)
$

\*note: sama seperti mencari determinan

$U \cdot V = (V_2 V_3 - U_3 V_2, -(U_1 V_3 - U_3 V_1), U_1 V_2 - U_2 V_1)$

### Contoh

$U = (1, -2, 1)$  
$V = (3, 1, -2)$

$
U \cdot V = (
\begin{vmatrix}
-2 & 1 \\
1 & -2
\end{vmatrix}
, -
\begin{vmatrix}
1 & 1 \\
3 & -2
\end{vmatrix}
,
\begin{vmatrix}
1 & -2 \\
3 & 1
\end{vmatrix}
)
$

$U \cdot V = (3, -(-5), 1-(-6))$

$U \cdot V = (3, 5, 7)$
