---
title: Day 27a
description: SQL Stored Procedure
date: '2023-11-25'
categories:
  - sql

published: true
---

## Table of Contents

## Stored Procedure

Stored Procedure adalah kode SQL yang telah disiapkan dan dapat Anda simpan, sehingga kode tersebut dapat digunakan kembali berulang kali.

Jadi, jika Anda memiliki kueri SQL yang Anda tulis berulang kali, simpan sebagai Stored Procedure, lalu panggil saja untuk menjalankannya.

Anda juga dapat meneruskan parameter ke Stored Procedure, sehingga Stored Procedure dapat bertindak berdasarkan nilai parameter yang diteruskan.

### Sintaks

Membuat Procedure.

```sql
CREATE PROCEDURE nama_procedure
AS
sql_statement
GO;
```

Membuat Procedure dengan parameter.

```sql
CREATE PROCEDURE nama_procedure @nama_parameter tipe_data
AS
SELECT * FROM nama_tabel WHERE nama_parameter = @nama_parameter
GO;
```

Menjalankan Procedure.

```sql
EXEC nama_procedure;
```
