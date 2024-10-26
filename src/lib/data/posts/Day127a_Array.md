---
title: Day 127a
description: Array
date: '2024-10-23'
categories:
  - Pemograman Web 2
published: true
---

## Table of Contents

## Array

Array dalam PHP adalah struktur data yang memungkinkan Anda untuk menyimpan satu atau lebih nilai dalam satu variabel. Array dapat berisi nilai dari berbagai tipe data, termasuk string, integer, dan bahkan array lainnya.

```php
// Array Indeks
$fruits = ["Apple", "Banana", "Cherry"];
echo $fruits[1]; // Output: Banana

// Array Asosiatif
$age = ["Peter" => 35, "Ben" => 37, "Joe" => 43];
echo $age["Ben"]; // Output: 37

// Array Multidimensi
$cars = [
    ["Volvo", 22, 18],
    ["BMW", 15, 13],
    ["Saab", 5, 2]
];
echo $cars[1][0]; // Output: BMW
```
