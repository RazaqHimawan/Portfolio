---
title: Day 60c
description: Jaringan Komputer
date: '2024-3-27'
categories:
  - Teknologi Informasi dan Komunikasi
published: true
---

## Table of Contents

## Jaringan Komputer

Jaringan komputer mengacu pada perangkat komputasi yang saling terhubung serta dapat bertukar data dan berbagi sumber daya satu sama lain.

Protokol Komunikasi: aturan-aturan main yang mengatur komunikasi diantara beberapa komputer di dalam sebuah jaringan, aturan itu termasuk di dalamnya petunjuk yang berlaku bagi cara-cara atau metode mengakses sebuah jaringan, topologi fisik, tipe-tipe kabel dan kecepatan transfer data.

**Jaringan merupakan sebuah sistem yang terdiri atas komputer, perangkat komputer tambahan dan perangkat jaringan lainnya yang saling terhubung dengan menggunakan media tertentu dengan aturan yang sudah ditetapkan.**

### Komponen Jaringan

1. Perangkat Komputer
   - Komputer
   - Printer
   - Scanner
2. Media
   - Kabel
   - Nirkabel
3. Perangkat Jaringan
   - NIC (Network Interface Card)
   - Modem
   - Hub
   - Switch
   - Router
   - Firewall
4. Auran
   - Protokol

### Cara Kerja Jaringan Komputer

Simpul dan tautan adalah blok bangunan dasar dalam jaringan komputer.

Suatu simpul jaringan dapat berupa peralatan komunikasi data (DCE) seperti modem, hub atau switch, maupun peralatan terminal data (DTE) seperti dua atau beberapa komputer dan printer.

Tautan adalah media pengiriman yang menghubungkan dua simpul. Tautan dapat berbentuk fisik, seperti kabel atau fiber optik, atau berupa ruang bebas yang digunakan oleh jaringan nirkabel.

Dalam jaringan komputer yang sedang bekerja, simpul akan mengikuti serangkaian aturan atau protokol yang menentukan cara mengirim dan menerima data elektronik melalui tautan tersebut.

Arsitektur jaringan komputer menentukan desain dari komponen fisik dan logis ini.

Arsitektur jaringan komputer menyediakan spesifikasi untuk komponen fisik jaringan, organisasi fungsional, protokol, dan prosedur.

### Fungsi Jaringan Komputer

Jaringan komputer dibuat pertama kali pada akhir tahun 1950-an untuk digunakan di militer dan departemen pertahanan.

Pada awalnya, jaringan komputer digunakan untuk mentransmisikan data melalui saluran telepon dan memiliki aplikasi saintifik dan komersial yang terbatas.

Dengan kehadiran teknologi internet, jaringan komputer menjadi hal yang sangat dibutuhkan oleh korporasi.

Solusi jaringan modern memberikan lebih dari sekadar konektivitas. Solusi jaringan menjadi sangat penting bagi transformasi digital dan kesuksesan bisnis saat ini.

Kemampuan jaringan yang mendasarinya sudah lebih dapat diprogram, terotomatisasi, dan aman.

### Arsitektur Jaringan Komputer

#### Arsitektur klien-server

Dalam tipe jaringan komputer ini, simpul dapat berupa server atau klien. Simpul server memberikan sumber daya seperti memori, tenaga pemrosesan, atau data ke simpul klien. Simpul server juga dapat mengelola perilaku simpul klien.

Klien dapat saling berkomunikasi satu sama lain, tetapi tidak dapat berbagi sumber daya. Misalnya, beberapa perangkat komputer di jaringan korporasi menyimpan data dan pengaturan konfigurasi. Perangkat ini merupakan server dalam jaringan tersebut. Klien dapat mengakses data ini dengan membuat permintaan ke mesin server.

#### Arsitektur peer-to-peer

Dalam arsitektur peer-to-peer (P2P), komputer yang terhubung memiliki kedudukan dan hak istimewa yang sama. Tidak ada server pusat untuk melakukan koordinasi. Masing-masing perangkat dalam jaringan komputer dapat bertindak baik sebagai klien maupun server. Masing-masing peer dapat berbagi beberapa sumber dayanya, seperti memori dan tenaga pemrosesan (processing power), dengan seluruh jaringan komputer. Misalnya, beberapa perusahaan menggunakan arsitektur P2P untuk meng-host aplikasi yang boros memori, seperti rendering grafis 3-D, di beberapa perangkat digital.

