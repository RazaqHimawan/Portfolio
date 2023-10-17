---
title: Day 12b
description: Perkalian Kartesian, Hukum-Hukum Himpunan, Inklusi-Eksklusi
date: '2023-10-14'
categories:
  - matematika diskrit
  - himpunan

published: true
---

## Table of Contents

## Perkalian Kartesian

Menggabungkan elemen-elemen dari setiap himpunan sedemikian rupa sehingga memasangkan setiap elemen dari himpunan pertama dengan setiap elemen dari himpunan kedua.

Contoh: $A \times B = \set{(a, b) | a \in A\ dan\ b \in B }$

Catatan:

1. Jika A dan B merupakan himpunan berhingga,  
   maka: $n(A)\times n(B) = n(A)\ ⋅ \ n(B)$
2. $(a,b) \neq (b,a)$
3. $A \times B \neq B \times A$, dengan syarat A atau B tidak kosong.
4. $Jika\ A = \phi\ atau\ B = \phi, maka\ A \times B = B \times A = \phi$

## Hukum-Hukum Himpunan

| Hukum-Hukum                               | Contoh                                                                                                                       |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Hukum identitas                           | $\bullet$ $A \cup \phi = A$ <br /> $\bullet$ $A \cap U = A$                                                                  |
| Hukum komplemen                           | $\bullet$ $A \cup A^c = U$ <br /> $\bullet$ $A \cap A^c = \phi$                                                              |
| Hukum involusi <br /> (double complement) | $\bullet$ $(A^c)^c = A$                                                                                                      |
| Hukum komutatif                           | $\bullet$ $A \cup B = B \cup A$ <br /> $\bullet$ $A \cap B = B \cap A$                                                       |
| Hukum asosiatif                           | $\bullet$ $A \cup (B \cup C) = (A \cup B) \cup C$ <br /> $\bullet$ $A \cap (B \cap C) = (A \cap B) \cap C$                   |
| Hukum distributif                         | $\bullet$ $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$ <br /> $\bullet$ $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$ |
| Hukum dominasi                            | $\bullet$ $A \cup U = U$ <br /> $\bullet$ $A \cap \phi = \phi$                                                               |
| Hukum idempoten                           | $\bullet$ $A \cup A = A$ <br /> $\bullet$ $A \cap A = A$                                                                     |
| Hukum absorpsi                            | $\bullet$ $A \cup (A \cap B) = A$ <br /> $\bullet$ $A \cap (A \cup B) = A$                                                   |
| Hukum De Morgan                           | $\bullet$ $(A \cup B)^c = A^c \cap B^c$ <br /> $\bullet$ $(A \cap B)^c = A^c \cup B^c$                                       |
| Hukum 0/1                                 | $\bullet$ $\phi^c = U$ <br /> $\bullet$ $U^c = \phi$                                                                         |

## Prinsip Inklusi-Eksklusi

Prinsip Inklusi-Eksklusi adalah suatu prinsip yang digunakan untuk mengetahui jumlah elemen hasil penggabungan dari beberapa himpunan. Jumlah elemen hasil penggabungan dihitung dari jumlah elemen di masing-masing himpunan dikurangi dengan jumlah elemen di dalam irisannya.
<br />

- $n(A \cup B) = n(A) + n(B) - n(A \cap B)$

Dengan kata lain, kardinalitas gabungan dua himpunan (n(A ∪ B)) sama dengan jumlah kardinalitas masing-masing himpunan (n(A) dan n(B)) dikurangi kardinalitas perpotongannya (n (A∩B)).

### Contoh Soal

Mahasiswa kelas TIK ada 64 orang. Diantara mereka 42 orang Suka Futsal, 36 orang suka
Basket, beberapa orang suka Futsal dan Basket, dan 4 orang tidak suka Futsal maupun Basket.

Hitunglah:  
a. Yang suka Futsal dan Basket  
b. Yang hanya suka Futsal  
c. Yang tidak suka Futsal  
d. Yang tidak suka Basket

#### Jawab

$U = 64$  
$n(F) = 42$  
$n(B) = 36$  
$(A \cup B)^c = 4$

rumus:  
$n(F \cup B) = n(F) + n(B) - n(F \cap B)$

Susun ulang formula  
$n(F \cap B) = 42 + 36 - n(F \cup B)$  
$n(F \cap B) = 42 + 36 - 60$  
$n(F \cap B) = 78 - 60$  
$n(F \cap B) = 18$

Jadi,  
a. Suka Futsal dan Basket = $F \cap B = 18$  
b. Hanya suka Futsal = $n(F) - n(F \cap B) = 42 - 18 = 24$  
c. Tidak suka Futsal = $F^c = U - n(F) = 64 - 42 = 22$  
d. Tidak Suka Basket = $B^c = U - B = 64 - 36 = 28$
