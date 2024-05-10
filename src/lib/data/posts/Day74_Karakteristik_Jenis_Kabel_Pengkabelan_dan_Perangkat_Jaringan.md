---
title: Day 74
description: Karakteristik Jenis Kabel, Pengkabelan dan Perangkat Jaringan
date: '2024-5-02'
categories:
  - Hardware dan Jaringan
published: true
---

## Table of Contents

## Karakteristik Jenis Kabel

### Open Wire Cable

- Kawat tembaga tanpa isolasi
- Digunakan untuk distribusi listrik
- Tidak ada perlindungan terhadap noise
- hanya bisa jarak dekat `<` 20ft(6.1m)

### Twisted Pair

- Kawat tembaga dilapisi isolasi
- Jarak terbatas
- Bandiwdth kecil (1 Mbps)
- Muatan data terbatas (100 Mbps)
- Dapat menerima interferensi dan noise

### Coaxial Cable

- Kawat tembaga yang dikelilingi anyaman halus kabel tembaga lain dan diisolasi
- Mentransfer data dengan kecepatan tinggi
- Bandwidth besar
- Digunakan pada LAN maupun MAN

### Fiber Optic

- Bandwidth sangat besar
- Tahan terhadap gangguan RFI (Radio Frequency Interference) dan EMI (Electromagnetic Interference)
- Keamanan, tidak bisa disadap melalui kabel biasa

## Pengkabelan

UTP (Unshielded Twister Pair)

STP (Shielded Twister Pair)

### Metode Kabel Twisted Pair

- Straight (T568B - T568B) menghubungkan perangkat jaringan yang berbeda
- Crossover (T568A - T568B) menghubungkan perangkat jaringan yang sama
- Rollover (T568B - reversed T568B) menghubungkan komputer terminal ke porta konsol router

Tabel Kode Warna

| T568B | T568A |
| :---: | :---: |
|  PO   |  PH   |
|   O   |   H   |
|  PH   |  PO   |
|   B   |   B   |
|  PB   |  PB   |
|   H   |   O   |
|  PC   |  PC   |
|   C   |   C   |

## Perangkat Jaringan

### Utama

- LAN Card: Perangkat keras yang memungkinkan komputer terhubung ke jaringan lokal (LAN) melalui kabel jaringan.
- Kabel jaringan: Digunakan untuk menghubungkan perangkat seperti komputer, router, atau switch ke jaringan.
- Konektor: Bagian ujung dari kabel jaringan yang digunakan untuk menghubungkan kabel ke perangkat atau sambungan lain dalam jaringan.

### Bantu

- Modem: Perangkat yang mengubah sinyal digital komputer menjadi sinyal analog yang bisa ditransmisikan melalui jaringan telepon atau kabel coaxial.
- Repeater: Perangkat yang digunakan untuk memperkuat sinyal jaringan agar bisa mencapai jarak yang lebih jauh.
- Hub: Perangkat yang digunakan untuk menghubungkan beberapa perangkat dalam jaringan lokal (LAN) secara fisik, memungkinkan perangkat untuk berkomunikasi satu sama lain.
- Bridge: Perangkat yang menghubungkan dua jaringan lokal (LAN) yang menggunakan protokol yang berbeda, sehingga memungkinkan pertukaran data antara kedua jaringan.
- Router: Perangkat yang mengarahkan lalu lintas data antara jaringan, seperti jaringan lokal (LAN) dan jaringan luas (WAN), serta memutuskan rute terbaik untuk pengiriman data.

### Wireless

- Access Point: Perangkat yang digunakan untuk membuat jaringan nirkabel (Wi-Fi) dengan menghubungkan Perangkat nirkabel ke jaringan kabel (misalnya, router).
- Wireless Adapter: Perangkat keras yang memungkinkan komputer atau perangkat lain untuk terhubung ke jaringan nirkabel (Wi-Fi) dengan menggunakan sinyal radio.
- Antena Eksternal: Antena tambahan yang dapat dipasang pada perangkat nirkabel untuk meningkatkan jangkauan atau kualitas sinyal.
- Bluetooth: Standar komunikasi nirkabel yang digunakan untuk mentransfer data antara perangkat yang berdekatan, seperti smartphone, laptop, atau headset, dengan jarak yang relatif pendek.
