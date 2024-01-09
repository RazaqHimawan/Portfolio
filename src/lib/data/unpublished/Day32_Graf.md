---
title: Day 32
description: Graf
date: '2023-12-16'
categories:
  - matematika diskrit
  - graf

published: true
---

<script>
    import MermaidDiagram from '$lib/components/mermaid/MermaidDiagram.svelte';
</script>

## Table of Contents

## Graf

Graf adalah kumpulan vertex (disebut juga node) dan sisi (edge) yang menghubungkan pasangan simpul. Ini adalah cara untuk merepresentasikan hubungan antara berbagai elemen secara visual.

Komponen pada graf:

- Simpul (node atau vertex): Ini adalah titik atau entitas dalam grafik.
- sisi (edge): Ini adalah garis atau hubungan antar simpul. Mereka mewakili hubungan atau koneksi antar entitas.

### Definisi Graf

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

### Jenis-Jenis Graf

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

### Contoh Penerapan Graph

1. Rangkaian Listrik.
2. Isomer senyawa kimia.
3. Transaksi konkuren pada basis data terpusat.
4. Pengujian program.
5. Teori otomata.

### Terminologi Graf

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

#### Derajat Pada graf berarah:

$d_{in}(v) =$ derajat masuk (_in-degree_) $=$ jumlah busur yang masuk ke simpul $v$.  
$d_{out}(v) =$ derajat keluar (_out-degree_) = jumlah busur yang keluar dari simpul $v$

$\Large d(v) = d_{in}(v) + d_{out}(v)$

#### Lemma Jabat Tangan

Jumlah derajat semua simpul pada suatu graf adalah genap, yaitu dua kali jumlah sisi pada graf tersebut.

Dengan kata lain, jika

$G = (V, E),\ maka\ \sum\limits_{v \in V} d(v) = 2|E|$

#### Akibat Dari Lemma (Corollary)

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
