---
title: UTS Recap PRDBMS
description: UTS Recap Praktikum DBMS
date: '2023-10-29'
categories:
  - UTS
  - recap
  - Praktikum DBMS

published: true
---

## Table of Contents

## Sesi 1

### Apa itu DBMS?

Database (basis data) adalah sistem penyimpanan beragam jenis data dalam sebuah entitas yang besar untuk diolah sedemikian rupa agar mudah dipergunakan kembali.

Kumpulan data terorganisir atau jenis penyimpanan data berdasarkan penggunaan sistem manajemen database, perangkat lunak yang berinteraksi dengan pengguna akhir, aplikasi, dan database itu sendiri untuk menangkap dan menganalisis data.

DBMS atau Sistem Manajemen Basis Data adalah suatu alat pengelolaan basis data (perangkat lunak) atau lebih spesifiknya DBMS merupakan perantara antara pengguna dan program aplikasi basis data.

#### Jenis DBMS

- DBMS hierarki (Parent-child)
- DBMS Jaringan (many to many)
- DBMS Relasional (tabel 2d)
- DBMS berorientasi objek (objek)

#### Tujuan DBMS

1. **Menjaga Integritas Data**
   DBMS berfungsi untuk mengurangi dan menghilangkan redudansi serta memaksimalkan konsistensi sehingga setiap kali menampilkan data sesuai dengan data aslinya.

2. **Penyimpanan Data (Manajemen Penyimpanan Data)**
   DBMS mempunyai fungsi utama sebagai tempat penyimpanan data, kecanggihannya saat ini dapat menyimpan data dalam berbagai jenis seperti video dan gambar. Pengguna tidak perlu mengetahui bagaimana data disimpan atau dimanipulasi. DBMS mempunyai prosedur dalam proses ini dan memastikan bahwa data yang disimpan sesuai dengan data yang dimasukkan.

3. **Kamus Data**
   DBMS memiliki fungsi mengelola elemen-elemen dalam database dan bagaimana elemen-elemen tersebut terhubung dengan data lain. Ketika sistem membutuhkan data dalam database, maka DBMS akan memberikan kemudahan melalui SQL untuk mengakses dan mencari data tersebut. Jadi, pengguna dapat dengan mudah mengatasinya.

4. **Transformasi dan Presentasi Data**
   Peran DBMS sebagai transformasi dan penyajian data termasuk mengubah setiap data yang dimasukkan ke dalam struktur dan format yang telah ditentukan. Dengan demikian, DBMS dapat membedakan antara format data logis dan bentuk fisiknya.

5. **Keamanan Data**
   DBMS mempunyai peranan penting dalam tingkat keamanan pada database. DBMS mempunyai peran terkait dengan pemberian hak akses kepada orang yang tepat. Selain itu, DBMS juga bertanggung jawab untuk mengelola tindakan yang dapat dilakukan pengguna pada database.

6. **Aktifkan Akses ke Banyak Pengguna**
   DBMS memungkinkan banyak pengguna untuk berinteraksi dalam database. Hal ini akan lebih efisien dan dapat menempatkan pengguna tertentu sesuai peran dan fungsinya.

7. **Menyediakan Prosedur Pencadangan dan Pemulihan**
   DBMS memungkinkan database untuk dibackup dan dipulihkan sesuai kebutuhannya dengan memanfaatkan teknik dan wizard yang dimiliki setiap DBMS. Hal ini akan memudahkan pihak-pihak yang berkepentingan ketika terjadi sesuatu pada database, seperti kerusakan atau bencana alam.

8. **Menyediakan Akses Bahasa dan Pemrograman**
   DBMS menyediakan SQL untuk memanipulasi dan membuat skema database yang dikenal sebagai DML dan DDL. Dengan bahasa ini, seorang DBA dapat dengan mudah memasukkan, mengambil, menghapus, dan mengubah data dalam database menggunakan antarmuka yang disediakan.

