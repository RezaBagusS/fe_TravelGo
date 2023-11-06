
# Travel Go

<p align="center" style="padding-top: 100px; padding-bottom: 100px;">
  <a href="https://fe-travel-go.vercel.app/" target="_blank">
    <img src="https://res.cloudinary.com/dbapkghnt/image/upload/v1698714509/Group_8_tudujt.png" width="400" alt="Logo">
  </a>
</p>

## Anggota Kelompok Kami
215150607111002 - Reza Bagus Saputra

215150601111022	 - Kumara Sahasika Laksmana

215150600111031 - Dicky Surya Nanda 

## Deskripsi Produk

TravelGo dibuat dengan tujuan untuk mempromosikan kekayaan budaya dan pariwisata yang dimiliki Indonesia dengan cara menawarkan tour virtual. TravelGo juga menyediakan informasi dari tiap-tiap tempat wisata dan juga budaya. informasi yang ditawarkan TravelGo adalah informasi yang jarang ditemui di internet yaitu berupa kondisi tempat wisata. Oleh karena itu, website ini dibuat dengan mengedepankan fitur virtual tour untuk memandu wisatawan jika ingin melihat tempat wisatanya secara virtual terlebih dahulu sebelum berkunjung langsung ke tempat aslinya.

Pengguna TravelGo nantinya adalah admin dan pengguna yaitu wisatawan lokal maupun internasional yang dijadikan sebagai target pasar dari projek ini. Adapun fitur yang ada pada website ini antara lain adalah virtual tour pariwisata, dan juga peta wisata yang menampilkan tempat-tempat wisata yang ada di Indonesia.

## UI Kit

| Color     | Hex     | 
| ---       | ---     | 
| Primary   | #14B8A6 |
| Secondary | #FFFFFF |
| Neutral   | #2A3342 |
| Error     | #E11D48 |

## Cara Penggunaan TravelGo

- Beranda

beranda adalah halaman masuk utama yang memberikan informasi penting mengenai gambaran singkat dan fitur fitur yang ada di TravelGo

- Virtual Tour

Virtual Tour merupakan fitur utama yang ditawarkan oleh TravelGo. Pengguna dapat merasakan pengalaman wisata dengan melihat tempat wisatanya secara virtual terlebih dahulu sebelum mengunjungi ke tempat aslinya.

- Kontak

Kontak merupakan halaman dimana pengguna dapat memberikan keluhan dan feedback kepada pengembang. Pada halaman ini juga terdapat alamat TravelGo.

- Tentang

Tentang merupakan halaman dimana pengguna dapat melihat visi misi dan keunggulan dari TravelGo.

- Jelajah wisata

Jelajah wisata merupakan tempat dimana pengguna dapat menggunggah foto pengalaman wisata mereka dan berinteraksi dengan pengguna lainnya.

## Rancangan Basis Data (DataWisata)

Tabel Data Pasien
| No  | Nama Kolom  | Tipe Data   | Contoh Data                     |
|:--- | :---        | :---        | :---                            |
|1    | created_at  | timestamptz |'2023-10-29'                     |
|2    | nama        | text        |'Tanah Lot'                      |
|3    | lokasi      | text        |'Bali '                          |
|4    | deskripsi   | text        |'Tanah Lot adalah tempat...'     |
|5    | gambar      | text        |'https://res.cloudinary.com...'  |
|6    | virtual tour| text        |'https://www.google.com/maps...' |

## Rancangan Basis Data (ImageEksplorasi)

Tabel Data Pasien
| No  | Nama Kolom  | Tipe Data   | Contoh Data                     |
|:--- | :---        | :---        | :---                            |
|1    | submited_at | int8        |'2023-10-29'                     |
|2    | filePath    | text        |'https://eivzgrpwojuwr....'      |
|3    | id_user     | text        |'4'                              |
|4    | namaWisata  | text        |'Tanah Lot'                      |

## Rancangan Basis Data (allUser)

Tabel Data Pasien
| No  | Nama Kolom  | Tipe Data   | Contoh Data                     |
|:--- | :---        | :---        | :---                            |
|1    |registered_at| int8        |'2023-10-29'                     |
|2    | name        | text        |'nopal'                          |
|3    | email       | text        |'nopal@gmail.com'                |
|4    | isAdmin     | bool        |'FALSE'                          |
|5    | password    | text        |'nopalla'                        |
|6    | gambar      | text        |'https://res.cloudinary.com...'  |

## System Architecture Front End TravelGo  
- ReactJS versi 18.2.0
- Vite versi 4.4.5
- Eslint versi 8.45.0 
- Yarn versi 1.22.19

## Styling : ("2 kolom = tool, versi")
- TailwindCSS versi 3.3.3
- Flowbite versi 2.0.0
- Flowbite React versi 0.6.4
- Framer Motion versi 10.16.4

## Tools : ("3 kolom = tool, versi, fungsi")
- @emailjs/browser versi 3.11.0 utk mengirim email
- @reduxjs/toolkit versi 1.9.7 utk mendukung fungsi react-redux
- @splidejs/react-splide versi 0.7.12 utk mendukung fungsi react-splide
- @splidejs/splide versi 4.1.4 utk membuat animasi Carousel
- gapi-script versi 1.2.0 utk menghandle response react-google-login
- jwt-decode versi 4.0.0 utk mengkonversi token menjadi data
- react-dom versi 18.2.0 utk memudahkan dalam manipulasi document
- react-google-login versi 5.2.2 utk portal login dengan google dengan fungsi Outh Google, dibantu dengan id yang didapatkan dari google.cloud
- react-iframe versi 1.8.5 utk menghandle iframe virtual tour
- react-lottie versi 1.2.3 utk menambahkan animasi bergerak dalam bentuk json atau svg
- react-redux versi 8.1.3 utk memudahkan dalam mengontrol state management di react
- react-router-dom versi 6.16.0 utk melakukan kontrol terhadap routing browser

## Deployment  
- Powered by Vercel