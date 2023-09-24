---
title: Day 6
description: Tabel Kebenaran
date: '2023-9-23'
categories:
  - matematika diskrit
  - logika

published: true
---

## Table of Contents

## Table Kebenaran

Tabel kebenaran adalah alat yang digunakan dalam matematika diskrit dan logika untuk memvisualisasikan dan mengorganisir semua kemungkinan nilai kebenaran (biasanya benar atau salah) dari pernyataan logika atau fungsi logika. Tabel kebenaran digunakan untuk menganalisis, menguji, dan membuktikan berbagai pernyataan logika, serta untuk memahami perilaku fungsi-fungsi logika.

### Tabel Kebenaran Konjungsi (∧)

Operasi ini mewakili logika AND. Suatu konjungsi dikatakan benar hanya jika kedua proposisi yang dihubungkannya benar.

|  p  |  q  | p ∧ q |
| :-: | :-: | :---: |
|  T  |  T  |   T   |
|  T  |  F  |   F   |
|  F  |  T  |   F   |
|  F  |  F  |   F   |

Contoh konjungsi:

p: 3 adalah bilangan prima (pernyataan bernilai benar)  
q: 3 adalah bilangan ganjil (pernyataan bernilai benar)

p ∧ q: 3 adalah bilangan prima dan ganjil (pernyataan bernilai benar)

### Tabel Kebenaran Disjungsi (∨)

Operasi ini mewakili logika OR. Disjungsi dikatakan benar jika paling tidak salah satu proposisi yang dihubungkannya benar.

|  p  |  q  | p ∨ q |
| :-: | :-: | :---: |
|  T  |  T  |   T   |
|  T  |  F  |   T   |
|  F  |  T  |   T   |
|  F  |  F  |   F   |

Contoh disjungsi:

p: Paus adalah mamalia (pernyataan bernilai benar)  
q: Paus adalah herbivora (pernyataan bernilai salah)

p ∨ q: Paus adalah mamalia atau herbivora (pernyataan bernilai benar)

### Tabel Kebenaran Implikasi (→)

Operasi ini mewakili implikasi logis (jika p, maka q). Pernyataan tersebut menyatakan bahwa jika proposisi pertama benar, maka proposisi kedua juga harus benar. Namun jika proposisi pertama salah, maka implikasinya tetap dianggap benar.

|  p  |  q  | p → q |
| :-: | :-: | :---: |
|  T  |  T  |   T   |
|  T  |  F  |   F   |
|  F  |  T  |   T   |
|  F  |  F  |   T   |

Contoh implikasi:

p: Andi belajar dengan aplikasi ruangguru. (pernyataan bernilai benar)  
q: Andi dapat belajar di mana saja. (pernyataan bernilai benar)

p ⇒ q: Jika Andi belajar dengan aplikasi ruangguru, maka Andi dapat belajar dari mana saja (pernyataan bernilai benar)

### Tabel Kebenaran Biimplikasi (⇔)

Operasi ini mewakili kesetaraan logis atau jika dan hanya jika. Benar apabila kedua proposisi mempunyai nilai kebenaran yang sama (keduanya benar atau keduanya salah).

|  p  |  q  | p ⇔ q |
| :-: | :-: | :---: |
|  T  |  T  |   T   |
|  T  |  F  |   F   |
|  F  |  T  |   F   |
|  F  |  F  |   T   |

Contoh biimplikasi:

p: 30 x 2 = 60 (pernyataan bernilai benar)  
q: 60 adalah bilangan ganjil (pernyataan bernilai salah)

p ⇔ q: 30 x 2 = 60 jika dan hanya jika 60 adalah bilangan ganjil (pernyataan bernilai salah).

## Contoh Soal

### Soal 1

p : 17 adalah bilangan prima (benar)  
q : bilangan prima selalu ganjil (salah)  
p ∧ q : 17 adalah bilangan prima dan bilangan prima selalu ganjil (salah)

