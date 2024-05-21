---
title: Day 88
description: Binary Tree
date: '2024-5-21'
categories:
  - struktur data
published: true
---

<script>
    import MermaidDiagram from '$lib/components/mermaid/MermaidDiagram.svelte';
</script>

## Table of Contents

## Binary Tree

Binary Tree adalah sebuah pengorganisasian secara hirarki dari beberapa buah simpul, dimana masing-masing simpul tidak mempunyai anak lebih dari 2.

Simpul yang berada di bawah sebuah simpul dinamakan **anak (child)** dari simpul tersebut.

Simpul yang berada di atas sebuah simpul dinamakan **induk (parents)** dari simpul tersbut.

### Contoh

<MermaidDiagram>
{`
graph TD
A --> B
A --> C
B --> D
B --> E
C --> F
C --> G
C --> H --> I
`}
</MermaidDiagram>

### Istilah dalam Tree

| Term     | Definition                                                                                                                                                |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Node     | Sebuah elemen dalam sebuah tree; berisi sebuah informasi                                                                                                  |
| Parent   | Node yang bedara di atas node lain secara langsung, B adalah parent dari D dan E                                                                          |
| Child    | Cabang langsung dari sebuah node; D dan E merupakan children dari B                                                                                       |
| Root     | Node teratas yang tidak punya parent                                                                                                                      |
| Sibling  | Sebuah node lain yang memiliki parent yang sama; Sibling dari B adalah C karena memiliki parent yang sama yaitu A                                         |
| Leaf     | Sebuah node yang tidak memiliki children (DEFGI). Leaf biasa disebut sebagai external node, sedangkan node selainnya disebut sebagai internal node (BACH) |
| Level    | Semua node yang memiliki jarak yang sama dari root \\ `A -> Level 0; BC -> Level 1; DEFGH -> Level 2; I -> Level 3`                                       |
| Depth    | Jumlah level yang ada dalam tree                                                                                                                          |
| Complete | Semua parent memiliki children yang penuh                                                                                                                 |
| Balanced | Semua subtree memiliki depth yang sama                                                                                                                    |

### Struktur Binary Tree

Masing-masing simpul dalam binary tree terdiri dari tiga bagian yaitu sebuah data dan dua buah pointer yang dinamakan pointer kiri dan kanan.

<div class="my-8"></div>

|      |      |       |
| ---- | ---- | ----- |
| Kiri | Info | Kanan |

### Deklarasi Tree

```c
typedef char typeInfo;
typedef struct Node tree;

struct Node {
  typeInfo infol
  tree *kiri; /* Cabang kiri */
  tree *kanan; /* Cabang kanan */
}
```

### Pembentukan Tree

- Dapat dilakukan dengan dua cara: rekursif dan non rekursif
- Perlu memperhatikan kapan suatu node akan dipasang sebagai node kiri dan kapan sebagai node kanan.
- Misalnya ditentukan, node yang berisi info yang nilainya **lebih besar** dari parent akan ditempatkan di sebelah kanan dan yang **lebih kecil** di sebelah kiri.
- Sebagai contoh jika kita memiliki informasi **HKACBLJ** maka pohon biner yang terbentuk

#### Langkah-Langkah Pembentukan Binary Tree

1. Siapkan node baru

   - Alokasikan memorinya
   - masukkan infonya
   - set pointer kiri dan kan = NULL

2. Sisipkan pada posisi yang tepat
   - **Penelusuran** `->` untuk menentukan posisi yang tepat; info yang nilainya lebih besar dari parent akan ditelusuri di sebelah kanan, yang lebih kecil dari parent akan ditelusuri di sebelah kiri.
   - **penempatan** `->` info yang nilainya lebih dari parent akan ditempatkan di sebelah kanan, yang lebih kecil di sebelah kiri.
