---
title: Day 114
description: Pengkondisian
date: '2024-10-04'
categories:
  - Pemograman Web 2
published: true
---

## Table of Contents

## If

Pernyataan if adalah bentuk paling sederhana dari pernyataan kondisional. Ini akan menjalankan blok kode jika suatu kondisi terpenuhi (benar).

```php
$umur = 20;

if ($umur >= 18) {
    echo "Kamu sudah dewasa.";
}
```

## Else

Pernyataan else memungkinkan kamu untuk mendefinisikan blok kode alternatif yang akan dijalankan jika kondisi dalam if bernilai salah (false).

```php
$umur = 16;

if ($umur >= 18) {
    echo "Kamu sudah dewasa.";
} else {
    echo "Kamu masih di bawah umur.";
}
```

## Else-If

Pernyataan else if memungkinkan kamu memeriksa beberapa kondisi. Jika kondisi pertama salah, maka kondisi selanjutnya akan diperiksa.

```php
$umur = 17;

if ($umur >= 18) {
    echo "Kamu sudah dewasa.";
} elseif ($umur >= 13) {
    echo "Kamu seorang remaja.";
} else {
    echo "Kamu masih anak-anak.";
}
```

## Switch

Pernyataan switch adalah cara lain untuk menangani beberapa kondisi, terutama ketika kamu membandingkan nilai yang sama terhadap beberapa kasus berbeda. Ini lebih bersih dibandingkan menggunakan banyak pernyataan else if.

```php
$hari = "Rabu";

switch ($hari) {
    case "Senin":
        echo "Hari ini adalah Senin.";
        break;
    case "Selasa":
        echo "Hari ini adalah Selasa.";
        break;
    case "Rabu":
        echo "Hari ini adalah Rabu.";
        break;
    default:
        echo "Hari tidak valid.";
}
```

## Match (PHP 8)

Match mengembalikan nilai secara langsung, dan tidak memerlukan break. Selain itu, match mengevaluasi ekspresi menggunakan strict comparison (===), yang artinya tipe data juga harus sama untuk mencocokkan kondisi.

```php
$nilai = 10;

$result = match($nilai) {
    10 => "Angka sepuluh",
    20 => "Angka dua puluh",
    30 => "Angka tiga puluh",
    default => "Angka tidak dikenal",
};

echo $result;
```
