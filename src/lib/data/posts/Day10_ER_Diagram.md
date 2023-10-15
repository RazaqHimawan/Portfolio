---
title: Day 10
description: Entity Relational Diagram
date: '2023-10-12'
categories:
  - database
  - ERD

published: true
---

<script>
    import Erd from '$lib/components/erd/erd.svelte';
</script>

## Table of Contents

## Entity Relational Diagram

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

### Himpunan Entitas (Entity set)

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

<Erd>
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
</Erd>

**Tunjangan** merupakan entitas lemah karena tunjangan
bergantung pada pegawai (tidak ada tunjangan jika tidak
ada pegawai).

### Atribut

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

<Erd>
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
</Erd>

**tanda $[\ ]$** menunjukkan atribut yang multivalued.  
**tanda (derived)** menunjukkan atribut turunan.

#### Atribut pada himpunan entitas lemah

- Diskriminator / Key Parsial  
  Merupakan atribut yang membedakan entitas- entitas yang ada pada himpunan entitas lemah.

  Diskriminator tidak sama dengan primary key.  
  Konsep diskriminator hanya dipakai pada himpunan entitas lemah.

  Diskriminator digambarkan dengan garis bawah putus-putus atau penambahan double undercore $(\_\ \_)$.

### Relasi

Relasi menggambarkan hubungan antara entitas satu dengan entitas yang lainnya sesuai dengan proses bisnisnya.

Notasi relasi digambarkan dengan notasi
belah ketupat/diamond.

### Derajat Relasi

- **Unary** : hanya merelasikan 1 entitas
- **Binary** : merelasikan 2 entitas
- **Ternary** : merelasikan 3 entitas

### Kadrinalitas Relasi

Menggambarkan banyaknya jumlah maksimum entitas dapat berelasi dengan himpunan entitas yang lain.

Tipe-tipe kardinalitas:

- Satu Ke satu
- Satu ke Banyak
- Banyak Ke satu
- Banyak ke Banyak

## Key

Merupakan satu atau gabungan dari beberapa atribut yang dapat membedakan semua row dalam relasi secara unik.

- **Superkey** : Suatu atribut/ gabungan atribut (kolom) pada tabel yang dapat membedakan semua baris secara unik
- **Candidate key / Secondary key**
- **Primary Key** : Salah satu candidate key yang dipilih untuk di gunakan dalam DBMS
- **Foreign Key** : Kumpulan kolom dalam tabel yang digunakan untuk membuat tautan antara data dalam dua tabel.
- **Unique Key** : Menerapkan batasan keunikan pada nilai dalam kolom (atau kumpulan kolom) dalam tabel, sama seperti kunci utama. Namun, tidak seperti kunci utama, Unique Key mengizinkan setidaknya satu nilai NULL.

### Crow's Foot

- **Exactly One**
  <Erd>
  {`erDiagram A ||--|| B : ""`}
  </Erd>

- **Zero or One**
  <Erd>
  {`erDiagram A |o--o| B : ""`}
  </Erd>

- **One or More**
  <Erd>
  {`erDiagram A }|--|{ B : ""`}
  </Erd>

- **Zero or More**
  <Erd>
  {`erDiagram A }o--o{ B : ""`}
  </Erd>
