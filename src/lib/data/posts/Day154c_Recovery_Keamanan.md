---
title: Day 154c
description: Recovery Keamanan
date: "2024-12-11"
categories:
  - SO
published: true
---

## Table of Contents

## Recovery Keamanan

### Pengecekan Rutin

- Informasi di memori utama lebih baru dibandingkan dengan disk.
- Program khusus dijalankan saat reboot untuk memeriksa dan memperbaiki disk yang tidak konsisten.
- Pemeriksaan rutin membandingkan data di direktori dengan blok data di disk.

### Backup dan Restore

- Disk magnetik dapat gagal, sehingga backup data penting untuk mencegah kehilangan.
- Program sistem digunakan untuk membackup data ke media penyimpanan lain.
- Recovery dari kehilangan berkas dapat dilakukan dengan mengembalikan data dari backup.
- Menggunakan informasi dari direktori untuk meminimalisir duplikasi saat backup.

### Log-Structured File System

- Algoritma logging digunakan untuk menangani masalah pemeriksaan rutin.
- Implementasi log-based transaction-oriented (journaling file system) untuk menjaga konsistensi data.
- Metadata perubahan ditulis secara berurutan di log untuk pemulihan yang lebih cepat.

### Sistem Berkas Linux Virtual

- Objek dasar dalam virtual file system meliputi file, inode, file system, dan nama inode.
- Inode merepresentasikan objek dalam file system, dan file system adalah kumpulan inode dengan root inode.

## Sistem Operasi Tersebar

### Konsep Dasar

- Sistem tersebar adalah sekumpulan komputer otonom yang saling berinteraksi untuk mendistribusikan data dan layanan.
- Alasan penerapan sistem terdistribusi termasuk berbagi sumber daya, mengatasi bottleneck, dan meningkatkan keandalan.

### Properti dan Karakteristik

- Tidak ada clock global dan tidak ada memori bersama.
- Tipe sistem tersebar meliputi Network Operating System dan Distributed Operating System.

### Arsitektur Sistem Terdistribusi

- Arsitektur client-server, 2-tier, 3-tier, dan N-tier.
- Client-server membagi fungsi antara client dan server untuk efisiensi.

## Keamanan Sistem Operasi

### Pendahuluan

- Keamanan sistem operasi penting untuk melindungi aset komputer dari ancaman.
- Aset yang perlu dilindungi meliputi hardware, software, data, saluran komunikasi, dan jaringan komputer.

### Tujuan Keamanan

- Kerahasiaan, integritas, dan ketersediaan adalah tiga aspek utama keamanan sistem komputer.

### Jenis Keamanan

- Keamanan eksternal, interface pemakai, dan internal.
- Ancaman terhadap keamanan termasuk interupsi, intersepsi, modifikasi, dan fabrikasi.

### Program Jahat

- Program jahat seperti virus, worm, dan trojan horse dapat merusak sistem.
- Virus memiliki siklus hidup yang meliputi fase tidur, propagasi, pemicu, dan eksekusi.

### Anti Virus

- Pencegahan, deteksi, identifikasi, dan penghilangan virus adalah langkah-langkah penting dalam keamanan.
- Generasi antivirus telah berkembang dari scanner sederhana hingga proteksi penuh.
