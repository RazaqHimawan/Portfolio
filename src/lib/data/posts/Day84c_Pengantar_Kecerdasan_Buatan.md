---
title: Day 84c
description: Pengantar Kecerdasan Buatan
date: '2024-5-15'
categories:
  - Teknologi Informasi dan Komunikasi
published: true
---

## Table of Contents

## Pengertian AI

Suatu cara yang sederhana untuk membuat komputer dapat “berpikir” secara inteligent.

Bagian dari ilmu komputer yang mempelajari perancangan sistem komputer yang inteligent, yaitu suatu sistem yang meperlihatkan karakteristik yang ada pada tingkah laku manusia, seperti mengerti suatu bahasa, mempelajari, mempertimbangkan dan memecahkan suatu masalah.

Suatu studi bagaimana membuat komputer dapat mengerjakan sesuatu, yang pada saat ini, orang dapat mengerjakan lebih baik.

Bidang ilmu komputer yang memungkinkannya untuk memahami, bernalar dan bertindak.

### Tujuan AI

1. Untuk mengembangkan metode dan sistem untuk menyelesaikan masalah,masalah yang biasa diselesaikan melalui aktifivitas intelektual manusia, misalnya pengolahan citra, perencanaan, peramalan dan lain-lain, meningkatkan kinerja sistem informasi yang berbasis komputer.

2. Untuk meningkatkan pengertian/pemahaman kita pada bagaimana otak manusia bekerja.

### Arah AI

1. Mengembangkan metode dan sistem untuk menyelesaikan masalah AI tanpa mengikuti cara manusia menyelesaikannya (sistem pakar / expert systems)

2. Mengembangkan metode dan sistem untuk menyelesaikan masalah AI melalui pemodelan cara berpikirnya manusia, atau cara bekerjanya otak manusia (neural networks).

### Bidang-Bidang Aplikasi AI

1. Task Keduniaan (Mundane Task)

   - Perception: Vision, Speech Recognition
   - Natural Language: Understanding, Generation,Translation
   - Commonsense Reasoning
   - Robot Control

2. Task Formal (Formal Task)

   - Games (Chess, Backgamon, checkers,Go)
   - Mathematics (Geometry, Logic, Integral Calculus, Proving properties of programs)

3. Task Ahli (Expert Tasks)
   - Engineering (Design, Fault Finding, Manufacturing Planning)
   - Scientific Analysis, Medical Diagnosis, Financial Analysis

### Paradigma AI

Symbolic or sub-symbolic (connectionist)

Jantung Penelitian AI adalah : Physical symbolic System Hypothesis.

#### Physical Symbol System (PSS)

Terdiri dari himpunan entitas yang dinamakan simbol, berpola fisik yang dapat menjadi komponen dari entitas tipe lain yang dinamakan Ekspresi (struktur simbol)

Struktur simbol terdiri dari sejumlah instant (Token) dari simbol-simbol yang berhubungan pada beberapa cara fisik.

Selain struktur tersebut, sistem juga berisi koleksi proses-proses yang beroperasi pada ekspresi, untuk menghasilkan ekspresi lain.

Contoh : proses pembuatan (create), modifikasi, reproduksi, dan penghancuran (destruksi).

Jadi PSS (Physical Symbol System) adalah mesin yang memproduksi suatu koleksi penyusunan struktur simbol. Sistem seperti itu terdapat dalam suatu objek dunia yang lebih luas dari hanya ekspresi simbolik itu sendiri.

### Pemograman AI vs Komputasi Konvensional

| AI                                                  | Komputasi Konvensional                          |
| --------------------------------------------------- | ----------------------------------------------- |
| Representasi dan Manipulasi simbol                  | Algoritma                                       |
| Memberitahu komputer tentang suatu masalah          | Memerintah komputer untuk menyelesaikan masalah |
| Komputer diberi pengetahuan dan kemampuan inferensi | Memberi data kepada komputer dan program        |

### Pemograman AI

- Bila terjadi perubahan dalam program, maka tidak mengganggu seluruh “Facts” yang tersimpan dalam “Otak” (layaknya pikiran manusia/seperti informasi yang terdapat pada pikiran manusia)
- Independen
- Dapat Dimodifikasi tanpa mempengaruhi struktur kesluruhan program
- Fleksibel efisien dan mudah untuk dimengerti

### Penyelesaian Masalah Berdasarkan Teknik AI

1. Definisikan masalah dengan jelas
2. Analisis masalah
3. Kumpulkan dan representasikan knowledge
4. Pilih teknik pemecah masalah terbaik dan gunakan untuk masalah tertentu

### Mendefinisikan Masalah sebagai “State Space Search” (SSS)

