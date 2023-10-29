---
title: UTS Recap Matdis
description: UTS Recap Matematika Diskrit
date: '2023-10-29'
categories:
  - UTS
  - recap
  - matematika diskrit

published: true
---

<script>
    import MermaidDiagram from '$lib/components/mermaid/MermaidDiagram.svelte';
</script>

## Table of Contents

## Sesi 1

### Apa itu matematika diskrit?

**Matematika diskrit** adalah cabang matematika yang mempelajari benda-benda yang dapat dihitung, dibedakan, dan dipisahkan, bukan besaran kontinu.

Besaran diskrit dapat dihitung dan dibedakan. Mereka mengambil nilai-nilai yang spesifik dan terpisah tanpa ada nilai-nilai di antaranya.

Sebaliknya, besaran kontinu tidak dapat dihitung dengan cara yang sama. Mereka dapat mengambil jumlah nilai yang tak terhingga dalam suatu rentang, dan selalu ada nilai di antara dua titik mana pun.

### Topik utama

- **Logika dan logika proposisional**
  Logika adalah studi tentang penalaran dan argumentasi yang valid. Dalam matematika diskrit, Anda akan mempelajari logika proposisional dan predikat, tabel kebenaran, persamaan logika, dan aturan inferensi.

- **Himpunan dan Teori Himpunan**
  Ilmu yang mempelajari himpunan dan sifat-sifatnya, termasuk operasi pada himpunan, kardinalitas himpunan, himpunan bagian, gabungan, irisan, dan relasi himpunan.

- **Relasi**
  Studi tentang Relasi biner, Relasi kesetaraan, tatanan parsial, dan fungsi.

- **Induksi matematika**
  Induksi matematika merupakan suatu metode pembuktian matematis yang terdiri dari dua langkah:

  - Casing Dasar (Basis Induktif):
    Pada langkah ini, Anda membuktikan bahwa pernyataan tersebut benar untuk nilai awal tertentu, biasanya bilangan asli terkecil yang ingin Anda buktikan pernyataannya.

  - Langkah Induktif:
    Pada langkah ini, Anda berasumsi bahwa pernyataan tersebut berlaku untuk suatu bilangan asli sembarang, yang biasanya dilambangkan dengan "k". Kemudian, gunakan asumsi ini untuk membuktikan bahwa pernyataan tersebut juga berlaku untuk bilangan asli berikutnya, yaitu "k+1".

- **Algoritma dan Kompleksitas**
  Analisis dan desain algoritma, termasuk efisiensi, kompleksitas, dan strategi algoritma umum.

- **Kombinatorik**
  Menghitung dan menyusun benda, meliputi permutasi, kombinasi, dan prinsip seperti prinsip sangkar burung merpati.

- **Teori grafik**
  Studi tentang jaringan yang direpresentasikan sebagai grafik, termasuk pohon, jalur, dan algoritma grafik.

- **Aljabar Boolean**
  Aljabar Boolean adalah sistem matematika yang beroperasi pada variabel biner, yang hanya dapat memiliki dua nilai: benar (1) dan salah (0). Ini berkaitan dengan operasi logis dan ekspresi menggunakan nilai biner ini

- **Probabilitas**
  Studi tentang kejadian acak dan kemungkinannya, yang melibatkan konsep seperti variabel acak dan distribusi probabilitas.
- **Teori Grup**
  Studi tentang struktur aljabar yang dikenal sebagai grup, dengan operasi grup.

### Contoh Logika Proposisional

#### Proposisi

Ini adalah pernyataan yang bisa benar atau salah, tapi tidak keduanya. Proposisi biasanya direpresentasikan dengan huruf atau simbol.

Contoh proposisi:

- p: "Matahari bersinar."
- q: "Hujan."
- r: "2 + 2 = 5."

#### Operasi Logis

- **Negasi (¬):**
  Operasi ini mewakili logika NOT. Digunakan untuk membentuk negasi atau kebalikan dari suatu proposisi.

  Contoh:
  ¬p: "Matahari tidak bersinar."

- **Konjungsi (∧):**
  Operasi ini mewakili logika AND. Suatu konjungsi dikatakan benar hanya jika kedua proposisi yang dihubungkannya benar.

  Contoh:
  p ∧ q: "Matahari bersinar, dan hujan turun."

- **Disjungsi (∨):**
  Operasi ini mewakili logika OR. Disjungsi dikatakan benar jika paling tidak salah satu proposisi yang dihubungkannya benar.

  Contoh:
  p ∨ q : "Matahari bersinar atau hujan (atau keduanya)."

