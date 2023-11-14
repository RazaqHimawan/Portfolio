---
title: Day 4
description: Informasi
date: '2023-9-21'
categories:
  - introduction
  - informasi
  - data
  - database

published: true
---

## Table of Contents

## INFORMASI

Informasi adalah data yang memberi nilai tambah pada pemahaman suatu subjek. Adapun definisi lainnya bahwa data informasi adalah data yang telah dibentuk menjadi bentuk yang lebih berarti dan berguna bagi manusia.

**Menurut Gordon B. Davis**, informasi adalah data yang telah diolah menjadi suatu bentuk yang penting bagi si penerima dan mempunyai nilai yang nyata yang dapat dirasakan dalam keputusan-keputusan yang sekarang atau keputusan-keputusan yang akan datang.

**Burch dan Strater**, menyatakan informasi adalah pengumpulan atau pengolahan data untuk memberikan pengetahuan atau keterangan.

**George R. Terry, Ph. D**, menyatakan bahwa informasi adalah data yang penting yang memberikan pengetahuan yang berguna.

### Ciri-Ciri Informasi

- Data yang telah diolah
- Menjadi bentuk yang lebih berarti bagi yang menerima
- Menggambarkan suatu kejadian kesatuan nyata
- Digunakan untuk mengambil keputusan

### Hierarki Data

|                             |
| :-------------------------: |
|    **Sistem Basis Data**    |
|        $\downarrow$         |
|       **Basis Data**        |
|        $\downarrow$         |
|          **File**           |
|        $\downarrow$         |
|         **Record**          |
|        $\downarrow$         |
| **Field/Atribut/Data Item** |
|        $\downarrow$         |
|          **Byte**           |
|        $\downarrow$         |
|           **Bit**           |
|                             |

&nbsp;

- **Bit** → system biner yang terdiri atas 2 macam (0 dan 1)
- **Byte** → bagian terkecil yang dialamatkan dalam
  memori, kumpulan bit (1 byte = 1 karakter)
- **Field/atribut/data item** → merupakan unit terkecil yang disebut data, yaitu sekumpulan byte yang mempunyai makna.
- **Record**→ Merupakan sekumpulan field/atribut/data item yang saling berhubungan terhadap obyek
  tertentu.
- **Berkas/file** → merupakan sekumpulan record sejenis secara relasi yang tersimpan dalam media penyimpanan sekunder.
- **Basis Data** → merupakan sekumpulan dari bermacam-macam tipe record yang memiliki hubungan antar record dan rinci data terhadap obyek tertentu.

&nbsp;

|                |                    |             |
| :------------: | :----------------: | :---------: |
|   **Datum**    | A-Z, a-z, 1-9, ... |
|  $\downarrow$  |                    |
|    **Data**    |    Arief Rahmat    |
|  $\downarrow$  |                    |
|   **Field**    |        NAMA        |
|                |       Arief        |
|  $\downarrow$  |                    |
|   **Record**   |        NAMA        |   ALAMAT    |
|                |       Arief        | Jl. Bekasi  |
|  $\downarrow$  |                    |
|    **File**    |        Nama        |   Alamat    |
|                |    Arief Rahmat    | Jl. Bekasi  |
|                |    Arief Rahmat    | Jl. Jakarta |
|                |        ...         |     ...     |
|  $\downarrow$  |
| **Basis Data** |
|                |

### Abstraksi Data

Abstraksi data dalam DBMS dibagi menjadi 3 tingkat,
yaitu :

1. Tingkat Fisik (Physical Level)
2. Tingkat Konseptual (Conceptual Level)
3. Tingkat Pandangan (View Level)

&nbsp;

- **Tingkat Fisik (Physical Level)**

  - Tingkat Fisik (Physical Level) merupakan tingkatan terendah dalam abstraksi data, yang menunjukkan bagaimana sesungguhnya suatu data disimpan.
  - Pada tingkat inilah metode akses, indeks dan struktur data dijabarkan secara rinci sehingga user dapat mengetahui bagaimana representasi fisik dari penyimpanan data.
  - Tingkat ini berurusan dengan data sebagai teks, angka, atau bahkan sebagai himpunan bit data.

- **Tingkat Konseptual (Conceptual Level)**

  - Tingkat Konseptual (Conceptual Level) bersifat lebih tinggi daripada tingkat fisik, yang menggambarkan data apa yang sebenarnya disimpan dalam basis data dan hubungannya suatu data dengan data yang lain (hubungan antar-data).
  - User pada tingkat ini dapat mengetahui bahwa data mahasiswa disimpan/direpresentasikan dalam beberapa file/tabel, seperti file mahasiswa, file nilai, file dosen, file matakuliah, dsb

