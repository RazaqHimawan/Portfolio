---
title: Day 78b
description: Sorting
date: '2024-5-07'
categories:
  - struktur data
published: true
---

## Table of Contents

## Bubble Sort

Bubble sort adalah algoritma pengurutan yang sederhana.

Algoritma ini dinamakan bubble sort karena elemen yang lebih besar seperti "menguap" ke atas daftar secara bertahap.

Bubble sort cocok untuk data yang ukurannya kecil. Namun, bubble sort tidak cocok untuk data yang besar karena semakin besar ukuran data, semakin lama waktu yang dibutuhkan untuk mengurutkannya.

### Cara Kerja

Cara kerjanya dengan berulang kali melewati daftar elemen masukan satu per satu, membandingkan elemen saat ini dengan elemen setelahnya, dan menukar nilainya jika diperlukan. Pengulangan ini dilakukan hingga tidak ada lagi pertukaran yang perlu dilakukan, yang menandakan bahwa daftar tersebut sudah terurut.

### Algoritma

```js
do
  swapped = false

  for i = 1 to indexOfLastUnsortedElement-1
    if leftElement > rightElement
      swap(leftElement, rightElement)
      swapped = true; ++swapCounter

while swapped
```

## Insertion Sort

Insertion sort adalah algoritma pengurutan yang bekerja dengan cara menyisipkan elemen ke dalam posisinya yang benar pada sub-array yang sudah terurut. Mirip seperti saat kita mengurutkan kartu remi di tangan kita.

Secara bertahap, insertion sort membangun sub-array yang terurut dari awal list. Pada setiap iterasi, elemen berikutnya dari sub-array yang belum terurut diambil dan disisipkan pada posisi yang tepat di dalam sub-array yang sudah terurut.

Jika dibandingkan dengan algoritma pengurutan lain seperti quicksort atau merge sort, insertion sort umumnya kurang efisien untuk data berukuran besar.

### Cara Kerja

Berikut adalah proses dari insertion sort:

1. Sub-array yang terurut pada awalnya hanya terdiri dari elemen pertama. Elemen ini dianggap sudah berada pada posisi yang benar.
2. Ambil elemen berikutnya dari sub-array yang belum terurut.
3. Bandingkan elemen tersebut dengan elemen-elemen di dalam sub-array yang sudah terurut.
4. Geser elemen-elemen di sub-array yang sudah terurut ke kanan, selama elemen tersebut lebih besar dari elemen yang sedang disisipkan.
5. Sisipkan elemen yang sedang disisipkan pada posisi yang tepat di dalam sub-array yang sudah terurut.
6. Ulangi langkah 2 sampai 5 hingga semua elemen dari sub-array yang belum terurut telah terproses.

### Algoritma

```js
mark first element as sorted

for each unsorted element X
  'extract' the element X

  for j = lastSortedIndex down to 0
    if current element j > X
      move sorted element to the right by 1

    break loop and insert X here
```

## Selection Sort

Selection Sort adalah salah satu algoritma pengurutan yang sederhana tetapi efektif.

### Cara Kerja

Algoritma ini bekerja dengan cara mencari elemen terkecil dari daftar, menukar elemen tersebut dengan elemen pertama, dan kemudian mengulangi proses ini untuk elemen kedua, ketiga, dan seterusnya hingga seluruh daftar terurut.

Langkah-langkah:

- Langkah 1: Pencarian Elemen Terkecil

  - Mulailah dengan menganggap bahwa elemen pertama dari daftar adalah elemen terkecil.
  - Selanjutnya, bandingkan elemen terkecil ini dengan elemen kedua. Jika elemen kedua lebih kecil, tandai elemen kedua tersebut sebagai elemen terkecil.
  - Terus lanjutkan proses ini dengan membandingkan elemen terkecil yang ditandai dengan elemen ketiga, keempat, dan seterusnya, hingga semua elemen telah dibandingkan.

- Langkah 2: Penukaran Elemen

  - Setelah menemukan elemen terkecil dari daftar, tukar elemen tersebut dengan elemen pertama dari daftar.
  - Sebagai hasilnya, elemen terkecil akan berada di posisi pertama dari daftar.

- Langkah 3: Iterasi

  - Kemudian, lakukan langkah-langkah 1 dan 2 untuk sisa elemen daftar, yaitu elemen kedua hingga elemen terakhir.

- Langkah 4: Selesaikan Iterasi
  - Ulangi proses langkah 1 hingga langkah 3 hingga seluruh daftar terurut dari elemen terkecil ke elemen terbesar.

### Algoritma

```js
repeat (numOfElements - 1) times
  set the first unsorted element as the minimum

  for each of the unsorted elements
    if element < currentMinimum
      set element as new minimum

  swap minimum with first unsorted position
```
