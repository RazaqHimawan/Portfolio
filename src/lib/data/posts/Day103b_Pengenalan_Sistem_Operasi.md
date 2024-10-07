---
title: Day 103b
description: Pengenalan Sistem Operasi
date: '2024-9-18'
categories:
  - SO
published: true
---

## Table of Contents

## Sistem Operasi

Sistem operasi adalah bagian yang penting dari sistem komputer. Secara umum sistem komputer terbagi dari hardware, sistem operasi, program aplikasi, dan pengguna (user).

Hardware atau perangkat keras terdiri atas: CPU (Central Processing Unit), media penyimpanan (memory), perangkat I/O (input/output) dan system bus (struktur dan mekanisme yang berguna untuk komunikasi antara prosesor, memori utama dan modul I/O) sebagai sumber daya dasar.

Program aplikasi berisi compiler, basis data, games dan program-program bisnis, yang merupakan suatu cara dimana resource-resource (sumber daya) akan diakses untuk menyelesaikan masalah pengguna (Kusumadewi, 2002).

Sistem operasi adalah lapisan dari program aplikasi yang digunakan untuk mengelola sumber daya
komputer pengguna dan aplikasi mereka.

Suatu aplikasi dibuat dengan satu atau beberapa bahasa pemrograman dan dikembangkan dengan aplikasi-aplikasi pemrograman lainnya. Jika ada seorang programmer mengembangkan aplikasi dengan kumpulan instruksi-instruksi bahasa mesin yang akan mengontrol hardware komputer, maka programmer tersebut membutuhkan suatu aplikasi peamrograman yang disebut dengan Utility, sedangkan seorang desainer sistem operasi harus mengetahui cara kerja hardware komputer.

### Beberapa Definisi yang Dapat Diberikan untuk Sistem Operasi

1. Software yang mengontrol hardware, hanya berupa program biasa (seperti beberapa file pada DOS).
2. Program yang menjadikan hardware lebih mudah untuk digunakan.
3. Kumpulan program yang mengatur kerja hardware, contoh: melayani permintaan pemakai.
4. Resource manager atau resource allocator, contoh: mengatur memori, printer, dll.
5. Sebagai program pengontrol (program yang digunakan untuk mengontrol program yang lainnya).
6. Sebagai kernel, yaitu program yang terus-menerus beroperasi selama komputer hidup.
7. Sebagai guardian, yaitu mengatur atau menjaga komputer dari berbagai kejahatan komputer.

### Tiga Peran Sistem Operasi Menurut Anderson & Dahlin (2014)

#### A. Operating Systems Play Referee

- Sistem operasi memainkan peran sebagai wasit, mereka mengelola sumber daya bersama berbagai aplikasi yang berjalan pada mesin fisik yang sama. Misalnya, sistem operasi dapat menghentikan satu program dan memulai yang lain.
- Sistem operasi mengisolasi aplikasi yang berbeda satu sama lain, sehingga jika ada bug dalam satu aplikasi maka tidak merusak aplikasi lain yang berjalan di mesin yang sama.
- Sistem operasi harus melindungi dirinya sendiri dan aplikasi lain dari virus komputer berbahaya.
- Ketika aplikasi berbagi sumber daya fisik, maka sistem operasi perlu memutuskan aplikasi mana yang mendapatkan sumber daya tersebut.

#### B. Operating Systems Play Illusionist

- Sistem operasi memainkan peran sebagai ilusionis, mereka menyederhanakan desain aplikasi dari kompleksitas fisik perangkat keras. Untuk menulis program "hello world", tidak perlu untuk memikirkan berapa banyak memori fisik yang dimiliki sistem, atau berapa banyak program lain yang mungkin berbagi sumber daya komputer.
- Sebaliknya, sistem operasi memberikan ilusi memori yang hampir tak terbatas sebagai abstraksi di atas jumlah memori fisik yang terbatas.
- Sistem operasi juga memberikan ilusi bahwa setiap program memiliki prosesor komputer sepenuhnya untuk dirinya sendiri. Jelas, kenyataannya sangat berbeda! Ilusi ini memungkinkan aplikasi untuk ditulis secara independen dari jumlah memori fisik pada sistem atau jumlah fisik prosesor. Karena aplikasi ditulis ke tingkat abstraksi yang lebih tinggi, sistem operasi bebas untuk mengubah jumlah sumber daya yang ditetapkan untuk setiap aplikasi ketika aplikasi mulai dijalankan dan berhenti.

#### C. Operating Systems Provide Glue

