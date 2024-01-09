---
title: UAS Recap SBD
description: UAS Recap Sistem Basis Data
date: '2024-01-09'
categories:
  - UAS
  - recap
  - SBD

published: true
---

## Table of Contents

## Sesi 1

### Normalisasi

Normalisasi adalah suatu teknik yang menstrukturkan data dalam cara-cara tertentu untuk membantu mengurangi atau mencegah timbulnya masalah yang berhubungan dengan pengolahan data dalam basis data.

Normalisasi diperlukan meminimalkan _Redudancy_ (pengulangan) data dan menjadi integritas data dengan menghindari 3 anomali (proses penymipangan) data.

#### Bentuk-bentuk anomali data:

##### Delete Anomalies

Proses penghapusan suatu entity logik yang mengakibatkan hilangnya informasi tentang entity yang tidak direlasikan secara logik.

##### Insert Anomalies

Proses penyisipan entity logik yang memerlukan penyisipan entity logik yang lain.

##### Update Anomalies

Proses mengupdate data pada suatu entity logik yang mengakibatkan perubahan pada lebih dari satu tempat dalam suatu relasi.

#### Konsep penting yang mendasari normalisasi

##### The Three Key

Konsep key penting untuk memahami keterkaitan antar atribut data dalam tabel dan akan sangat berguna dalam proses normalisasi.

Dalam setiap tabel terdapat 3 macam key.

1. **Super Key**
   Suatu atribut atau gabungan atribut (kolom) pada tabel yang dapat membedakan semua baris secara unik.

2. **Candidate Key**
   Disebut juga dengan minimal super key yang tidak mengandung super key yang lain. Setiap candidate key pasti merupakan super key, namun tidak semua super key akan menjadi candidate key.

3. **Primary Key**
   Salah satu candidate key yang dipilih untuk digunakan dalam DBMS. Tiap tabel hanya memiliki 1 primary key, namun primary key terbut bisa saja dibentuk dari beberapa atribut/kolom.

##### Functional Dependencies (FD)

Disebut juga sebagai ketergantungan fungsional yaitu constraint antara 2 buah himpunan atribut pada sebuah tabel.

Jika A dan B adalah himpunan atribut dari tabel T, ketergantungan fungsional antara A dan B biasanya dinyatakan dalam notasi $A \to B$, artinya:

- A menentukan B
- B secara fungsional bergantung kepada A

$A \to B$ memenuhi syarat berikut ini:

Pada sebuah tabel T, jika dua baris data atau lebih dengan nilai atribut A yang sama maka baris-baris data tersebut pasti akan memiliki nilai atribut B yang sama namun tidak berlaku sebaliknya.

Jenis-jenis ketergantungan Fungsional:

1. Partial Functional Dependency  
   Terjadi Bila:  
   $B \to A$  
   $B$ adalah bagian dari candidate key

   Contoh:  
   nim $\to$ nama_mhs

   Maka disimpulkan bahwa terjadi ketergantungan fungsional parsial dimana **nama_mhs** bergantung kepada **nim** secara parsial atau dikatakan **nim** menentukan **nama_mhs** secara parsial.

<br />

2. Transitive Functional Dependency  
   Terjadi Bila:  
   $A \to B$  
   $B \to C$

   Maka: $A \to C$

   Contoh:  
   nim $\to$ nama_bhs, kd_jur, nama_jur  
   kd_jur $\to$ nama_jur

   Dengan demikian disimpulkan bahwa **nama_jur** bergantung secara transitif terhadap **nim** melalui **kd_jur** atau **nim** $\to$ **nama_jur** secara transitif melalui **kd_jur**.

## Sesi 2

### Bentuk Normalisasi

#### First Normal Form $(1^{st} NF)$

Kriteria $(1^{st} NF)$:

- Tidak ada atribut (kolom) pada tabel yang bersifat multivalue.
- Tidak memiliki lebih dari satu atribut dengan domain yang sama (dalam satu tabel memiliki lebih dari 1 kolom yang digunakan untuk menyimpan data yang jenisnya sama).

#### Second Normal Form ($2^{nd} NF$ )

Kriteria $2^{nd} NF$:

- Memenuhi $(1^{st} NF)$
- Tidak Ada Partial Functional Dependency
- Partial functional dependency terjadi bila $(B,C)$ adalah candidate key dan $B \to A$

contoh:

nim  
nama_mhs  
kd_jur  
nama_jur  
kode_mk  
sks  
nilai

