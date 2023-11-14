---
title: Day 9a
description: SQL String Functions Dan IF
date: '2023-10-07'
categories:
  - sql

published: true
---

## Table of Contents

## SQL String Functions

### Mengubah String Menjadi Huruf Kecil

```sql
SELECT LOWER(nama_field) FROM nama_tabel;
```

### Mengubah String Menjadi Huruf Besar

```sql
SELECT UPPER(nama_field) FROM nama_tabel;
```

### Membalik String

```sql
SELECT REVERSE(nama_field) FROM nama_tabel;
```

### Menduplikasi String

```sql
SELECT REPEAT(nama_field, berapa_banyak: INT) FROM nama_tabel;
```

### Mengganti String

x: string yang akan diganti  
y: ke string yang baru

```sql
SELECT REPLACE(nama_field, x, y) FROM nama_tabel;
```

### Menghitung Panjang String

```sql
SELECT LENGTH(nama_field) FROM nama_tabel;
```

### Menghilangkan Spasi di Awal dan di Akhir String

```sql
SELECT TRIM(nama_field) FROM nama_tabel;
```

### Mengambil String Dari Sebelah Kiri

```sql
SELECT LEFT(nama_field, berapa_banyak: INT) FROM nama_tabel;
```

### Mengambil String Dari Sebelah Kanan

```sql
SELECT RIGHT(nama_field, berapa_banyak: INT) FROM nama_tabel;
```

### Mengambil String Nama Dari Tengah

x: urutan ke-n
y: sebanyak n

```sql
SELECT MID(nama_field, x, y) FROM nama_tabel;
```

### Menggabungkan String

```sql
SELECT CONCAT(string ke 1, string ke 2, ...) FROM nama_tabel;
```

## SQL IF

### Fungsi IF dengan Satu Syarat

```sql
=IF(kondisi, true, false)
```

### Fungsi IF dengan Kriteria Lebih dari Satu

AND (Semua Kondisi Harus Benar)

```sql
=IF(kondisi_1 AND kondisi_n, true, false)
```

OR (Salah Satu Kondisi Boleh Benar)

```sql
=IF(kondisi_1 OR kondisi_n, true, false)
```
