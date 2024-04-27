---
title: Day 61
description: Pengulangan
date: '2024-4-22'
categories:
  - Logika dan Algoritma
published: true
---

## Table of Contents

## Pengulangan

### While

Bentuk umum:

```
while kondisi do
  pernyataan
endwhile
```

pernyataan akan dilaksanakan berulangkali selama kondisi bernilai true. Jika kondisi bernilai false, badan pengulangan tidak akan dimasuki, yang berarti pengulangan selesai.

Kondisi : [true,false]  
Operator perbandingan : $<, >, \le, \ge, =, \neq$  
Pernyataan : notasi algoritma

#### Contoh

```
PROGRAM tulis_algoritma
DEKLARASI
  i: int
ALGORITMA
  i = 1
  while i <= 10 do
    write("Algoritma")
    i++
  endwhile
```

### For

Untuk mengetahui pengulangan yang akan dilakukan diperlukan pengubah (variabel) dan pencacah (counter).

Pengubah ini nilainya selalu bertambah satu setiap kali pengulangan dilakukan.

Jika pencacah pengulangan sudah mencapai jumlah yang dispesifikasikan, maka proses pengulangan berhenti.

Pernyataan FOR digunakan untuk :

- Menghasilkan pengulangan sejumlah kali yang telah dispesifikasikan.
- Jumlah pengulangan diketahui atau dapat ditentukan sebelum eksekusi.

Bentuk umum:

```
// C-style
for (i = 0;i < 10;i++) {
    pernyataan
}

// VB
for variabel = nilai_awal to nilai_akhir do
  pernyataan
endfor
```
