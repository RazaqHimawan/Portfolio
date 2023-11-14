---
title: Day 15b
description: Sifat-Sifat Relasi Dan Komposisi Relasi
date: '2023-10-21'
categories:
  - matematika diskrit
  - relasi

published: true
---

<script>
    import MermaidDiagram from '$lib/components/mermaid/MermaidDiagram.svelte';
</script>

## Table of Contents

## Sifat-Sifat Relasi Biner

### Refleksif (Reflexive)

Sebuah relasi $R$ pada himpunan $A$ disebut **refleksif** jika setiap elemen a dalam A berada dalam relasi R dengan dirinya sendiri, yaitu

$(a, a) \in R$ untuk setiap $a \in A$.

### Transitive

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

### Simetris

Sebuah relasi $R$ disebut **simetris** jika dan hanya jika untuk setiap pasangan elemen $(a, b)$ dalam himpunan $A$, jika $(a, b)$ adalah anggota dari $R$, maka $(b, a)$ juga adalah anggota dari $R$.

$a,b \in A,$ jika $(a,b) \in R$ maka $(b,a) \in R$

### Anti-Simetris (Tolak-Setangkup)

Sebuah relasi $R$ pada himpunan $A$ disebut **anti-simetris**

$a,b \in A,$ jika $(a,b) \in R \land (b,a) \in R$ hanya jika $a=b$

Jika suatu relasi biner adalah anti simetris, maka jika ia menghubungkan dua elemen yang berbeda (a dan b), maka elemen sebaliknya (b dan a) tidak boleh ada dalam relasi.

$a,b \in A,$ jika $(a,b) \in R \land a \neq b,$ maka $(b,a) \notin R$

## Mengkombinasikan Relasi

$A = \set{a,b,c}$  
$B = \set{a,b,c,d}$

$R_1 = \set{(a,a),(b,b),(c,c)}$  
$R_2 = \set{(a,a),(a,b),(a,c),(a,d)}$

$R_1 \cap R_2 = \set{(a,a)}$  
$R_1 \cup R_2 = \set{(a,a),(b,b),(c,c),(a,b),(a,c),(a,d)}$  
$R_1 - R_2 = \set{(b,b),(c,c)}$  
$R_2 - R_1 = \set{(a,b),(a,c),(a,d)}$  
$R_1 \oplus R_2 = \set{(b,b),(c,c),(a,b),(a,c),(a,d)}$

## Komposisi Relasi

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
