---
title: Day 27b
description: Kombinatorial 2
date: '2023-11-25'
categories:
  - matematika diskrit
  - kombinatorial

published: true
---

## Table of Contents

## Permutasi

Permutasi adalah jumlah urutan berbeda dari
pengaturan objek-objek.

Permutasi merupakan bentuk khusus aplikasi kaidah
perkalian.

### Contoh Soal Permutasi

1. Berapakah jumlah kemungkinan membentuk 3 angka dari 5 angka berikut:  
1, 2, 3, 4 , 5, jika:
  <ol style="list-style-type: lower-alpha;">
    <li>
      tidak boleh ada pengulangan angka.  
    </li>
    <li>
      boleh ada pengulangan angka.
    </li>
  </ol>

Penyelesaian:

a. Dengan kaidah perkalian: $(5)(4)(3) = 60$ buah  
&emsp; &nbsp; &nbsp; Dengan rumus permutasi: $\large P(5, 3) = {5! \over (5 – 3)!} = 60$

b. Tidak dapat diselesaikan dengan rumus permutasi.  
&emsp; &nbsp; &nbsp; Dengan kiadah perkalian: $(5)(5)(5) = 53 = 125.$

2. Kode buku di sebuah perpustakaan panjangnya 7 karakter, terdiri dari 4 huruf berbeda dan diikuti dengan 3 angka yang berbeda pula?

Penyelesaian:

a-z = 26  
0-9 = 10

maka, $\large P(26, 4) \times P(10,3) = 258.336.000$

## Kombinasi

### Contoh Soal Kombinasi

1. Di antara 10 orang mahasiswa Teknik Informatika Angkatan 2002, berapa banyak cara membentuk sebuah perwakilan beranggotakan 5 orang sedemikian sehingga:
<ol style="list-style-type: lower-alpha;">
  <li>
    Mahasiswa bernama A selalu termasuk di dalamnya;
  </li>
  <li>
    Mahasiswa bernama A tidak termasuk di dalamnya;
  </li>
  <li>
    Mahasiswa bernama A selalu termasuk di dalamnya, tetapi B tidak;
  </li>
  <li>
    Mahasiswa bernama B selalu termasuk di dalamnya, tetapi A tidak;
  </li>
  <li>
    Mahasiswa bernama A dan B termasuk di dalamnya;
  </li>
  <li>
    Setidaknya salah satu dari mahasiswa yang bernama A atau B termasuk di dalamnya.
  </li>
</ol>

Penyelesaian:

a. $\large C(9, 4) = {9! \over 4!(9 - 4)!} = 126$ cara untuk membentuk perwakilan yang beranggotakn $5$ orang sedemikian sehingga $A$ selalu termasuk di dalamnya.

b. $\large C(9, 5) = {9! \over 5!(9 - 5)!} = 126$ cara untuk membentuk perwakilan yang beranggotakn $5$ orang sedemikian sehingga $A$ tidak termasuk di dalamnya.

c. $\large C(8, 4) = {8! \over 4!(8 - 4)!} = 70$ cara untuk membentuk perwakilan yang beranggotakan $5$ orang sedemikian sehingga $A$ termasuk di dalamnya, tetapi $B$ tidak.

d. $\large C(8, 4) = {8! \over 4!(8 - 4)!} = 70$ cara untuk membentuk perwakilan yang beranggotakan $5$ orang sedemikian sehingga $B$ termasuk di dalamnya, tetapi $A$ tidak.

e. $\large C(8, 3) = {8! \over 3!(8 - 3)!} =  56$ cara untuk membentuk perwakilan yang beranggotakan $5$ orang sedemikian sehingga $A$ dan $B$ selalu termasuk di dalamnya.

f. Jumlah cara membentuk perwakilan sedemikian sehingga setidaknya salah satu dari $A$ atau $B$ termasuk di dalamnya  
$=$ jumlah cara membentuk perwakilan sehingga A termasuk di dalamnya, B tidak  
$+$ jumlah cara membentuk perwakilan sehingga B termasuk di dalamnya, A tidak  
$+$ jumlah cara membentuk perwakilan sehingga A dan B termasuk di dalamnya  
$= 70 + 70 + 56 = 196$

Prinsip inklusi-eksklusi:

$X$ = jumlah cara membentuk perwakilan yang menyertakan $A$  
$Y$ = jumlah cara membentuk perwakilan yang menyertakan $B$  
$X \cap Y$ = jumlah cara membentuk perwakilan yang menyertakan $A$ dan $B$, maka

$n(X) = C(9, 4) = 126$  
$n(Y) = C(9, 4) = 126$  
$n(X \cap Y) = C(8, 3) = 56$

$n(X \cup Y) = n(X) + n(Y) - n(X \cap Y)$  
$n(X \cup Y) = 126 + 126 - 56$  
$n(X \cup Y) = 196$