9. **Menyediakan Antarmuka untuk Komunikasi**
   DBMS menyediakan antarmuka untuk berkomunikasi antara satu database dengan database lainnya. Selain itu juga dapat memudahkan komunikasi antar database dengan alat lain seperti browser.

10. **Manajemen Transaksi**
    Transaksi adalah serangkaian tindakan yang dilakukan oleh pengguna atau program aplikasi yang mengakses atau mengubah konten database.

### Apa itu XAMPP?

XAMPP adalah paket tumpukan solusi server web cross-platform open source dan gratis yang dikembangkan oleh Apache Friends, yang sebagian besar terdiri dari Apache HTTP Server, database MariaDB, dan penerjemah untuk skrip yang ditulis dalam bahasa pemrograman PHP dan Perl.

XAMPP adalah singkatan dari:

- X: Cross Platform
- A: Apache (Web server)
- M: MySQL/MariaDB (rdbms)
- P: PHP (bahasa skrip sisi server)
- P: Perl (bahasa pemrograman tujuan umum)

#### Apache

Apache HTTP Server, biasa disebut sebagai Apache, adalah perangkat lunak server web open source dan gratis. Ini adalah salah satu server web yang paling banyak digunakan secara global. Apache berfungsi sebagai landasan untuk mengirimkan konten web ke browser pengguna. Ia mendengarkan permintaan masuk, memprosesnya, dan menyajikan halaman web, gambar, dan sumber daya lainnya kepada pengguna.

#### MySQL

MySQL adalah sistem manajemen basis data relasional (RDBMS) open source. MySQL digunakan untuk menyimpan dan mengelola data terstruktur. Ini menyediakan sarana bagi aplikasi untuk menyimpan, mengambil, dan memanipulasi data secara efisien. Ini biasanya digunakan untuk aplikasi web, sistem manajemen konten (CMS), dan berbagai perangkat lunak lain yang memerlukan penyimpanan data.

#### PHP

PHP, yang awalnya merupakan singkatan dari "Personal Home Page", kini sering disebut sebagai "PHP: Hypertext Preprocessor". Ini adalah bahasa skrip sisi server yang dirancang untuk pengembangan web. PHP digunakan untuk membuat halaman web dinamis. Itu dapat tertanam dalam kode HTML untuk menghasilkan konten dinamis, berinteraksi dengan database seperti MySQL, menangani otentikasi pengguna, dan melakukan berbagai tugas sisi server. PHP adalah bahasa serbaguna yang banyak digunakan dalam pengembangan web.

#### phpMyAdmin

phpMyAdmin adalah alat berbasis web gratis dan open source yang ditulis dalam PHP. Ini menyediakan antarmuka pengguna grafis (GUI) untuk mengelola dan mengelola database MySQL atau MariaDB. phpMyAdmin menyederhanakan tugas manajemen basis data bagi pengguna yang mungkin tidak nyaman dengan administrasi basis data baris perintah. Hal ini memungkinkan pengguna untuk melakukan tugas-tugas seperti membuat, memodifikasi, dan menghapus database, tabel, dan catatan. Pengguna bisa

### Apa itu SQL?

SQL adalah bahasa pemrograman khusus yang digunakan untuk mengelola dan memanipulasi database relasional. Ini digunakan untuk berinteraksi dan mengambil informasi dari database, serta untuk membuat, memodifikasi, dan mengelola struktur dan data di dalamnya. SQL berfungsi sebagai bahasa standar untuk berkomunikasi dengan sistem manajemen basis data relasional (RDBMS), seperti MySQL, PostgreSQL, Oracle, SQL Server, dan lain-lain.

#### Data Definition Language (DDL)

Dalam menggunakan SQL, ada beberapa jenis perintah yang digunakan. Perintah-perintah ini diperlukan untuk mengakses dan mengelola data dalam database. Salah satunya adalah Data Definition Language (DDL).

DDL adalah sub-perintah dalam SQL yang digunakan untuk membangun kerangka database.

Berikut pernyataan utama dari DDL antara lain CREATE TABLE, ALTER TABLE, DROP TABLE, dan VIEW.

