---
title: UAS Recap PRDBMS
description: UAS Recap Praktikum DBMS
date: '2024-01-09'
categories:
  - UAS
  - recap
  - Praktikum DBMS

published: true
---

## Table of Contents

## Sesi 1

### SQL JOIN

JOIN digunakan untuk menggabungkan baris dari dua tabel atau lebih, berdasarkan kolom terkait di antara keduanya.

#### INNER JOIN

Kata kunci INNER JOIN memilih record yang memiliki nilai yang cocok di kedua tabel.

```sql
SELECT nama_kolom
FROM tabel1
INNER JOIN tabel2
ON tabel1.nama_kolom = table2.nama_kolom;
```

#### LEFT JOIN

Kata kunci LEFT JOIN mengembalikan semua catatan dari tabel kiri (tabel1), dan catatan yang cocok dari tabel kanan (tabel2). Hasilnya adalah 0 catatan dari sisi kanan, jika tidak ada yang cocok.

```sql
SELECT nama_kolom
FROM tabel1
LEFT JOIN tabel2
ON tabel1.nama_kolom = table2.nama_kolom;
```

Catatan: Di beberapa database LEFT JOIN disebut LEFT OUTER JOIN.

#### RIGHT JOIN

Kata kunci RIGHT JOIN mengembalikan semua catatan dari tabel kanan (tabel2), dan catatan yang cocok dari tabel kiri (tabel1). Hasilnya adalah 0 catatan dari sisi kiri, jika tidak ada yang cocok.

```sql
SELECT nama_kolom
FROM tabel1
RIGHT JOIN tabel2
ON tabel1.nama_kolom = table2.nama_kolom;
```

Catatan: Di beberapa database RIGHT JOIN disebut RIGHT OUTER JOIN.

#### FULL JOIN

Kata kunci FULL OUTER JOIN mengembalikan semua record ketika ada kecocokan pada record tabel kiri (tabel1) atau kanan (tabel2).

```sql
SELECT nama_kolom
FROM tabel1
FULL OUTER JOIN tabel2
ON tabel1.nama_kolom = table2.nama_kolom
WHERE kondisi;
```

#### SELF JOIN

SELF JOIN adalah gabungan biasa, namun tabelnya digabungkan dengan dirinya sendiri.

```sql
SELECT nama_kolom
FROM tabel1 T1, tabel1 T2
WHERE kondisi;
```

T1 dan T2 adalah alias tabel berbeda untuk tabel yang sama.

## Sesi 2

### Stored Procedure

Stored Procedure adalah kode SQL yang telah disiapkan dan dapat Anda simpan, sehingga kode tersebut dapat digunakan kembali berulang kali.

Jadi, jika Anda memiliki kueri SQL yang Anda tulis berulang kali, simpan sebagai Stored Procedure, lalu panggil saja untuk menjalankannya.

Anda juga dapat meneruskan parameter ke Stored Procedure, sehingga Stored Procedure dapat bertindak berdasarkan nilai parameter yang diteruskan.

#### Sintaks

Membuat Procedure.

```sql
CREATE PROCEDURE nama_prosedur()
BEGIN
    sql_statement;
END;
```

Membuat Procedure dengan parameter.

```sql
CREATE PROCEDURE nama_prosedur(
    IN param1 INT
)
BEGIN
    SELECT *
    FROM tabel
    WHERE kolom1 = param1 ;
END;
```

Menjalankan Procedure.

```sql
-- Tanpa parameter
CALL nama_prosedur();

-- Dengan parameter
CALL nama_prosedur(nilai_param);
```

## Sesi 3

### SQL Trigger

Trigger adalah prosedur tersimpan dalam database yang secara otomatis dipanggil setiap kali peristiwa khusus dalam database terjadi.

#### Perbedaan Trigger dan Stored Procedure

- Pemicu tidak dapat dipanggil atau dijalankan secara manual.
- Tidak ada kemungkinan pemicu akan menerima parameter.
- Suatu transaksi tidak dapat dilakukan atau dibatalkan di dalam pemicu.

#### Sintaks

```sql
CREATE TRIGGER nama_trigger
[BEFORE | AFTER]
{INSERT | UPDATE | DELETE}
ON nama_tabel
FOR EACH ROW
trigger_body
```
