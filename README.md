# 🌟 Smart LAB Website

Website promosi **Smart LAB** untuk mengontrol lampu & kipas jarak jauh menggunakan **ESP8266 + aplikasi Sinric Pro**.  
Dibuat dengan **HTML, CSS, dan JavaScript** (bisa dikembangkan dengan Bootstrap).

---

## 🚀 Tampilan Website

### Hero Banner
![Banner](images/banner.jpg)

### Logo Produk
![Logo Smart LAB](images/logo.png)

### Galeri Produk
![produk](https://github.com/user-attachments/assets/31f6e8af-905d-4b2e-a1bd-5b05d4938ba3)
![Produk 2](images/produk2.jpg)
![Produk 3](images/produk3.jpg)

---

## 📄 Kode Lengkap Website (`index.html`)

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Smart LAB - Kontrol Lampu & Kipas Jarak Jauh</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Header -->
  <header>
    <div class="logo">
      <img src="images/logo.png" alt="Smart LAB Logo">
      <h1>Smart LAB</h1>
    </div>
    <nav>
      <ul>
        <li><a href="#home">Beranda</a></li>
        <li><a href="#fitur">Fitur</a></li>
        <li><a href="#galeri">Galeri</a></li>
        <li><a href="#kontak">Kontak</a></li>
      </ul>
    </nav>
  </header>

  <!-- Hero -->
  <section id="home" class="hero">
    <h2>Kendalikan Lampu & Kipas dari Mana Saja</h2>
    <p>Produk Smart LAB berbasis ESP8266 & aplikasi Sinric Pro.</p>
    <a href="#kontak" class="btn">Pesan Sekarang</a>
  </section>

  <!-- Fitur -->
  <section id="fitur" class="features">
    <h2>Fitur Utama</h2>
    <div class="feature-box">
      <img src="images/wifi.png" alt="WiFi">
      <h3>Terkoneksi WiFi</h3>
      <p>Kendali perangkat rumah Anda dengan jaringan internet.</p>
    </div>
    <div class="feature-box">
      <img src="images/mobile.png" alt="App Control">
      <h3>Aplikasi Sinric Pro</h3>
      <p>Kontrol mudah menggunakan smartphone Android/iOS.</p>
    </div>
    <div class="feature-box">
      <img src="images/automation.png" alt="Automation">
      <h3>Otomatisasi</h3>
      <p>Atur jadwal nyala/mati untuk lampu dan kipas.</p>
    </div>
  </section>

  <!-- Galeri -->
  <section id="galeri" class="gallery">
    <h2>Galeri Produk</h2>
    <div class="slideshow-container">
      <div class="slide fade">
        <img src="images/produk1.jpg" alt="Produk Smart LAB 1">
      </div>
      <div class="slide fade">
        <img src="images/produk2.jpg" alt="Produk Smart LAB 2">
      </div>
      <div class="slide fade">
        <img src="images/produk3.jpg" alt="Produk Smart LAB 3">
      </div>
    </div>
  </section>

  <!-- Kontak -->
  <section id="kontak" class="contact">
    <h2>Hubungi Kami</h2>
    <p>Email: <a href="mailto:smartlab@gmail.com">smartlab@gmail.com</a></p>
    <p>WhatsApp: <a href="https://wa.me/6281234567890" target="_blank">+62 812-3456-7890</a></p>
  </section>

  <!-- Footer -->
  <footer>
    <p>&copy; 2025 Smart LAB. All rights reserved.</p>
  </footer>
</body>
</html>