##### CREATE TABLE

Digunakan untuk membuat tabel baru di database, menentukan kolom, tipe data, dan batasannya.

```sql
CREATE TABLE table_name

(

column_name1,

column_name2,

);
```

##### ALTER TABLE

Digunakan untuk mengubah struktur tabel yang sudah ada, seperti menambah atau menghapus kolom, mengubah tipe data, atau menambahkan batasan.
ADD column:

```sql
ALTER TABLE table_name
ADD column_name datatype;
```

DROP column:

```sql
ALTER TABLE table_name
DROP COLUMN column_name;
```

RENAME column:

```sql
ALTER TABLE table_name
RENAME COLUMN old_name to new_name;
```

##### DROP TABLE

Digunakan untuk menghapus tabel yang ada dan semua datanya dari database.

```sql
DROP TABLE (table_name):
```

##### VIEW

Tampilan adalah tabel virtual yang isinya ditentukan oleh kueri.

```sql
CREATE VIEW (column_name) AS

SELECT column_name1, column_name2

FROM table_name

WHERE column_name;
```

#### Data Manipulation Language (DML)

Jenis perintah SQL lainnya adalah Bahasa Manipulasi Data (DML). DML merupakan sub-perintah pada SQL yang digunakan untuk memanipulasi database yang telah dibuat. Pada dasarnya dalam DML terdapat empat perintah yaitu SELECT, INSERT, DELETE, dan UPDATE.

##### SELECT

```sql
SELECT * FROM
```

##### INSERT

```sql
INSERT INTO
```

##### DELETE

```sql
DELETE FROM
```

##### UPDATE

```sql
UPDATE table_name

SET column_name = newvalue;
```

#### Constraints

Constraints adalah batasan yang ditempatkan pada satu atau lebih kolom tabel. Ada beberapa jenis batasan, antara lain kunci primer, kunci asing, unik, dan cek.

##### PRIMARY KEY

Primary Key adalah kolom atau kumpulan kolom yang secara unik mengidentifikasi setiap baris dalam tabel.

```sql
CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(50)
);
```

##### UNIQUE

Unique memastikan bahwa semua nilai dalam kolom (atau kolom) tertentu adalah unik, namun tidak seperti kunci utama, batasan ini mengizinkan nilai NULL.

```sql
CREATE TABLE Employees (
    employee_id INT PRIMARY KEY,
    employee_email VARCHAR(50) UNIQUE,
    employee_name VARCHAR(50)
);
```

##### NOT NULL

NOT NULL digunakan untuk memastikan bahwa kolom tidak boleh berisi nilai NULL.

```sql
CREATE TABLE Employees (
    employee_id INT PRIMARY KEY,
    employee_email VARCHAR(50) UNIQUE NOT NULL,
    employee_name VARCHAR(50)
);
```

##### FOREIGN KEY

Foreign Key adalah kolom atau kumpulan kolom dalam satu tabel yang mengacu pada kunci utama tabel lain.

```sql
CREATE TABLE Courses (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(50)
);

CREATE TABLE Enrollments (
    enrollment_id INT PRIMARY KEY,
    student_id INT,
    course_id INT,
    FOREIGN KEY (student_id) REFERENCES Students(student_id),
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);
```

##### Pengenalan Diagram

| Jenis                           | Tabel Definisi                                                                    |
| ------------------------------- | --------------------------------------------------------------------------------- |
| Entity                          | Tabel tunggal.                                                                    |
| Entity Relational Diagram (ERD) | Tabel yang terdiri dari tabel-tabel tunggal yang saling terhubung satu sama lain. |

## Sesi 2

### Data Control Language (DCL)

Jika Anda sudah mempunyai user dan ingin mengatur hak akses masing-
masing user, Anda sebaiknya memahami berbagai macam jenis DCL dan cara
penggunaannya. DCL berguna untuk memberikan hak akses database,
mendefinisikan space, mengalokasikan space, dan melakukan audit
penggunaan database.