- **Implikasi (→):**
  Operasi ini mewakili implikasi logis. Pernyataan tersebut menyatakan bahwa jika proposisi pertama benar, maka proposisi kedua juga harus benar. Namun jika proposisi pertama salah, maka implikasinya tetap dianggap benar.

  Contoh:
  p → q: "Jika matahari bersinar, berarti sedang hujan (tetapi bisa juga benar jika matahari tidak bersinar)."

- **Bikondisional (↔):**
  Operasi ini mewakili logika XNOR, kesetaraan logis (logical equality) atau jika dan hanya jika. Benar apabila kedua proposisi mempunyai nilai kebenaran yang sama (keduanya benar atau keduanya salah).

  Contoh:
  p ↔ q : “Matahari bersinar jika dan hanya jika hujan (kedua pernyataan mempunyai nilai kebenaran yang sama).”

## Sesi 2

### Table Kebenaran

Tabel kebenaran adalah alat yang digunakan dalam matematika diskrit dan logika untuk memvisualisasikan dan mengorganisir semua kemungkinan nilai kebenaran (biasanya benar atau salah) dari pernyataan logika atau fungsi logika. Tabel kebenaran digunakan untuk menganalisis, menguji, dan membuktikan berbagai pernyataan logika, serta untuk memahami perilaku fungsi-fungsi logika.

#### Tabel Kebenaran Konjungsi (∧)

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

#### Tabel Kebenaran Disjungsi (∨)

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

#### Tabel Kebenaran Implikasi (→)

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

#### Tabel Kebenaran Biimplikasi (⇔)

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

### Contoh Soal

#### Soal 1

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

### Tautologi Dan Kontradiksi

Sebuah proposisi majemuk disebut tautologi jika benar semua kasus, sebaliknya disebut
kontradiksi jika salah untuk semua kasus.

#### Tautologi: $p ∨ ¬(p ∧ q)$

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

#### Kontradiksi: $(p ∧ q) ∧ ¬(p ∨ q)$

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

### Ekuivalen

Ekuivalen (Equivalence): Dalam konteks logika proposisional, dua pernyataan (atau proposisi) dikatakan ekuivalen jika mereka memiliki nilai kebenaran yang sama untuk setiap kombinasi nilai kebenaran dari variabel-variabel yang terkait.

Dengan kata lain, jika pernyataan A dan B ekuivalen, maka jika A benar, maka B juga benar, dan jika A salah, maka B juga salah.

Ekuivalen dapat direpresentasikan dengan simbol "↔" atau "≡".

### Hukum De Morgan

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

## Sesi 3

### Apa itu Himpunan (Set)?

Himpunan adalah kumpulan obyek berbeda (yaitu : elemen, unsure, atau anggota) dengan keanggotaannya yang terdefinisi dengan pasti

**Notasi Himpunan**:

- Nama dengan huruf Kapital, huruf kecil menyatakan nama anggota
- Lambang keanggotaan $\in$
- Banyak anggota (kardinalitas) dinyatakan $n(A)$ atau $|A|$
- Penulisan Ekstensi:  
  Menggunakan tanda kurung kurawal $\{\ \}$ untuk menunjukkan anggota-anggota himpunan.  
  Contoh: $A = \{1, 2, 3, 4, 5\}$
- Penulisan Intension:
  Menggunakan deskripsi atau aturan untuk mengidentifikasi anggota himpunan.  
  Contoh: $B = \{x\ |\ x\ adalah\ bilangan\ genap\ positif\}$

**Simbol-simbol baku**:

- $P$ = himpunan bilangan bulat positif = $\{1,2,3,...\}$
- $N$ = himpunan bilangan alami (natural) = $\{1,2,...\}$
- $Z$ = himpunan bilangan bulat = $\{...,-1,0,1,...\}$
- $Q$ = himpunan bilangan rasional
- $R$ = himpunan bilangan riil
- $C$ = himpunan bilangan kompleks

#### Konsep dasar himpunan

1. Himpunan Kosong  
   Himpunan yang tidak memiliki elemen disebut himpunan kosong dan dinotasikan dengan simbol $\{\ \}$ atau $\phi$ (phi).

2. Himpunan Universal  
   Ini adalah himpunan yang berisi semua objek yang mungkin dalam suatu konteks tertentu. Biasanya dilambangkan dengan $U$.

