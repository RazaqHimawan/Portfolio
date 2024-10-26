---
title: Day 126
description: DFD Level
date: '2024-10-22'
categories:
  - PAPSI
published: true
---

## Table of Contents

## Data Flow Diagram (DFD)

Data Flow Diagram (DFD) adalah representasi grafis dari aliran data dalam suatu sistem. DFD membantu menggambarkan bagaimana data bergerak melalui sistem, menunjukkan proses, penyimpanan data, dan interaksi antara pengguna dan sistem.

Berikut adalah penjelasan tentang DFD dan setiap levelnya:

### Fungsi DFD

- **Visualisasi Data**: DFD memberikan gambaran yang jelas tentang aliran data, proses, dan penyimpanan data.
- **Komunikasi**: Memudahkan komunikasi antara pengembang sistem dan pemangku kepentingan.
- **Analisis Sistem**: Membantu dalam analisis dan pemodelan sistem yang kompleks.

### Level DFD

1. **Level 0 (DFD Konteks)**:

   - **Gambaran Umum**: Menampilkan keseluruhan sistem sebagai satu proses tunggal.
   - **Entitas Eksternal**: Menunjukkan entitas yang berinteraksi dengan sistem (misalnya, pengguna, sistem lain).
   - **Aliran Data**: Menggambarkan aliran data masuk dan keluar dari sistem.
   - **Penamaan Proses**: 0.

2. **Level 1 (DFD Level 1)**:

   - **Pecahan Proses**: Memecah proses utama dari Level 0 menjadi sub-proses yang lebih spesifik.
   - **Interaksi Detail**: Menunjukkan bagaimana sub-proses saling berinteraksi dan aliran data di antara mereka.
   - **Entitas Eksternal**: Masih mencakup entitas eksternal dari Level 0.
   - **Penamaan Proses**: 1.0, 2.0, dst.

3. **Level 2 (DFD Level 2)**:

   - **Detail Proses Lebih Lanjut**: Memecah salah satu sub-proses dari Level 1 menjadi proses yang lebih rinci.
   - **Gambaran Mendalam**: Menunjukkan aliran data yang lebih kompleks di dalam sub-proses.
   - **Dokumentasi**: Berguna untuk analisis lebih mendalam dan perancangan sistem yang spesifik.
   - **Penamaan Proses**: 1.1, 1.2, 2.1, dst.

4. **Level N (DFD Level N)**:
   - **Proses Berlanjut**: Dapat terus memecah sub-proses lebih lanjut sesuai kebutuhan.
   - **Detail Tak Terbatas**: Level ini berlanjut hingga detail yang diinginkan tercapai.
   - **Penting untuk Pengembangan**: Membantu pengembang memahami sistem hingga ke level yang paling mendetail.
   - **Penamaan Proses**: 1.1.1, 1.2.2, 2.1.1, 1.2.n dst.
