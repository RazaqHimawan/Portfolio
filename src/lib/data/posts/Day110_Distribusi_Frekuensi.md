---
title: Day 110
description: Distribusi Frekuensi
date: '2024-09-28'
categories:
  - Probabilitas Statistika
published: true
---

## Table of Contents

## Distribusi Frekuensi

Tujuan dari pembuatan tabel distribusi frekuensi adalah untuk mengatur data mentah (data yang belum dikelompokkan) ke dalam bentuk yang rapi tanpa mengurangi inti informasi yang ada.

Pembuatan tabel distribusi frekuensi dapat dimulai dengan menyusun data mentah ke dalam urutan yang sistematis (dari nilai terkecil ke nilai yang lebih besar atau sebaliknya) atau lebih sering disebut data terurut.

### Penyusunan Distribusi Frekuensi

#### Kelas Interval

Dalam daftar distribusi frekuensi, data dibuat menjadi beberapa kelompok dalam interval-interval tertentu. Urutan kelas interval disusun mulai dari data terkecil sampai dengan data terbesar atau sebaliknya kelompok tersebut disebut **kelas interval**.

#### Ujung Kelas Interval

Nilai-nilai di kiri kelas interval disebut **ujung bawah kelas** (UBK).

Nilai-nilai di kanan kelas interval disebut **ujung atas kelas** (UAK).

Perbedaan antara ujung bawah kelas dengan ujung atas kelas sebelumnya adalah:

- satu jika data dicatat hingga satuan,
- sepersepuluh jika data dicatat hingga satu desimal,
- seperseratus jika data dicatat hingga dua desimal, dst.

Disesuaikan dengan **Satuan Pengukuran Terkecil** (SPT).

#### Panjang Kelas Interval (p)

Selisih positif antara tiap dua ujung bawah kelas berurutan disebut panjang kelas interval.

#### Frekuensi (f)

Bilangan yang menunjukkan banyaknya data yang terdapat dalam setiap kelas interval disebut frekuensi.

Jumlah seluruh frekuensi sama dengan jumlah seluruh data (n).

#### Batas Kelas Interval

Nilai batas bawah kelas (BBK) bergantung pada ketelitian data yang digunakan. Jika data dicatat hingga satuan $BBK = UBK - 0,5$. Jika data dicatat hingga satu desimal $BBK = UBK - 0, 05....dst$.

Nilai batas atas kelas (BAK) bergantung pada ketelitian data yang digunakan. Jika data dicatat hingga satuan $BAK = UAK + 0,5$. Jika data dicatat hingga satu desimal $BAK = UAK + 0, 05....dst$.

Nilai batas bawah kelas berikutnya sama dengan nilai batas atas kelas sebelumnya.

#### Titik Tengah Kelas (m)

- Titik tengah kelas/tanda kelas adalah suatu nilai yang diambil sebagai wakil dari kelas itu, yakni rata-rata setiap kelas interval .

- Titik Tegah Kelas = $(UBK + UAK) / 2 = (BBK + BAK)/2$

### Langkah-langkah Membuat Daftar Distribusi Frekuensi

1. Tentukan nilai dari data terkecil ($DK$), data terbesar ($DB$), dan banyak data ($n$).

2. Tentukan Rentang/Range, yaitu nilai data terbesar dikurangi nilai data terkecil ($DB-DK$).

3. Tentukan banyak kelas interval yang diperlukan.  
   Pada umumnya, banyak kelas interval ini antara 5 sampai 15 kelas, dipilih sesuai keperluan. Namun yang ideal, banyak kelas interval dapat dihitung dengan menggunakan aturan Sturges, yaitu:

   $$Banyak\ Kelas = 1 + 3,3 \log (n)$$

4. Tentukan panjang kelas interval (p).

   $$P = Rentang \div Banyak Kelas$$

5. Tentukan ujung bawah kelas interval pertama.  
   Biasanya diambil data terkecil atau nilai yang lebih kecil dari data terkecil, akan tetapi selisihnya harus kurang dari panjang kelas interval yang telah didapat.

6. Selanjutnya **kelas interval pertama** dihitung dengan cara

   $$UBK + P - SPT$$

   (SPT bisa 1; 0,1; 0,01;...dst)

7. Nilai $f$ dihitung dengan menggunakan tabel penolong (melakukan proses tabulasi)

8. Buat Tabel Distribusi Frekuensi

### Distribusi Frekuensi Relatif

- Dalam daftar distribusi frekuensi yang dibuat, frekuensi dinyatakan dengan banyaknya data yang terdapat dalam tiap kelas (berbentuk absolut). Jika frekuensi tersebut dinyatakan dalam bentuk persen, maka akan diperoleh daftar distribusi frekuensi relatif.

- Jadi distribusi frekuensi relatif disusun melalui pembagian masing-masing frekuensi kelas dengan seluruh frekuensi dan dinyatakan dalam persen. Distribusi frekuensi relatif terutama berguna dalam membandingkan beberapa distribusi yang memiliki jumlah frekuensi yang berbeda.

- Untuk mendapatkan nilai f(%) atau frekuensi relatif dihitung dengan rumus berikut :

  $$f (\%) = {f (absolut) \over n} \times 100\%$$

### Distribusi Frekuensi Kumulatif

- Daftar distribusi frekuensi kumulatif adalah distribusi frekuensi biasa yang nilai frekuensi kumulatifnya didapat dengan jalan menjumlahkan frekuensi demi frekuensi.

- Daftar distribusi frekuensi kumulatif ada 2 macam, yaitu kumulatif kurang dari ($<$) dan kumulatif atau lebih ($\geq$).

- Distribusi frekuensi kumulatif kurang dari $<$
  - Diperoleh dengan cara menjumlahkan frekuensi setiap kelas.
  - Kelas pertama selalu bernilai 0 (nol).
  - Kelas terakhir selalu bernilai sama dengan banyak data.
- Distribusi frekuensi kumulatif atau lebih $\geq$
  - Diperoleh dengan cara mengurangkan frekuensi setiap kelas.
  - Kelas pertama selalu bernilai sama dengan banyak data.
  - Kelas terakhir selalu bernilai 0 (nol).

### Penyajian Distribusi Frekuensi Dengan Grafik

- Pola data yang disajikan dalam diagram/grafik dapat lebih mudah ditangkap maknanya dibandingkan dengan memperhatikan tabel frekuensi. Dua bentuk penyajian grafik dari seperangkat data yang disajikan dalam daftar distribusi frekuensi adalah **Histogram** dan **Poligon Frekuensi**.

#### Histogram

- Histogram adalah penyajian data distribusi frekuensi yang diubah menjadi diagram batang, namun sisi-sisi batang yang berdekatan harus berimpitan. Untuk menggambarkan histogram digunakan sumbu mendatar yang menyatakan batas-batas kelas interval dan sumbu tegak menyatakan frekuensi absolut atau frekuensi relatif.

#### Poligon Frekuensi

- Poligon Frekuensi adalah diagram garis dari suatu distribusi frekuensi. Polygon frekuensi diperoleh dengan menghubungkan titik-titik yang merupakan pasangan koordinat titik tengah dan frekuensi setiap kelas.

#### Ogive

- Ogive merupakan penyajian secara grafis dari suatu distribusi frekuensi kumulatif (berupa diagram garis).

- Distribusi frekuensi kumulatif "kurang dari" mempunyai ogive yang naik dari kiri bawah ke kanan atas, sedangkan distribusi frekuensi kumulatif "atau lebih" mempunyai ogive yang turun dari kiri atas ke kanan bawah.