3. Subset (Subhimpunan)  
   Jika semua anggota himpunan A juga merupakan anggota himpunan B, maka A adalah subhimpunan dari B, dan ini dinotasikan sebagai

   - Subset sejati: A $\subset$ B.
   - Subset atau sama dengan: A $\subseteq$ B.

4. Himpunan Daya (Power Set)  
   Himpunan daya dari suatu himpunan adalah himpunan yang berisi semua subhimpunan dari himpunan tersebut,termasuk himpunan kosong dan himpunan itu sendiri.
   - Contoh:  
     $A = \{1, 2\}$  
     Berikut adalah himpunan daya dari A:  
     $P(A) = \{\phi, \{1\}, \{2\}, \{1, 2\}\}$
5. Himpunan Ekuivalen  
   Dua himpunan A dan B dikatakan ekuivalen jika memiliki _jumlah_ elemen yang sama.
6. Operasi Himpunan: Terdapat beberapa operasi yang dapat dilakukan pada himpunan, di antaranya:

   - **Gabungan (Union)**: Operasi ini menghasilkan himpunan baru yang berisi semua elemen dari kedua himpunan yang digabungkan. Dinotasikan sebagai $A \cup B$.

     Contoh: $A \cup B = \{ x | x \in A\ atau\ x \in B \}$

   - **Irisan (Intersection)**: Operasi ini menghasilkan himpunan baru yang berisi elemen-elemen yang ada di kedua himpunan. Dinotasikan sebagai $A \cap B$.

     Contoh : $A \cap B = \{ x | x \in A\ dan\ x \in B \}$

   - **Selisih (Difference)**: Operasi ini menghasilkan himpunan baru yang berisi elemen-elemen yang ada di himpunan pertama tetapi tidak ada di himpunan kedua. Dinotasikan sebagai $A - B$.

     $A - B = \{ x | x \in A\ dan\ x \notin B \}$

   - **Komplemen**: Himpunan komplemen dari suatu himpunan A dalam konteks tertentu adalah himpunan yang berisi semua elemen yang tidak termasuk dalam himpunan A dalam konteks tersebut. Dinotasikan sebagai A'.

     Contoh: $A'=  \{ x | x \in U, x \notin A \}$

   - **Beda setangkup (Symmetric Difference)**: adalah himpunan yang anggotanya milik dua himpunan, tetapi bukan milik irisannya.

     Contoh: $A \oplus B = (A \cup B) - (A \cap B) = (A - B) \cup (B - A)$

## Sesi 4

### Perkalian Kartesian

Menggabungkan elemen-elemen dari setiap himpunan sedemikian rupa sehingga memasangkan setiap elemen dari himpunan pertama dengan setiap elemen dari himpunan kedua.

Contoh: $A \times B = \set{(a, b) | a \in A\ dan\ b \in B }$

Catatan:

1. Jika A dan B merupakan himpunan berhingga,  
   maka: $n(A)\times n(B) = n(A)\ ⋅ \ n(B)$
2. $(a,b) \neq (b,a)$
3. $A \times B \neq B \times A$, dengan syarat A atau B tidak kosong.
4. $Jika\ A = \phi\ atau\ B = \phi, maka\ A \times B = B \times A = \phi$

### Hukum-Hukum Himpunan

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

### Prinsip Inklusi-Eksklusi

Prinsip Inklusi-Eksklusi adalah suatu prinsip yang digunakan untuk mengetahui jumlah elemen hasil penggabungan dari beberapa himpunan. Jumlah elemen hasil penggabungan dihitung dari jumlah elemen di masing-masing himpunan dikurangi dengan jumlah elemen di dalam irisannya.
<br />

- $n(A \cup B) = n(A) + n(B) - n(A \cap B)$

Dengan kata lain, kardinalitas gabungan dua himpunan (n(A ∪ B)) sama dengan jumlah kardinalitas masing-masing himpunan (n(A) dan n(B)) dikurangi kardinalitas perpotongannya (n (A∩B)).

#### Contoh Soal

Mahasiswa kelas TIK ada 64 orang. Diantara mereka 42 orang Suka Futsal, 36 orang suka
Basket, beberapa orang suka Futsal dan Basket, dan 4 orang tidak suka Futsal maupun Basket.

Hitunglah:  
a. Yang suka Futsal dan Basket  
b. Yang hanya suka Futsal  
c. Yang tidak suka Futsal  
d. Yang tidak suka Basket

##### Jawab

