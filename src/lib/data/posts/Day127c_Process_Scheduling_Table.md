---
title: Day 127c
description: Process Scheduling Table
date: '2024-10-23'
categories:
  - SO
published: true
---

## Table of Contents

## Process Scheduling Table

<div style="overflow-x: scroll">

| Process | Arrival Time (AT) | Burst Time (BT) | Finish Time (FT) | Turnaround Time (TAT) | Waiting Time (WT) |
| :-----: | :---------------: | :-------------: | :--------------: | :-------------------: | :---------------: |
|   P1    |         0         |       12        |        12        |          12           |         0         |
|   P2    |         2         |        8        |        20        |          18           |        10         |
|   P3    |         3         |        5        |        25        |          22           |        17         |
|   P4    |         5         |        2        |        27        |          22           |        20         |
|   P5    |         9         |        1        |        28        |          19           |        18         |

</div>

### Penjelasan Kolom

- **Process (P)**: Merupakan identifikasi unik untuk setiap proses yang sedang dieksekusi.  
  Dalam tabel ini, terdapat lima proses: P1, P2, P3, P4, dan P5.
- **Arrival Time (AT)**: Waktu ketika proses tiba dalam sistem (dalam satuan waktu).  
  Misalnya, P1 tiba pada waktu 0, P2 pada waktu 2, dan seterusnya.
- **Burst Time (BT)**: Waktu yang dibutuhkan oleh proses untuk menyelesaikan eksekusi.  
  Contohnya, P1 membutuhkan 12 waktu unit untuk selesai.
- **Finish Time (FT)**: Waktu ketika proses selesai dieksekusi.  
  Ini dihitung dengan menambahkan Burst Time ke Arrival Time, mempertimbangkan antrian yang ada.
- **Turnaround Time (TAT)**: Waktu total yang dibutuhkan dari saat proses tiba hingga selesai.  
  Ini dihitung sebagai: $TAT=FT−AT$  
  Misalnya, untuk P1, TAT adalah 12 (12 - 0).
- **Waiting Time (WT)**: Waktu yang dihabiskan proses dalam antrian menunggu untuk dieksekusi.
  Ini dihitung sebagai: $WT=TAT−BT$  
  Contohnya, untuk P2, WT adalah 10 (18 - 8).
