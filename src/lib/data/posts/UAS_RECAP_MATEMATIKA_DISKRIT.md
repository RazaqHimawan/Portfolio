---
title: UAS Recap Matdis
description: UAS Recap Matematika Diskrit
date: '2024-01-09'
categories:
  - UAS
  - recap
  - matematika diskrit

published: true
---

<script>
    import MermaidDiagram from '$lib/components/mermaid/MermaidDiagram.svelte';
</script>

## Table of Contents

## Sesi 1

### Teori Bilangan

Teori bilangan adalah salah satu cabang matematika yang mempelajari sifat-sifat dan hubungan bilangan, khususnya bilangan bulat.

#### Simbol-simbol baku

- $\N$ = himpunan bilangan alami (natural) = $\{1,2,...\}$
- $\Z$ = himpunan bilangan bulat = $\{...,-1,0,1,...\}$
- $Q$ = himpunan bilangan rasional = $\set{{1 \over 2},3.4}$
- $\R$ = himpunan bilangan riil
- $C$ = himpunan bilangan kompleks

#### Bilangan bulat

Bilangan bulat adalah bilangan yang tidak mempunyai pecahan desimal,  
misalnya $8, 21, 8765, -34, 0$

#### Bilangan riil

Bilangan real mencakup semua bilangan pada garis bilangan, mencakup bilangan rasional dan irasional. Mereka bisa positif, negatif, atau nol.

#### Bilangan rasional

Bilangan rasional adalah bilangan yang dapat dinyatakan sebagai hasil bagi pecahan $a/b$, dimana $a$ dan $b$ adalah bilangan bulat dan $b$ tidak sama dengan nol,  
misalnya ${1 \over 2}, 5.4, {7 \over 1}$

#### Bilangan irrasional

Bilangan irasional adalah bilangan riil yang tidak dapat dinyatakan sebagai pecahan dari dua bilangan bulat. Ekspansi desimalnya tidak berhenti dan tidak berulang,  
misalnya $\sqrt{2}, \pi, e$

#### Bilangan kompleks

Bilangan kompleks adalah bilangan yang berbentuk $a+bi$, dengan $a$ dan $b$ adalah bilangan real, dan $i$ adalah satuan imajiner $(i2=−1)$,  
misalnya $3+2i, −4−7i−4−7i$

### Sifat Pembagian pada bilangan bulat

$$
a|b\ jika\ b = ac, c \in \Z\ dan\ a \neq 0
$$

Artinya: $a$ habis membagi $b$ ($a$ divides $b$) jika terdapat bilangan bulat c sehingga $b = ac$

### Teorema Euclidean

#### Teorema 1

Teorema 1, juga dikenal sebagai Teorema Dasar Aritmatika, menyatakan bahwa setiap bilangan bulat positif yang lebih besar dari 1 dapat direpresentasikan secara unik sebagai hasil kali bilangan prima.

Dengan kata lain, Teorema Pertama Euclid menyatakan bahwa bilangan bulat positif apa pun yang lebih besar dari 1 dapat dipecah menjadi himpunan bilangan prima unik yang dikalikan. Penguraian ini sering disebut sebagai faktorisasi prima suatu bilangan.

#### Euclidean Division

Misalkan $m$ dan $n$ bilangan bulat, $n \neq 0$. maka terdapat bilangan bulat unik $q$ (quotient) dan $r$ (remainder), sehingga

$m = nq + r$

dengan

$0 \leq r < n$

Pada teorema di atas, masing-masing bilangan bulat mempunyai namanya sendiri:  
$m$ disebut pembagian  
$n$ disebut pembagi  
$q$ disebut hasil bagi  
$r$ disebut sisanya.

Contoh:  
$m = nq + r$  
$1987 \div 97 = 20$, sisa $47$  
$1987 = 97 \cdot 20 + 47$

#### Pembagi Bersama Terbesar