$U = 64$  
$n(F) = 42$  
$n(B) = 36$  
$(F \cup B)^c = 4$

rumus:  
$n(F \cup B) = n(F) + n(B) - n(F \cap B)$

Susun ulang formula  
$n(F \cap B) = 42 + 36 - n(F \cup B)$  
$n(F \cap B) = 42 + 36 - 60$  
$n(F \cap B) = 78 - 60$  
$n(F \cap B) = 18$

Jadi,  
a. Suka Futsal dan Basket = $n(F \cap B) = 18$  
b. Hanya suka Futsal = $n(F) - n(F \cap B) = 42 - 18 = 24$  
c. Tidak suka Futsal = $n(F^c) = U - n(F) = 64 - 42 = 22$  
d. Tidak Suka Basket = $n(B^c) = U - n(B) = 64 - 36 = 28$

## Sesi 5

### Matriks

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

#### Matrix Setangkup (Symmetry)

Matriks Setangkup jika elemen dibawah diagonal adalah pencerminan dari elemen diatas diagonal terhadap sumbu diagonal matriks.

$$
A =
\begin{bmatrix}
  1 & 2 & 3 \\
  2 & 4 & 5 \\
  3 & 5 & 6
\end{bmatrix}
$$

### Relasi

Relasi dalam teori himpunan adalah bagian dari perkalian kartesian dua himpunan.

Contoh 1:

$A = \set{1,2}$  
$B = \set{a,b}$

$
A \times B = \set{
(1,a),(1,b),
(2,a),(2,b)}
$

#### Representasi Relasi

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

#### Relasi Inverse

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

## Sesi 6

### Sifat-Sifat Relasi Biner

#### Refleksif (Reflexive)

Sebuah relasi $R$ pada himpunan $A$ disebut **refleksif** jika setiap elemen a dalam A berada dalam relasi R dengan dirinya sendiri, yaitu

$(a, a) \in R$ untuk setiap $a \in A$.

#### Transitive

Sebuah relasi $R$ pada himpunan $A$ disebut **transitive** jika

$(a,b) \in R \land (b,c) \in R$, maka $(a,c) \in R$, untuk $a, b, c \in A$

Contoh:

$R = \set{(2,1),(3,1),(3,2),(4,1),(4,1),(4,3)}$

| (a,b) | (b,c) | (a,c) |
| :---: | :---: | :---: |
| (3,2) | (2,1) | (3,1) |
| (4,2) | (2,1) | (4,1) |
| (4,3) | (3,1) | (4,1) |
| (4,3) | (3,2) | (4,2) |

Mencari angka yang sama pada argumen yang berbeda, anggap angka tersebut merepresentasikan suatu huruf.

#### Simetris

Sebuah relasi $R$ disebut **simetris** jika dan hanya jika untuk setiap pasangan elemen $(a, b)$ dalam himpunan $A$, jika $(a, b)$ adalah anggota dari $R$, maka $(b, a)$ juga adalah anggota dari $R$.

$a,b \in A,$ jika $(a,b) \in R$ maka $(b,a) \in R$

#### Anti-Simetris (Tolak-Setangkup)

Sebuah relasi $R$ pada himpunan $A$ disebut **anti-simetris**

$a,b \in A,$ jika $(a,b) \in R \land (b,a) \in R$ hanya jika $a=b$

Jika suatu relasi biner adalah anti simetris, maka jika ia menghubungkan dua elemen yang berbeda (a dan b), maka elemen sebaliknya (b dan a) tidak boleh ada dalam relasi.

$a,b \in A,$ jika $(a,b) \in R \land a \neq b,$ maka $(b,a) \notin R$

### Mengkombinasikan Relasi

$A = \set{a,b,c}$  
$B = \set{a,b,c,d}$

$R_1 = \set{(a,a),(b,b),(c,c)}$  
$R_2 = \set{(a,a),(a,b),(a,c),(a,d)}$

$R_1 \cap R_2 = \set{(a,a)}$  
$R_1 \cup R_2 = \set{(a,a),(b,b),(c,c),(a,b),(a,c),(a,d)}$  
$R_1 - R_2 = \set{(b,b),(c,c)}$  
$R_2 - R_1 = \set{(a,b),(a,c),(a,d)}$  
$R_1 \oplus R_2 = \set{(b,b),(c,c),(a,b),(a,c),(a,d)}$

### Komposisi Relasi