- Sistem operasi memainkan peran sebagai perekat, satu set layanan umum antar aplikasi.
- Manfaat penting dari layanan umum adalah untuk memfasilitasi berbagi antar aplikasi. Misalnya, memotong dan menempelkan pekerjaan secara seragam pada seluruh sistem dan file yang ditulis oleh satu aplikasi sehingga dapat dibaca oleh yang lain (fungsi atau Web API).
- Banyak sistem operasi yang menyediakan rangkaian rutin antarmuka pengguna yang umum untuk membantu aplikasi memberikan "look and feel" yang umum. Mungkin yang paling penting adalah sistem operasi menyediakan lapisan yang memisahkan aplikasi dari perangkat input dan output perangkat keras, sehingga aplikasi dapat ditulis secara independen yang mana keyboard, mouse atau disk drive tertentu sedang digunakan pada komputer tertentu.
- Sistem operasi ditinjau dari apa yang dikerjakan yaitu sebagai resource allocator atau resource manager yang bertugas untuk mengalokasikan sumber daya komputer.

### Tujuan Adanya Sistem Operasi

Secara singkat dapat dikatakan bahwa tujuan adanya sistem operasi adalah untuk menunjukkan lingkungan dimana pemakai dapat mengeksekusi program-programnya. Sistem operasi membuat sistem komputer nyaman untuk digunakan. Sistem operasi mengefisienkan hardware komputer.

## Sejarah Sistem Operasi

### A. Sistem Awal (Serial Processing)

- Ukuran Komputer: Komputer awal berukuran besar dan dijalankan dari console.
- Console: Terdiri dari lampu-lampu, tombol-tombol, perangkat masukan (card reader), dan printer.
- Peran Programmer: Programmer juga berfungsi sebagai operator, menulis dan menjalankan program langsung dari console.
- Memori: Program dimuat ke dalam memori untuk menjalankan instruksi dari kartu plong.
- Eksekusi Program: Terdapat tombol di console untuk menjalankan keseluruhan program.
- Error Handling: Jika terjadi error, lampu indikator menyala, memungkinkan programmer menghentikan program dan memeriksa memori serta register untuk debugging.
- Output Program: Keluaran program dapat dicetak atau disimpan dalam bentuk kartu plong untuk pencetakan di kemudian hari.
- Perkembangan Hardware dan Software: Perangkat tambahan seperti card reader, line printer, dan magnetic tape menjadi umum.Pengembangan Tools Pemrograman: Assembler, linker, dan loader diciptakan untuk memudahkan pemrograman.
- Library Fungsi: Fungsi-fungsi yang sering digunakan disatukan dan disimpan sebagai library untuk menghindari penulisan ulang.

### B. Sistem Batch Sederhana

- Masalah dalam Serial Processing
  - Waktu CPU Terbuang: Banyak waktu CPU terbuang karena idle saat programmer/operator mengganti tape.
  - Biaya Tinggi: Harga komputer dan biaya operasional yang mahal memperburuk situasi ini.
- Solusi: Pengelompokan Job
  - Pengumpulan Job: Job-job sejenis dikelompokkan untuk dieksekusi bersama.
  - Overlap antara I/O dan CPU: Terdapat dua metode untuk menangani overlap ini:
    - Off-line Processing: Data dibaca dari card reader disimpan di tape drives sebelum diproses oleh CPU; Output yang belum dicetak juga disimpan di tape drives. Keuntungan: Mengurangi kebutuhan akan card reader dan printer cepat; cukup menggunakan magnetic tape yang lebih cepat.
    - Spooling: Menggunakan disk untuk memungkinkan akses data secara random. Data dibaca langsung dari card reader ke disk dan dieksekusi dari disk. Output disalin ke buffer dan disimpan di disk sebelum dicetak.
- Batch System
  1. Pengertian: Pengumpulan job-job yang sama dalam satu angkatan.
  2. Bentuk Batch System:
     - Resident Monitor:
       - Operator mengatur urutan job secara manual, mengganti job setelah selesai.
       - Job yang sama hanya perlu disetup sekali, meningkatkan efisiensi.
       - Pengembangan Teknik Otomatis: Teknik yang mengotomatiskan pengurutan job untuk menghindari waktu CPU terbuang.
       - Resident Monitor: Program kecil yang selalu ada di memori, mengatur urutan job secara otomatis saat komputer dihidupkan.
  3. Overlap Operasi I/O dengan CPU:
     - Proses off-line menggunakan tape drive untuk menjembatani antara CPU dan perangkat I/O seperti card reader, plotter, dan printer.
- Kesimpulan Batch System mengurangi waktu CPU terbuang dan meningkatkan efisiensi pemrosesan job dengan cara mengelompokkan dan mengatur eksekusi job secara otomatis.

### C. Sistem Multiprogramming

- Pengelompokan Job
  1. Job Pool: Beberapa job yang siap dieksekusi dikumpulkan dalam suatu pool.
  2. Penyimpanan di Memori Utama: Sistem operasi memilih job dari pool dan memuatnya ke memori utama.
