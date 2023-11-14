---
title: Day 8
description: Pengenalan DCL dan TCL dalam SQL
date: '2023-9-30'
categories:
  - sql

published: true
---

## Table of Contents

## Data Control Language (DCL)

Jika Anda sudah mempunyai user dan ingin mengatur hak akses masing-
masing user, Anda sebaiknya memahami berbagai macam jenis DCL dan cara
penggunaannya. DCL berguna untuk memberikan hak akses database,
mendefinisikan space, mengalokasikan space, dan melakukan audit
penggunaan database.

Terdapat beberapa perintah DCL yang perlu Anda
ketahui, yaitu:

|        |                                                                     |
| ------ | ------------------------------------------------------------------- |
| GRANT  | Dipakai untuk memberikan izin kepada user untuk mengakses database. |
| REVOKE | Dipakai untuk membatalkan izin user untuk mengakses database.       |

## Transaction Control Language (TCL)

Command TCL merupakan singkatan dari Transaction Control Language, yang berguna untuk mengurus berbagai transaksi dalam database. Setiap transaksi dimulai dengan tugas yang spesifik dan berakhir ketika semua tugas dalam grup berhasil diselesaikan. Jika salah satu tugas gagal, maka transaksi juga akan gagal. Karena hal itulah, hasil dari sebuah transaksi hanya memiliki dua kemungkinan, yaitu sukses atau gagal.

Beberapa perintah yang termasuk ke dalam kelompok TCL adalah:

|                 |                                                                            |
| --------------- | -------------------------------------------------------------------------- |
| BEGIN           | Digunakan untuk membuka Transaksi.                                         |
| COMMIT          | Bermanfaat untuk melakukan Transaksi.                                      |
| ROLLBACK        | Perintah ini berguna untuk mengembalikan transaksi jika terjadi kesalahan. |
| SAVEPOINT       | Digunakan untuk menetapkan titik simpan dalam suatu transaksi.             |
| SET TRANSACTION | Menentukan karakteristik untuk transaksi.                                  |