- **Tingkat Pandangan (View Level)**
  - Tingkat Pandangan (View Level) merupakan tingkat tertinggi dalam abstraksi data, yang menunjukkan sebagian dari basis data.
  - Pada tingkat ini, user hanya mengenal struktur data yang sederhana, yang berorientasi pada kebutuhan user.
  - Data yang dikenal oleh masing-masing user bisa berbeda-beda dan barangkali hanya mencakup sebagian dari basis data.

#### Contoh Database Akademik

- Physical Level

  - Relasi-relasi disimpan sebagai file-file.
  - Indeks berdasarkan pada kolom pertama.

- Conceptual Level

  - Mahasiswa (nim : string, nama_mhs : string, alamat : string)
  - Matakuliah (kodemk : string, nama_mk : string, sks : integer)
  - Dosen (nip : string, nama_dsn : string)
  - Mengajar (kodemk : string, nip : string)
  - Khs (nim : string, kodemk : string, nilai : string)

- View Level
  - Infokuliah (kodemk : string, ruang : string)

### Bahasa Basis Data

Sebuah bahasa basis data biasanya dapat dibagi ke dalam 3 bentuk yaitu:

- **Data Definition Language (DDL)** yaitu struktur/skema basis data yang menggambarkan/mewakili desain basis data secara keseluruhan dispesifikasikan dengan bahasa khusus
- **Data Manipulation Language (DML)** yaitu perintah-perintah yang digunakan untuk mengubah,
  memanipulasi, dan mengambil data pada basis data
- **DCL (Data Control Language)** yang berkaitan dengan pengaturan sekuritas terhadap basis data.

### Model Data

Model data merupakan sekumpulan tool konseptual untuk mendeskripsikan data, relasi-relasi antar data, semantic data & konsistensi konstrain.

Menyatakan hubungan antar rekaman yang tersimpan
dalam basis data.

Model data terbagi dalam 2 kelompok besar, yaitu:

- Object-based logical models

  - Entity Relationship Model
  - Object Oriented Model

- Record-based logical models
  - Model Relational
  - Model Hierarkhi
  - Model Network

#### Entity Relationship Diagram (ERD)

Entity Relationship Diagram (ERD) merupakan salah satu teknik dalam merancang basis data yang terdiri dari tiga hal, di antaranya entity, atribut/properti, dan relasi.

**Entity** adalah objek di dunia yang bersifat unik.

Contoh : entity Mahasiswa, mempunyai atribut Nim,
Nama, Alamat dan Tanggal lahir.

Pemodelan data dengan model E-R menggunakan diagram E-R. Diagram E-R terdiri dari :

- **Kotak persegi panjang**, menggambarkan himpunan entity.
- **Elips**, menggambarkan atribut-atribut entity.
- **Diamond**, menggambarkan hubungan antara himpunan entity.
- **Garis**, yang menghubungkan antar objek dalam diagram E-R.

#### Object Oriented Model

Data disimpan dalam bentuk objek. Struktur yang disebut kelas yang menampilkan data di dalamnya ini adalah salah satu komponen DBMS yang mendefinisikan basis data sebagai kumpulan objek yang menyimpan nilai dan operasi anggota data.

Setiap objek berisi:

- Nilai yang disimpan dalam variable instant, dimana variable “melekat” dengan objek itu sendiri.
- Metoda : operasi yang berlaku pada objek yang bersangkutan Objek-objek yang memiliki tipe nilai & metode yang dikelompokkan dalam satu kelas. Kelas disini mirip dengan abstrak pada bahasa pemrograman.
- Sending a message : sebuah objek dapat mengakses data sebuah yang lain

#### Model Relasional

Model ini didasarkan pada normalisasi data dalam baris dan kolom tabel yang merupakan model relasional, disimpan dalam struktur tetap dan dimanipulasi menggunakan SQL.

Ini adalah sistem data diatur dan dinormalisasi dalam tabel 2D menggunakan baris dan kolom. Setiap tabel harus memiliki kunci yang secara unik mengidentifikasi setiap record. Model ini ideal jika Anda memerlukan sistem penyimpanan data yang dapat diskalakan dan fleksibel.

#### Model Hierarki

Menyimpan data dengan hubungan seperti parents (orang tua) dan child (anak). Data akan tersimpan secara hierarki dan parents dapat memiliki banyak cabang child. Namun, child hanya boleh memiliki satu parents saja.

#### Model Jaringan

Memiliki hubungan antar data yang lebih rumit, yaitu hubungan many to many. Jika kamu ingin mengakses data ini, ada berbagai cara untuk mendapatkannya.
