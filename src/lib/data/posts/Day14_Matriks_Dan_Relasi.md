---
title: Day 14
description: Matriks Dan Relasi
date: '2023-10-19'
categories:
  - matematika diskrit
  - matriks
  - relasi
  - fungsi

published: true
---

<script>
    import MermaidDiagram from '$lib/components/mermaid/MermaidDiagram.svelte';
</script>

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

### Matriks Diagonal

Matriks diagonal adalah jenis matriks persegi khusus yang semua elemen di luar diagonal utamanya adalah nol.

Diagonal utama suatu matriks terdiri dari elemen-elemen yang berjalan dari kiri atas ke kanan bawah matriks.

$$
\begin{bmatrix}
  3 & 0 & 0 \\
  0 & 7 & 0 \\
  0 & 0 & 2 \\
\end{bmatrix}
$$

### Matriks Identitas

Matriks identitas adalah matriks diagonal yang elemen diagonalnya bernilai 1

$$
I_3 =
\begin{bmatrix}
  1 & 0 & 0 \\
  0 & 1 & 0 \\
  0 & 0 & 1 \\
\end{bmatrix}
$$

### Matriks Segitiga

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

### Matriks Transpose

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

### Matrix Setangkup (Symmetry)

Matriks Setangkup jika elemen dibawah diagonal adalah pencerminan dari elemen diatas diagonal terhadap sumbu diagonal matriks.

$$
A =
\begin{bmatrix}
  1 & 2 & 3 \\
  2 & 4 & 5 \\
  3 & 5 & 6
\end{bmatrix}
$$

## Relasi

Relasi dalam teori himpunan adalah bagian dari perkalian kartesian dua himpunan.

Contoh 1:

$A = \set{1,2}$  
$B = \set{a,b}$

$
A \times B = \set{
(1,a),(1,b),
(2,a),(2,b)}
$

### Representasi Relasi

1.  Representasi dengan Diagram Panah
    <MermaidDiagram>
    {`graph LR
A[2]
B[4]
C[8]
D[9]
E[15]
subgraph Q
A
B
C
D
E
end
subgraph P
2
3
4
end
2 --> A & B & C;
3 --> D & E;
4 --> B & C;
`}
    </MermaidDiagram>

<br />

2.  Representasi dengan Tabel

        |  P  |  Q  |
        | :-: | :-: |
        |  2  |  2  |
        |  2  |  4  |
        |  4  |  4  |
        |  2  |  8  |
        |  4  |  8  |
        |  3  |  9  |
        |  3  | 15  |

<br />

3.  Representasi dengan Matriks

    $$
    \begin{bmatrix}
    & 2 & 4 & 8 & 9 & 15 \\
    \hline \\
    2 | & 1 & 1 & 1 & 0 & 0 \\
    3 | & 0 & 0 & 0 & 1 & 1 \\
    4 | & 0 & 1 & 1 & 0 & 0 \\
    \end{bmatrix}
    $$

<br />

4. Representasi dengan Graph
   <MermaidDiagram>
   {`graph LR
2 --> 2 & 4 & 8;
3 --> 9 & 15;
4 --> 4 & 8;
`}
   </MermaidDiagram>

### Relasi Inverse

Relasi Invers "menukar" elemen di setiap pasangan relasi aslinya.

Jika $(a, b)$ berada di $R$, maka $(b, a)$ berada di $R^{-1}$, dan sebaliknya.

Relasi invers pada dasarnya membalikkan arah panah pada relasi aslinya.

Contoh:

$P = \set{2,3,4}$
$P = \set{2,4,8,9,15}$

Jika kita definisikan relasi $R$ dari $P$ ke $Q$ dengan
$(p, q) \in R$ jika $p$ habis membagi $q$, maka...

$
R = \\
\set{(2,2),(2,4),(2,8), \\
(3,9),(3,15), \\
(4,4),(4,8)}
$

$R^{-1}$ adalah invers dari relasi $R$, yaitu relasi dari $Q$ ke $P$ dengan $(q, p) \in R^{-1}$ jika $q$ adalah kelipatan dari $p$, maka...

$
R^{-1} = \\
\set{(2, 2), (4, 2), (8, 2), \\
(9, 3), (15, 3), \\
(4, 4), (8, 4)}
$
