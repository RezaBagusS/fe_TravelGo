
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

- Eksplorasi 

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

| System Architecture   | Version     | 
|:---                   | :---        | 
|ReactJS                | 18.2.0      | 
|Vite                   | 4.4.5       |
|Eslint                 | 8.45.0      |
|Yarn                   | 1.22.19     |


## Styling : ("2 kolom = tool, versi")

| Tools                 | Version     | 
|:---                   | :---        | 
|TailwindCSS            | 3.3.3       | 
|Flowbite               | 2.0.0       |
|Flowbite React         | 0.6.4       |
|Framer Motion          | 10.16.4     |


## Tools 

| No  | Tools                   | Version           | Fungsi                                                  |
|:--- | :---                    | :---              | :---                                                    |
|1    | @emailjs/browser        | 3.11.0            | mengirim email                                          |
|2    | @reduxjs/toolkit        | 1.9.7             | mendukung fungsi react-redux                            | 
|3    | @splidejs/react-splide  | 0.7.12            | mendukung fungsi react-splide                           |
|4    | gapi-script             | 1.2.0             | menghandle response react-google-login                  |
|5    | jwt-decode              | 4.0.0             | mengkonversi token menjadi data                         | 
|6    | react-dom               | 18.2.0            | memudahkan manipulasi document                          |
|7    | @splidejs/react-splide  | 0.7.12            | mendukung fungsi react-splide                           |
|8    | react-google-login      | 5.2.2             | portal login dengan google dengan fungsi Outh Google    |
|9    | react-iframe            | 1.8.5             | menghandle iframe virtual tour                          |
|10   | react-lottie            | 1.2.3             | menambahkan animasi bergerak dalam bentuk json atau svg |
|11   | react-redux             | 8.1.3             | memudahkan dalam mengontrol state management di react   |
|12   | react-router-dom        | 6.16.0            | melakukan kontrol terhadap routing browser              |


## Deployment  
- Powered by Vercel 

## System Architecture BackEnd TravelGo 

| System Architecture BackEnd                 | Version     | 
|:---                                         | :---        | 
|NPM                                          | 3.3.3       | 
|Nodejs                                       | 2.0.0       |
|ExpressJS                                    | 0.6.4       |
|Nodemon                                      | 10.16.4     |


## Tools 

| No  | Tools                   | Version           | Fungsi                                                          |
|:--- | :---                    | :---              | :---                                                            |
|1    | brcypt                  | 18.2.0            | hash password pengguna                                          |
|2    | cors                    | 0.7.12            | mengizinkan permintaan source BackEnd ke FrontEnd               |
|2    | dotenv                  | 5.2.2             | mengelola Environment Variable                                  |
|4    | google-auth-library     | 1.8.5             | mengautentifikasi data login via google pengguna                |
|5    | jsonwebtoken            | 1.2.3             | mengontrol autentifikasi pengguna via database menggunakan JWT  |
|6    | multer                  | 8.1.3             | mengatasi inputan pengguna dalam bentuk file                    |
 

## Database  
Supabase.org versi 2.38.4 'https://supabase.com/'

## API Documentation
Route API - 'be-travel-go.vercel.app'

## Endpoint

| No  | endpoint              | method      | fungsi                                                             | aktor          |
|:--- | :---                  | :---        | :---                                                               | :---           |
|1    | /api/auth/google      | POST        |'melayani proses login via Outh Google'                             | 'user & admin' |
|2    | /api/auth/register    | POST        |'melayani proses register untuk pendaftaran akun'                   | 'user'         |
|3    | /api/auth/login       | POST        |'melayani proses login untuk mengakses app      '                   | 'user & admin' |
|4    | /api/data/wisata      | GET         |'mengambil semua data wisata'                                       | 'user & admin' |
|5    | /api/add/wisata       | POST        |'menambahkan data wisata ke database'                               | 'admin'        |
|6    | /api/update/wisata    | PUT         |'memperbarui data wisata di database'                               | 'admin'        |
|7    | /api/delete/wisata    | DELETE      |'menghapus data wisata di database'                                 | 'admin'        |
|8    | /api/upload/image     | POST        |'menambahkan data eksplorasi (Image) ke dalam Database'             | 'user & admin' |
|7    | /api/data/eksplorasi  | POST        |'mengambil data eksplorasi dari database'                           | 'user & admin'        |