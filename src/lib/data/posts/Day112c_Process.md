---
title: Day 112c
description: Process
date: '2024-10-02'
categories:
  - SO
published: true
---

## Table of Contents

## Process

Dalam sistem operasi, process adalah program yang sedang dieksekusi.
Ia terdiri dari kode program, data yang digunakan oleh program, dan status eksekusi saat ini.

Ketika suatu program dijalankan, sistem operasi menciptakan sebuah process, yang kemudian dikelola dan dijadwalkan oleh kernel sistem operasi. Setiap process memiliki ID unik yang disebut **PID (Process Identifier)** dan dapat berinteraksi dengan perangkat keras melalui sistem operasi.

Manajemen proses yang efektif memastikan alokasi CPU, memori, dan sumber daya lainnya secara optimal, memungkinkan sistem operasi multitasking berjalan dengan baik.

### Process State

Proses memiliki beberapa status atau state selama eksekusi, dan sistem operasi bertugas mengelola transisi antar status tersebut.

#### A Two-State Process Model

**Running:** Proses yang sedang dieksekusi oleh CPU.
**Not Running:** Proses tidak sedang dieksekusi, tetapi siap untuk dieksekusi atau sedang menunggu sumber daya.

Model dua status ini adalah bentuk paling sederhana, di mana proses berada dalam dua keadaan: apakah sedang dieksekusi atau tidak. Namun, ini tidak menggambarkan kondisi yang lebih kompleks, sehingga model ini berkembang menjadi model dengan lebih banyak status.

#### The Creation and Termination of Processes

Process Creation: Proses dibuat melalui mekanisme tertentu seperti pemanggilan fungsi atau instruksi khusus oleh sistem operasi. Pada Unix/Linux, misalnya, proses baru dapat dibuat menggunakan sistem panggilan fork(), yang menciptakan salinan baru dari proses induk.

Process Termination: Proses bisa berakhir dengan beberapa alasan:

- Normal termination: Proses selesai menjalankan instruksi.
- Error termination: Terjadi kesalahan yang membuat proses harus dihentikan.
- Killed by another process: Proses dihentikan secara paksa oleh proses lain (misalnya, oleh sistem atau administrator).

### A Five-State Model

Model lima status ini lebih umum digunakan dalam sistem operasi modern.

Proses dapat berada dalam salah satu dari lima keadaan:

1. New: Proses baru saja dibuat dan belum siap untuk dieksekusi.
2. Ready: Proses siap untuk dieksekusi oleh CPU, tetapi sedang menunggu giliran.
3. Running: Proses sedang dieksekusi oleh CPU.
4. Blocked: Proses sedang menunggu suatu kejadian (misalnya, input/output atau sumber daya lain).
5. Terminated: Proses telah selesai dieksekusi dan telah dihentikan oleh sistem.

Dalam model ini, sistem operasi menangani transisi antar status ini, mengelola penggunaan CPU, memori, dan sumber daya lainnya.

### Suspended Process

Suspended process (proses yang ditangguhkan) terjadi ketika proses tidak dapat dilanjutkan untuk sementara waktu karena alasan tertentu (misalnya, menunggu sumber daya atau perintah dari administrator sistem).

Ada dua jenis suspensi:

- Blocked Suspended: Proses dalam keadaan ini telah ditangguhkan, tetapi sebelumnya dalam keadaan blocked, menunggu suatu kejadian tertentu.
- Ready Suspended: Proses telah ditangguhkan, tetapi siap untuk dieksekusi setelah ditangguhkan. Proses ini bisa langsung dimasukkan kembali ke antrian eksekusi jika diaktifkan kembali.

Suspension biasanya digunakan dalam sistem operasi multitasking untuk mengelola memori dengan lebih efisien, karena proses yang ditangguhkan dapat dipindahkan dari memori utama ke disk untuk memberi ruang bagi proses lain.
