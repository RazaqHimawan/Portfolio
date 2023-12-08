---
title: Day 30
description: Bentuk Normalisasi
date: '2023-12-07'
categories:
  - database

published: true
---

## Table of Contents

## Bentuk Normalisasi

### First Normal Form $(1^{st} NF)$

Kriteria $(1^{st} NF)$:

- Tidak ada atribut (kolom) pada tabel yang bersifat multivalue.
- Tidak memiliki lebih dari satu atribut dengan domain yang sama (dalam satu tabel memiliki lebih dari 1 kolom yang digunakan untuk menyimpan data yang jenisnya sama).

### Second Normal Form ($2^{nd} NF$ )

Kriteria $2^{nd} NF$:

- Memenuhi $(1^{st} NF)$
- Tidak Ada Partial Functional Dependency
- Partial functional dependency terjadi bila $(B,C)$ adalah candidate key dan $B \to A$

contoh:

nim  
nama_mhs  
kd_jur  
nama_jur  
kode_mk  
sks  
nilai

- nim dan kode_mk adalah candidate key.
- berarti terjadi PFD :
  - $nim, kode\_mk \to nama\_mhs, kd\_jur, nama\_jur$
- Solusinya adalah dengan melakukan dekomposisi tabel dengan tetap menjaga agar datanya tetap Konsisten.
- Dari tabel tersebut ditemukan :
  - FD 1: $nim \to nama\_mhs, kd\_jur, nama\_jur$
  - FD 2: $kode\_mk \to nama\_mk, sks$
  - FD 3: $nim,kode\_mk \to nilai$
- Gunakan FD diatas menjadi masing-masing tabel.

### Third Normal Form ($3^{rd} NF$ )

Kriteria $3^{rd} NF$:

- Memenuhi $(2^{nd} NF)$
- Tidak ada TFD $(A \to B, B \to C, maka\ A \to C)$

contoh:

nim
nama_mhs
kd_jur
nama_jur

- nim dan kd_jur merupakan candidate key.
- $nim \to nama\_mhs, kode\_jur$
- $kd\_jur \to nama\_jur$
- Berarti terjadi TFD :
  - $nim \to nama\_jur\ melalui\ kd\_jur$
- Solusinya adalah dengan melakukan dekomposisi tabel Seperti berikut :
  - FD 1 : $nim \to nama\_mhs, kode\_jur$
  - FD 2 : $kd\_jur \to nama_jur$
- Gunakan FD diatas menjadi masing-masing tabel.