- Penggantian Proses
  1. Tunggu dan Ganti: Jika job yang sedang dieksekusi membutuhkan I/O (seperti masukan dari keyboard), CPU akan menggantinya dengan job berikutnya.
  2. Partisi dalam Memori: Memori utama dibagi menjadi beberapa partisi, masing-masing berisi satu program.
     - Foreground Partitions: Berisi program dengan prioritas lebih rendah.
  3. Pemrosesan Bergantian: Jika suatu proses selesai atau membutuhkan I/O, CPU beralih ke proses berikutnya.
- Tugas Sistem Operasi
  - Manajemen Perpindahan Proses: Sistem operasi bertanggung jawab untuk menangani perpindahan (switch) antara proses.
- Contoh ProsesProses P1, P2, P3, dan P4:
  - Proses P1: 10 ms
  - Proses P2: 4 ms
  - Proses P3: 6 ms
  - Proses P4: Waktu total 23 ms
- Kesimpulan Sistem operasi mengelola beberapa job dalam memori dengan cara memanfaatkan partisi dan mengganti proses yang membutuhkan I/O untuk meningkatkan efisiensi pemrosesan.

### D. Sistem Time-Sharing

- Pengertian Time-Sharing
  1. Definisi: Sistem time-sharing, juga dikenal sebagai multitasking, mirip dengan multiprogramming tetapi dengan batasan waktu untuk setiap proses.
  2. Quantum Time: Waktu maksimum yang diperbolehkan untuk menggunakan CPU disebut quantum time.
- Keuntungan dan Kerugian
  1. Keuntungan:Tingkat kebersamaan yang tinggi, memungkinkan banyak pengguna atau proses berjalan secara bersamaan.
  2. Kerugian:Switching time yang dapat menurunkan utilitas CPU.
- Perilaku Proses
  1. Proses dengan CPU Burst Kecil: Jika proses memiliki CPU burst lebih kecil dari quantum time, proses tersebut akan menyelesaikan tugasnya dan melepaskan CPU.
  2. Proses dengan CPU Burst Besar: Jika CPU burst lebih besar dari quantum time, proses akan dihentikan sementara saat mencapai quantum time dan akan mengantri di akhir ready queue sebelum CPU melanjutkan ke proses berikutnya.
- Contoh dengan Quantum Time 2 ms
  1. Gantt Chart:Proses P1 selesai pada 23 ms.
  2. Proses P2 selesai pada 12 ms.
  3. Proses P3 selesai pada 19 ms.
  4. Proses P4 selesai pada 15 ms.
- Kesimpulan Sistem time-sharing meningkatkan efisiensi penggunaan CPU dengan membatasi waktu eksekusi setiap proses, tetapi dapat mengalami penurunan utilitas akibat switching time.

### E. Sistem MultiProcessing

- Pengertian Multiprosessing
  1. Definisi: Sistem dengan lebih dari satu prosesor yang dapat menjalankan satu atau lebih program secara bersamaan, berbagi bus, clock, memori, dan peralatan lainnya.
  2. Tightly Coupled System: Sistem ini sering disebut dengan istilah ini karena prosesor beroperasi secara terintegrasi.
- Jenis-Jenis Multiprosessing
  1. Symmetric Multiprocessing (SMP): Setiap prosesor memiliki sistem operasi yang sama dan dapat menangani proses yang sama secara bersamaan.
  2. Asymmetric Multiprocessing (AMP):Satu prosesor berfungsi sebagai master prosesor yang mengatur penjadwalan dan alokasi kerja, sedangkan prosesor lainnya berfungsi sebagai slave.
- Contoh Gantt Chart
  - Dua CPU: Ketika menggunakan dua prosesor, waktu yang diperlukan untuk menyelesaikan proses P1 hingga P4 adalah 13 ms.
    - Prosesor pertama mengerjakan proses P1.
    - Prosesor kedua mengerjakan proses P2, yang selesai dalam 4 ms, kemudian melanjutkan ke proses P3.
    - Setelah 10 ms, proses P1 selesai, dan prosesor pertama melanjutkan dengan proses P4 selama 3 ms.
- Kesimpulan Sistem multiprosessing memungkinkan efisiensi yang lebih tinggi dalam pemrosesan dengan membagi tugas di antara beberapa prosesor, baik dengan pendekatan simetris maupun asimetris.

### F. Sistem Personal Computer

- PC (Personal Computer) tercipta berkat hardware yang semakin murah dan adanya kecenderungan komputer dipakai untuk single user (pemakai tunggal). Perangkat-perangkat I/O-nya pun juga berubah.
- PC mulai diperkenalkan sekitar tahun 1970-an. Komputer ini merupakan sebuah komputer mikro yang bentuknya lebih kecil dan harganya lebih murah dibanding komputer Mainframe.
- Dalam beberapa hal, sistem operasi PC mendapat manfaat dari pengembangan sistem operasi Mainframe karena sistem operasi PC dapat mengadopsi teknologi yang dikembangkan untuk sistem operasi Mainframe.

