---
title: Day 25a
description: Menggunakan Fungsi SQL
date: '2023-11-18'
categories:
  - sql

published: true
---

## Table of Contents

## Fungsi UPPER()

Mengubah string menjadi huruf kapital

```sql
SELECT UPPER(nama_kolom) FROM nama_tabel;
```

## Penggunaan dua fungsi TRUNCATE dan CEIL

Fungsi TRUNCATE() memotong angka ke jumlah tempat desimal yang ditentukan.

Fungsi CEIL() mengembalikan nilai bilangan bulat terkecil yang lebih besar atau sama dengan angka.

```sql
SELECT TRUNCATE(CEIL(nama_kolom), desimal) FROM nama_tabel;
```