Pembagi Bersama Terbesar (PBB), juga dikenal sebagai Faktor Persekutuan Terbesar (FPB) adalah konsep matematika yang menyatakan bilangan bulat positif terbesar yang membagi dua bilangan atau lebih tanpa menyisakan sisa. Dengan kata lain, bilangan terbesar itulah yang membagi masing-masing bilangan tersebut.

Misal  
$a$ dan $b \neq 0$

PBB dari $a$ dan $b$ adalah $\Z$ terbesar d, sehingga $d|a$ dan $d|b$

Dalam hal ini kita nyatakan bahwa $PBB(a,b) = d$.

Contoh:

Mencari $PBB(45,36)$

$45 = 36 \cdot 1 + 9$
$36 = 9 \cdot 4 + 0$

Jadi, $PBB(45,36) = 9$

## Sesi 2

### Kombinatorial

Kombinatorial adalah cabang matematika untuk menghitung jumlah penyusunan objek-objek
tanpa harus mengenumerasi (pencacahan satu per satu) semua kemungkinan susunannya.

#### Kaidah dasar menghitung

Menghitung semua kemungkinan pengaturan obyek

##### Kaidah perkalian (_rule of products_)

Jika ada $n$ cara untuk melakukan suatu hal dan $m$ cara untuk melakukan hal lain, maka terdapat $n \times m$ cara untuk melakukan **kedua hal tersebut secara bersamaan.**

Misal: Ada 5 kemeja dengan warna yang berbeda **dan** 4 Celana dengan gaya yang berbeda.

Jadi, Jumlah total kombinasi adalah $5 \times 4 = 20$

Kaidah ini sering digunakan dalam skenario yang melibatkan beberapa pilihan atau tindakan independen, misalnya saat memilih dari kategori berbeda atau membuat keputusan berurutan.

##### Kaidah penjumlahan (_rule of sums_)

Jika terdapat $n$ cara untuk melakukan suatu hal dan $m$ cara untuk melakukan hal lain, dan **kedua hal tersebut tidak dapat dilakukan secara bersamaan**, maka terdapat $n + m$ cara untuk memilih salah satu opsi.

Misal: Bayangkan Anda sedang merencanakan hidangan penutup, dan Anda bisa menikmatinya kue dengan 4 pilihan rasa **atau** es krim dengan 3 pilihan rasa.

Jadi, Jumlah total pilihan antara kue atau es krim adalah $4 + 3 = 7$

Ini diterapkan ketika Anda dihadapkan pada pilihan eksklusif atau pilihan yang tidak dapat terjadi secara bersamaan. Misalnya, memilih di antara berbagai kategori yang hanya satu yang dapat dipilih.

#### Permutasi

Permutasi mengacu pada susunan objek dalam urutan tertentu.

Rumus untuk menghitung banyaknya permutasi $r$ item yang dipilih dari himpunan $n$ item berbeda adalah:

$$
\Large P(n,r) = {n! \over (n-r)!}
$$

$n$ = jumlah total item atau elemen berbeda yang Anda miliki.  
$r$ = jumlah item yang Anda pilih atau susun dari total set.  
$!$ = simbol faktorial

- Contoh:  
  Ada 5 buku yang berbeda, dan 3 buku itu akan disusun ke rak buku.

  Sejumlah cara untuk menyusun buku-buku ini (mengingat urutannya) adalah

  $\large P(n,r) = {n! \over (n-r)!}$

  $\large P(5,3) = {5! \over (5-3)!}$

  $\large P(5,3) = {5 \times 4 \times 3 \times 2 \times 1 \over 2 \times 1}$

  $\large P(5,3) = 60$

#### Kombinasi

Kombinasi fokus pada pemilihan subset item tanpa mempertimbangkan urutannya.

Rumus untuk menghitung banyaknya kombinasi $r$ item yang dipilih dari himpunan $n$ item berbeda adalah:

$$
\Large C(n,r) = {n! \over r!(n-r)! }
$$

$n$ = jumlah total item atau elemen berbeda yang Anda miliki.  
$r$ = jumlah item yang Anda pilih dari total set.  
$!$ = simbol faktorial

