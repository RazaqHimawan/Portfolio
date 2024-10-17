---
title: Day 112a
description: Sintaks Dasar PHP
date: '2024-10-02'
categories:
  - Pemograman Web 2
published: true
---

## Table of Contents

## Sintaks Dasar PHP

- Dimulai dengan `<?php` dan diakhiri dengan `?>`.
- Variabel dimulai dengan `$`
- Komentar dimulai dengan double slash `//`
- Contoh
  ```php
  <?php>
    $name = "abc";
    echo $name; // output: abc
  ?>
  ```

### Tipe Data

#### Integer

Yang termasuk dalam tipe data ini adalah bilangan bulat.

```php
$a = 1234; // desimal
$a = -1234; // negatif
$a = 0123; // oktal
$a = 0x1234; // heksadesimal
```

#### Floating Point

Disebut juga bilangan pecahan. Terdapat tanda titik yang merupakan pemisah antara bagian bulat dan pecahan.

```php
$a = 1.234; // bentuk biasa
$b = 1.2e3; // bentuk eksponensial
```

#### String

Tipe data string dalam PHP adalah tipe data yang digunakan untuk menyimpan teks. String terdiri dari rangkaian karakter, seperti huruf, angka, dan simbol. Dalam PHP, string dapat didefinisikan menggunakan tanda kutip tunggal (') atau tanda kutip ganda (").

```php
$a = "ini adalah tipe data string";
```
