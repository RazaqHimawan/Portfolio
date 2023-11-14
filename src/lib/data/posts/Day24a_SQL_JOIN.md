---
title: Day 24a
description: SQL JOIN
date: '2023-11-11'
categories:
  - sql

published: true
---

## Table of Contents

## SQL JOIN

JOIN digunakan untuk menggabungkan baris dari dua tabel atau lebih, berdasarkan kolom terkait di antara keduanya.

### INNER JOIN

Kata kunci INNER JOIN memilih record yang memiliki nilai yang cocok di kedua tabel.

```sql
SELECT nama_kolom
FROM tabel1
INNER JOIN tabel2
ON tabel1.nama_kolom = table2.nama_kolom;
```

### LEFT JOIN

Kata kunci LEFT JOIN mengembalikan semua catatan dari tabel kiri (tabel1), dan catatan yang cocok dari tabel kanan (tabel2). Hasilnya adalah 0 catatan dari sisi kanan, jika tidak ada yang cocok.

```sql
SELECT nama_kolom
FROM tabel1
LEFT JOIN tabel2
ON tabel1.nama_kolom = table2.nama_kolom;
```

Catatan: Di beberapa database LEFT JOIN disebut LEFT OUTER JOIN.

### RIGHT JOIN

Kata kunci RIGHT JOIN mengembalikan semua catatan dari tabel kanan (tabel2), dan catatan yang cocok dari tabel kiri (tabel1). Hasilnya adalah 0 catatan dari sisi kiri, jika tidak ada yang cocok.

```sql
SELECT nama_kolom
FROM tabel1
RIGHT JOIN tabel2
ON tabel1.nama_kolom = table2.nama_kolom;
```

Catatan: Di beberapa database RIGHT JOIN disebut RIGHT OUTER JOIN.

### FULL JOIN

Kata kunci FULL OUTER JOIN mengembalikan semua record ketika ada kecocokan pada record tabel kiri (tabel1) atau kanan (tabel2).

```sql
SELECT nama_kolom
FROM tabel1
RIGHT JOIN tabel2
ON tabel1.nama_kolom = table2.nama_kolom
WHERE kondisi;
```

### SELF JOIN

SELF JOIN adalah gabungan biasa, namun tabelnya digabungkan dengan dirinya sendiri.

```sql
SELECT nama_kolom
FROM tabel1 T1, tabel1 T2
WHERE kondisi;
```

T1 dan T2 adalah alias tabel berbeda untuk tabel yang sama.
