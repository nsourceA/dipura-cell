const dataProduk = [
  {
    nama: "HP Laptop 14-ep1047nr",
    gambar: "assets/images/laptop/hp-laptop14-ep1047nr.png",
    whatsapp: "6281234567890",
    spesifikasi: [
      "Intel Processor",
      "RAM 8GB",
      "256GB SSD",
      "14 inch",
      "Windows 11"
    ]
  },
  {
    nama: "Lenovo IdeaPad 3 3250U",
    gambar: "assets/images/laptop/Lenovo-IdeaPad-3-3250U.jpg",
    whatsapp: "6281234567890",
    spesifikasi: [
      "AMD Ryzen 3 3250U",
      "RAM 8GB",
      "256GB SSD",
      "15.6 inch FHD",
      "Windows"
    ]
  },
  {
    nama: "ASUS Vivobook Go 15",
    gambar: "assets/images/laptop/ASUS-Vivobook-Go-15.jpg",
    whatsapp: "6281234567890",
    spesifikasi: [
      "Intel Pentium Silver N6000",
      "RAM 4GB",
      "128GB eMMC",
      "15.6 inch FHD",
      "Windows 11"
    ]
  },
  {
    nama: "HP Student Business Laptop 2025",
    gambar: "assets/images/laptop/HP_Student_Business_Laptop_2025.jpg",
    whatsapp: "6281234567890",
    spesifikasi: [
      "Intel N150",
      "RAM 16GB",
      "SSD",
      "14 inch",
      "Windows"
    ]
  },
  {
    nama: "ASUS Chromebook CX1500CKA",
    gambar: "assets/images/laptop/ASUS-Chromebook-CX1500CKA.png",
    whatsapp: "6281234567890",
    spesifikasi: [
      "Intel Celeron N-Series",
      "RAM 8GB",
      "64GB eMMC",
      "15.6 inch FHD",
      "ChromeOS"
    ]
  },
  {
    nama: "Lenovo IdeaPad 3 Chromebook N4500",
    gambar: "assets/images/laptop/Lenovo-IdeaPad 3-Chromebook-N4500.jpg",
    whatsapp: "6281234567890",
    spesifikasi: [
      "Intel Celeron N4500",
      "RAM 4GB",
      "64GB eMMC",
      "15.6 inch FHD",
      "ChromeOS"
    ]
  },
  {
    nama: "Acer Chromebook 315",
    gambar: "assets/images/laptop/Acer_Chromebook_315.jpg",
    whatsapp: "6281234567890",
    spesifikasi: [
      "Intel Celeron",
      "RAM 4GB",
      "eMMC Storage",
      "15.6 inch HD",
      "ChromeOS"
    ]
  },
  {
    nama: "HP Chromebook 14",
    gambar: "assets/images/laptop/HP_Chromebook_14.jpg",
    whatsapp: "6281234567890",
    spesifikasi: [
      "Intel N200",
      "RAM 4GB",
      "128GB UFS",
      "14 inch HD",
      "ChromeOS"
    ]
  },

  /* ===== WINDOWS / PC & LAPTOP ===== */

  {
    nama: "Acer Aspire 5 (2025)",
    gambar: "assets/images/laptop/Acer_Aspire_5_2025.jpg",
    whatsapp: "6281234567890",
    spesifikasi: [
      "AMD Ryzen 5 7530U",
      "RAM 16GB",
      "512GB SSD",
      "15.6 inch FHD",
      "Windows"
    ]
  },
  {
    nama: "Lenovo IdeaPad 3 (2025)",
    gambar: "assets/images/laptop/Lenovo_IdeaPad_3_2025.jpg",
    whatsapp: "6281234567890",
    spesifikasi: [
      "Intel Core i3-1415U",
      "RAM 8GB",
      "256GB SSD",
      "14 inch FHD",
      "Windows"
    ]
  },
  {
    nama: "HP 15 (2025)",
    gambar: "assets/images/laptop/HP_15_2025.jpg",
    whatsapp: "6281234567890",
    spesifikasi: [
      "AMD Ryzen 5 5500U",
      "RAM 16GB",
      "512GB SSD",
      "15.6 inch FHD",
      "Windows"
    ]
  },
  {
    nama: "ASUS VivoBook 14 (2025)",
    gambar: "assets/images/laptop/ASUS_VivoBook_14_2025.jpg",
    whatsapp: "6281234567890",
    spesifikasi: [
      "Intel Core i5-1335U",
      "RAM 8GB",
      "512GB SSD",
      "14 inch FHD",
      "Windows"
    ]
  },
  {
    nama: "Dell Inspiron 15 3000 (2025)",
    gambar: "assets/images/laptop.jpg",
    whatsapp: "6281234567890",
    spesifikasi: [
      "AMD Ryzen 7 5700U",
      "RAM 16GB",
      "512GB SSD",
      "15.6 inch FHD",
      "Windows"
    ]
  },
  {
    nama: "Microsoft Surface Laptop Go 3",
    gambar: "assets/images/laptop.jpg",
    whatsapp: "6281234567890",
    spesifikasi: [
      "Intel Core i5-1340P",
      "RAM 8GB",
      "256GB SSD",
      "12.4 inch PixelSense",
      "Windows"
    ]
  },

  /* ===== SISA DATA VARIAN ===== */
  // Agar GENAP 48 (pagination stabil)

  ...Array.from({ length: 34 }, (_, i) => ({
    nama: `Laptop Varian ${i + 15}`,
    gambar: "assets/images/laptop.jpg",
    whatsapp: "6281234567890",
    spesifikasi: [
      "Processor sesuai varian",
      "RAM 8GB",
      "SSD 256GB",
      "Layar 14–15.6 inch",
      "Windows / ChromeOS"
    ]
  }))
];
