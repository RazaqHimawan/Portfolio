---
title: Day 102
description: Konsep Entity Relationship Diagram
date: '2024-9-17'
categories:
  - PAPSI
published: true
---

## Table of Content

## Konsep Entity Relationship Diagram

ERD (Entity Relationship Diagram) adalah sebuah diagram yang digunakan untuk menggambarkan hubungan antara entitas dalam sebuah sistem. ERD digunakan dalam pemodelan basis data untuk menggambarkan struktur data dan relasi antar tabel atau entitas.

Konsep utama dalam ERD meliputi:

- **Entitas**  
  Entitas adalah objek atau konsep yang dapat diidentifikasi secara unik dalam sistem. Entitas biasanya diwakili sebagai tabel dalam basis data. Contoh entitas dalam sistem informasi kursus adalah "Siswa," "Kursus," atau "Pengajar."

- **Atribut**  
  Atribut adalah karakteristik atau properti dari entitas. Dalam basis data, atribut direpresentasikan sebagai kolom dalam tabel. Misalnya, entitas "Siswa" dapat memiliki atribut seperti "Nama," "ID Siswa," dan "Email."

- **Relasi**  
  Relasi menggambarkan bagaimana entitas yang berbeda saling berhubungan. Relasi dapat berupa hubungan satu-ke-satu (1:1), satu-ke-banyak (one-to-many), atau banyak-ke-banyak (many-to-many).

- **Cardinality**  
  Cardinality menunjukkan jumlah keterlibatan entitas dalam sebuah relasi. Misalnya:
  1:1 – Satu entitas dihubungkan dengan tepat satu entitas lainnya.
  1:M – Satu entitas dihubungkan dengan banyak entitas lainnya.
  M:N – Banyak entitas dihubungkan dengan banyak entitas lainnya.

- **Primary Key (PK)**  
  Primary key adalah atribut yang secara unik mengidentifikasi sebuah entitas. Setiap entitas harus memiliki PK untuk membedakan satu entitas dengan entitas lainnya. Contoh: "ID Siswa" di entitas "Siswa."

- **Foreign Key (FK)**  
  Foreign key adalah atribut dalam sebuah entitas yang merupakan primary key dari entitas lain, yang digunakan untuk menghubungkan entitas satu dengan lainnya. Misalnya, di entitas "Kursus," atribut "ID Pengajar" adalah FK yang menghubungkan ke entitas "Pengajar."