Misalnya : permainan catur

maka SSS nya adalah :

- Menspesifikasikan posisi awal dari papan catur,
- Peraturan (rules) yang mendefinisikan langkah- langkah yang legal,
- Posisi papan yang merepresentasikan pemenang dari satu sisi atau sisi lainnya.

Tujuan (Goal) dari permainan adalah memenangkan permainan.

## Sistem Produksi

Himpunan aturan: masing-masing terdiri dari sisi kiri (pola) yang menentukan kemampuan aplikasi dari aturan tersebut dan sisi kanan yang menggambarkan operasi yang dilalukan jika aturan dilaksanakan.

Satu atau lebih pengetahuan atau basis data yang berisi informasi apapun untuk tugas tertentu. Beberapa bagian basis data bisa permanen, dan bagian yang lain bisa hanya merupakan solusi untuk masalah saat ini. Informasi dalam basis data ini disusun secara tepat.

Strategi kontrol yang menspesifikasikan urutan dimana aturan akan dibandingkan dengan basis data dan menspesifikasikan cara pemecahan masalah yang timbul ketika beberapa aturan sesuai sekaligus pada waktu yang sama.

A rule applier (pengaplikasi aturan)

## Strategi Pencarian

Terdapat empat kriteria dalam strategi pencarian,

yaitu:

1. **Completeness**: Apakah strategi tersebut menjamin penemuan solusi jika solusinya memang ada?
2. **Time complexity**: Berapa lama waktu yang diperlukan?
3. **Space complexity**: Berapa banyak memori yang diperlukan?
4. **Optimality**: Apakah strategi tersebut menemukan solusi yang paling baik jika terdapat beberapa solusi berbeda pada permasalahan yang ada?

### Depth-First Search (DFS)

1. Pencarian dilakukan pada satu node dalam setiap level dari yang paling kiri. Jika pada level yang paling dalam, solusi belum ditemukan, maka pencarian dilanjutkan pada node sebelah kanan.
2. Node yang kiri dapat dihapus dari memori. Jika pada level yang paling dalam tidak ditemukan solusi, maka pencarian dilanjutkan pada level sebelumnya.
3. Demikian seterusnya sampai ditemukan solusi. Jika solusi ditemukan maka tidak diperlukan proses backtracking (penelusuran balik untuk mendapatkan jalur yang dinginkan).

#### Keuntungan DFS

- Pemakain memori hanya sedikit, berbeda jauh dengan BFS yang harus menyimpan semua node yang pernah dibangkitkan.
- Jika solusi yang dicari berada pada level yang dalam dan paling kiri, maka DFS akan menemukannya secara cepat.

#### Kelemahan DFS

- Jika pohon yang dibangkitkan mempunyai level yang dalam (tak terhingga), maka tidak ada jaminan untuk menemukan solusi (Tidak Complete).
- Jika terdapat lebih dari satu solusi yang sama tetapi berada pada level yang berbeda, maka pada DFS tidak ada jaminan untuk menemukan solusi yang paling baik (Tidak Optimal).

### Breadth-First Search (BFS)

1. Pencarian dilakukan pada semua node dalam setiap level secara berurutan dari kiri ke kanan.
2. Jika pada satu level belum ditemukan solusi, Maka pencarian dilanjutkan pada level berikutnya.
3. Demikian seterusnya sampai ditemukan solusi.
4. Dengan strategi ini, maka dapat dijamin bahwa solusi yang ditemukan adalah yang paling baik (Optimal).
5. Tetapi BFS harus menyimpan semua node yang pernah dibangkitkan. Hal ini harus dilakukan untuk penelusuran balik jika solusi sudah ditemukan.

### Metode-Metode Pencarian Berdasarkan Panduan (Heuristic Search)

- **Generate and Test**  
  Prosedur DFS karena solusi harus dibangkitkan secara lengkap sebelum dilakukan test. Algoritma ini berbentuk sistematis, pencarian sederhana yang mendalam dari ruang permasalahan. Generate and test juga dapat dilakukan dengan pembangkitan solusi secara acak, tetapi tidak ada jaminan solusinya akan ditemukan.

- **Simple Hill Climbing**
  Pada feedback dari prosedur test untuk membantu pembangkit menentukan yang langsung dipindahkan dalam ruang pencarian. HC sering digunakan jika terdapat fungsi heuristic yang baik untuk mengevaluasi state.

### Steepest-Ascent Hill Climbing

Merupakan metode yang membangkitkan suksesor dengan mempertimbangkan harga (didapat dari fungsi heuristik tertentu) dari setiap node, bukan dari aturan baku seperti DFS maupun BFS.
