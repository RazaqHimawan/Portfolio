---
title: Day 118a
description: Looping
date: '2024-10-09'
categories:
  - Pemograman Web 2
published: true
---

## Table of Contents

## Looping

### While

Digunakan ketika kita ingin menjalankan blok kode selama kondisi yang diberikan bernilai true. Kondisi diperiksa sebelum eksekusi dimulai, jadi jika kondisi langsung false, blok kode tidak akan pernah dieksekusi.

```php
while (kondisi) {
    // kode yang akan dieksekusi
}

$i = 1;
while ($i <= 5) {
    echo $i;
    $i++;
}
// Output: 12345
```

### Do...While

Sama seperti while loop, tetapi perbedaannya adalah bahwa kondisi diperiksa setelah blok kode dieksekusi. Artinya, blok kode selalu akan dieksekusi setidaknya satu kali, meskipun kondisi awalnya false.

```php
do {
    // kode yang akan dieksekusi
} while (kondisi);

$i = 6;
do {
    echo $i;
    $i++;
} while ($i <= 5);
// Output: 6
```

### For

For loop digunakan saat kita sudah mengetahui jumlah iterasi (pengulangan) sebelumnya. Ini biasanya digunakan untuk pengulangan yang terbatas dan terstruktur.

```php
for (init; kondisi; increment) {
    // kode yang akan dieksekusi
}

for ($i = 1; $i <= 5; $i++) {
    echo $i;
}
// Output: 12345
```

### Foreach

foreach loop digunakan untuk mengulangi setiap elemen dalam array atau koleksi data lainnya. Loop ini sangat efisien untuk mengakses dan memanipulasi elemen-elemen dalam array.

```php
foreach ($array as $nilai) {
    // kode yang akan dieksekusi
}

$arr = array(1, 2, 3, 4, 5);
foreach ($arr as $value) {
    echo $value;
}
// Output: 12345

// Key-value foreach
foreach ($array as $kunci => $nilai) {
    // kode yang akan dieksekusi
}

$arr = array("a" => 1, "b" => 2, "c" => 3);
foreach ($arr as $key => $value) {
    echo $key . ": " . $value . " ";
}
// Output: a: 1 b: 2 c: 3

```

### Break dan Continue

- break: digunakan untuk menghentikan eksekusi loop sebelum waktunya, keluar dari loop.
  ```php
  for ($i = 1; $i <= 5; $i++) {
    if ($i == 3) {
        break;
    }
    echo $i;
  }
  // Output: 12
  ```
- continue: digunakan untuk melewatkan iterasi saat ini dan melanjutkan ke iterasi berikutnya.
  ```php
  for ($i = 1; $i <= 5; $i++) {
    if ($i == 3) {
        continue;
    }
    echo $i;
  }
  // Output: 1245
  ```