Misalkan mempunyai dua relasi $R$ dan $S$, komposisi relasi tersebut, dilambangkan dengan $R \circ S$, didefinisikan sebagai berikut:

$R ∘ S = \set{(a, c) |\ untuk\ beberapa\ b, (a, b) \in R\ dan\ (b, c) \in S}$

Secara sederhana, komposisi $R$ dan $S$ merupakan relasi baru yang memuat pasangan $(a, c)$ jika terdapat elemen perantara $b$ sehingga $(a, b)$ ada di $R$ dan $(b, c)$ ada di $S$.

Contoh:

$A = \set{1,2,3}$  
$B = \set{2,4,6,8}$  
$C = \set{s,t,u}$

$R = \set{(1,2),(1,6),(2,4),(3,4),(3,6),(3,8)}$  
$S = \set{(2,u),(4,s),(4,t),(6,t),(8,u)}$  
$R \circ S = \\
\set{(1, u), (1, t), \\
(2, s), (2, t), \\
(3, s), (3, t), (3, u)}$

Visualisasikan dengan diagram panah

<MermaidDiagram>
{`
graph LR
  V[2]
  W[4]
  X[6]
  Y[8]
  subgraph A
  1
  2
  3
  end
  subgraph B
  V
  W
  X
  Y
  end
  subgraph C
  S[s]
  T[t]
  U[u]
  end
  1 --> V --> U;
  1 --> X --> T;
  2 --> W --> S;
  2 --> W --> T;
  3 --> W --> S;
  3 --> X --> T;
  3 --> Y --> U;
`}
</MermaidDiagram>

### Tambahan

#### Fungsi

Misalkan $A$ dan $B$ himpunan.
Relasi biner $f$ dari $A$ ke $B$ merupakan suatu fungsi jika setiap elemen di dalam $A$
dihubungkan dengan tepat satu elemen di dalam $B$.

Jika $f$ adalah fungsi dari $A$ ke $B$ kita menuliskan

$$
f: A \to B
$$

yang artinya $f$ memetakan $A$ ke $B$.

$A$ disebut **daerah asal** (_domain_) dari $f$.  
$B$ disebut **daerah hasil** (_codomain_) dari $f$.

Nama lain untuk fungsi adalah pemetaan atau transformasi.

Kita menuliskan $f(a) = b$ jika elemen $a$ di dalam $A$ dihubungkan dengan elemen $b$
di dalam $B$.

$$
f(a) = b
$$

$b$ dinamakan **bayangan** (_image_) dari $a$.  
$a$ dinamakan **pra-bayangan** (_pre-image_) dari $b$.

Himpunan yang berisi semua nilai pemetaan $f$ disebut **jelajah** (_range_) dari $f$.

Fungsi adalah relasi yang khusus:

1. Tiap elemen di dalam himpunan $A$ harus digunakan oleh prosedur atau kaidah yang mendefinisikan $f$.
2. Frasa “dihubungkan dengan tepat satu elemen di dalam $B$” berarti bahwa jika $(a, b) \in f$ dan $(a, c) \in f$, maka $b = c$.

## Sesi 7

### Induksi Matematika

- Metode pembuktian untuk pernyataan perihal bilangan bulat adalah **induksi matematika**.

- Induksi matematik merupakan teknik pembuktian yang baku di dalam matematika.

- Melalui induksi matematika kita dapat mengurangi langkah-langkah pembuktian bahwa semua bilangan bulat termasuk ke dalam suatu himpunan kebenaran dengan hanya sejumlah langkah terbatas.

#### Prinsip induksi sederhana

- Misalkan $p(n)$ adalah pernyataan perihal bilangan bulat positif.
- Kita ingin membuktikan bahwa $p(n)$ benar untuk semua bilangan bulat positif $n$.

Untuk membuktikan pernyataan ini, kita hanya perlu menunjukkan bahwa:

1. $p(1)$ benar, dan
2. jika $p(n)$ benar, maka $p(n + 1)$ juga benar, untuk setiap $n \geq 1$,

Langkah 1 dinamakan **basis induksi**.  
Langkah 2 dinamakan **langkah induksi**.

Langkah induksi berisi asumsi (andaian) yang menyatakan bahwa $p(n)$ benar.  
Asumsi tersebut dinamakan **hipotesis induksi**.

Jika kita sudah menunjukkan kedua langkah tersebut benar maka kita sudah membuktikan bahwa $p(n)$ benar untuk semua bilangan bulat positif $n$.

Induksi matematik berlaku seperti efek domino.
