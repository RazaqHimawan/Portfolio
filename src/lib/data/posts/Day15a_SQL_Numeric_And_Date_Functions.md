---
title: Day 15a
description: SQL Numeric Dan Date Functions
date: '2023-10-21'
categories:
  - sql

published: true
---

## Table of Contents

## SQL Numeric Functions

### Menggunakan Fungsi Operasi Aritmatika

```sql
SELECT angka_1 (+ | - | * | /) angka_2;
```

### Mengembalikan Nilai Absolut

```sql
SELECT ABS(angka);
```

### Mengembalikan Sisa Hasil Pembagian

```sql
SELECT MOD(angka yang akan dibagi, pembagi);
```

### Mengembalikan Hasil Pangkat

```sql
SELECT POW(angka dasar, eksponen);
```

### Mengembalikan Nilai Integer Dibulatkan Ke Bawah

```sql
SELECT FLOOR(angka);
```

### Mengembalikan Nilai Integer Dibulatkan Ke Atas

```sql
SELECT CEIL(angka);
```

### Membulatkan Bilangan Sesuai Jumlah

```sql
SELECT ROUND(angka, desimal);
```

### Memotong Bilangan Sesuai Jumlah

```sql
SELECT TRUNCATE(angka, desimal);
```

### Mengembalikan Nilai Random Dari angka lebih dari 0 dan kurang dari 1

```sql
SELECT RAND();
```

### Mengembalikan Nilai Terbesar Dari Kumpulan Nilai

```sql
SELECT GREATEST(angka_1, angka_2, angka_3, ...);
```

### Mengembalikan Nilai Terbesar Dari Suatu Ekspresi

```sql
SELECT MAX(nama_field) FROM nama_table;
```

### Fungsi Lain

COUNT: Mengembalikan jumlah records yang dikembalikan oleh kueri pemilihan.

SUM: Menghitung jumlah sekumpulan nilai.

MIN: Mengembalikan nilai minimum dalam sekumpulan nilai.

AVG: Mengembalikan nilai rata-rata suatu ekspresi.

```sql
COUNT(ekspresi), SUM(ekspresi), MIN(ekspresi), AVG(ekspresi)
```

## SQL Date Functions

### Mengembalikan Tanggal Dan Waktu Saat Ini

```sql
SELECT NOW();
```

### Mengembalikan Tanggal Saat Ini

```sql
SELECT CURDATE()
```

### Mengembalikan Jam Saat Ini

```sql
SELECT CURTIME()
```

### Mengembalikan Jam

```sql
SELECT HOUR('17:10:15'); -- 17
```

### Mengembalikan Menit

```sql
SELECT MINUTE('17:10:15'); -- 10
```

### Mengembalikan Detik

```sql
SELECT SECOND('17:10:15'); -- 15
```

### Mengembalikan Tahun

```sql
SELECT YEAR('2023-10-15'); -- 2023
```

### Mengembalikan Bulan

```sql
SELECT MONTH('2023-10-15'); -- 10
```

### Mengembalikan Hari

```sql
SELECT DAY('2023-10-15'); -- 15
```

### Memformat Tanggal Seperti Yang Ditentukan.

```sql
SELECT DATE_FORMAT("2017-06-15", "%M %d %Y");
```

Format untuk tanggal:

| Format | Deskripsi                                                                                            |
| ------ | ---------------------------------------------------------------------------------------------------- |
| %a     | Singkatan nama hari (Sun to Sat)                                                                     |
| %b     | Singkatan nama bulan (Jan to Dec)                                                                    |
| %c     | Nama bulan numerik (0 to 12)                                                                         |
| %D     | Hari dalam sebulan sebagai nilai numerik, diikuti dengan akhiran (1st, 2nd, 3rd, ...)                |
| %d     | Hari dalam sebulan sebagai nilai numerik (01 to 31)                                                  |
| %e     | Hari dalam sebulan sebagai nilai numerik (0 to 31)                                                   |
| %f     | Mikrodetik (000000 to 999999)                                                                        |
| %H     | Jam (00 to 23)                                                                                       |
| %h     | Jam (00 to 12)                                                                                       |
| %I     | Jam (00 to 12)                                                                                       |
| %i     | Menit (00 to 59)                                                                                     |
| %j     | Hari dalam setahun (001 to 366)                                                                      |
| %k     | Jam (0 to 23)                                                                                        |
| %l     | Jam (1 to 12)                                                                                        |
| %M     | Nama bulan lengkap (January to December)                                                             |
| %m     | Nama bulan sebagai nilai numerik (00 to 12)                                                          |
| %p     | AM atau PM                                                                                           |
| %r     | Waktu dalam format 12 jam AM atau PM (hh:mm:ss AM/PM)                                                |
| %S     | Detik (00 to 59)                                                                                     |
| %s     | Detik (00 to 59)                                                                                     |
| %T     | Waktu dalam format 24 jam (hh:mm:ss)                                                                 |
| %U     | Minggu dimana Minggu adalah hari pertama dalam seminggu (00 to 53)                                   |
| %u     | Minggu dimana Senin adalah hari pertama dalam seminggu (00 to 53)                                    |
| %V     | Minggu dimana Minggu adalah hari pertama dalam seminggu (01 to 53). Digunakan dengan %X              |
| %v     | Minggu dimana Senin adalah hari pertama dalam seminggu (01 to 53). Digunakan dengan %x               |
| %W     | Nama hari secara lengkap (Sunday to Saturday)                                                        |
| %w     | Hari dalam seminggu dengan Minggu=0 dan Sabtu=6                                                      |
| %X     | Tahun untuk minggu dimana hari Minggu adalah hari pertama dalam minggu tersebut. Digunakan dengan %V |
| %x     | Tahun untuk minggu dimana Senin adalah hari pertama dalam minggu tersebut. Digunakan dengan %v       |
| %Y     | Tahun sebagai nilai numerik 4 digit                                                                  |
| %y     | Tahun sebagai nilai numerik 2 digit                                                                  |

### Mengembalikan Nomor Hari Untuk Tanggal Tertentu.

| No. | Hari      |
| --- | --------- |
| 0   | Monday    |
| 1   | Tuesday   |
| 2   | Wednesday |
| 3   | Thursday  |
| 4   | Friday    |
| 5   | Saturday  |
| 6   | Sunday    |

<br />

```sql
SELECT WEEKDAY('2023-10-23'); -- 0
```

### Mengembalikan Urutan Minggu Untuk Tanggal Tertentu (angka dari 0 hingga 53).

```sql
SELECT WEEK('2023-10-23',opsional hari pertama dalam seminggu); -- 43
```

### Menjumlahkan Waktu

```sql
SELECT ADDTIME(tanggal_waktu, waktu_tambahan);
```

### Mengurangi Waktu

```sql
SELECT ADDTIME(tanggal_waktu, jarak_waktu);
```

### Mengembalikan Perbedaan Antara Dua Ekspresi Waktu/Tanggal.

```sql
SELECT TIMEDIFF(waktu_1, waktu_2)
```

### Mengembalikan Jumlah Hari Antara Dua Nilai Tanggal.

```sql
SELECT DATEDIFF(tanggal_1, tanggal_2)
```
