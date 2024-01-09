---
title: Day 35
description: Penerapan Bentuk Normalisasi
date: '2024-01-04'
categories:
  - database

published: true
---

## Table of Contents

## Penerapan Bentuk Normalisasi

Perancangan basis data dapat dimulai dari dokumen dasar yang dipakai dalam sistem.

1. **Step I Bentuk Unnormalized**  
   Bentuklah menjadi tabel unnormal, dengan mencantumkan semua field data yang ada.

2. **Step II Bentuk Normal Kesatu**
   Bentuklah menjadi normal kesatu dengan memisahkan data pada field-field yang tepat dan bernilai atomic, juga seluruh record harus lengkap adanya. Bentuk file adalah flat file.
3. **Step III Bentuk Normal Kedua**
   Pembentukan normal kedua dengan mencari kunci-kunci field yang dapat dipakai sebagai patokan dalam pencarian dan sifatnya unik.
4. **Step IV Bentuk Normal Ketiga**
   Bentuk normal ketiga mempunyai sifat syarat setiap tabel tidak mempunyai field yang bergantung transitif, harus bergantung penuh pada kunci utama.
5. **Step V Hubungan Relasi antar tabel**

   - **Identifikasi Kunci Utama**: Pastikan setiap tabel memiliki kunci utama yang unik untuk mengidentifikasi setiap baris data secara eksklusif dalam tabel tersebut.

   - **Penggunaan Kunci Asing (Foreign Keys)**: Tambahkan kunci asing ke dalam tabel-tabel yang membutuhkan referensi atau ketergantungan pada data dari tabel lain. Kunci asing ini menghubungkan kolom dalam satu tabel dengan kunci utama yang sesuai di tabel lain.
