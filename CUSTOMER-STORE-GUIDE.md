# Panduan cepat bikin toko customer LinkToko

## File contoh siap pakai
- `stores/dapur-test.html` sudah jadi contoh toko dummy yang rapi.
- Buka: `https://imnrml.github.io/linktoko/stores/dapur-test.html`

## Template pro
Gunakan file ini sebagai master untuk customer baru:

`templates/store-template-pro.html`

Cara pakai:
1. Buka `templates/store-template-pro.html`
2. Copy semua isi file
3. Buat file baru di GitHub, misalnya `stores/nama-toko.html`
4. Paste isi template
5. Replace semua placeholder `{{...}}`
6. Commit changes
7. Cek link toko customer

## Placeholder penting
- `{{STORE_NAME}}` = nama toko
- `{{INITIALS}}` = inisial toko, contoh DT
- `{{TAGLINE}}` = tagline singkat
- `{{BRAND_COLOR}}` = warna utama, contoh #16a34a
- `{{BRAND_COLOR_2}}` = warna aksen, contoh #f59e0b
- `{{WHATSAPP_NUMBER}}` = nomor WhatsApp format 62 tanpa +, contoh 6287838815588
- `{{PRODUCT_1}}`, `{{PRODUCT_2}}`, `{{PRODUCT_3}}` = nama produk
- `{{PRICE_1}}`, `{{PRICE_2}}`, `{{PRICE_3}}` = harga produk
- `{{PRODUCT_1_IMAGE}}`, dll = URL gambar produk

## Format nomor WhatsApp
Benar:
`6287838815588`

Salah:
`+62 878-3881-5588`
`087838815588`

## URL gambar gratis
Bisa ambil dari:
- Unsplash
- Pexels
- Pixabay

Atau pakai gambar customer sendiri kalau sudah ada.
