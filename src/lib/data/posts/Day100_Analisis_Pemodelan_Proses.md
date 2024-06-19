---
title: Day 100
description: Analisis dan Pemodelan Proses w/ Data Flow Diagram
date: '2024-6-07'
categories:
  - SIM
published: true
---

## Table of Contents

## Data Flow Diagram

DFD adalah suatu diagram yang menggambarkan aliran data dari sebuah proses atau sistem (biasanya sistem informasi). DFD juga menyediakan informasi mengenai luaran dan masukan dari setiap entitas dan proses itu sendiri.

### Process

Proses (fungsi, transformasi) merupakan bagian dari sistem yang mengubah masukan menjadi luaran. Simbol proses digambarkan dalam bentuk lingkaran, oval, persegi panjang atau persegi panjang dengan sudut bundar (tergantung tipe notasi yang digunakan). Penamaan proses dapat menggunakan satu kata (kata kerja), kalimat singkat, atau frasa yang dapat menjelaskan esensinya secara jelas.

### Warehouse

Warehouse (data store, file, data base) digunakan untuk menyimpan data. Simbol dari penyimpanan adalah dua garis horizontal, gambaran simbol lain dapat dilihat pada gambar notasi Gane dan Sarson. Warehouse diberi nama dalam kata benda jamak (contoh: Pesanan). Nama tersebut diturunkan dari masukan dan luaran dari warehouse tersebut. Warehouse tidak harus hanya berupa data file, contohnya, folder dengan dokumen di dalamnya, lemari arsip, dan disk optik. Oleh karena itu, warehouse pada DFD tidak tergantung pada implementasi.

### Data Flow

Aliran data menggambarkan penyaluran informasi dari satu bagian sistem ke bagian lainnya. Simbol dari aliran adalah panah. Aliran harus memiliki nama yang menentukan informasi (atau material) apa yang sedang berpindah. Aliran seharusnya hanya mengalirkan satu jenis informasi (atau material). Simbol panah menggambarkan arah aliran (dapat dua arah bila informasi ke/dari entitas secara logis saling tergantung, contohnya pertanyaan dan jawaban). Aliran menghubungkan proses, basis data, dan terminator.

### Symbol Table

| Symbol        | Description   |
| ------------- | ------------- |
| $\circ$       | Process       |
| $=$           | File/Database |
| $\square$     | Input/Output  |
| $\rightarrow$ | Flow          |

### Entitas Eksternal

Entitas eksternal berkomunikasi dengan sistem dan berdiri di luar sistem. Entitas dapat berupa organisasi (misalnya bank), kelompok orang (misalnya pelanggan), otoritas (misalnya kantor pajak) atau departemen (mis. Departemen sumber daya manusia) dari organisasi yang sama, yang tidak berada di dalam sistem.

## Jenis-Jenis Diagram UML

### 1. Use Case Diagram

Use case diagram adalah salah satu jenis diagram pada UML yang menggambarkan interaksi antara sistem dan aktor, use case diagram juga dapat men-deskripsikan tipe interaksi antara si pemakai sistem dengan sistemnya.

### 2. Activity Diagram

Activity diagram atau diagram aktivitas yaitu salah satu jenis diagram pada UML yang dapat memodelkan proses-proses apa saja yang terjadi pada sistem.

### 3. Sequence Diagram

Sequence diagram adalah salah satu jenis diagram pada UML yang menjelaskan interaksi objek yang berdasarkan urutan waktu, sequence diagram juga dapat menggambarkan urutan atau tahapan yang harus dilakukan untuk dapat menghasilkan sesuatu seperti pada use case diagram.

### 4. Class Diagram

Class diagram adalah salah satu jenis diagram pada UML yang digunakan untuk menampilkan kelas-kelas maupun paket-paket yang ada pada suatu sistem yang nantinya akan digunakan. Jadi diagram ini dapat memberikan sebuah gambaran mengenai sistem maupun relasi-relasi yang terdapat pada sistem tersebut.

### 5. Statemachine Diagram

Contoh diagram UML selanjutnya Statemachine diagram, yaitu salah satu jenis diagram pada UML yang menggambarkan transisi maupun perubahan keadaan suatu objek pada sistem.

### 6. Communication Diagram

Communication diagram yaitu salah satu jenis diagram pada UML yang dapat menggamabarkan tahapan terjadinya suatu aktivitas dan diagram ini juga menggambarkan interaksi antara objek yang ada pada sistem. Hampir sama seperti sequence diagram akan tetapi communication diagram lebih menekankan kepada peranan masing-masing objek pada sistem.

### 7. Deployment Diagram

Deployment diagram yaitu salah satu diagram pada UML yang menunjukan tata letak suatu sistem secara fisik, dapat juga dikatakan untuk menampilkan bagian-bagian softwere yang terdapat pada hardwere dan digunakan untuk menerapkan suatu sistem dan hubungan antara komponen hardwere. Jadi Deployment diagram intinya untuk menunjukan letak softwere pada hardwere yang digunakan sistem.

