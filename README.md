# LinkToko MVP

Prototype platform untuk menjual link toko online siap edit.

## Isi folder

- `index.html` - landing page + marketplace template + generator link + checkout demo.
- `styles.css` - tampilan modern responsive.
- `script.js` - interaksi frontend, generator slug, preview toko, checkout simulasi.
- `templates/store-template.html` - template toko publik yang bisa dipakai untuk seller.
- `api/midtrans-checkout-example.js` - contoh endpoint backend untuk membuat transaksi Midtrans Snap.
- `database/supabase-schema.sql` - skema database awal untuk user, template, toko, produk, dan order.

## Cara jalanin lokal

Buka `index.html` langsung di browser, atau pakai server lokal:

```bash
python3 -m http.server 8080
```

Lalu buka `http://localhost:8080`.

## Cara deploy gratis / murah

1. Upload folder ini ke GitHub.
2. Deploy static site ke Cloudflare Pages atau GitHub Pages.
3. Pakai Supabase Free untuk database dan auth.
4. Untuk pembayaran live, daftar merchant Midtrans atau Xendit, lalu taruh API key di environment variable backend.
5. Jangan taruh server key payment gateway di frontend.

## Alur live yang disarankan

1. Buyer pilih template dan paket.
2. Frontend kirim request ke `/api/checkout`.
3. Backend membuat invoice/payment token ke Midtrans/Xendit.
4. Buyer bayar QRIS/VA/e-wallet/kartu.
5. Payment webhook mengubah status order jadi `paid`.
6. Setelah paid, sistem membuat store slug seperti `/s/kopi-senja`.
7. Seller masuk dashboard dan edit nama toko, produk, warna, WA, dan domain.


## Data admin versi ini

- WhatsApp admin: +62 878-3881-5588
- PayPal: paypal.me/Dyan2001
- Pembayaran bank: SeaBank atas nama DIAN PRATAMA

Catatan keamanan: untuk testing publik, sebaiknya detail nomor rekening diberikan lewat WhatsApp setelah buyer serius order.

## Harga launch promo yang dipakai

- Starter: Rp 39.000
- Pro: Rp 89.000
- Agency: Rp 179.000

Nanti setelah ada testimoni, bisa dinaikkan ke harga normal: Starter Rp 49.000, Pro Rp 99.000, Agency Rp 249.000.

## Roadmap fitur

- Login seller.
- Dashboard edit toko.
- Upload gambar produk.
- Payment webhook.
- Sitemap otomatis untuk SEO.
- Analytics kunjungan dan conversion rate.
- Add-on domain custom.
- Komisi transaksi per order.


## Demo toko tambahan

Versi ini sudah ditambah folder `demos/` berisi contoh toko siap preview:

- `demos/kuliner-express.html`
- `demos/fashion-drop.html`
- `demos/jasa-pro.html`
- `demos/digital-kit.html`

Upload semua file dan folder ke GitHub, lalu tombol “Lihat demo” di section Template akan membuka halaman demo tersebut.

## Google Form order

Lihat file `ORDER-FORM-GUIDE.md` untuk daftar field Google Form order. Setelah form jadi, link Google Form bisa ditaruh di website atau tombol WhatsApp.


## Link Google Form order

Form order aktif: https://forms.gle/VqqfZQ54HhXaM4mo6

Metode pembayaran manual: SeaBank, PayPal, dan DANA. Untuk keamanan, detail tujuan pembayaran sebaiknya diberikan setelah buyer mengisi form atau chat WhatsApp admin.
