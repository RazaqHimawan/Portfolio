---
title: Day 118c
description: Process Scheduler
date: '2024-10-09'
categories:
  - SO
published: true
---

## Table of Contents

## Process Scheduler

Process Scheduler adalah komponen penting dalam sistem operasi yang bertanggung jawab untuk menentukan urutan eksekusi proses di CPU. Fungsinya adalah untuk memastikan bahwa CPU digunakan secara efisien dengan membagi waktu eksekusi di antara proses yang ada. Proses yang dipilih oleh scheduler untuk dijalankan disebut **running process**.

### Jenis-jenis Process Scheduler

1. **Long-Term Scheduler (Job Scheduler)**  
   Long-term scheduler memilih proses dari job pool (biasanya disimpan di disk) dan memasukkannya ke antrian proses untuk dieksekusi. Scheduler ini jarang dijalankan, biasanya saat proses baru dimulai atau sistem memerlukan lebih banyak proses untuk dieksekusi.

2. **Short-Term Scheduler (CPU Scheduler)**  
   Short-term scheduler bertanggung jawab untuk memilih proses yang akan dieksekusi oleh CPU dari antrian proses yang siap (**ready queue**). Proses ini sering dijalankan karena scheduler ini menentukan proses mana yang mendapatkan akses ke CPU selanjutnya.

3. **Medium-Term Scheduler**  
   Medium-term scheduler bertugas untuk **swap** proses masuk dan keluar dari memori utama, sebagai bagian dari manajemen memori. Scheduler ini membantu untuk mengurangi beban pada sistem dengan memindahkan proses yang tidak aktif ke disk (swap out) dan mengembalikannya ke memori (swap in) saat dibutuhkan.

### Algoritma Penjadwalan

1. **First-Come, First-Served (FCFS)**  
   Proses yang tiba lebih dulu akan dieksekusi lebih dulu, mirip dengan sistem antrian.

2. **Shortest Job Next (SJN)**  
   Proses dengan waktu eksekusi terpendek dieksekusi terlebih dahulu.

3. **Round Robin (RR)**  
   Setiap proses mendapat jatah waktu CPU (time slice) dalam jumlah yang sama secara bergantian. Ini adalah algoritma penjadwalan yang sering digunakan dalam sistem time-sharing.

4. **Priority Scheduling**  
   Proses dengan prioritas tertinggi dieksekusi terlebih dahulu. Prioritas dapat ditentukan berdasarkan kebutuhan proses atau kebijakan sistem.

5. **Multilevel Queue Scheduling**  
   Proses dibagi ke dalam beberapa antrian berdasarkan prioritas atau tipe proses (misalnya, sistem atau interaktif). Setiap antrian dapat memiliki algoritma penjadwalan yang berbeda.

### Kelebihan dan Kelemahan Algoritma Penjadwalan

#### 1. First-Come, First-Served (FCFS)

##### Kelebihan:

- **Sederhana dan mudah dipahami**: Algoritma ini mudah diimplementasikan karena hanya berdasarkan urutan kedatangan.
- **Tidak memerlukan informasi tambahan**: Tidak ada kebutuhan untuk informasi tentang burst time atau prioritas.

##### Kelemahan:

- **Masalah Convoy Effect**: Proses dengan waktu eksekusi yang lama dapat menghambat proses yang lebih pendek, menyebabkan waktu tunggu yang lama untuk proses lain.
- **Waktu rata-rata tunggu yang tinggi**: Dapat menghasilkan waktu tunggu yang lebih tinggi, terutama jika proses dengan burst time panjang datang lebih awal.

#### 2. Shortest Job Next (SJN)

##### Kelebihan:

- **Waktu rata-rata tunggu yang lebih rendah**: Karena memprioritaskan proses dengan burst time terpendek, dapat mengurangi waktu tunggu rata-rata.
- **Efisiensi tinggi**: Meningkatkan throughput karena proses selesai lebih cepat.

##### Kelemahan:

- **Membutuhkan informasi tentang burst time**: Harus diketahui waktu eksekusi setiap proses sebelumnya, yang mungkin sulit didapat.
- **Starvation**: Proses dengan burst time lebih panjang dapat terus-menerus ditunda jika proses dengan burst time lebih pendek terus datang.

#### 3. Round Robin (RR)

##### Kelebihan:

- **Adil dan responsif**: Setiap proses mendapatkan jatah waktu yang sama, sehingga menghindari dominasi satu proses atas yang lain.
- **Baik untuk sistem time-sharing**: Cocok untuk sistem interaktif di mana pengguna memerlukan respon cepat.

##### Kelemahan:

- **Overhead konteks switching**: Switching antar proses dapat menambah overhead, terutama jika time slice terlalu kecil.
- **Waktu rata-rata tunggu bisa tinggi**: Jika banyak proses dengan waktu eksekusi yang panjang, dapat menyebabkan waktu tunggu yang lama bagi proses lainnya.

#### 4. Priority Scheduling

##### Kelebihan:

- **Prioritas untuk proses penting**: Proses yang lebih penting dapat dieksekusi lebih cepat, yang sesuai untuk aplikasi kritis.
- **Fleksibilitas dalam penjadwalan**: Dapat menggunakan berbagai kriteria untuk menentukan prioritas.

##### Kelemahan:

- **Starvation**: Proses dengan prioritas rendah dapat terjebak dalam antrian tanpa mendapatkan kesempatan untuk dieksekusi.
- **Kompleksitas**: Dapat menjadi kompleks jika

### Tujuan Process Scheduling

- **Utilisasi CPU yang maksimal**: Memastikan CPU tidak idle dan selalu ada proses yang dieksekusi.
- **Response time yang cepat**: Khususnya penting dalam sistem interaktif.
- **Throughput yang tinggi**: Memaksimalkan jumlah proses yang selesai dalam waktu tertentu.
- **Fairness (Keadilan)**: Memberikan waktu CPU yang adil bagi semua proses.