Jika p, q, dan r adalah proposisi, coba bentuk tabel kebenaran dari ekspresi logika
$(p ∧ q) ∨ (¬q ∧ r)$

Ada 3 buah proposisi atomik di dalam ekspresi logika dan setiap proposisi hanya mempunyai 2
kemungkinan nilai,sehingga jumlah kombinasi dari semua proposisi tersebut $2^3 = 8$ buah.

|  p  |  q  |  r  |
| :-: | :-: | :-: |
|  T  |  T  |  T  |
|  T  |  T  |  F  |
|  T  |  F  |  T  |
|  T  |  F  |  F  |
|  F  |  T  |  T  |
|  F  |  T  |  F  |
|  F  |  F  |  T  |
|  F  |  F  |  F  |

&nbsp;

| p ∧ q | ~q  | ~q ∧ r |
| :---: | :-: | :----: |
|   T   |  F  |   F    |
|   T   |  F  |   F    |
|   F   |  T  |   T    |
|   F   |  T  |   F    |
|   F   |  F  |   F    |
|   F   |  F  |   F    |
|   F   |  T  |   T    |
|   F   |  T  |   F    |

&nbsp;

| $(p ∧ q) ∨ (¬q ∧ r)$ |
| :------------------: |
|          T           |
|          T           |
|          T           |
|          F           |
|          F           |
|          F           |
|          T           |
|          F           |

## Tautologi Dan Kontradiksi

Sebuah proposisi majemuk disebut tautologi jika benar semua kasus, sebaliknya disebut
kontradiksi jika salah untuk semua kasus.

### Tautologi: $p ∨ ¬(p ∧ q)$

|  p  |  q  | p ∧ q | ~(p ∧ q) |
| :-: | :-: | :---: | :------: |
|  T  |  T  |   T   |    F     |
|  T  |  F  |   F   |    T     |
|  F  |  T  |   F   |    T     |
|  F  |  F  |   F   |    T     |

&nbsp;

| $p ∨ ¬(p ∧ q)$ |
| :------------: |
|       T        |
|       T        |
|       T        |
|       T        |

### Kontradiksi: $(p ∧ q) ∧ ¬(p ∨ q)$

|  p  |  q  | p∧q | p∨q | ~(p ∨ q) |
| :-: | :-: | :-: | :-: | :------: |
|  T  |  T  |  T  |  T  |    F     |
|  T  |  F  |  F  |  T  |    F     |
|  F  |  T  |  F  |  T  |    F     |
|  F  |  F  |  F  |  F  |    T     |

&nbsp;

| (p ∧ q) ∧ ~(p ∨q) |
| :---------------: |
|         F         |
|         F         |
|         F         |
|         F         |

## Ekuivalen

Ekuivalen (Equivalence): Dalam konteks logika proposisional, dua pernyataan (atau proposisi) dikatakan ekuivalen jika mereka memiliki nilai kebenaran yang sama untuk setiap kombinasi nilai kebenaran dari variabel-variabel yang terkait.

Dengan kata lain, jika pernyataan A dan B ekuivalen, maka jika A benar, maka B juga benar, dan jika A salah, maka B juga salah.

Ekuivalen dapat direpresentasikan dengan simbol "↔" atau "≡".

## Hukum De Morgan

Contoh:  
$¬(p ∧ q) ⇔ ¬p ∨ ~q$  
$¬(p ∨ q) ⇔ ¬p ∧ ~q$

Tabel Kebenaran:

|  p  |  q  |
| :-: | :-: |
|  T  |  T  |
|  T  |  F  |
|  F  |  T  |
|  F  |  F  |

&nbsp;

| p ∧ q | ~(p ∧ q) |
| :---: | :------: |
|   T   |    F     |
|   F   |    T     |
|   F   |    T     |
|   F   |    T     |

&nbsp;

| ~p  | ~q  | ~p ∨ ~q |
| :-: | :-: | :-----: |
|  F  |  F  |    F    |
|  F  |  T  |    T    |
|  T  |  F  |    T    |
|  T  |  T  |    T    |
