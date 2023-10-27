---
title: Day 16
description: Transformasi Dari ERD ke Database Relasional
date: '2023-10-26'
categories:
  - database
  - ERD
published: true
---

<script>
    import MermaidDiagram from '$lib/components/mermaid/MermaidDiagram.svelte';
</script>

## Table of Contents

## Transformasi Umum/Dasar

Ada beberapa aturan umum dalam pemetaan Model Data ERD (Level Konseptual) menjadi Basis Data Fisik (Level Fisik)

<br />

### Setiap Himpunan Entitas Akan Diimplementasikan Sebagai Sebuah Tabel

<MermaidDiagram>
{`erDiagram
MAHASISWA {
string nim PK
string nama_mhs
string alamat
date tanggal_lahir
}
`}
</MermaidDiagram>

| nim | nama_mhs | alamat | tanggal_lahir |
| --- | -------- | ------ | ------------- |
|     |          |        |               |
|     |          |        |               |

### Relasi Dengan Kardinalitas One To One

- Direpresentasikan dalam bentuk penambahan/ penyertaan atribut-atribut relasi ke tabel yang mewakili salah satu dari kedua entitas (penggabungan relasi ke salah satu entitas).
- Tidak ada keharusan ke entitas yang mana relasi tersebut harus digabungkan.
- Relasi dengan Derajat Relasi 1-1 (one to one) direpresentasikan dalam bentuk penambahan/penyertaan atribut-atribut relasi ke tabel yg mewakili salah satu dari kedua himpunan entitas.

<MermaidDiagram>
{`erDiagram
DOSEN {
  string kode_dosen PK
  string nama_dosen
  string alamat
}
JURUSAN {
string kode_jurusan PK
string nama_jurusan
string[] kode_dosen FK
}
DOSEN ||--|| JURUSAN : mengepalai
`}
</MermaidDiagram>

Pedoman yang bisa digunakan :

- Lihat derajat relasi minimumnya dengan memilih derajat relasi minimum yang lebih kecil.
- Jika derajat relasi minimumnya sama (sama-sama berderajat nol atau satu) maka relasi lebih baik dileburkan ke tabel yang jumlah atribut yang lebih sedikit

### Relasi Dengan Kardinalitas One To Many

Lain halnya dengan tingkat hubungan satu ke banyak , relasi yang ada harus digabungkan dengan entitas pada pihak yang Banyak (Many)

Relasi dengan Derajat Relasi 1-n (one to many) direpresentasikan dalam bentuk penambahan/penyertaan atribut-atribut relasi ke tabel yg mewakili salah satu dari kedua himpunan entitas.

<MermaidDiagram>
{`erDiagram
DOSEN {
  string kode_dosen PK
  string nama_dosen
  string alamat
}
KULIAH {
string kode_kuliah PK
string nama_kuliah
int sks
int semester
string[] kode_dosen FK
string[] tempat FK
date[] waktu FK
}
DOSEN ||--|{ KULIAH : mengajar
`}
</MermaidDiagram>

### Relasi Dengan Kardinalitas Many To Many

### Relasi Dengan Kardinalitas Many To Many

Relasi dengan derajat N-N (banyak ke banyak) akan diwujudkan dalam bentuk tabel (file data) khusus yang memiliki field (foreign key) yang berasal dari key-key dari entitas yang dihubungkannya.

<MermaidDiagram>
{`erDiagram
MAHASISWA {
  string nim PK
  string nama_mhs
  string alamat
  date tanggal_lahir
}
KULIAH {
string kode_kuliah PK
string nama_kuliah
int sks
int semester
}
mempelajari {
  string[] nim FK
  string[] kode_kuliah FK
  float indeks_nilai
}
MAHASISWA }|--|{ KULIAH : mempelajari
`}
</MermaidDiagram>

### Himpunan Entitas Lemah Dan Sub Entitas

<MermaidDiagram>
{`erDiagram
MAHASISWA {
  string nim PK
  string nama_mhs
  string alamat
  date tanggal_lahir
}
ORANGTUA {
  string nim FK
  string nama_ortu UK
  string alamat_ortu
}
HOBI {
  string nim FK
  string hobbi UK
}
MAHASISWA }|..|{ ORANGTUA : memiliki
MAHASISWA }|..|{ HOBI : menyenangi
`}
</MermaidDiagram>

<MermaidDiagram>
{`erDiagram
DOSEN {
  string kode_dosen PK
  string nama_dosen
  string alamat
}
DOSEN_TETAP {
  string nik
  string pangkat
  date tanggal_masuk
}
DOSEN_TIDAK_TETAP {
  string nama_kantor
  string alamat_kantor
}
DOSEN ||--|| DOSEN_TETAP : "IS A"
DOSEN ||--|| DOSEN_TIDAK_TETAP : "IS A"
`}
</MermaidDiagram>

<MermaidDiagram>
{`erDiagram
MAHASISWA {
  string nim PK
  string nama_mhs
  string alamat
  date tanggal_lahir
  string[] prod_studi UK
}
MAHASISWA }|..|{ MAHASISWA_D3 : "IS A"
MAHASISWA }|..|{ MAHASISWA_S1 : "IS A"
`}
</MermaidDiagram>
