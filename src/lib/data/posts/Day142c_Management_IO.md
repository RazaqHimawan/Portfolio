---
title: Day 142c
description: Management I/O
date: "2024-11-20"
categories:
  - SO
published: true
---

## Table of Contents

## Management Input/Output (I/O)

### Pendahuluan

Sistem operasi mengelola perangkat I/O untuk komunikasi, penanganan interupsi, dan error.

Perangkat I/O dikategorikan menjadi:

- **Human Readable**: Keyboard, monitor.
- **Machine Readable**: Sensor.
- **Communication Devices**: Modem.

Faktor pembeda perangkat meliputi:

- Kecepatan data.
- Aplikasi.
- Kompleksitas pengendali.
- Format data.
- Error handling.

### Jenis Perangkat I/O

- **Perangkat Blok**: Mengakses data dalam unit blok (contoh: disk).
- **Perangkat Karakter**: Mengakses data dalam aliran karakter (contoh: printer).
- Beberapa perangkat, seperti jam, hanya menghasilkan interupsi tanpa kategori blok atau karakter.

### Teknik Operasi I/O

- **Programmed I/O**: CPU menangani operasi secara langsung.
- **Interrupt-driven I/O**: CPU diinterupsi untuk menangani I/O.
- **Direct Memory Access (DMA)**: Transfer data langsung antara memori dan perangkat tanpa melibatkan CPU secara intensif.

### Pengendali Perangkat

Pengendali perangkat (_device controllers_) menangani komunikasi antara perangkat dan sistem operasi. CPU sering menggunakan model bus tunggal untuk komunikasi dengan pengendali.

### Penjadwalan I/O

- **Buffering**: Mengelola perbedaan kecepatan transfer data.
- **Caching**: Penyimpanan sementara untuk akses data yang lebih cepat.
- **Spooling**: Menangani permintaan perangkat yang tidak bisa memproses data secara simultan (contoh: printer).

### Error Handling

- **Error sementara (transient)**: Tindakan seperti pembacaan ulang dilakukan.
- **Error permanen**: Biasanya tidak dapat dipulihkan.

### Struktur Data Kernel

Kernel menggunakan struktur data untuk mengelola perangkat I/O. Pendekatan _object-oriented_ sering digunakan untuk menyederhanakan interaksi perangkat.

### Kinerja I/O

Efisiensi I/O dipengaruhi

oleh:

- Jumlah _context switch_.
- Interupsi.
- Pengiriman data antara perangkat dan memori.

**Optimasi**:

- _Smart controllers_.
- DMA untuk mengurangi beban CPU.

### Spooling dan Reservasi Perangkat

- **Spooling**: Membantu perangkat seperti printer menangani beberapa permintaan secara efisien.
- **Reservasi perangkat**: Menghindari konflik akses antara aplikasi.

### Kesimpulan

Sistem operasi modern menyediakan mekanisme fleksibel untuk mendukung perangkat baru melalui driver.

Subsistem I/O mengintegrasikan:

- Kontrol akses.
- Buffering, caching, dan spooling.
- Penanganan error.
- Penjadwalan permintaan I/O untuk meningkatkan kinerja sistem secara keseluruhan.
