---
title: Day 22
description: Normalisasi
date: '2023-11-09'
categories:
  - database

published: true
---

## Table of Contents

## Normalisasi

Normalisasi adalah suatu teknik yang menstrukturkan data dalam cara-cara tertentu untuk membantu mengurangi atau mencegah timbulnya masalah yang berhubungan dengan pengolahan data dalam basis data.

Normalisasi diperlukan meminimalkan _Redudancy_ (pengulangan) data dan menjadi integritas data dengan menghindari 3 anomali (proses penymipangan) data.

### Bentuk-bentuk anomali data:

#### Delete Anomalies

Proses penghapusan suatu entity logik yang mengakibatkan hilangnya informasi tentang entity yang tidak direlasikan secara logik.

#### Insert Anomalies

Proses penyisipan entity logik yang memerlukan penyisipan entity logik yang lain.

#### Update Anomalies

Proses mengupdate data pada suatu entity logik yang mengakibatkan perubahan pada lebih dari satu tempat dalam suatu relasi.

### Konsep penting yang mendasari normalisasi

#### The Three Key

Konsep key penting untuk memahami keterkaitan antar atribut data dalam tabel dan akan sangat berguna dalam proses normalisasi.

Dalam setiap tabel terdapat 3 macam key.

1. **Super Key**
   Suatu atribut atau gabungan atribut (kolom) pada tabel yang dapat membedakan semua baris secara unik.

2. **Candidate Key**
   Disebut juga dengan minimal super key yang tidak mengandung super key yang lain. Setiap candidate key pasti merupakan super key, namun tidak semua super key akan menjadi candidate key.

3. **Primary Key**
   Salah satu candidate key yang dipilih untuk digunakan dalam DBMS. Tiap tabel hanya memiliki 1 primary key, namun primary key terbut bisa saja dibentuk dari beberapa atribut/kolom.

#### Functional Dependencies (FD)

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

### Bentuk Normalisasi

#### First Normal Form $(1^{st} NF)$

Kriteria $(1^{st} NF)$:

- Tidak ada atribut (kolom) pada tabel yang bersifat multivalue.
- Tidak memiliki lebih dari satu atribut dengan domain yang sama (dalam satu tabel memiliki lebih dari 1 kolom yang digunakan untuk menyimpan data yang jenisnya sama).
