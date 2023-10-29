---
title: UTS Recap SBD
description: UTS Recap Sistem Basis Data
date: '2023-10-29'
categories:
  - UTS
  - recap
  - SBD

published: true
---

<script>
    import MermaidDiagram from '$lib/components/mermaid/MermaidDiagram.svelte';
</script>

## Table of Contents

## Sesi 1

### Sistem

     Seperangkat komponen yang bekerja sama untuk mencapai sesuatu.

### Data

     Fakta dan statistik yang dikumpulkan bersama untuk referensi atau analisis.

### Informasi

     Suatu data yang telah diolah dan diubah menjadi bentuk lain.

## Sesi 2

### Informasi

Informasi adalah data yang memberi nilai tambah pada pemahaman suatu subjek. Adapun definisi lainnya bahwa data informasi adalah data yang telah dibentuk menjadi bentuk yang lebih berarti dan berguna bagi manusia.

**Menurut Gordon B. Davis**, informasi adalah data yang telah diolah menjadi suatu bentuk yang penting bagi si penerima dan mempunyai nilai yang nyata yang dapat dirasakan dalam keputusan-keputusan yang sekarang atau keputusan-keputusan yang akan datang.

**Burch dan Strater**, menyatakan informasi adalah pengumpulan atau pengolahan data untuk memberikan pengetahuan atau keterangan.

**George R. Terry, Ph. D**, menyatakan bahwa informasi adalah data yang penting yang memberikan pengetahuan yang berguna.

#### Ciri-Ciri Informasi

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

## Sesi 3

### Entity Relational Diagram

ER adalah salah satu pemodelan basis data konseptual yang menggambarkan basis data ke dalam bentuk Entitas-entitas dan Relasi yang terjadi.

<br/>

- **Entity** : ‘Objek’ didunia nyata yang bisa dibedakan dengan ‘objek’ yang lain.
- **Relation** : hubungan yang terjadi diantara satu entitas dengan entitas yang lain.

Diagram E-R terdiri dari :

- Entitas/Entity set (Himpunan Entitas)
- Atribut
- Relasi
- Derajat Relasi
- Kardinalitas
- Kunci

<br/>

#### Himpunan Entitas (Entity set)

Sekelompok entitas yang sejenis dan berada pada lingkup yang sama.

Jadi Entitas menunjuk kepada individu sebuah objek sedangkan himpunan entitas menunjuk pada rumpun (family) dari individu tersebut.

Entitas adalah objek yang dirasa penting di sistem tersebut, yang bisa berupa :

- Objek Konkrit  
  contoh : orang, buku
- Objek Abstrak  
  contoh : jadwal, pinjaman, tabungan

**Himpunan Entitas Lemah** adalah sebuah himpunan entitas yang tidak memiliki _primary key_ dan selalu bergantung pada entitas lain.

Notasi Entitas Lemah ditandai dengan tidak adanya _primary key_ dan membutuhkan _foreign key_ dapat digambarkan dengan double persegi panjang.

Notasi Relasi untuk himpunan entitas lemah digambarkan garis putus-putus yang saling terhubung antar entity atau double diamond.

<MermaidDiagram>
    {`
    erDiagram
        PEGAWAI ||..o{ TUNJANGAN : mendapatkan
        PEGAWAI {
            int nip PK
            string nama
            string jabatan
        }
        TUNJANGAN {
            string nama_penerima
            int nomor__ FK
            int besar_tunjangan
        }
    `}
</MermaidDiagram>

**Tunjangan** merupakan entitas lemah karena tunjangan
bergantung pada pegawai (tidak ada tunjangan jika tidak
ada pegawai).

#### Atribut

Merupakan gambaran karakteristik dari sebuah entitas atau himpunan entitas.

Notasi atribut digambarkan dengan gambar elips atau berbentuk tabel dibawah entity.

Tipe-tipe atribut :

- **Simple**: suatu atribut yang tidak bisa dibagi menjadi bagian yang lebih kecil lagi.  
  Contoh: Jenis Kelamin.

- **Composite** : atribut yang dapat dibagi menjadi beberapa bagian.  
  Contoh: atribut alamat dapat dibagi lagi menjadi jalan, kota , provinsi, kodepos, dll.

- **Single value** : atribut yang bisa diisi paling banyak 1 nilai untuk setiap baris data.  
   Contoh : jenis Kelamin.

