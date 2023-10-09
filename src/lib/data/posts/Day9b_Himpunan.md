---
title: Day 9b
description: Himpunan
date: '2023-10-07'
categories:
  - matematika diskrit
  - himpunan

published: true
---

## Table of Contents

## Apa itu Himpunan (Set)?

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

### Konsep dasar himpunan

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