### G. Sistem Paralel

- Pengertian Sistem Paralel
  - Prosesor Tunggal: Banyak sistem komputer saat ini masih menggunakan satu prosesor.
  - Masa Depan Multiprocessor: Penggunaan lebih dari satu prosesor dalam satu sistem komputer diperkirakan akan menjadi tren.
- Tightly Coupled System
  - Definisi: Sistem multiprocessor yang terhubung dekat, berbagi jalur bus, memori, dan perangkat lain melalui jaringan LAN.
- Alasan Penggunaan Sistem Paralel
  - Meningkatkan Throughput: Lebih banyak prosesor memungkinkan penyelesaian lebih banyak pekerjaan dalam waktu yang lebih singkat.
  - Menghemat Biaya:Perangkat keras dapat dibagi antara komputer, mengurangi kebutuhan untuk instalasi perangkat yang sama di setiap unit.
  - Meningkatkan Kehandalan (Reliability):Distribusi fungsi program yang baik memungkinkan kegagalan satu komputer tidak menghentikan sistem secara keseluruhan, hanya sedikit memperlambat kinerja.
- Kesimpulan sistem paralel dengan penggunaan multiprocessor menawarkan keuntungan dalam throughput, penghematan biaya, dan kehandalan, menjadikannya pilihan menarik untuk pengembangan teknologi komputer di masa depan.

### H. Sistem Terdistribusi

- Sistem terdistribusi atau Loosely Coupled System adalah sistem yang setiap prosesor mempunyai memori dan clock sendiri-sendiri. Prosesor berkomunikasi satu sama lain dengan menggunakan bermacam-macam jalur komunikasi, misalnya jalur telepon.
- Keuntungan
  1.  Berbagi Sumber Daya: Masing-masing sumber daya yang ada pada masing-masing site dapat dibagi- pakai dengan seluruh komputer yang bergabung dalam sistem ini.
  2.  Meningkatkan Komputasi: Jika suatu perhitungan komputasi dapat dibagi-bagi menjadi bagianbagian yang lebih kecil dan dapat diolah secara bersamaan, maka dengan sistem ini bagian-bagian yang lebih kecil tersebut dapat didistribusikan ke seluruh komputer yang tergabung dalam sistem.
  3.  Kehandalan (Reliability): Jika ada satu situs yang gagal dalam sistem ini, maka situs-situs yang lain mempunyai kesempatan untuk melanjutkan operasi yang gagal tersebut, sehingga keseluruhan operasi dapat diselesaikan.

### J. Mobile Computing

- Pengertian Mobile Computing
  - Definisi: Komputasi seluler merujuk pada penggunaan perangkat portabel seperti smartphone dan tablet.
  - Karakteristik: Perangkat ini ringan dan mudah dibawa, dengan ukuran layar kecil dibandingkan dengan komputer desktop dan laptop.
- Evolusi Fungsionalitas
  - Fitur yang Kaya: Perangkat seluler kini memiliki fungsionalitas yang mirip dengan laptop, termasuk akses ke email, penelusuran web, pemutaran musik dan video, membaca buku digital, serta fotografi dan perekaman video resolusi tinggi.
- Aplikasi dan Fitur Unik
  - Pengembangan Aplikasi: Pengembang merancang aplikasi yang memanfaatkan fitur unik, seperti:
    - GPS: Memungkinkan navigasi dan penentuan lokasi.
    - Akselerometer: Mendeteksi orientasi dan gerakan perangkat, digunakan dalam permainan dan aplikasi augmented reality.
- Jaringan dan Konektivitas
  - Akses Layanan Online: Perangkat seluler menggunakan jaringan data nirkabel atau seluler.
  - Standar Wi-Fi: Menggunakan protokol IEEE 802.11, termasuk 802.11a, 802.11b, dan 802.11g, dengan kecepatan data maksimum bervariasi.
- Keterbatasan Perangkat Seluler
  - Kapasitas Memori: Memori perangkat seluler (misalnya, 64 GB atau lebih) jauh lebih kecil dibandingkan dengan komputer desktop (hingga 1 TB).
  - Kecepatan Pemrosesan: Perangkat seluler menggunakan prosesor yang lebih kecil dan lebih lambat, dengan lebih sedikit inti pemrosesan dibandingkan komputer desktop.
- Kesimpulan Mobile computing menawarkan banyak aplikasi dan fungsionalitas yang unik, meskipun dengan keterbatasan dalam kapasitas memori dan kecepatan pemrosesan dibandingkan dengan komputer desktop dan laptop.