- Contoh: Anda memiliki setumpuk 52 kartu remi, dan Anda ingin memilih 5 kartu untuk satu kartu poker.

  $\large C(n,r) = {n! \over r!(n-r)!}$

  $\large C(52,5) = {52! \over 5!(52-5)!}$

  $\large C(52,5) = {52 \times 51 \times 50 \times 49 \times 48! \over 5 \times 4 \times 3 \times 2 \times 1!}$

  $\large C(52,5) = 2.598.960$

## Sesi 3

### Permutasi

Permutasi adalah jumlah urutan berbeda dari
pengaturan objek-objek.

Permutasi merupakan bentuk khusus aplikasi kaidah
perkalian.

#### Contoh Soal Permutasi

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
&emsp; &nbsp; &nbsp; Dengan rumus permutasi: $\large P(5, 3) = {5! \over (5 - 3)!} = 60$

b. Tidak dapat diselesaikan dengan rumus permutasi.  
&emsp; &nbsp; &nbsp; Dengan kiadah perkalian: $(5)(5)(5) = 53 = 125.$

2. Kode buku di sebuah perpustakaan panjangnya 7 karakter, terdiri dari 4 huruf berbeda dan diikuti dengan 3 angka yang berbeda pula?

Penyelesaian:

a-z = 26  
0-9 = 10

maka, $\large P(26, 4) \times P(10,3) = 258.336.000$

### Kombinasi

#### Contoh Soal Kombinasi

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

## Sesi 4

### Aljabar Boolean

Aljabar Boole adalah cabang matematika yang mengkaji operasi-logika dan manipulasi simbol-simbol untuk menganalisis pernyataan yang berhubungan dengan kebenaran

George Boole, seorang matematikawan Inggris, mengembangkan aljabar ini pada pertengahan abad ke-19. Aljabar Boole membentuk dasar bagi logika matematika dan memiliki aplikasi penting dalam ilmu komputer, teknologi informasi, elektronika digital, dan rekayasa sistem.

#### Elemen-elemen aljabar boolean

Aljabar Boole menggunakan simbol-simbol logika seperti (AND), (OR), dan (NOT) untuk merepresentasikan hubungan antara pernyataan logis.

Menggunakan sistem 5 tuple `<*, +, ', 0, 1>`, dengan arti:

`* = AND (Perkalian)`  
`+ = OR (Penjumlahan)`  
`' = NOT (Negasi)`  
`0 = FALSE (merepresentasikan keadaan salah)`  
`1 = TRUE (merepresentasikan keadaan benar)`

#### Hukum - hukum aljabar boolean

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

## Sesi 5

### Graf

Graf adalah kumpulan vertex (disebut juga node) dan sisi (edge) yang menghubungkan pasangan simpul. Ini adalah cara untuk merepresentasikan hubungan antara berbagai elemen secara visual.

Komponen pada graf:

- Simpul (node atau vertex): Ini adalah titik atau entitas dalam grafik.
- sisi (edge): Ini adalah garis atau hubungan antar simpul. Mereka mewakili hubungan atau koneksi antar entitas.

#### Definisi Graf

Graf $G = (V, E)$, yang dalam hal ini:

- $V$ = himpunan tidak-kosong dari simpul-simpul (vertices)  
  $= \set{ v_1 , v_2 , ... , v_n }$
- $E$ = himpunan sisi (edges) yang menghubungkan sepasang simpul.  
  $= \set{e_1 , e_2 , ... , e_n }$

Contoh:

<MermaidDiagram>
{`
    graph LR
    A[1]
    B[2]
    C[3]
    D[4]
    A---|e1| B
    B---|e2| C
    A---|e3| C
    C---|e4| A
    B---|e5| D
    D---|e6| C
    C---|e7| D
    C---|e8| C
`}
</MermaidDiagram>

$V = \set{1, 2, 3, 4}$  
$E = \set{ \\ (1, 2), (2, 3), (1, 3), (1, 3), \\ (2, 4), (3, 4), (3, 4), (3, 3) \\}$