### Topologi Jaringan

Susunan simpul dan tautan disebut sebagai topologi jaringan.

Simpul dapat dikonfigurasikan dengan berbagai cara untuk
mendapatkan hasil yang berbeda.

#### Topologi Bus

- Karakteristik:
  - Semua perangkat terhubung ke satu kabel utama (backbone).
  - Data ditransmisikan dalam satu arah.
  - Terminator di kedua ujung kabel untuk mencegah pantulan sinyal.
- Kelebihan:
  - Sederhana dan mudah dipasang.
  - Hemat biaya kabel.
- Kekurangan:
  - Rentan terhadap gangguan.
  - Kecepatan data terhambat oleh jumlah perangkat.
  - Sulit untuk di troubleshoot.

#### Topologi Ring

- Karakteristik:
  - Perangkat terhubung dalam bentuk lingkaran.
  - Data ditransmisikan secara searah, melewati setiap perangkat.
  - Token digunakan untuk mengontrol akses ke jaringan.
- Kelebihan:
  - Kontrol akses yang teratur.
  - Mudah dipasang.
- Kekurangan:
  - Rentan terhadap gangguan.
  - Sulit untuk menambahkan perangkat baru.
  - Kinerja terhambat oleh jumlah perangkat.

#### Topologi Star

- Karakteristik:
  - Semua perangkat terhubung ke hub atau switch pusat.
  - Data ditransmisikan secara langsung ke perangkat tujuan.
- Kelebihan:
  - Mudah dipasang dan diubah.
  - Sangat scalable.
  - Gangguan pada satu perangkat tidak memengaruhi yang lain.
- Kekurangan:
  - Membutuhkan hub/switch yang mahal.
  - Kinerja tergantung pada hub/switch.

#### Topologi Mesh

- Karakteristik:
  - Setiap perangkat terhubung ke semua perangkat lain.
  - Banyak jalur data redundan.
- Kelebihan:
  - Sangat handal dan aman.
  - Kinerja tinggi.
- Kekurangan:
  - Membutuhkan banyak kabel.
  - Kompleks untuk dipasang dan dikonfigurasi.
  - Mahal.

### LAN

LAN merupakan sistem yang saling terhubung, yang terbatas pada ukuran dan geografinya. Pada umumnya, LAN menghubungkan komputer dan perangkat dalam satu kantor atau gedung. Jaringan ini digunakan oleh perusahaan kecil atau jaringan pengujian untuk pembuatan prototipe berskala kecil.

### WAN

Jaringan korporasi yang mencakup gedung, kota, dan bahkan negara disebut sebagai jaringan area luas (WAN). Jaringan area lokal digunakan untuk mentransmisikan data dengan kecepatan lebih tinggi dalam jarak dekat, sedangkan WAN digunakan untuk komunikasi jarak jauh yang aman dan dapat diandalkan.

SD-WAN atau WAN yang ditentukan oleh perangkat lunak adalah arsitektur WAN yang dikontrol oleh teknologi perangkat lunak. SD-WAN menawarkan layanan konektivitas yang lebih fleksibel dan dapat diandalkan, yang dapat dikontrol pada tingkat aplikasi tanpa menurunkan keamanan dan kualitas layanan.

### Jaringan Penyedia Layanan (ISP)

Jaringan penyedia layanan memungkinkan pelanggan untuk menyewakan kapasitas dan fungsionalitas jaringan dari penyedia. Penyedia layanan jaringan dapat terdiri atas perusahaan telekomunikasi, operator data, penyedia komunikasi nirkabel, penyedia layanan internet, dan operator televisi kabel yang menawarkan akses internet berkecepatan tinggi.

### Jaringan Cloud

Secara konsep, jaringan cloud mirip dengan WAN yang infrastrukturnya disediakan dengan layanan berbasis cloud. Beberapa atau semua kemampuan dan sumber daya jaringan organisasi di-host dalam sebuah platform cloud publik atau privat dan disediakan sesuai permintaan. Sumber daya jaringan ini dapat termasuk router virtual, firewall, bandwidth, dan perangkat lunak manajemen jaringan beserta alat dan fungsi lain yang dibutuhkan.

Saat ini, bisnis menggunakan jaringan cloud untuk mempercepat waktu masuk pasar (TTM), meningkatkan skala, dan mengelola biaya secara efektif. Model jaringan cloud telah menjadi pendekatan standar dalam membangun dan mengirimkan aplikasi bagi korporasi modern.
