---
title: Day 107
description: Pemodelan Data
date: '2024-9-24'
categories:
  - PAPSI
published: true
---

## Table of Content

## Entity Relationship Diagram

Entity-relationship (E-R) data model didasarkan pada persepsi terhadap dunia nyata yang tersusun atas kumpulan objek-objek dasar yang disebut entitas dan relasi.

Entitas adalah sekumpulan sesuatu yang digunakan dalam sebuah aplikasi.
Entitas digambarkan dalam database dengan kumpulan atribut. Kumpulan semua entitas bertipe sama disebut kumpulan entitas / entity set.

Atribut adalah data yang dapat menggambarkan entitasnya.
Contoh : atribut nim, nama, alamat dan kota dapat menggambarkan data mahasiswa.
Atribut-atribut membentuk entitas mahasiswa.

Relasi adalah hubungan antara beberapa entitas. Kumpulan relasi bertipe sama disebut kumpulan relasi / relationship set.
Contoh : relasi menghubungkan mahasiswa dengan matakuliah yang diambinya.

### Varian ERD

#### 1. Generalization and Specialization

Hasil pemecahan suatu entity set yang lebih tinggi ke tingkat lebih rendah disebut specialization, sebaliknya hasil gabungan dua atau lebih entity set yang tingkatnya rendah, untuk menghasilkan entity set yang tingkatnya lebih tinggi disebut generalization.

#### 2. Aggregation

Satu keterbatasan dari model ERD adalah tidak mungkin mengekpresikan suatu relationship diantara relationship. Untuk mencegah hal itu, digunakan ‘aggregation’ yaitu suatu abstraksi yang menunjukan bahwa suatu relationship dianggap sebagai sebagai suatu entity set yang tingkatnya lebih tinggi.

#### 3. Relasi Tunggal (Unary Relation)

Implementasi relasi tunggal (unary relation) dari/ke himpunan yang yang sama dalam ER-Diagram tergantung pada derajat relasi. Untuk relasi satu ke banyak akan diimplementasikan table baru yang merepresentasikan relasi tersebut. Tabel baru ini mendapatkan field dari semua atribut relasi yang ditambahkan dengan atribut key dari himpunan entitas.

#### 4. Relasi Multi Entitas (N-ary relation)

Relasi multi entitas yang menghubungkan lebih dari dua himpunan entitas (N entitas, dimana N>2) akan diimplementasikan pada sebuah table khusus.

### Membangun Entity-Relationship Diagram

1. **Menentukan Entitas**  
   Menentukan peran, kejadian/kegiatan, lokasi, hal nyata dan kosenp dimana pengguna akan menyimpan data.
2. **Menentukan Relasi**  
   Tentukan hubungan antara sepasang entity menggunakan matriks relationship.
3. **Gambar ERD sementara**  
   Gambarkan entity-entity dan relationship diantara entity untuk menghubungkannya.
4. **Tentukan Kardinalitas**  
   Tentukan kardinalitas (pemunculan suatu entity di entity lainnya yang berhubungan).
5. **Tentukan kunci utama (Primary keys)**  
   Identifikasi atribut data yang secara ‘unik’ mengidentifikasi setiap entity.
6. **Gambar ERD berdasarkan kunci**  
   Sertakan primarydi setiap entity.
7. **Menentukan Atribut**  
   Kumpulkan informasi detil yang penting dalam sistem yang sedang dikembangkan.
8. **Pemetaan Atribut**  
   Untuk setiap atribut, letakkan dalam satu entity yang tepat. Cari juga atribut yang ada dalam relationship.
9. **Gambar ERD dengan Atribut**  
   Sesuaikan ERD hasil langkah 6 dengan entity atau relationship hasil langkah ke 8.
10. **Periksa Hasil**  
    Apakah Entity Relationship Diagramakhir telah secara tepat mencerminkan data sistem?