- nim dan kode_mk adalah candidate key.
- berarti terjadi PFD :
  - $nim, kode\_mk \to nama\_mhs, kd\_jur, nama\_jur$
- Solusinya adalah dengan melakukan dekomposisi tabel dengan tetap menjaga agar datanya tetap Konsisten.
- Dari tabel tersebut ditemukan :
  - FD 1: $nim \to nama\_mhs, kd\_jur, nama\_jur$
  - FD 2: $kode\_mk \to nama\_mk, sks$
  - FD 3: $nim,kode\_mk \to nilai$
- Gunakan FD diatas menjadi masing-masing tabel.

#### Third Normal Form ($3^{rd} NF$ )

Kriteria $3^{rd} NF$:

- Memenuhi $(2^{nd} NF)$
- Tidak ada TFD $(A \to B, B \to C, maka\ A \to C)$

contoh:

nim
nama_mhs
kd_jur
nama_jur

- nim dan kd_jur merupakan candidate key.
- $nim \to nama\_mhs, kode\_jur$
- $kd\_jur \to nama\_jur$
- Berarti terjadi TFD :
  - $nim \to nama\_jur\ melalui\ kd\_jur$
- Solusinya adalah dengan melakukan dekomposisi tabel Seperti berikut :
  - FD 1 : $nim \to nama\_mhs, kode\_jur$
  - FD 2 : $kd\_jur \to nama_jur$
- Gunakan FD diatas menjadi masing-masing tabel.

## Sesi 3

### Penerapan Bentuk Normalisasi

Perancangan basis data dapat dimulai dari dokumen dasar yang dipakai dalam sistem.

1. **Step I Bentuk Unnormalized**  
   Bentuklah menjadi tabel unnormal, dengan mencantumkan semua field data yang ada.

2. **Step II Bentuk Normal Kesatu**
   Bentuklah menjadi normal kesatu dengan memisahkan data pada field-field yang tepat dan bernilai atomic, juga seluruh record harus lengkap adanya. Bentuk file adalah flat file.
3. **Step III Bentuk Normal Kedua**
   Pembentukan normal kedua dengan mencari kunci-kunci field yang dapat dipakai sebagai patokan dalam pencarian dan sifatnya unik.
4. **Step IV Bentuk Normal Ketiga**
   Bentuk normal ketiga mempunyai sifat syarat setiap tabel tidak mempunyai field yang bergantung transitif, harus bergantung penuh pada kunci utama.
5. **Step V Hubungan Relasi antar tabel**

   - **Identifikasi Kunci Utama**: Pastikan setiap tabel memiliki kunci utama yang unik untuk mengidentifikasi setiap baris data secara eksklusif dalam tabel tersebut.

   - **Penggunaan Kunci Asing (Foreign Keys)**: Tambahkan kunci asing ke dalam tabel-tabel yang membutuhkan referensi atau ketergantungan pada data dari tabel lain. Kunci asing ini menghubungkan kolom dalam satu tabel dengan kunci utama yang sesuai di tabel lain.

## Sesi 4

### SQL

SQl singkatan dari Structured Query Language yang merupakan bahasa komputer standar ANSI (American National Standards Institute).

Dengan SQL kita dapat:

- Membuat basis data dan struktur tabel
- Input, update, dan delete data dari tabel
- Membuat query sederhana dan kompleks SQL

SQL tersedia dalam banyak versi Ms.Access, DB2, MS SQL server, Oracle, MySQL, Sybase,dll.

SQL dapat diartikan sebagai sebuah bahasa komputer untuk basis data dimana dapat melakukan proses-proses seperti pembuatan dan perubahan struktur basis data, perubahan konten data, mendapatkan informasi dari basis data.

Perintah SQL terbagi menjadi 3 bagian utama yaitu :

1. Data Definition Language (DDL)
2. Data Manipulation Language (DML)
3. Data Control Language (DCL)

#### Data Definition Language (DDL)

Berfungsi untuk membuat atau menghapus database dan mendefinisikan objek-objek (table, index, view, stored procedure, trigger) yang ada di dalam database.

Keywordnya antara lain:

1. CREATE
2. DROP
3. ALTER

#### Data Manipulation Language (DML)

Berfungsi untuk memanipulasi data (menampilkan, menambahkan, dan menghapus data).

Keywordnya antara lain:

1. INSERT
2. SELECT
3. UPDATE
4. DELETE
