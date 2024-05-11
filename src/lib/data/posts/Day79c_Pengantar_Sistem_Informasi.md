---
title: Day 79c
description: Pengantar Sistem Informasi
date: '2024-5-08'
categories:
  - Teknologi Informasi dan Komunikasi
published: true
---

<script>
    import MermaidDiagram from '$lib/components/mermaid/MermaidDiagram.svelte';
</script>

## Table of Contents

## Konsep Dasar Sistem

### Sistem

Sistem adalah suatu jaringan kerja dari prosedur-prosedur yang saling berhubungan, berkumpul bersama-sama untuk melakukan suatu kegiatan atau untuk menyelesaikan suatu sasaran tertentu.

### Sistem yang Menekankan Pada Prosedur

Sistem yang Menekankan Pada Prosedur adalah urutan-urutan yang tepat dari tahapan-tahapan instruksi yang menerangkan apa yang harus dikerjakan, siapa yang mengerjakannya, kapan dikerjakan dan bagaimana mengerjakannya.

### Sistem yang Menekankan Pada Komponen (Elemen)

Sistem yang menekankan pada komponen (elemen) adalah kumpulan dari elemen-elemen yang berinteraksi untuk mencapai suatu tujuan tertentu.

### Karakteristik Sistem

- Mempunyai komponen
- Batas sistem
- Lingkungan luar sistem
- Penghubung
- Masukan
- Keluaran
- Pengolah/proses
- Sasaran atau tujuan

### Klasifikasi Sistem

1.  Sistem sebagai sitem alamiah dan sistem buatan manusia.
2.  Sistem sebagai sistem abstrak dan sistem fisik.
3.  Sistem sebagai sistem tertentu (deterministic) dan sistem tak tentu (probabilistic).
4.  Sistem sebagai sitem tertutup dan sistem terbuka.

## Konsep Dasar Informasi

### Data

Data adalah kenyataan yang menggambarkan suatu kejadian-kejadian dan kesatuan yang nyata.

Arti lain dari data adalah representasi dunia nyata yang mewakili suatu objek seperti manusia (pegawai, mahasiswa, pelanggan), hewan, peristiwa, konsep, keadaan dll, yang direkam dalam bentuk angka, huruf, simbol, teks, gambar, bunyi atau kombinasinya.

### Informasi

Informasi adalah data yang diolah menjadi bentuk yang lebih berguna dan lebih berarti bagi yang menerimanya.

Kebutuhan informasi didasarkan pada :

1. kegiatan bisnis yang semakin komplek.
2. Kemampuan komputer yang semakin meningkat.

Output komputer berupa informasi dapat digunakan oleh manager, non manager ataupun perorangan dalam suatu perusahaan.

### Siklus Informasi

Data yang masih merupakan bahan mentah yang harus diolah untuk menghasilkan informasi melalui suatu model.

Model yang digunakan untuk mengolah data tersebut disebut model pengolahan data atau dikenal dengan siklus pengolahan data (siklus informasi).

<MermaidDiagram>
{`
graph TD
A["Input"]
B["Proses(Model)"]
C["Output"]
D["Penerima"]
E["Keputusan/Tindakan"]
F["Hasil Tindakan"]
G["Data"]
A --> B --> C --> D --> E --> F --> G --> A;
`}
</MermaidDiagram>

### Kualitas Informasi

1. Akurat (Completeness, Correctness, Security)
2. Tepat waktu
3. Relevan
4. Ekonomis

## Konsep Dasar Sistem Informasi

### Sistem Informasi

Sistem Informasi adalah suatu sistem di dalam suatu organisasi yang mempertemukan kebutuhan pengolahan transaksi harian, mendukung operasi, bersifat manajerial dan kegiatan strategi dari suatu organisasi dan menyediakan pihak luar tertentu dengan laporan-laporan yang diperlukan.

Definisi lain Sistem Informasi: kerangka kerja yang mengkoordinasikan sumber daya (manusia dan komputer) untuk mengubah masukan (input) menjadi keluaran (informasi) guna mencapai sasaran-sasaran perusahaan.

### Komponen Sistem Informasi

1. Input
2. Model
3. Output
4. Teknologi
5. Basis Data
6. Kendali (Control)

