# Panduan Template Master Dynamic LinkToko

File master: `templates/store-template-pro.html`

Template ini sudah support:
- 1 sampai 20 produk
- Logo toko berupa gambar
- Inisial toko kalau belum ada logo
- Cover image
- Warna brand 1 dan 2
- Instagram, TikTok, Shopee, marketplace lain
- WhatsApp order per produk
- Jam buka, lokasi, metode pembayaran
- Feature card, testimoni, FAQ

## Cara bikin toko customer baru

1. Buka `templates/store-template-pro.html`.
2. Copy semua isi file.
3. Buat file baru di GitHub, contoh: `stores/nama-toko-customer.html`.
4. Paste isi template.
5. Cari bagian `const STORE_DATA = {`.
6. Edit data di dalam `STORE_DATA` sesuai form customer.
7. Commit changes.
8. Link customer: `https://imnrml.github.io/linktoko/stores/nama-toko-customer.html`.

## Kalau customer tidak punya Instagram/TikTok/Shopee

Kosongkan saja:

```js
instagramUrl: "",
tiktokUrl: "",
shopeeUrl: "",
marketplaceUrl: "",
```

Tombolnya otomatis tidak muncul.

## Cara tambah produk sampai 20

Produk ada di bagian `products: [`.
Copy format object produk ini:

```js
{
  name: "Nama Produk",
  price: "Rp10.000",
  desc: "Deskripsi singkat produk.",
  image: "LINK_GAMBAR_PRODUK",
  label: "Best Seller"
}
```

Setiap produk harus dipisahkan koma.
Batas aman maksimal 20 produk.

## Format nomor WhatsApp

Benar: `6287838815588`
Salah: `+62 878-3881-5588` atau `087838815588`

Kalau halaman blank setelah commit, biasanya ada koma kurang, tanda kutip hilang, atau link gambar rusak.