- **Multivalued** : atribut yang bisa diisi lebih dari 1 nilai.  
  Contoh : atribut hobi dapat diisi dengan musik, olahraga dsb.
- **Derived attribute** : atribut yang nilainya didapatkan dari hasil pengolahan atribut lain.  
  Contoh: atribut umur didapatkan dari perhitungan tanggal lahir dan tanggal sekarang

- **Atribut Kunci** diberi tanda #, garis bawah ataupun singkatan (PK = Primary Key, FK = Foreign Key, UK = Unique Key)

<MermaidDiagram>
  {`
  erDiagram
    MAHASISWA ||--o{ ORGANISASI : bergabung 
    MAHASISWA {
        int nim PK
        string nama
        string kota
        string[] alamat
        float ipk
        string prodi
        int(derived) umur
    }
    ORGANISASI {
        string kode_org PK
        string nama
        string jenis
    }
  `}
</MermaidDiagram>

**tanda $[\ ]$** menunjukkan atribut yang multivalued.  
**tanda (derived)** menunjukkan atribut turunan.

##### Atribut pada himpunan entitas lemah

- Diskriminator / Key Parsial  
  Merupakan atribut yang membedakan entitas- entitas yang ada pada himpunan entitas lemah.

  Diskriminator tidak sama dengan primary key.  
  Konsep diskriminator hanya dipakai pada himpunan entitas lemah.

  Diskriminator digambarkan dengan garis bawah putus-putus atau penambahan double undercore $(\_\ \_)$.

#### Relasi

Relasi menggambarkan hubungan antara entitas satu dengan entitas yang lainnya sesuai dengan proses bisnisnya.

Notasi relasi digambarkan dengan notasi
belah ketupat/diamond.

#### Derajat Relasi

- **Unary** : hanya merelasikan 1 entitas
- **Binary** : merelasikan 2 entitas
- **Ternary** : merelasikan 3 entitas

#### Kadrinalitas Relasi

Menggambarkan banyaknya jumlah maksimum entitas dapat berelasi dengan himpunan entitas yang lain.

Tipe-tipe kardinalitas:

- Satu Ke satu
- Satu ke Banyak
- Banyak Ke satu
- Banyak ke Banyak

### Key

Merupakan satu atau gabungan dari beberapa atribut yang dapat membedakan semua row dalam relasi secara unik.

- **Superkey** : Suatu atribut/ gabungan atribut (kolom) pada tabel yang dapat membedakan semua baris secara unik
- **Candidate key / Secondary key**
- **Primary Key** : Salah satu candidate key yang dipilih untuk di gunakan dalam DBMS
- **Foreign Key** : Kumpulan kolom dalam tabel yang digunakan untuk membuat tautan antara data dalam dua tabel.
- **Unique Key** : Menerapkan batasan keunikan pada nilai dalam kolom (atau kumpulan kolom) dalam tabel, sama seperti kunci utama. Namun, tidak seperti kunci utama, Unique Key mengizinkan setidaknya satu nilai NULL.

### Crow's Foot

- **Exactly One**
  <MermaidDiagram>
  {`erDiagram A ||--|| B : ""`}
  </MermaidDiagram>

- **Zero or One**
  <MermaidDiagram>
  {`erDiagram A |o--o| B : ""`}
  </MermaidDiagram>

- **One or More**
  <MermaidDiagram>
  {`erDiagram A }|--|{ B : ""`}
  </MermaidDiagram>

- **Zero or More**
  <MermaidDiagram>
  {`erDiagram A }o--o{ B : ""`}
  </MermaidDiagram>

## Sesi 4

### Transformasi Umum/Dasar

Ada beberapa aturan umum dalam pemetaan Model Data ERD (Level Konseptual) menjadi Basis Data Fisik (Level Fisik)

<br />

#### Setiap Himpunan Entitas Akan Diimplementasikan Sebagai Sebuah Tabel

<MermaidDiagram>
{`erDiagram
MAHASISWA {
string nim PK
string nama_mhs
string alamat
date tanggal_lahir
}
`}
</MermaidDiagram>

| nim | nama_mhs | alamat | tanggal_lahir |
| --- | -------- | ------ | ------------- |
|     |          |        |               |
|     |          |        |               |

