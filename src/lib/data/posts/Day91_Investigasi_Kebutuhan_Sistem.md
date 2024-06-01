---
title: Day 91
description: Investigasi Kebutuhan Sistem
date: '2024-5-25'
categories:
  - SIM
published: true
---

## Table of Contents

## User Goals/Tujuan Pengguna

User Goals adalah deskripsi status akhir yang ingin dicapai pengguna. Yang penting, sasaran pengguna harus mengacu pada keadaan akhir di dunia nyata $-$ sasaran tersebut tidak terbatas pada cakupan situs web. Contoh sasaran pengguna adalah masuk perguruan tinggi, belajar membuat kue, atau menjadi pengemudi berlisensi.

### Membuat User Goals

User Goals dapa didefinisikan sebagai hasil yang ingin dicapai pengguna dengan menggunakan produk atau layanan.

## User Experience (UX)

User Experience adalah cara seorang pengguna berinteraksi dengan produk digital. Misalnya saat menggunakan website, user experience ini merupakan sebuah pengalaman yang didapatkan pengguna saat menggunakan website tersebut.

### Manfaat Dari User Experience

#### Mempermudah user saat menggunakan aplikasi

Aplikasi yang dibuat oleh developer diharapkan memudahkan pengguna dalam mendapatkan informasi atau menyelesaikan semua permasalahan pengguna yang sedang dihadapi.

Dengan memanfaatkan riset user experience ini bisa membuat aplikasi lebih mudah digunakan oleh siapa saja untuk memenuhi kepentingannya.

#### Memberikan informasi akurat sesuai dengan keinginan pengguna

User Experience bisa membantu para developer supaya mampu membuat aplikasi yang bisa memberikan informasi yang dibutuhkan oleh pengguna secara jelas dan akurat.

Tanpa melakukan riset UX terlebih dahulu, biasanya informasi yang ditunjukkan aplikasi tidak selamanya sesuai dengan keinginan pengguna.

#### Memberikan pengalaman terbaik untuk pengguna

Pengertian User Experience yaitu sebuah metode yang bisa memberikan pengalaman yang terbaik untuk semua pengguna. Hasil dari riset user experience ini dipakai developer untuk memperbaiki kualitas aplikasi ataupun website sehingga pengguna tidak pernah mengalami kekecewaan saat menggunakan aplikasi tersebut.

#### Meningkatkan jumlah penjualan

Pengguna yang merasakan kemudahan saat menggunakan aplikasi nantinya akan lebih merasa puas menggunakan layanan atau aplikasi yang dibuat oleh pemilik aplikasi. Dengan meningkatnya rasa kepuasan konsumen maka secara otomatis penjualan akan meningkat drastis dan inilah yang membuat pendapatan menjadi meningkat.

### Bidang yang terkait dengan UX

- Project Management
- Information Architecture
- User Interface Design
- Interaction Design
- Visual Design
- Content Strategy
- Web Analytics

### User Interface (UI) dan User Experience (UX)

User Interface adalah sebuah proses yang digunakan oleh desainer untuk membangun antarmuka produk dan fokus pada tampilan estetika dan gaya desain.

Sedangkan User Experience yang berfokus pada pengalaman pengguna terhadap sebuah produk atau layanan. Hal ini membuat seorang UX desainer memiliki tanggung jawab untuk membuat aplikasi yang mudah digunakan oleh pengguna, tetapi tetap terlihat eye-catching. Perasaan pengguna saat berinteraksi dengan produk menjadi fokus utama seorang UX Desainer.

<div style="overflow-x: scroll;">