Terdapat beberapa perintah DCL yang perlu Anda
ketahui, yaitu:

|        |                                                                     |
| ------ | ------------------------------------------------------------------- |
| GRANT  | Dipakai untuk memberikan izin kepada user untuk mengakses database. |
| REVOKE | Dipakai untuk membatalkan izin user untuk mengakses database.       |

### Transaction Control Language (TCL)

Command TCL merupakan singkatan dari Transaction Control Language, yang berguna untuk mengurus berbagai transaksi dalam database. Setiap transaksi dimulai dengan tugas yang spesifik dan berakhir ketika semua tugas dalam grup berhasil diselesaikan. Jika salah satu tugas gagal, maka transaksi juga akan gagal. Karena hal itulah, hasil dari sebuah transaksi hanya memiliki dua kemungkinan, yaitu sukses atau gagal.

Beberapa perintah yang termasuk ke dalam kelompok TCL adalah:

|                 |                                                                            |
| --------------- | -------------------------------------------------------------------------- |
| BEGIN           | Digunakan untuk membuka Transaksi.                                         |
| COMMIT          | Bermanfaat untuk melakukan Transaksi.                                      |
| ROLLBACK        | Perintah ini berguna untuk mengembalikan transaksi jika terjadi kesalahan. |
| SAVEPOINT       | Digunakan untuk menetapkan titik simpan dalam suatu transaksi.             |
| SET TRANSACTION | Menentukan karakteristik untuk transaksi.                                  |

## Sesi 3

### SQL String Functions

#### Mengubah String Menjadi Huruf Kecil

```sql
SELECT LOWER(nama_field) FROM nama_tabel;
```

#### Mengubah String Menjadi Huruf Besar

```sql
SELECT UPPER(nama_field) FROM nama_tabel;
```

#### Membalik String

```sql
SELECT REVERSE(nama_field) FROM nama_tabel;
```

#### Menduplikasi String

```sql
SELECT REPEAT(nama_field, berapa_banyak: INT) FROM nama_tabel;
```

#### Mengganti String

x: string yang akan diganti  
y: ke string yang baru

```sql
SELECT REPLACE(nama_field, x, y) FROM nama_tabel;
```

#### Menghitung Panjang String

```sql
SELECT LENGTH(nama_field) FROM nama_tabel;
```

#### Menghilangkan Spasi di Awal dan di Akhir String

```sql
SELECT TRIM(nama_field) FROM nama_tabel;
```

#### Mengambil String Dari Sebelah Kiri

```sql
SELECT LEFT(nama_field, berapa_banyak: INT) FROM nama_tabel;
```

#### Mengambil String Dari Sebelah Kanan

```sql
SELECT RIGHT(nama_field, berapa_banyak: INT) FROM nama_tabel;
```

#### Mengambil String Nama Dari Tengah

x: urutan ke-n
y: sebanyak n

```sql
SELECT MID(nama_field, x, y) FROM nama_tabel;
```

#### Menggabungkan String

```sql
SELECT CONCAT(string ke 1, string ke 2, ...) FROM nama_tabel;
```

### SQL IF

#### Fungsi IF dengan Satu Syarat

```sql
=IF(kondisi, true, false)
```

#### Fungsi IF dengan Kriteria Lebih dari Satu

AND (Semua Kondisi Harus Benar)

```sql
=IF(kondisi_1 AND kondisi_n, true, false)
```

OR (Salah Satu Kondisi Boleh Benar)

```sql
=IF(kondisi_1 OR kondisi_n, true, false)
```

## Sesi 4

### UPDATE

Berfungsi untuk mengedit suatu record atau data dari suatu tabel.

```sql
UPDATE nama_tabel SET nama_kolom = 'nilai_baru' WHERE kondisi;
```

### DELETE

Berfungsi untuk menghapus suatu record atau data dari tabel.

```sql
DELETE FROM nama_tabel WHERE kondisi;
```

### SELECT

Berfungsi untuk membaca informasi dari tabel.

```sql
SELECT nama_kolom, * FROM nama_tabel WHERE kondisi;
```

