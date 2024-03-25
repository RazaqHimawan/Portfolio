---
title: Day 56
description: Metode Cramer
date: '2024-3-22'
categories:
  - Aljabar Linier
published: true
---

## Table of Contents

## Metode Cramer

Metode Cramer adalah salah satu metode yang digunakan dalam aljabar linier untuk menyelesaikan sistem persamaan linear dengan menggunakan determinan.

Metode ini dinamai dari matematikawan Swiss, yaitu Gabriel Cramer yang mengembangkannya pada abad ke-18. Metode Cramer efektif digunakan untuk menyelesaikan sistem persamaan linear dengan jumlah persamaan yang sama dengan jumlah variabel.

rumus:

$\Large X_1 = {det(A_1) \over det(A)}$

$\Large X_2 = {det(A_2) \over det(A)}$

$\Large X_n = {det(A_n) \over det(A)}$

### Contoh

$x + y + 2z = 9$

$2x + 4y - 3z = 1$

$3x + 6y - 5z = 0$

#### Jawab

$
det(A) = 
\begin{bmatrix}
1 & 1 & 2 \\
2 & 4 & -3 \\
3 & 6 & -5
\end{bmatrix}
$

$det(A) = 1(-2) - 1(-1) + 2(0)\\$
$det(A) = -2 + 1\\$
$det(A) = -1$

<hr />

$
det(A_1) = 
\begin{bmatrix}
9 & 1 & 2 \\
1 & 4 & -3 \\
0 & 6 & -5
\end{bmatrix}
$

$det(A_1) = 9(-2) - 1(-5) + 2(6)\\$
$det(A_1) = -18 + 5 + 12\\$
$det(A_1) = -1$

<hr />

$
det(A_2) = 
\begin{bmatrix}
1 & 9 & 2 \\
2 & 1 & -3 \\
3 & 0 & -5
\end{bmatrix}
$

$det(A_2) = 1(-5) - 9(-1) + 2(-3)\\$
$det(A_2) = -5 + 9 + - 6\\$
$det(A_2) = -2$

<hr />

$
det(A_3) = 
\begin{bmatrix}
1 & 1 & 9 \\
2 & 4 & 1 \\
3 & 6 & 0
\end{bmatrix}
$

$det(A_3) = 1(-6) - 1(-3) + 9(0)\\$
$det(A_3) = -6 + 3\\$
$det(A_3) = -3$

<hr />

$\Large X_1 = {det(A_1) \over det(A)} = {-1 \over -1} = 1$

$\Large X_2 = {det(A_2) \over det(A)} = {-2 \over -1} = 2$

$\Large X_n = {det(A_n) \over det(A)} = {-3 \over -1} = 3$