|                           | UI                                                                                        | UX                                                                                                  |
| ------------------------- | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| **Tujuan**                | Membuat tampilan lebih menarik.                                                           | Memberikan kenyamanan saat memakai produk.                                                          |
| **Fokus**                 | Kesan pertama pengguna terhadap keindahan tampilan produk pada ukuran layar yang beragam. | Kepuasan dan pengalaman pengguna ketika penggunakan produk.                                         |
| **Pre-building**          | Desain Mockup.                                                                            | Desain wireframe dan prototype                                                                      |
| **Elemen**                | Warna, gambar, video, animasi, tipografi, button, dan visual interaksi lainnya.           | Usability, fitur-fitur, struktur desain, interaktif desain, navigasi, copywriting, hingga branding. |
| **Skill yang dibutuhkan** | Desain grafis, desain branding, dan creative thinking                                     | Riset, analytical thinking, problem solving, critical thinking, dan creative thinking.              |

</div>

## Event Decomposition Technique

Event Decomposition Technique adalah teknik untuk mengidentifikasi use case dengan menentukan peristiwa bisnis eksternal yang harus ditanggapi oleh system.

Event Decomposition Technique dimulai dengan mengidentifikasi semua peristiwa bisnis yang akan menyebabkan sistem informasi merespons, dan setiap peristiwa mengarah ke use-case.

### Tipe-Tipe Events

#### External Events

Peristiwa yang terjadi di luar sistem, biasanya diprakarsai oleh agen atau aktor eksternal.

#### Temporal Events

Peristiwa yang terjadi sebagai akibat dari mencapai suatu titik waktu. Misalnya, pada akhir bulan pemrosesan otomatis tertentu mungkin perlu dimulai.

## Aplikasi CRUD

Aplikasi CRUD adalah jenis aplikasi perangkat lunak khusus yang terdiri dari empat operasi dasar: CREATE, READ, UPDATE, DELETE.

Keempat operasi ini dipetakan ke fungsi seperti terlihat pada tabel berikut:

| Operasi | Fungsi |
| ------- | ------ |
| CREATE  | INSERT |
| READ    | SELECT |
| UPDATE  | UPDATE |
| DELETE  | DELETE |

Pada tingkat tinggi, aplikasi CRUD terdiri dari tiga bagian: DATABASE, UI, API.

### Variasi CRUD

- BREAD(Browse, Read, Edit, Add, Delete)
- CRAP(Create, Replicate, Append, Process)
- CRUDL(Create, Read, Update, Delete, List)
- DAVE(Delete, Add, View, Edit)

## Use-Case Diagram

Use-Case Diagram adalah salah satu dari berbagai jenis diagram Unified Modelling Language (UML) yang menggambarkan hubungan interaksi antara aktor (manusia/perangkat) dan sistem.

Use-Case Diagram merupakan gambaran atau representasi dari interaksi yang terjadi antara sistem dan lingkungannya.

Use-Case adalah teknik penemuan kebutuhan software yang dikenalkan pertama kali dalam metode pendekatan berbasis objek yang dikembangan oleh Jacobson dkk pada tahun 90-an

### Fungsi Use-Case Diagram

#### Memperlihatkan proses aktivitas dalam sistem

Fungsi pertama yaitu berperan memperkenalkan tahap awal setiap kegiatan proses dalam sebuah sistem yang sedang dikembangan. Hal tersebut memudahkan pengembang dalam menentukan kebutuhan yang sesuai dengan software dan pengguna.

#### Menggambarkan proses bisnis dalam sistem

Fungsi kedua adalah menggambarkan urutan proses bisnis dengan lebih jelas, mudah dimengerti dan transparan untuk mencegah terjadinya kesalahan pada sistem yang akan dikembangkan atau dibangun.

#### Sebagai jembatan antara developer dan konsumen

Fungsi ketiga adalah menjadi jembatan penghubung antara developer dengan konsumen untuk mendeskripsikan kejelasan sebuah sistem yang akan dikembangkan.

### Manfaat Use-Case Diagram

1. Sebagai kebutuhan verifikasi.
2. Menjadi gambaran antarmuka sebuah sistem karena setiap sistem yang dibangun harus memiliki interface.
3. Mengidentifikasi orang yang dapat berinteraksi dengan sistem dan apa yang bisa dilakukan oleh sistem.
4. Memberikan kepastian mengenai kebutuhan sistem.
5. Memudahkan proses komunikasi.
