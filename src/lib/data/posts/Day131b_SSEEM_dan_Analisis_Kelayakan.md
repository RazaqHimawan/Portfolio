---
title: Day 131b
description: Software Size Effort Estimation Method & Analisis Kelayakan
date: "2024-10-30"
categories:
  - APSI
published: true
---

## Table of Contents

## Software Size Effort Estimation Method

### 1. **Simple Method**

- **Deskripsi**: Metode sederhana ini sering digunakan untuk estimasi cepat dan kasar. Metode ini biasanya hanya memerlukan sedikit data dan perhitungan.
- **Cara Kerja**: Berdasarkan aturan praktis atau perbandingan proyek sebelumnya dengan karakteristik yang serupa. Biasanya didasarkan pada faktor-faktor seperti ukuran tim, durasi proyek, atau jumlah fitur.
- **Kelebihan**: Cepat dan mudah digunakan, cocok untuk estimasi awal atau proyek kecil.
- **Kekurangan**: Akurasi rendah karena tidak mempertimbangkan kompleksitas teknis dan sering bergantung pada asumsi kasar.

### 2. **Function Points (FP)**

- **Deskripsi**: Function Points adalah metode estimasi usaha berbasis ukuran fungsional perangkat lunak, dihitung dari jumlah fitur atau fungsi yang dimiliki sistem.
- **Cara Kerja**: Mengukur kompleksitas fungsi dari sistem dengan mengidentifikasi elemen-elemen seperti Input Eksternal, Output Eksternal, File Internal, File Eksternal, dan Permintaan Query.
- **Proses**: Setiap elemen diberi bobot sesuai dengan tingkat kompleksitasnya (misalnya sederhana, sedang, kompleks), lalu dihitung total function points.
- **Kelebihan**: Memberikan estimasi yang lebih akurat karena mempertimbangkan kompleksitas dan ukuran fungsional sistem. Cocok untuk berbagai jenis proyek perangkat lunak.
- **Kekurangan**: Prosesnya lebih memakan waktu dan membutuhkan keahlian dalam analisis function points.

### 3. **Use Case Points (UCP)**

- **Deskripsi**: Use Case Points adalah metode estimasi yang berfokus pada use case (kasus penggunaan) dalam analisis sistem berbasis objek.
- **Cara Kerja**: Menghitung jumlah dan kompleksitas dari use case dalam sistem, termasuk elemen-elemen seperti Aktor dan Use Case.
- **Proses**: Use case diberi bobot sesuai kompleksitasnya, dan faktor-faktor teknis atau lingkungan ditambahkan untuk menyesuaikan estimasi.
- **Kelebihan**: Sangat sesuai untuk proyek perangkat lunak berbasis objek, terutama jika sudah ada model use case yang jelas.
- **Kekurangan**: Bergantung pada ketersediaan dan kualitas model use case, sehingga tidak cocok untuk proyek tanpa analisis use case yang jelas.

## Analisis Kelayakan (Feasibility Study)

### Technical Feasibility (Kelayakan Teknis)

- **Fokus**: Menilai apakah proyek dapat dilakukan dengan teknologi yang tersedia.
- **Aspek Utama**: Meliputi kecocokan dan kompatibilitas perangkat keras dan perangkat lunak, serta keterampilan teknis tim.
- **Tujuan**: Memastikan bahwa teknologi yang dibutuhkan dapat mendukung pengembangan proyek.

### Economic Feasibility (Kelayakan Ekonomi)

- **Fokus**: Mengevaluasi manfaat finansial dari proyek dan menentukan apakah investasi layak.
- **Metode Penilaian**:
  - **Present Value (PV)**: Menghitung nilai arus kas di masa depan dalam nilai saat ini.
  - **Net Present Value (NPV)**: Menghitung perbedaan antara nilai sekarang dari arus kas masuk dan keluar, untuk menentukan apakah investasi menghasilkan laba.
  - **Internal Rate of Return (IRR)**: Tingkat pengembalian yang membuat NPV menjadi nol; digunakan untuk menilai profitabilitas proyek.
  - **Return on Investment (ROI)**: Menghitung laba dari investasi relatif terhadap biaya investasi, membantu mengevaluasi efisiensi penggunaan dana.
- **Tujuan**: Menilai keuntungan ekonomis dari proyek dan apakah manfaatnya melebihi biayanya.

### Legal Feasibility (Kelayakan Legal)

- **Fokus**: Memastikan bahwa proyek mematuhi hukum dan regulasi yang berlaku.
- **Aspek yang Dikaji**: Mematuhi peraturan hukum, kebijakan industri, kepatuhan terhadap hak cipta, dan regulasi keamanan data.
- **Tujuan**: Menghindari potensi masalah hukum yang dapat muncul selama atau setelah implementasi proyek.

### Organizational Feasibility (Kelayakan Organisasi)

- **Fokus**: Menilai apakah proyek sejalan dengan visi, misi, dan tujuan organisasi.
- **Aspek yang Dikaji**: Mendukung strategi jangka panjang organisasi, budaya perusahaan, dan keterlibatan manajemen.
- **Tujuan**: Memastikan bahwa proyek akan diterima dan didukung oleh pihak-pihak di dalam organisasi.

### Schedule Feasibility (Kelayakan Jadwal)

- **Fokus**: Menilai apakah proyek dapat diselesaikan dalam waktu yang ditentukan.
- **Aspek yang Dikaji**: Estimasi waktu untuk setiap fase proyek dan ketersediaan sumber daya.
- **Tujuan**: Mengidentifikasi apakah jadwal yang direncanakan realistis dan memungkinkan penyelesaian proyek sesuai target waktu.
