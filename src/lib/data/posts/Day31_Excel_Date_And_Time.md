---
title: Day 31
description: MS Excel Date And Time
date: '2023-12-15'
categories:
  - aplikasi komputer
  - ms excel

published: true
---

## Table of Contents

## Excel Date Functions

### Date

Untuk membuat tanggal dalam excel, bisa menggunakan fungsi Date.

```js
=DATE(year, month, day)
```

### Today

Mengembalikan tanggal saat ini.

```js
=TODAY()
```

### NOW

Mengembalikan tanggal dan waktu saat ini.

```js
=NOW()
```

### YEAR

Mengekstrak tahun dari tanggal tertentu.

```js
=YEAR(date)
```

### MONTH

Mengekstrak bulan dari tanggal tertentu.

```js
=MONTH(date)
```

### DAY

Mengekstrak hari dari tanggal tertentu.

```js
=DAY(date)
```

### DATEDIF()

Menghitung perbedaan antara dua tanggal dalam tahun, bulan, atau hari.

```js
=DATEDIF(start_date, end_date, unit)
```

unit: Menentukan satuan pengukuran hasil (seperti "Y" untuk tahun, "M" untuk bulan, atau "D" untuk hari).

## Excel Time Functions

### TIME

Membuat nilai waktu berdasarkan jam, menit, dan detik yang ditentukan. Parameternya bersifat opsional, jadi minimal, Anda dapat menyediakan jamnya saja.

```js
=TIME(hour, minute, second)
```

### HOUR

Mengekstrak porsi jam dari waktu tertentu.

```js
=HOUR(time)
```

### MINUTE

Mengekstrak bagian menit dari waktu tertentu.

```js
=MINUTE(time)
```

### SECOND

Mengekstrak bagian kedua dari waktu tertentu.

```js
=SECOND(time)
```
