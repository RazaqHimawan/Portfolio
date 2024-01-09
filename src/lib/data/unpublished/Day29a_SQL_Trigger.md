---
title: Day 29a
description: SQL Trigger
date: '2023-12-02'
categories:
  - sql

published: true
---

## Table of Contents

## SQL Trigger

Trigger adalah prosedur tersimpan dalam database yang secara otomatis dipanggil setiap kali peristiwa khusus dalam database terjadi.

### Perbedaan Trigger dan Stored Procedure

- Pemicu tidak dapat dipanggil atau dijalankan secara manual.
- Tidak ada kemungkinan pemicu akan menerima parameter.
- Suatu transaksi tidak dapat dilakukan atau dibatalkan di dalam pemicu.

### Sintaks

```sql
CREATE TRIGGER nama_trigger
[BEFORE | AFTER]
{INSERT | UPDATE | DELETE}
ON nama_tabel
FOR EACH ROW
trigger_body
```