#### Relasi Dengan Kardinalitas One To One

- Direpresentasikan dalam bentuk penambahan/ penyertaan atribut-atribut relasi ke tabel yang mewakili salah satu dari kedua entitas (penggabungan relasi ke salah satu entitas).
- Tidak ada keharusan ke entitas yang mana relasi tersebut harus digabungkan.
- Relasi dengan Derajat Relasi 1-1 (one to one) direpresentasikan dalam bentuk penambahan/penyertaan atribut-atribut relasi ke tabel yg mewakili salah satu dari kedua himpunan entitas.

<MermaidDiagram>
{`erDiagram
DOSEN {
  string kode_dosen PK
  string nama_dosen
  string alamat
}
JURUSAN {
string kode_jurusan PK
string nama_jurusan
string[] kode_dosen FK
}
DOSEN ||--|| JURUSAN : mengepalai
`}
</MermaidDiagram>

Pedoman yang bisa digunakan :

- Lihat derajat relasi minimumnya dengan memilih derajat relasi minimum yang lebih kecil.
- Jika derajat relasi minimumnya sama (sama-sama berderajat nol atau satu) maka relasi lebih baik dileburkan ke tabel yang jumlah atribut yang lebih sedikit

#### Relasi Dengan Kardinalitas One To Many

Lain halnya dengan tingkat hubungan satu ke banyak , relasi yang ada harus digabungkan dengan entitas pada pihak yang Banyak (Many)

Relasi dengan Derajat Relasi 1-n (one to many) direpresentasikan dalam bentuk penambahan/penyertaan atribut-atribut relasi ke tabel yg mewakili salah satu dari kedua himpunan entitas.

<MermaidDiagram>
{`erDiagram
DOSEN {
  string kode_dosen PK
  string nama_dosen
  string alamat
}
KULIAH {
string kode_kuliah PK
string nama_kuliah
int sks
int semester
string[] kode_dosen FK
string[] tempat FK
date[] waktu FK
}
DOSEN ||--|{ KULIAH : mengajar
`}
</MermaidDiagram>

#### Relasi Dengan Kardinalitas Many To Many

#### Relasi Dengan Kardinalitas Many To Many

Relasi dengan derajat N-N (banyak ke banyak) akan diwujudkan dalam bentuk tabel (file data) khusus yang memiliki field (foreign key) yang berasal dari key-key dari entitas yang dihubungkannya.

<MermaidDiagram>
{`erDiagram
MAHASISWA {
  string nim PK
  string nama_mhs
  string alamat
  date tanggal_lahir
}
KULIAH {
string kode_kuliah PK
string nama_kuliah
int sks
int semester
}
mempelajari {
  string[] nim FK
  string[] kode_kuliah FK
  float indeks_nilai
}
MAHASISWA }|--|{ KULIAH : mempelajari
`}
</MermaidDiagram>

#### Himpunan Entitas Lemah Dan Sub Entitas

<MermaidDiagram>
{`erDiagram
MAHASISWA {
  string nim PK
  string nama_mhs
  string alamat
  date tanggal_lahir
}
ORANGTUA {
  string nim FK
  string nama_ortu UK
  string alamat_ortu
}
HOBI {
  string nim FK
  string hobbi UK
}
MAHASISWA }|..|{ ORANGTUA : memiliki
MAHASISWA }|..|{ HOBI : menyenangi
`}
</MermaidDiagram>

<MermaidDiagram>
{`erDiagram
DOSEN {
  string kode_dosen PK
  string nama_dosen
  string alamat
}
DOSEN_TETAP {
  string nik
  string pangkat
  date tanggal_masuk
}
DOSEN_TIDAK_TETAP {
  string nama_kantor
  string alamat_kantor
}
DOSEN ||--|| DOSEN_TETAP : "IS A"
DOSEN ||--|| DOSEN_TIDAK_TETAP : "IS A"
`}
</MermaidDiagram>

<MermaidDiagram>
{`erDiagram
MAHASISWA {
  string nim PK
  string nama_mhs
  string alamat
  date tanggal_lahir
  string[] prod_studi UK
}
MAHASISWA }|..|{ MAHASISWA_D3 : "IS A"
MAHASISWA }|..|{ MAHASISWA_S1 : "IS A"
`}
</MermaidDiagram>
