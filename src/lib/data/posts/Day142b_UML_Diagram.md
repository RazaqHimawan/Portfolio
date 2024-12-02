---
title: Day 142b
description: UML Diagram
date: "2024-11-20"
categories:
  - APSI
published: true
---

## Table of Contents

## UML

**Unified Modeling Language (UML)** adalah standar visualisasi, perancangan, dan dokumentasi sistem perangkat lunak.

UML menyediakan berbagai diagram yang membantu pengembang untuk memodelkan aspek-aspek sistem secara struktural maupun perilaku.

## Klasifikasi UML

1. **Diagram Struktur**  
   Fokus pada elemen-elemen statis sistem.

   - **Class Diagram**
   - **Component Diagram**
   - **Object Diagram**
   - **Deployment Diagram**
   - **Package Diagram**

2. **Diagram Perilaku**  
   Memodelkan dinamika atau perilaku sistem.

   - **Use Case Diagram**
   - **Activity Diagram**
   - **State Diagram**

3. **Diagram Interaksi**  
   Subset dari diagram perilaku yang memodelkan interaksi antar elemen.
   - **Sequence Diagram**
   - **Communication Diagram**
   - **Interaction Overview Diagram**
   - **Timing Diagram**

## Jenis Diagram UML

### 1. Use Case Diagram

- Use Case Diagram memodelkan interaksi antara aktor (pengguna atau sistem eksternal) dengan sistem.

- **Komponen Utama:**
  - **Aktor:** Representasi entitas yang berinteraksi dengan sistem.
  - **Use Case:** Fungsi atau layanan yang disediakan sistem.
  - **Relasi:** Hubungan antar aktor dan use case (asosiasi, inklusi, ekstensi).
- **Tujuan:** Mendokumentasikan kebutuhan sistem dan memahami apa yang dilakukan sistem.

### 2. Activity Diagram

- Activity Diagram menunjukkan alur kerja atau logika proses dalam sistem, mirip seperti flowchart.

- **Komponen Utama:**
  - **Aktivitas:** Langkah-langkah proses.
  - **Transisi:** Panah yang menunjukkan alur antar aktivitas.
  - **Decisions:** Cabang logika dengan kondisi.
  - **Start/End Nodes:** Awal dan akhir proses.
- **Tujuan:** Memvisualisasikan proses bisnis atau alur eksekusi.

### 3. Sequence Diagram

- Sequence Diagram memodelkan interaksi antara objek dalam urutan waktu tertentu.

- **Komponen Utama:**
  - **Lifeline:** Objek yang terlibat dalam interaksi.
  - **Messages:** Komunikasi antar objek (sinkron/asinkron).
  - **Activation Bar:** Periode saat suatu objek aktif atau menjalankan fungsi.
- **Tujuan:** Menjelaskan urutan interaksi dalam skenario tertentu.

### 4. Class Diagram

- Class Diagram memodelkan struktur statis sistem menggunakan kelas dan relasi antar kelas.

- **Komponen Utama:**
  - **Kelas:** Representasi tipe data atau entitas.
  - **Atribut:** Data yang dimiliki kelas.
  - **Metode:** Fungsi yang dapat dilakukan kelas.
  - **Relasi:** Hubungan antar kelas (asosiasi, pewarisan, agregasi, komposisi).
- **Tujuan:** Mendefinisikan struktur data dan hubungan antar entitas.

### 5. State Diagram

- State Diagram memodelkan siklus hidup suatu objek berdasarkan perubahan statusnya.

- **Komponen Utama:**
  - **State:** Kondisi atau status objek.
  - **Transition:** Perpindahan antar state.
  - **Event:** Peristiwa yang memicu transisi.
  - **Start/End States:** Awal dan akhir siklus hidup objek.
- **Tujuan:** Memahami bagaimana objek berubah dari satu status ke status lainnya.

## Perbandingan Diagram UML

<div style="overflow-x: scroll;">

| Diagram              | Fokus Utama                   | Gunakan Saat                                                                |
| -------------------- | ----------------------------- | --------------------------------------------------------------------------- |
| **Use Case Diagram** | Interaksi aktor dengan sistem | Memahami kebutuhan sistem secara keseluruhan.                               |
| **Activity Diagram** | Alur kerja atau proses        | Memodelkan logika proses atau alur kerja sistem.                            |
| **Sequence Diagram** | Urutan interaksi antar objek  | Menganalisis skenario komunikasi antar elemen.                              |
| **Class Diagram**    | Struktur data atau kelas      | Mendesain data model atau struktur entitas dalam sistem.                    |
| **State Diagram**    | Perubahan status objek        | Memodelkan siklus hidup objek atau respons sistem terhadap suatu peristiwa. |

</div>