#### Jenis-Jenis Graf

Berdasarkan ada tidaknya gelang atau sisi ganda pada suatu graf, maka graf digolongkan menjadi dua jenis:

1. Graf sederhana (simple graph): Graf yang tidak mengandung gelang maupun sisi-ganda dinamakan graf sederhana.
2. Graf tak-sederhana (unsimple-graph): Graf yang mengandung sisi ganda atau gelang dinamakan graf tak-sederhana (unsimple graph).

Berdasarkan orientasi arah pada sisi, maka secara umum graf dibedakan atas 2 jenis:

1. Graf tak-berarah (undirected graph): graf yang sisinya tidak mempunyai orientasi arah.
2. Graf berarah (directed graph atau digraph): graf yang setiap sisinya diberikan orientasi arah.

Tabel jenis-jenis graf:

<div style="overflow-x: scroll;">

| Jenis              | Sisi        | Sisi ganda dibolehkan? | Sisi gelang dibolehkan? |
| ------------------ | ----------- | ---------------------- | ----------------------- |
| Graf sederhana     | Tak-berarah | Tidak                  | Tidak                   |
| Graf ganda         | Tak-berarah | Ya                     | Tidak                   |
| Graf semu          | Tak-berarah | Ya                     | Ya                      |
| Graf berarah       | Berarah     | Tidak                  | Ya                      |
| Graf-ganda berarah | Berarah     | Ya                     | Ya                      |

</div>

#### Contoh Penerapan Graph

1. Rangkaian Listrik.
2. Isomer senyawa kimia.
3. Transaksi konkuren pada basis data terpusat.
4. Pengujian program.
5. Teori otomata.

#### Terminologi Graf

1. Ketetanggaan (Adjacent)  
   Dua buah simpul dikatakan bertetangga bila keduanya terhubung langsung.
2. Bersisian (Incidency)  
   Untuk sembarang sisi $e = (v_j, v_k)$ dikatakan  
   $e$ bersisian dengan simpul $v_j$ , atau  
   $e$ bersisian dengan simpul $v_k$
3. Simpul Terpencil (Isolated Vertex)  
   Simpul terpencil ialah simpul yang tidak mempunyai sisi yang bersisian dengannya.
4. Graf Kosong (null graph atau empty graph)  
   Graf yang himpunan sisinya merupakan himpunan kosong $(N_n)$.
5. Derajat (Degree)  
   Derajat suatu simpul adalah jumlah sisi yang bersisian dengan simpul tersebut.

##### Derajat Pada graf berarah

$d_{in}(v) =$ derajat masuk (_in-degree_) $=$ jumlah busur yang masuk ke simpul $v$.  
$d_{out}(v) =$ derajat keluar (_out-degree_) = jumlah busur yang keluar dari simpul $v$

$\Large d(v) = d_{in}(v) + d_{out}(v)$

##### Lemma Jabat Tangan

Jumlah derajat semua simpul pada suatu graf adalah genap, yaitu dua kali jumlah sisi pada graf tersebut.

Dengan kata lain, jika

$G = (V, E),\ maka\ \sum\limits_{v \in V} d(v) = 2|E|$

##### Akibat Dari Lemma (Corollary)

Teorema: Untuk sembarang graf $G$,
banyaknya simpul berderajat ganjil selalu
genap.

Contoh: Diketahui graf dengan lima buah simpul. Dapatkah kita menggambar graf tersebut jika derajat masing-masing simpul adalah:

(a) 2, 3, 1, 1, 2  
(b) 2, 3, 3, 4, 4

Penyelesaian:  
(a) tidak dapat, karena jumlah derajat semua simpulnya ganjil (2 + 3 + 1 + 1 + 2 = 9).  
(b) dapat, karena jumlah derajat semua simpulnya genap
(2 + 3 + 3 + 4 + 4 = 16).