### ORDER BY

Berfungsi untuk mengurutkan data hasil perintah SELECT.

ASC: Ascending  
DESC: Descending

```sql
SELECT * FROM nama_tabel ORDER BY nama_kolom ASC|DESC;
```

### PATTERN MATCHING

Berfungsi untuk proses pembacaan data berdasarkan ekspresi tertentu. Gunakan perintah _LIKE_ atau _NOT LIKE_.

<br />

| Pattern | Deskripsi                                        |
| :-----: | ------------------------------------------------ |
|   A%    | Mencari dengan huruf awalan 'A'                  |
|   %B    | Mencari dengan huruf akhiran 'B'                 |
|   %C%   | Mencari yang mengandung huruf 'C'                |
|   \_    | Wildcard, untuk merepresentasikan satu karakter. |

<br />

```sql
SELECT * FROM nama_tabel WHERE nama_kolom LIKE pattern;
```

## Sesi 5

### SQL Numeric Functions

#### Menggunakan Fungsi Operasi Aritmatika

```sql
SELECT angka_1 (+ | - | * | /) angka_2;
```

#### Mengembalikan Nilai Absolut

```sql
SELECT ABS(angka);
```

#### Mengembalikan Sisa Hasil Pembagian

```sql
SELECT MOD(angka yang akan dibagi, pembagi);
```

#### Mengembalikan Hasil Pangkat

```sql
SELECT POW(angka dasar, eksponen);
```

#### Mengembalikan Nilai Integer Dibulatkan Ke Bawah

```sql
SELECT FLOOR(angka);
```

#### Mengembalikan Nilai Integer Dibulatkan Ke Atas

```sql
SELECT CEIL(angka);
```

#### Membulatkan Bilangan Sesuai Jumlah

```sql
SELECT ROUND(angka, desimal);
```

#### Memotong Bilangan Sesuai Jumlah

```sql
SELECT TRUNCATE(angka, desimal);
```

#### Mengembalikan Nilai Random Dari <br /> ($angka \geq 0\ and\ angka \lt 1$)

```sql
SELECT RAND();
```

#### Mengembalikan Nilai Terbesar Dari Kumpulan Nilai

```sql
SELECT GREATEST(angka_1, angka_2, angka_3, ...);
```

#### Mengembalikan Nilai Terbesar Dari Suatu Ekspresi

```sql
SELECT MAX(nama_field) FROM nama_table;
```

#### Fungsi Lain

COUNT: Mengembalikan jumlah records yang dikembalikan oleh kueri pemilihan.

SUM: Menghitung jumlah sekumpulan nilai.

MIN: Mengembalikan nilai minimum dalam sekumpulan nilai.

AVG: Mengembalikan nilai rata-rata suatu ekspresi.

```sql
COUNT(ekspresi), SUM(ekspresi), MIN(ekspresi), AVG(ekspresi)
```

### SQL Date Functions

#### Mengembalikan Tanggal Dan Waktu Saat Ini

```sql
SELECT NOW();
```

#### Mengembalikan Tanggal Saat Ini

```sql
SELECT CURDATE()
```

#### Mengembalikan Jam Saat Ini

```sql
SELECT CURTIME()
```

#### Mengembalikan Jam

```sql
SELECT HOUR('17:10:15'); -- 17
```

#### Mengembalikan Menit

```sql
SELECT MINUTE('17:10:15'); -- 10
```

#### Mengembalikan Detik

```sql
SELECT SECOND('17:10:15'); -- 15
```

#### Mengembalikan Tahun

```sql
SELECT YEAR('2023-10-15'); -- 2023
```

#### Mengembalikan Bulan

```sql
SELECT MONTH('2023-10-15'); -- 10
```

#### Mengembalikan Hari

```sql
SELECT DAY('2023-10-15'); -- 15
```

#### Memformat Tanggal Seperti Yang Ditentukan.

```sql
SELECT DATE_FORMAT("2017-06-15", "%M %d %Y");
```

Format untuk tanggal:

| Format | Deskripsi                                                                                            |
| ------ | ---------------------------------------------------------------------------------------------------- |
| %a     | Singkatan nama hari (Sun to Sat)                                                                     |
| %b     | Singkatan nama bulan (Jan to Dec)                                                                    |
| %c     | Nama bulan numerik (0 to 12)                                                                         |
| %D     | Hari dalam sebulan sebagai nilai numerik, diikuti dengan akhiran (1st, 2nd, 3rd, ...)                |
| %d     | Hari dalam sebulan sebagai nilai numerik (01 to 31)                                                  |
| %e     | Hari dalam sebulan sebagai nilai numerik (0 to 31)                                                   |
| %f     | Mikrodetik (000000 to 999999)                                                                        |
| %H     | Jam (00 to 23)                                                                                       |
| %h     | Jam (00 to 12)                                                                                       |
| %I     | Jam (00 to 12)                                                                                       |
| %i     | Menit (00 to 59)                                                                                     |
| %j     | Hari dalam setahun (001 to 366)                                                                      |
| %k     | Jam (0 to 23)                                                                                        |
| %l     | Jam (1 to 12)                                                                                        |
| %M     | Nama bulan lengkap (January to December)                                                             |
| %m     | Nama bulan sebagai nilai numerik (00 to 12)                                                          |
| %p     | AM atau PM                                                                                           |
| %r     | Waktu dalam format 12 jam AM atau PM (hh:mm:ss AM/PM)                                                |
| %S     | Detik (00 to 59)                                                                                     |
| %s     | Detik (00 to 59)                                                                                     |
| %T     | Waktu dalam format 24 jam (hh:mm:ss)                                                                 |
| %U     | Minggu dimana Minggu adalah hari pertama dalam seminggu (00 to 53)                                   |
| %u     | Minggu dimana Senin adalah hari pertama dalam seminggu (00 to 53)                                    |
| %V     | Minggu dimana Minggu adalah hari pertama dalam seminggu (01 to 53). Digunakan dengan %X              |
| %v     | Minggu dimana Senin adalah hari pertama dalam seminggu (01 to 53). Digunakan dengan %x               |
| %W     | Nama hari secara lengkap (Sunday to Saturday)                                                        |
| %w     | Hari dalam seminggu dengan Minggu=0 dan Sabtu=6                                                      |
| %X     | Tahun untuk minggu dimana hari Minggu adalah hari pertama dalam minggu tersebut. Digunakan dengan %V |
| %x     | Tahun untuk minggu dimana Senin adalah hari pertama dalam minggu tersebut. Digunakan dengan %v       |
| %Y     | Tahun sebagai nilai numerik 4 digit                                                                  |
| %y     | Tahun sebagai nilai numerik 2 digit                                                                  |

#### Mengembalikan Nomor Hari Untuk Tanggal Tertentu.

| No. | Hari      |
| --- | --------- |
| 0   | Monday    |
| 1   | Tuesday   |
| 2   | Wednesday |
| 3   | Thursday  |
| 4   | Friday    |
| 5   | Saturday  |
| 6   | Sunday    |

<br />

```sql
SELECT WEEKDAY('2023-10-23'); -- 0
```

#### Mengembalikan Urutan Minggu Untuk Tanggal Tertentu (angka dari 0 hingga 53).

```sql
SELECT WEEK('2023-10-23',opsional hari pertama dalam seminggu); -- 43
```

#### Menjumlahkan Waktu

```sql
SELECT ADDTIME(tanggal_waktu, waktu_tambahan);
```

#### Mengurangi Waktu

```sql
SELECT ADDTIME(tanggal_waktu, jarak_waktu);
```

#### Mengembalikan Perbedaan Antara Dua Ekspresi Waktu/Tanggal.

```sql
SELECT TIMEDIFF(waktu_1, waktu_2)
```

#### Mengembalikan Jumlah Hari Antara Dua Nilai Tanggal.

```sql
SELECT DATEDIFF(tanggal_1, tanggal_2)
```
