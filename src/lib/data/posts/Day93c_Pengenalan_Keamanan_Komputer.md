---
title: Day 93c
description: Pengenalan Keamanan Komputer
date: '2024-5-29'
categories:
  - Teknologi Informasi dan Komunikasi
published: true
---

## Table of Contents

## Keamanan Komputer (Cybersecurity)

Cyber security merupakan sebuah praktik untuk melindungi sistem teknologi dan perangkat seperti komputer, seluler, server, sistem elektronik dan data suatu perusahaan.

### Klasifikasi Lubang Keamanan

1. Keamanan yang Bersifat Fisik (Physical Security)
2. Keamanan yang Berhubungan dengan Orang (Personnel)
3. Keamanan dari Data dan Media serta Teknik Komunikasi
4. kKeamanan dalam Operasi

### Aspek Keamanan Komputer

1. Privacy / Confidentiality

   - Definisi : menjaga informasi dari orang yang tidak berhak mengakses.
   - Privacy : lebih kearah data-data yang sifatnya privat.
   - Confidentiality: berhubungan dengan data yang diberikan ke pihak lain untuk keperluan tertentu dan hanya diperbolehkan untuk keperluan tertentu tersebut.
   - Contoh : data-data yang sifatnya pribadi (seperti nama, tempat tanggal lahir, social security number, agama, status perkawinan, penyakit yang pernah diderita, nomor kartu kredit, dan sebagainya) harus dapat diproteksi dalam penggunaan dan penyebarannya.
   - Bentuk Serangan : usaha penyadapan (dengan program sniffer).
   - Usaha-usaha yang dapat dilakukan untuk meningkatkan privacy dan confidentiality adalah dengan menggunakan teknologi kriptografi.

2. Integrity

   - Definisi : informasi tidak boleh diubah tanpa seijin pemilik informasi.
   - Contoh : e-mail di intercept di tengah jalan, diubah isinya, kemudian diteruskan ke alamat yang dituju.
   - Bentuk serangan : Adanya virus, trojan horse, atau pemakai lain yang mengubah informasi tanpa ijin, "man in the middle attack" dimana seseorang menempatkan diri di tengah pembicaraan dan menyamar sebagai orang lain.

3. Authentication

   - Definisi : metode untuk menyatakan bahwa informasi betul-betul asli, atau orang yang mengakses atau memberikan informasi adalah betul-betul orang yang dimaksud.
   - Dukungan : Adanya Tools membuktikan keaslian dokumen, dapat dilakukan dengan teknologi watermarking(untuk menjaga "intellectual property", yaitu dengan menandai dokumen atau hasil karya dengan "tanda tangan" pembuat ) dan digital signature.
   - Access control, yaitu berkaitan dengan pembatasan orang yang dapat mengakses informasi. User harus menggunakan password, biometric (ciri-ciri khas orang), dan sejenisnya.

4. Availability

   - Defenisi : berhubungan dengan ketersediaan informasi ketika dibutuhkan.
   - Contoh hambatan :
     - "denial of service attack" (DoS attack), dimana server dikirimi permintaan (biasanya palsu) yang bertubi-tubi atau permintaan yang diluar perkiraan sehingga tidak dapat melayani permintaan lain atau bahkan sampai down, hang, crash.
     - mailbomb, dimana seorang pemakai dikirimi e-mail bertubi-tubi (katakan ribuan e-mail) dengan ukuran yang besar sehingga sang pemakai tidak dapat membuka e-mailnya atau kesulitan mengakses e-mailnya.

5. Access Control

   - Definisi : cara pengaturan akses kepada informasi. berhubungan dengan masalah authentication dan juga privacy.
   - Metode : menggunakan kombinasi userid/password atau dengan menggunakan mekanisme lain.

6. Non-repudiation
   - Definisi : Aspek ini menjaga agar seseorang tidak dapat menyangkal telah melakukan sebuah transaksi. Dukungan bagi electronic commerce.

### Security Attack Models

- **Interruption**: Perangkat sistem menjadi rusak atau tidak tersedia. Serangan ditujukan kepada ketersediaan (availability) dari sistem. Contoh serangan adalah “denial of service attack”.
- **Interception**: Pihak yang tidak berwenang berhasil mengakses asset atau informasi. Contoh dari serangan ini adalah penyadapan (wiretapping).
- **Modification**: Pihak yang tidak berwenang tidak saja berhasil mengakses, akan tetapi dapat juga mengubah (tamper) aset. Contoh dari serangan ini antara lain adalah mengubah isi dari web site dengan pesan-pesan yang merugikan pemilik web site.
- **Fabrication**: Pihak yang tidak berwenang menyisipkan objek palsu ke dalam sistem. Contoh dari serangan jenis ini adalah memasukkan pesan-pesan palsu seperti e-mail palsu ke dalam jaringan komputer.

### Lapisan Keamanan

1. Lapisan Fisik
2. Keamanan Lokal
3. Keamanan File dan Sistem File
4. Keamanan Password dan Enskripsi
5. Keamanan Kernel
6. Keamanan Jaringan

### Kriptografi

- Cryptography adalah suatu ilmu ataupun seni mengamankan pesan, dan dilakukan oleh cryptographer.
- Cryptanalysis adalah suatu ilmu dan seni membuka (breaking) ciphertext dan orang yang melakukannya disebut cryptanalyst.
- Cryptographic system atau cryptosystem adalah suatu fasilitas untuk mengkonversikan plaintext ke ciphertext dan sebaliknya

#### Elemen

```
Plaintext -> |Enkripsi| -> Ciphertext -> |Dekripsi|-> Plaintext
                ^                           ^
              Kunci                       Kunci
```

#### Karakteristik Kripto Sistem yang Baik

- Keamanan sistem terletak pada kerahasiaan kunci dan bukan pada kerahasiaan algoritma yang digunakan.
- Cryptosystem yang baik memiliki ruang kunci (keyspace) yang besar.
- Cryptosystem yang baik akan menghasilkan ciphertext yang terlihat acak dalam seluruh tes statistik yang dilakukan terhadapnya.
- Cryptosystem yang baik mampu menahan seluruh serangan yang telah dikenal sebelumnya

### Tipe-Tipe Program Jahat

1. **Bacteria**: program yang mengkonsumsi sumber daya sistem dengan mereplikasi dirinya sendiri.
2. **Logic bomb**: logik yang ditempelkan pada program komputer agar memeriksa suatu kumpulan kondisi di sistem.
3. **Trapdoor**: Titik masuk tak terdokumentasi rahasia di satu program untuk memberikan akses tanpa metode-metode otentifikasi normal.
4. **Trojan horse**: Rutin tak terdokumentasi rahasia ditempelkan dalam satu program berguna.
5. Virus: Kode yang ditempelkan dalam satu program yang menyebabkan pengkopian dirinya disisipkan ke satu program lain atau lebih, dengan cara memodifikasi program-program itu.
6. Worm: Program yang dapat mereplikasi dirinya dan mengirim kopian-kopian dari komputer ke komputer lewat hubungan jaringan.