6.  Lintasan (Path)  
    Lintasan yang panjangnya $n$ dari simpul awal $v_0$ ke simpul tujuan $v_n$ di dalam graf $G$ ialah barisan berselang-seling simpul-simpul dan sisi-sisi yang berbentuk $v_0, e_1, v_1, e_2, v_2,... , v_{n-1}, e_n, v_n$ sedemikian sehingga $e_1 = (v_0, v_1), e2 = (v_1, v_2), ... , e_n =(v_{n-1}, v_n)$ adalah sisi-sisi dari graf $G$.
7.  Siklus (Cycle) atau Circuit (Sirkuit)  
    Siklus/sirkuit adalah lintasan yang berawal dan berakhir pada simpul yang sama panjang sirkuit adalah jumlah sisi dalam sirkuit tersebut.
8.  Terhubung (Connected)  
    Dua buah simpul $v_1$ dan simpul $v_2$ disebut terhubung jika terdapat lintasan dari $v_1$ ke $v_2$. $G$ disebut graf terhubung (_connected graph_) jika untuk setiap pasang simpul $v_i$ dan $v_j$ dalam himpunan $V$ terdapat lintasan dari $v_i$ ke $v_j$. Jika tidak, maka $G$ disebut graf tak-terhubung (disconnected graph).

    Graf berarah $G$ disebut graf terhubung kuat (strongly connected graph) apabila untuk setiap pasang simpul sembarang $u$ dan $v$ di $G$, terhubung kuat. Kalau tidak, $G$ disebut graf terhubung lemah.

9.  Upagraf (Subgraph)  
    Misalkan $G = (V, E)$ adalah sebuah graf. $G_1 = (V_1, E_1)$ adalah upagraf (subgraph) dari $G$ jika $V_1 \subseteq V\ dan\ E1 \subseteq  E$.

    Komplemen dari upagraf $G_1$ terhadap graf $G$ adalah graf $G_2 = (V_2, E_2)$ sedemikian
    sehingga $E_2 = E - E_1$ dan $V_2$ adalah himpunan simpul yang anggota-anggota $E_2$
    bersisian dengannya.

    Komponen graf (_connected component_) adalah jumlah maksimum upagraf terhubung dalam graf $G$. Pada graf berarah, komponen terhubung kuat (_strongly connected component_) adalah jumlah maksimum upagraf yang terhubung kuat.

10. Upagrap Rentang (Spanning Subgraph)  
    Upagraf $G_1 = (V_1, E_1)$ dari $G = (V, E)$ dikatakan upagraf rentang jika $V_1 = V$ (yaitu
    $G_1$ mengandung semua simpul dari $G$).
11. Cut-set  
    Cut-set dari graf terhubung $G$ adalah himpunan sisi yang bila dibuang dari $G$ menyebabkan $G$ tidak terhubung. Jadi, cut-set selalu menghasilkan dua buah komponen.
12. Graf Berbobot (Weighted Graph)  
    Graf berbobot adalah graf yang setiap sisinya diberi sebuah harga (bobot).
13. Graf bipartite (Bipartite Graph)  
    Sebuah graf sederhana dikatakan bipartite jika simpul-simpulnya dapat di bagi ke dalam $2$ domain, yaitu $V_1$ dan $V_2$ berdasarkan pengelompokkan edge-edgenya.
14. Graf Isomorfik (Isomorphic Graph)  
    Dua graf dikatakan saling isomorfik jika dua buah graf tersebut sama tetapi secara
    geometri penggambarannya berbeda. Graf dapat disebut isomorfik jika memenuhi syarat:

        1. Jumlah simpul harus sama
        2. Jumlah sisi harus sama
        3. Jumlah simpul yang sama berderajat tertentu

    Namun dari ketiga syarat tersebut belum tentu benar karena harus dilihat juga secara visual.

