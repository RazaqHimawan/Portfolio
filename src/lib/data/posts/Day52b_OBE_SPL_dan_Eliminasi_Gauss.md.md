---
title: Day 52b
description: OBE, SPL dan Eliminasi Gauss
date: '2024-3-18'
categories:
  - Aljabar Linier
published: true
---

## Table of Contents

## Operasi Baris Elementer (OBE)

Operasi baris elementer (OBE) adalah serangkaian operasi yang dilakukan pada baris matriks untuk menghasilkan matriks yang setara secara elemen.

### Bentuk Matriks Augmented

Bentukkan matriks augmented yang terdiri dari matriks yang ingin diinverskan $(A)$ di sebelah kiri dan matriks identitas $(I)$ di sebelah kanan. Dapat ditulis dengan $[A|I]$ dimana $A_{nm} = I_{nm}$

$$
\small
\begin{bmatrix}
 \ a_{11} & a_{12} & \cdots & a_{1n} & | & 1 & 0 & \cdots & 0\ \\
 \ a_{21} & a_{22} & \cdots & a_{2n} & | & 0 & 1 & \cdots & 0\ \\
 \ \vdots & \vdots & \ddots & \vdots & | & \vdots & \vdots & \ddots & \vdots\ \\
 \ a_{n1} & a_{n2} & \cdots & a_{nn} & | & 0 & 0 & \cdots & 1\
\end{bmatrix}
$$

### Reduksi Baris

Gunakan OBE untuk mengubah matriks augmented menjadi bentuk eselon baris atau bentuk eselon baris tereduksi.

Langkah-langkah OBE yang umum meliputi:

1. Menukar baris jika diperlukan agar elemen diagonal utama tidak nol.
2. Menggunakan operasi baris untuk membuat semua elemen di bawah diagonal utama menjadi nol.
3. Menggunakan operasi baris untuk membuat elemen diagonal utama menjadi satu.

### Penyempurnaan Invers

Setelah matriks augmented dalam bentuk eselon baris tereduksi, matriks yang di sebelah kiri harus menjadi matriks identitas jika inversnya ada. Maka, matriks yang ada di sebelah kanan akan menjadi invers dari matriks awal.

### Pengecekan (Opsional)

Terakhir, lakukan pengecekan dengan mengalikan matriks invers yang diperoleh dengan matriks asli. Jika hasilnya adalah matriks identitas, maka invers telah dihitung dengan benar.

### Contoh Mencari Matriks Invers Menggunakan OBE

$
\begin{bmatrix}
1 & 3 & 3 & | & 1 & 0 & 0 \\
2 & 5 & 3 & | & 0 & 1 & 0 \\
1 & 0 & 8 & | & 0 & 0 & 1
\end{bmatrix}
$

$B_2 - 2B_1$

$
\begin{bmatrix}
1 & 3 & 3 & | & 1 & 0 & 0 \\
0 & 1 & -3 & | & -2 & 1 & 0 \\
1 & 0 & 8 & | & 0 & 0 & 1
\end{bmatrix}
$

$B_3 - B_1$

$
\begin{bmatrix}
1 & 3 & 3 & | & 1 & 0 & 0 \\
0 & 1 & -3 & | & -2 & 1 & 0 \\
0 & -2 & -5 & | & -1 & 0 & 1
\end{bmatrix}
$

$B_3 + 2B_1$

$
\begin{bmatrix}
1 & 3 & 3 & | & 1 & 0 & 0 \\
0 & 1 & -3 & | & -2 & 1 & 0 \\
0 & 0 & -1 & | & -5 & 2 & 1
\end{bmatrix}
$

$B_1 - 2B_2$

$
\begin{bmatrix}
1 & 0 & 9 & | & 5 & -2 & 0 \\
0 & 1 & -3 & | & -2 & 1 & 0 \\
0 & 0 & -1 & | & -5 & 2 & 1
\end{bmatrix}
$

$B_1 + 9B_3$

$
\begin{bmatrix}
1 & 0 & 0 & | & -40 & 16 & 9 \\
0 & 1 & -3 & | & -2 & 1 & 0 \\
0 & 0 & -1 & | & -5 & 2 & 1
\end{bmatrix}
$

$B_2 - 3B_3$

$
\begin{bmatrix}
1 & 0 & 0 & | & -40 & 16 & 9 \\
0 & 1 & 0 & | & 13 & -5 & -3 \\
0 & 0 & -1 & | & -5 & 2 & 1
\end{bmatrix}
$

$-B_3$

$
\begin{bmatrix}
1 & 0 & 0 & | & -40 & 16 & 9 \\
0 & 1 & 0 & | & 13 & -5 & -3 \\
0 & 0 & 11 & | & 5 & -2 & -1
\end{bmatrix}
$

## Sistem Persamaan Linier

Sistem persamaan linear adalah dua persamaan linear atau lebih yang disajikan bersamaan dan mempunyai satu jawaban persekutuan.

Ada beberapa metode yang bisa digunakan untuk menyelesaikan sistem persamaan linier, di antaranya adalah:

- Metode Substitusi: Dalam metode ini, Anda menyelesaikan satu persamaan untuk salah satu variabel dan kemudian menggantikan variabel tersebut di persamaan lainnya.
- Metode Eliminasi: Metode ini melibatkan eliminasi variabel dari persamaan-persamaan untuk mendapatkan nilai variabel yang sesuai.
- Metode Matriks: Dalam metode ini, sistem persamaan linier diwakili dalam bentuk matriks dan dapat diselesaikan menggunakan operasi-operasi matriks seperti eliminasi Gauss-Jordan atau metode matriks balikan.
- Metode Grafis: Metode ini digunakan khusus untuk sistem dua persamaan dan dua variabel, di mana Anda menggambar grafik dari kedua persamaan dan menemukan titik potongnya untuk mendapatkan solusi sistemnya.
- Metode Iteratif: Ini adalah metode numerik yang melibatkan pendekatan iteratif untuk mendekati solusi sistem persamaan linier, seperti metode iterasi Jacobi atau Gauss-Seidel.

Persamaan Linier mempunyai kemungkinan solusi:

- Tidak mempunyai solusi
- Tepat satu solusi
- Banyak solusi

### Eliminasi Gauss-Jordan

$x + y + 2z = 8 \\$
$-x - 2y + 3z = 1 \\$
$3x - 7y + 4z = 10 \\$

$
\begin{bmatrix}
  1 & 1 & 2 & 8 \\
  -1 & -2 & 3 & 1 \\
  3 & -7 & 4 & 10
\end{bmatrix}
$

$B_2 + B_1$

$B_3 - 3B_1$

$
\begin{bmatrix}
  1 & 1 & 2 & 8 \\
  0 & -1 & 5 & 9 \\
  0 & -10 & -2 & -14
\end{bmatrix}
$

$-B_3 + 10B_2$

$
\begin{bmatrix}
  x & y & z & b \\
  \_ & \_ & \_ & \_ \\
  1 & 1 & 2 & 8 \\
  0 & -1 & 5 & 9 \\
  0 & 0 & 52 & 104
\end{bmatrix}
$

$52z = 104 \\$
$z = 104 \div 52 \\$
$z = 2 \\$

$-y + 5(2) = 9 \\$
$-y + 10 = 9 \\$
$-y = 9 - 10 \\$
$-y = -1 \\$
$y = 1 \\$

$x + (1) + 4 = 8 \\$
$x + 5 = 8 \\$
$x = 8 - 5 \\$
$x = 3 \\$
