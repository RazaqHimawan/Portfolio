---
title: Day 152b
description: Management File
date: "2024-12-07"
categories:
  - SO
published: true
---

## Table of Contents

## Manajemen File

- **Berkas (File)**: Unit penyimpanan informasi yang persisten, dikelola oleh sistem berkas.
- **Sistem Berkas**: Mengatur struktur, akses, perlindungan, dan implementasi berkas.

### Konsep Dasar

1. **Database**: Kumpulan data berelasi, diatur dengan DBMS dan FMS.
2. **Jenis Berkas**:
   - Text File, Source File, Object File, Executable File.
3. **Atribut Berkas**: Nama, identifier, jenis, lokasi, ukuran, proteksi, waktu, dan identifikasi pengguna.

### Operasi Dasar Berkas

- Membuat, menulis, membaca, memposisikan, menghapus, dan menghapus sebagian isi berkas.

### Struktur dan Akses Berkas

1. **Struktur**: Urutan byte, record sequence, atau tree.
2. **Akses**: Sequential dan langsung (direct).

### Organisasi dan Metode Penyimpanan

- **Metode Blocking**: Fixed, Variable Spanned, Variable Unspanned.
- **Kinerja Sistem Berkas**: Efisiensi waktu akses dan penyimpanan.

### Struktur Direktori

1. Single Level Directory.
2. Two Level Directory.
3. Tree-Structured Directory.
4. Acyclic Graph Directory.
5. General Graph Directory (butuh garbage collection).

### Implementasi Sistem Berkas

- Menggunakan struktur **on-disk** (Boot Block, Partition Control Block) dan **in-memory** (Tabel partisi, tabel file terbuka).
- Sistem operasi modern mendukung beberapa metode alokasi seperti **contiguous**, **linked**, dan **indexed allocation**.

### Virtual File System (VFS)

- Lapisan abstraksi sistem berkas yang mendukung berbagai implementasi format berkas.

### Partisi dan Mounting

- Partisi bisa berupa **raw** atau **cooked**.
- Partisi root dimuat saat booting, lainnya manual/otomatis.

### Implementasi Direktori

- Linear List, Hash Table, dan sistem direktori pada MS-DOS dan UNIX.