15. Graf Planar dan Bidang (Plane Graph)
    Graf planar adalah graf yang dapat digambarkan pada bidang datar dengan sisi-sisi tidak saling memotong (bersilangan). Jika tidak, maka dinamakan graf tak planar.

    Graf bidang adalah jenis graf tertentu yang digambar sedemikian rupa sehingga sisi dan simpulnya tertanam dalam sebuah bidang, membentuk pembagian bidang tersebut menjadi beberapa daerah atau wajah. Setiap sisi adalah suatu daerah yang dibatasi oleh sisi-sisinya (yang dianggap sebagai kurva tertutup sederhana) dan pada dasarnya merupakan suatu area yang dibatasi oleh sisi-sisi graf.

    Dalam istilah yang lebih sederhana, graf bidang mengacu pada struktur graf dan apakah graf tersebut dapat digambar pada bidang tanpa sisinya bersilangan, sedangkan graf bidang mengacu pada gambar tertentu dari graf pada bidang dengan daerah atau wajah yang dibuat oleh sisinya.

## Sesi 6

### Pohon

Pohon didefinisikan sebagai graf tak berarah terhubung yang tidak mengandung
rangkaian. Sedangkan graf tak berarah tak terhubung dan tidak mengandung rangkaian
disebut pohon. Atau dengan kata lain, hutan adalah kumpulan pohon-pohon yang saling
lepas.

#### Teorema

Misalkan $G = (V, E)$ adalah graf tak-berarah sederhana dan jumlah simpulnya $n$. Maka, semua pernyataan di bawah ini adalah ekivalen:
<br>

1. $G$ adalah pohon.
2. Setiap pasang simpul di dalam $G$ terhubung dengan lintasan tunggal.
3. $G$ terhubung dan memiliki $m = n - 1$ buah sisi.
4. $G$ tidak mengandung rangkaian dan memiliki $m = n - 1$ buah sisi.
5. $G$ tidak mengandung rangkaian dan penambahan satu sisi pada graf akan membuat hanya satu rangkaian.
6. $G$ terhubung dan semua sisinya adalah jembatan

#### Pohon Rentang (Spanning Tree)

Pohon rentang dari graf terhubung adalah upagraf rentang yang berupa pohon. Pohon
rentang didapat dengan cara memutus rangkaian di dalam graf.

Setiap graf terhubung paling sedikit mempunyai satu buah pohon rentang. Graf tak
terhubung dengan $k$ komponen mempunyai $k$ buah hutan rentang yang disebut hutan
rentang.

##### Pohon Rentang Minimum

Dalam lingkup permasalahan pohon rentang minimum. Untuk mencari pohon rentang dengan total bobot minimum, cara yang paling sederhana adalah dengan mendaftarkan semua pohon rentang yang dibuat dan menghitung bobotnya. Selanjutnya dipilih total bobot yang paling kecil. Metode ini tidak efisien terutama pada graf yang cukup besar.
<br>

- Algoritma kruskal  
  Sebelum langkah pertama, yang harus dilakukan adalah sisi-sisi dari graf diurut menaik berdasarkan bobotnya mulai dari bobot terkecil sampai terbesar. Pada setiap langkah dipilih sisi dengan bobot terkecil, tetapi tidak membentuk loop dengan sisi-sisi yang sudah dipilih terdahulu (rangkaian). Langkah-langkah pada Algoritma Kruskal, adalah:

  1. $T$ masih kosong
  2. Pilih sisi $(u,v)$ dengan bobot minimum yang tidak membentuk rangkaian di $T$. Tambahkan $(u,v)$ ke dalam $T$.
  3. Ulangi langkah $2$ sebanyak $(n-1)$ kali

<br>

- Algoritma prim  
  Algoritma prim dimulai dari graf yang kosong sama sekali. Langkah-langkah pada algoritma prim dapat ditunjukkan sebagai berikut:

  1. Ambil sisi dari graf $G$ yang berbobot minimum, masukkan ke dalam $T$.
  2. Pilih sisi $(u,v)$ yang mempunyai bobot minimum dan bersisian dengan dengan simpul $T$, tetapi $(u,v)$ tidak membentuk rangkaian di $T$. Masukkan $(u,v)$ ke dalam $T$.
  3. Ulangi langkah $2$ sebanyak $(n-1)$ kali