### Jenis-Jenis Sistem Informasi

- Transaction Processing Systems (TPS)  
  Sistem informasi yang terkomputerisasi yang dikembangkan untuk memproses data dalam jumlah besar untuk transaksi bisnis rutin seperti daftar gaji dan inventarisasi.

- Office Automation Systems (OAS)  
  Mendukung pekerja data, yang biasanya tidak menciptakan pengetahuan baru melainkan hanya menganalisis informasi sedemikian rupa untuk mentransformasikan data atau memanipulasikannya dengan cara-cara tertentu sebelum menyebarkannya secara keseluruhan dengan organisasi dan kadang-kadang diluar organisasi.

- Knowledge Work Systems (KWS)  
  Mendukung para pekerja profesional seperti ilmuwan, insinyur dan doktor dengan membantu menciptakan pengetahuan baru dan memungkinkan mereka mengkontribusikannya ke organisasi atau masyarakat.

- Decision Support Systems (DSS)  
  DSS hampir sama dengan SIM karena menggunakan basis data sebagai sumber data. DSS bermula dari SIM karena menekankan pada fungsi mendukung pembuat keputusan diseluruh tahap-tahapnya, meskipun keputusan aktual tetap wewenang eksklusif pembuat keputusan.

- Sistem Ahli (Expert Systems (ES))  
  Sistem ahli menggunakan pendekatan-pendekatan pemikiran AI untuk menyelesaikan masalah serta memberikannya lewat pengguna bisnis.
  &nbsp;

  Sistem ahli (juga disebut knowledge-based systems) secara efektif menangkap dan menggunakan pengetahuan seorang ahli untuk menyelesaikan masalah yang dialami dalam suatu organisasi.

- Group Decision Support Systems (GDSS)  
  GDSS dimaksudkan untuk membawa kelompok bersama-sama menyelesaikan masalah dengan memberi bantuan dalam bentuk pendapat, kuesioner, konsultasi dan skenario.

- Executive Support Systems (ESS)  
  ESS tergantung pada informasi yang dihasilkan TPS dan SIM dan ESS membantu eksekutif mengatur interaksinya dengan lingkungan eksternal dengan menyediakan grafik-grafik dan pendukung komunikasi di tempat-tempat yang bisa diakses seperti kantor.

### Pengembangan Sistem Informasi

1. Adanya permasalahan-permasalahan yang timbul di sistem yang lama, permasalahan yang timbul dapat berupa ketidakberesan, pertumbuhan organisasi, dll.
2. Untuk meraih kesempatan-kesempatan.
3. Adanya instruksi-instruksi (dari pimpinan atau dari luar organisasi misalnya pemerintah).

## Konsep Dasar Analisis Sistem

### Analisis Sistem

Menurut Kristanto (2003) analisis sistem adalah "Suatu proses mengumpulkan dan menginterpretasikan kenyataan-kenyataan yang ada, mendiagnosa persoalan dan menggunakan keduanya untuk memperbaiki sistem."

### Analis Sistem

Menurut Kristanto (2003) analis sistem adalah "Orang yang mempunyai kemampuan untuk menganalisis sebuah sistem, memilih alternatif pemecahan masalah dan menyelesaikan masalah tersebut dengan menggunakan komputer."

### Peran Analis Sistem

1. Sebagai konsultan
2. Sebagai ahli pendukung
3. Sebagai agen perubahan

### Tugas Analis Sistem

1. mengumpulkan dan menganalisis semua dokumen, file, formulir yang digunakan pada sistem yang telah berjalan.
2. menyusun laporan dari sistem yang telah berjalan dan mengevaluasi kekurangan-kekurangan pada sistem tersebut dan melaporankan semua kekurangan tersebut kepada pemakai sistem.
3. merancang perbaikan pada sistem tersebut dan menyusun sistem baru.
4. menganalisis dan menyusun perkiraan biaya yang diperlukan untuk sistem yang baru dan memberikan argumen tentang keuntungan yang dapat diperoleh dari pemakian sistem yang baru tersebut.
5. mengawasi semua kegiatan terutama yang berkaitan dengan sistem yang baru tersebut.
