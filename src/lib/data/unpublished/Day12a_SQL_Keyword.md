---
title: Day 12a
description: SQL Update, Delete, Select, Order By And Pattern Matching
date: '2023-10-14'
categories:
  - sql

published: true
---

## Table of Contents

## UPDATE

Berfungsi untuk mengedit suatu record atau data dari suatu tabel.

```sql
UPDATE nama_tabel SET nama_kolom = 'nilai_baru' WHERE kondisi;
```

## DELETE

Berfungsi untuk menghapus suatu record atau data dari tabel.

```sql
DELETE FROM nama_tabel WHERE kondisi;
```

## SELECT

Berfungsi untuk membaca informasi dari tabel.

```sql
SELECT nama_kolom, * FROM nama_tabel WHERE kondisi;
```

## ORDER BY

Berfungsi untuk mengurutkan data hasil perintah SELECT.

ASC: Ascending  
DESC: Descending

```sql
SELECT * FROM nama_tabel ORDER BY nama_kolom ASC|DESC;
```

## PATTERN MATCHING

Berfungsi untuk proses pembacaan data berdasarkan ekspresi tertentu. Gunakan perintah _LIKE_ atau _NOT LIKE_.

<br />

| Pattern | Deskripsi                                        |
| :-----: | ------------------------------------------------ |
|   A%    | Mencari dengan huruf awalan 'A'                  |
|   %B    | Mencari dengan huruf akhiran 'B'                 |
|   %C%   | Mencari yang mengandung huruf 'C'                |
|   \_    | Wildcard, untuk merepresentasikan satu karakter. |

<br />

```sql
SELECT * FROM nama_tabel WHERE nama_kolom LIKE pattern;
```
