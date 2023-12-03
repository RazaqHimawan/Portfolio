---
title: Day 29b
description: Aljabar Boolean
date: '2023-12-02'
categories:
  - matematika diskrit
  - aljabar boolean

published: true
---

## Table of Contents

## Aljabar Boolean

Aljabar Boole adalah cabang matematika yang mengkaji operasi-logika dan manipulasi simbol-simbol untuk menganalisis pernyataan yang berhubungan dengan kebenaran

George Boole, seorang matematikawan Inggris, mengembangkan aljabar ini pada pertengahan abad ke-19. Aljabar Boole membentuk dasar bagi logika matematika dan memiliki aplikasi penting dalam ilmu komputer, teknologi informasi, elektronika digital, dan rekayasa sistem.

### Elemen-elemen aljabar boolean

Aljabar Boole menggunakan simbol-simbol logika seperti (AND), (OR), dan (NOT) untuk merepresentasikan hubungan antara pernyataan logis.

Menggunakan sistem 5 tuple `<*, +, ', 0, 1>`, dengan arti:

`* = AND (Perkalian)`  
`+ = OR (Penjumlahan)`  
`' = NOT (Negasi)`  
`0 = FALSE (merepresentasikan keadaan salah)`  
`1 = TRUE (merepresentasikan keadaan benar)`

### Hukum - hukum aljabar boolean

| Hukum - Hukum     | Contoh                                                             |
| ----------------- | ------------------------------------------------------------------ |
| Hukum Identitas   | $a + 0 = a$ <br /> $a \cdot 1 = a$                                 |
| Hukum Idempoten   | $a + a = a$ <br /> $a \cdot a = a$                                 |
| Hukum Komplemen   | $a + a' = 1$ <br /> $a \cdot a' = 0$                               |
| Hukum Dominasi    | $a + 0 = 0$ <br /> $a \cdot 1 = 1$                                 |
| Hukum Involusi    | $(a')' = a$                                                        |
| Hukum Penyerapan  | $a + ab = a$ <br /> $a  (a+  b) = a$                               |
| Hukum Komutatif   | $a + b = b + a$ <br /> $a \cdot b = b \cdot a$                     |
| Hukum Asosiatif   | $a + (b + c) = (a + b) + c$ <br /> $a (b \cdot c) = (a \cdot b) c$ |
| Hukum Distributif | $a + (b c) = (a + b) (a + c)$ <br /> $a (b + c) = a b + a c$       |
| Hukum De Morgan   | $(a + b') = a'b'$ <br /> $(a b)' = a' + b'$                        |
| Hukum 0/1         | $0' = 1$ <br /> $1' = 0$                                           |
