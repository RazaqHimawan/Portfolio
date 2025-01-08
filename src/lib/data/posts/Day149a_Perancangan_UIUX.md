---
title: Day 149a
description: Perancangan UI/UX
date: "2024-12-04"
categories:
  - APSI
published: true
---

## Table of Contents

## Perancangan Interface

### User Interface Design (UID)

Tujuan dari UID adalah merancang interface yang efektif untuk sistem perangkat lunak.

Efektif artinya siap digunakan, dan hasilnya sesuai dg kebutuhan. Kebutuhan disini adalah kebutuhan penggunanya. Pengguna sering menilai sistem dari interface, bukan dari fungsinya melainkan dari user interfacenya.

Jika desain user interfacenya yang buruk, maka itu sering jadi alasan untuk tidak menggunakan software. Selain itu interface yang buruk sebabkan pengguna membuat kesalahan fatal. Saat ini interface yang banyak digunakan dalam software adalah GUI (Graphical User Interface).

GUI memberikan keuntungan seperti:

1. gampang dipelajari oleh pengguna yang pengalaman dalam menggunakan komputer cukup minim

2. berpindah dari satu layar ke layar yang lain tanpa kehilangan informasi dimungkinkan

3. akses penuh pada layar dengan segera untuk beberapa macam tugas/keperluan

### Prinsip–Prinsip Dalam Merancang User Interface

- User familiarity / Mudah dikenali : gunakan istilah, konsep dan kebiasaan user bukan computer (misal: sistem perkantoran gunakan istilah letters, documents, folders bukan directories, file, identifiers. -- jenis document open office)
- Consistency/ “selalu begitu” : Konsisten dalam operasi dan istilah di seluruh sistem sehingga tidak membingungkan. -- layout menu di open office mirip dgn layout menu di MS office.
- Minimal surprise / Tidak buat kaget user : Operasi bisa diduga prosesnya berdasarkan perintah yang disediakan.
- Recoverability/pemulihan : Recoverability ada dua macam: Confirmation of destructive action (konfirmasi terhadap aksi yang merusak) dan ketersediaan fasilitas pembatalan (undo)
- User guidance/ bantuan : Sistem manual online, menu help, caption pada icon khusus tersedia
- User diversity/keberagaman : Fasilitas interaksi untuk tipe user yang berbeda disediakan. Misalnya ukuran huruf bisa diperbesar

### User Interaction (Interaksi pengguna)

- Direct manipulation – pengoperasian secara langsung: interaksi langsung dengan objek pada layar. Misalnya delete file dengan memasukkannya ke trash.
  - **Contoh**: Video games.
  - **Kelebihan**: Waktu pembelajaran user sangat singkat, feedback langsung diberikan pada tiap aksi sehingga kesalahan terdeteksi dan diperbaiki dengan cepat
  - **Kekurangan**: Interface tipe ini rumit dan memerlukan banyak fasilitas pada sistem komputer, cocok untuk penggambaran secara visual untuk satu operasi atau objek
- Menu selection – pilihan berbentuk menu: Memilih perintah dari daftar yang disediakan. Misalnya saat click kanan dan memilih aksi yang dikehendaki.
  - Kelebihan: User tidak perlu ingat nama perintah. Pengetikan minimal. Kesalahan rendah.
  - Kekurangan: Tidak ada logika AND atau OR. Perlu ada struktur menu jika banyak pilihan. Menu dianggap lambat oleh expert user dibanding command language.
- Form fill-in – pengisian form : Mengisi area-area pada form.
  - Contoh: Stock control.
  - Kelebihan: Masukan data yang sederhana. Mudah dipelajari.
  - Kekurangan: Memerlukan banyak tempat di layar. Harus menyesuaikan dengan form manual dan kebiasaan user.
- Command language – perintah tertulis: Menuliskan perintah yang sudah ditentukan pada program.
  - Contoh: operating system.
  - Kelebihan: Perintah diketikan langsung pada system. Misal UNIX, DOS command. Bisa diterapkan pada terminal yang murah. Kombinasi perintah bisa dilakukan. Misal copy file dan rename nama file.
  - Kekurangan: Perintah harus dipelajari dan diingat cara penggunaannya – tidak cocok untuk user biasa. Kesalahan pakai perintah sering terjadi. Perlu ada sistem pemulihan kesalahan. Kemampuan mengetik perlu.
- Natural language – perintah dengan bahasa alami: Gunakan bahasa alami untuk mendapatkan hasil.
  - Contoh: search engine di Internet.
  - Kelebihan: Perintah dalam bentuk bahasa alami, dengan kosa kata yang terbatas (singkat) – misalnya kata kunci yang kita tentukan untuk dicari oleh search engine. Ada kebebasan menggunakan kata-kata.
  - Kekurangan: Tidak semua sistem cocok gunakan ini. Jika digunakan maka akan memerlukan banyak pengetikan.

### Penyajian Informasi (Information Presentation)

Sistem yang interaktif pasti menyediakan cara untuk menyajikan informasi untuk pengguna. Penyajian informasi bisa berupa penyajian langsung dari input yang diberikan (seperti teks pada word processing) atau disajikan dengan grafik.

Beberapa faktor berikut adalah hal yang perlu diperhatikan sebelum menentukan bentuk penyajian informasi:

- Apakah pengguna perlu informasi dengan ketepatan tinggi atau data yang saling berhubungan?
- Seberapa cepat nilai informasi berubah? Harus ada indikasi perubahan seketika?
- Apakah pengguna harus memberi respon pada perubahan?
- Apakah pengguna perlu melakukan perubahan pada informasi yang disajikan?
- Apakah informasi berupa teks atau numerik? Nilai relatif perlu atau tidak? Informasi bisa bersifat statis atau dinamis ketika disajikan, masing-masing baik dengan karakteristik yang berbeda dan kebutuhan yang berbeda pula.
