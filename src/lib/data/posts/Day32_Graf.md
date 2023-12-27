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

### Derajat Pada graf berarah:

$d_{in}(v) =$ derajat masuk (_in-degree_) $=$ jumlah busur yang masuk ke simpul $v$.  
$d_{out}(v) =$ derajat keluar (_out-degree_) = jumlah busur yang keluar dari simpul $v$

$\Large d(v) = d_{in}(v) + d_{out}(v)$

### Lemma Jabat Tangan

Jumlah derajat semua simpul pada suatu graf adalah genap, yaitu dua kali jumlah sisi pada graf tersebut.

Dengan kata lain, jika

G = (V, E),\ maka\ \sum\limits_{v \in V} d(v) = 2|E|


### Akibat Dari Lemma (Corollary)

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
