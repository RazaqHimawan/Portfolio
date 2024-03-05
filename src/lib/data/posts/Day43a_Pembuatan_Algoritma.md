---
title: Day 43a
description: Pembuatan Algoritma
date: '2024-3-04'
categories:
  - logika dan algoritma
published: true
---

<script>
    import MermaidDiagram from '$lib/components/mermaid/MermaidDiagram.svelte';
</script>

## Table of Contents

## Struktur Dasar Algoritma

Algoritma adalah urutan dan langkah-langkah untuk menyelesaikan masalah dalam pemograman secara sistematis dan terperinci.

Struktur dasar algoritma dibagi menjadi tiga bagian:

1. Runtunan/sekuensial (Sequential)
2. Percabangan
3. Perulangan

### Notasi Algoritma

Menurut Rinaldi Munir dalam buku Algoritma dan Pemrograman (1997) notasi algoritma adalah desain berisi urutan langkah-langkah pencapaian solusi yang tidak tergolong bahasa pemrograman apapun.

Secara umum notasi algoritma terdiri dari tiga jenis:

#### Kalimat Deskriptif

Deklarasi:

- Jari_jari = real (tipe data bilangan termasuk bilangan desimal maupun pecahan)
- Luas = real
- Keliling = real
- $\pi = 3.14$ (konstanta)

Deskripsi:

1. Baca jari_jari lingkaran
2. Hitung Luas = $\pi r^2$
3. Tampilkan Luas ke layar
4. Hitung Keliling = $2\pi r$
5. Tampilkan Keliling ke layar
6. Selesai

#### Flowchart

<MermaidDiagram>
{`
  flowchart TD
    start([start]) -->
    input[/
    jumlah_barang
    harga_satuan/] -->
    condition{jumlah_barang > 100?} -->
    proses1(Hitung
    harga = jumlah_barang * harga_satuan) -->
    output[/Print harga/]
    condition{jumlah_barang > 100?} -->
    proses2(Hitung
    harga = 90% * jumlah_barang * harga_satuan) -->
    output[/Print harga/] -->
    end1([end])
`}
</MermaidDiagram>

#### Pseudocode

```
(Judul Program)
Algoritma nilai;

(Deklarasi)
Nilai = real

(Algoritma)
Begin
Output (“masukkan nilai”)
Input (“nilai”)
If 100 > nilai > 90 then Output “A: memuaskan”
Else If 90 > nilai > 80 then Output “B: baik”
Else If 80 > nilai > 70 then Output “C: cukup”;
Else If 70 > nilai > 60 then Output “D: kurang”;
Else If 60 > nilai then Output “E: sangat kurang”;
End
```