### 8. Component Diagram

Component diagram yaitu salah satu jenis diagram pada UML yang menggambarkan softwere pada suatu sistem. Component diagram merupakan penerapan softwere dari satu ataupun lebih class, dan biasanya berupa file data atau .exe, source kode, table, dokumen dsb.

### 9. Object Diagram

Object diagram yaitu salah satu jenis diagram pada UML yang menggambarkan objek-objek pada suatu sistem dan hubungan antarnya.

### 10. Composite Structure Diagram

Composite structure diagram yaitu salah satu jenis diagram pada UML yang menggambarkan struktur internal dari penklasifikasian (class, component atau use case) dan masuk titik-titik interaksi penklasifikasian kebagian lainnya dari suatu sistem. Ini hampir mirip seperti class diagram akan tetapi composite structure diagram menggambarkan bagian-bagian dari individu kelas saja bukan semua kelas.

### 11. Interaction Overview Diagram

Interaction Overview diagram yaitu salah satu jenis diagram pada UML yang berguna untuk men-visualisasikan kerjasama dan hubungan antara activity diagram dengan sequence diagram.

### 12. Package Diagram

Package diagram yaitu salah satu jenis diagram pada UML digunakan untuk mengelompokan kelas dan juga menunjukan bagaimana elemen model akan disusun serta mengambarkan ketergantungan antara paket-paket.

### 13. Timing Diagram

Diagram timing yaitu salah satu jenis diagram pada UML yang disebut sebagai bentuk lain dari interaksi diagram, dimana fokus yang paling utamanya kepada waktu. Diagram timing berguna untuk menunjukan faktor-faktor yang membatasi waktu antara perubahan state terhadap objek yang berbeda.

## Data Dictionary

Data Dictionary adalah pusat gudang informasi mengenai data seperti arti, relasi dengan data yang lain, asal data, penggunaan dan format.

DBMS atau Database Management System juga dapat memahami bahwa data dictionary ini

1. Menggambarkan database atau beberapa database
2. Database yang terintegrasi dengan struktur yang jelas

Pada tahap perancangan sistem, DD digunakan untuk merancang input, merancang laporan-laporan dan database. DD dibuat berdasarkan arus data yang ada di DFD (Data Flow Diagram). Arus data di DFD sifatnya adalah global, hanya ditunjukkan nama arus datanya saja.

### Fungsi Data Dictionary

1. Menjelaskan arti aliran data dan penyimpanan dalam DFD.
2. Mendeskripsikan komposisi paket data yang bergerak melalui aliran, misalnya alamat diuraikan menjadi kota, kodepos, propinsi, dan negara.
3. Mendeskripsikan komposisi penyimpanan data.
4. Menspesifikasikan nilai dan satuan yang relevan bagi penyimpanan dan aliran.
5. Mendeskripsikan hubungan detil antara penyimpanan yang akan menjadi titik perhatian dalam entity relationship diagram.

### Isi Data Dictionary

Data dictionary harus dapat mencerminkan keterangan yang jelas tentang data yang dicatatnya.

Untuk maksud keperluan ini, maka DD harus memuat hal-hal berikut :

- Nama arus data
- Alias
- Bentuk data
- Arus data
- Penjelasan
- Periode
- Volume
- Struktur data

## Decision Table

Definisi Decision Table Decision table adalah sarana terstruktur dalam memvisualisasikan aturan keputusan dalam baris dan kolom [Ross, 2013].

Decision table bekerja dengan cara mengkombinasikan semua kondisi yang ada dimana kondisi ini berisikan aturan-aturan (rules) yang disimpan dalam bentuk tabel pada suatu masalah sehingga dapat dipastikan bahwa tidak ada kemungkinan yang terlewati didalam analisa logika terhadap masalah tersebut.

### Jenis-Jenis Decision Table

#### 1. Maximax

Kriteria Maximax mengatakan bahwa keputusan yang mempunyai payoff (sekumpulan laba atau biaya yang mungkin dihasilkan dari kombinasi suatu keputusan dan suatu keadaan dasar yang acak) paling tinggi tanpa memperdulikan keadaan dasar.

#### 2. Maximin

Kriteria Maximin mengarahkan kita untuk memilih keputusan yang mempunyai maksimum dan payoffs minimum.

#### 3. Hurwich

Metode ini membutuhkan bantuan alpha ($\alpha$) yang besarannya telah ditentukan.

Semakin besar nilai $\alpha$, maka semakin optimis orang tersebut.

Semakin kecil nilai $\alpha$, maka semakin pemisis orang tersebut.

Dalam sistem informasi pengelolaan data untuk pengalokasian dana bantuan masyarakat, nilai $\alpha$ dijadikan indeks pendapatan minimum sebagai kriteria dalam mendapatkan dana bantuan.
