const templates = [
  {
    name: 'Kuliner Express',
    niche: 'Kuliner',
    price: 'Rp 49K',
    theme: '#ff8a4c',
    desc: 'Template menu makanan, tombol WhatsApp, jam buka, dan highlight promo harian.',
    code: 'KE'
  },
  {
    name: 'Fashion Drop',
    niche: 'Fashion',
    price: 'Rp 79K',
    theme: '#ff5ea8',
    desc: 'Template katalog outfit, varian ukuran, warna, lookbook, dan CTA checkout cepat.',
    code: 'FD'
  },
  {
    name: 'Jasa Pro',
    niche: 'Jasa',
    price: 'Rp 99K',
    theme: '#7057ff',
    desc: 'Template profil jasa, portofolio, paket layanan, testimoni, dan form booking.',
    code: 'JP'
  },
  {
    name: 'Digital Kit',
    niche: 'Produk Digital',
    price: 'Rp 129K',
    theme: '#20d6b8',
    desc: 'Template untuk ebook, preset, course, desain digital, dan delivery link otomatis.',
    code: 'DK'
  }
];

const productMap = {
  Kuliner: [
    ['Kopi Susu Aren', 'Rp 18.000'],
    ['Croissant Butter', 'Rp 22.000'],
    ['Paket Nongkrong', 'Rp 39.000']
  ],
  Fashion: [
    ['Oversize Tee', 'Rp 89.000'],
    ['Cargo Pants', 'Rp 159.000'],
    ['Bundle Outfit', 'Rp 219.000']
  ],
  Jasa: [
    ['Logo Basic', 'Rp 99.000'],
    ['Landing Page', 'Rp 299.000'],
    ['Social Kit', 'Rp 149.000']
  ],
  'Produk Digital': [
    ['Preset Lightroom', 'Rp 35.000'],
    ['Ebook Bisnis', 'Rp 59.000'],
    ['Template Notion', 'Rp 79.000']
  ]
};

const templateGrid = document.getElementById('templateGrid');
const checkoutPlan = document.getElementById('checkoutPlan');
const waOrder = document.getElementById('waOrder');
const toast = document.getElementById('toast');

function rupiah(value) {
  return new Intl.NumberFormat('id-ID').format(value);
}

function slugify(value) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'toko-baru';
}

function initials(value) {
  return value.split(' ').filter(Boolean).slice(0, 2).map(part => part[0]).join('').toUpperCase() || 'LT';
}

function renderTemplates() {
  templateGrid.innerHTML = templates.map((item) => `
    <article class="template-card reveal">
      <div class="template-art" style="--theme:${item.theme}"><span>${item.code}</span></div>
      <div class="template-body">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="template-meta"><span>${item.niche}</span><b>${item.price}</b></div>
        <button class="btn btn-secondary buy-btn" data-plan="${item.name}" data-price="${item.price.replace(/[^0-9]/g, '')}806">Pilih template</button>
      </div>
    </article>
  `).join('');
}

function renderProducts(category) {
  const phoneProducts = document.getElementById('phoneProducts');
  const products = productMap[category] || productMap.Kuliner;
  phoneProducts.innerHTML = products.map(([name, price]) => `
    <div class="phone-product">
      <div><b>${name}</b><span>Stok tersedia</span></div>
      <strong>${price}</strong>
    </div>
  `).join('');
}

function updatePreview() {
  const brand = document.getElementById('brandInput').value;
  const tagline = document.getElementById('taglineInput').value;
  const category = document.getElementById('categoryInput').value;
  const color = document.getElementById('colorInput').value;

  document.documentElement.style.setProperty('--primary', color);
  document.getElementById('phoneBrand').textContent = brand || 'Toko Baru';
  document.getElementById('phoneTagline').textContent = tagline || 'Link toko siap jualan.';
  document.getElementById('phoneCategory').textContent = category;
  document.getElementById('phoneLogo').textContent = initials(brand);
  document.getElementById('generatedLink').textContent = `https://linktoko.id/s/${slugify(brand)}`;
  renderProducts(category);
}

function setCheckout(plan, price) {
  const numeric = Number(price || 99000);
  checkoutPlan.value = `${plan} - Rp ${rupiah(numeric)}`;
  document.getElementById('checkout').scrollIntoView({ behavior: 'smooth' });
  updateWaLink();
}

function updateWaLink() {
  const name = document.getElementById('buyerName').value || 'Calon pembeli';
  const phone = document.getElementById('buyerPhone').value || '-';
  const text = `Halo LinkToko, saya ${name}. Saya mau beli ${checkoutPlan.value}. Nomor WA: ${phone}`;
  waOrder.href = `https://wa.me/6281234567890?text=${encodeURIComponent(text)}`;
}

renderTemplates();
renderProducts('Kuliner');
updatePreview();
updateWaLink();

document.getElementById('builderForm').addEventListener('submit', (event) => {
  event.preventDefault();
  updatePreview();
  showToast('Link toko berhasil dibuat secara demo.');
});

['brandInput', 'taglineInput', 'categoryInput', 'colorInput'].forEach((id) => {
  document.getElementById(id).addEventListener('input', updatePreview);
});

['buyerName', 'buyerPhone'].forEach((id) => {
  document.getElementById(id).addEventListener('input', updateWaLink);
});

document.addEventListener('click', (event) => {
  const target = event.target.closest('.buy-btn');
  if (target) setCheckout(target.dataset.plan, target.dataset.price);
});

document.getElementById('simulatePay').addEventListener('click', () => {
  showToast('Checkout demo sukses. Sambungkan API payment untuk live.');
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2600);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

document.getElementById('menuBtn').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});
