const templates = [
  {
    name: 'Kuliner Express',
    niche: 'Kuliner',
    price: 'Mulai Rp39K',
    theme: '#f97316',
    desc: 'Cocok untuk makanan, minuman, coffee shop, frozen food, katering, dan dessert. Bisa tampilkan menu, promo, jam buka, area delivery, dan tombol order WhatsApp.',
    code: 'KE',
    demo: 'demos/kuliner-express.html',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=80',
    tags: ['Menu rapi', 'Promo', 'Delivery', 'WA order']
  },
  {
    name: 'Fashion Drop',
    niche: 'Fashion',
    price: 'Mulai Rp39K',
    theme: '#ec4899',
    desc: 'Cocok untuk seller baju, hijab, aksesoris, outfit harian, dan katalog fashion. Bisa tampilkan foto produk, harga, ukuran, Instagram, TikTok, dan Shopee.',
    code: 'FD',
    demo: 'demos/fashion-drop.html',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=80',
    tags: ['Lookbook', 'Ukuran', 'Shopee', 'Sosmed']
  },
  {
    name: 'Jasa Pro',
    niche: 'Jasa',
    price: 'Mulai Rp39K',
    theme: '#8b5cf6',
    desc: 'Cocok untuk freelancer, desain, laundry, barbershop, fotografi, konsultasi, dan jasa online. Bisa tampilkan paket layanan, portfolio, testimoni, dan tombol konsultasi.',
    code: 'JP',
    demo: 'demos/jasa-pro.html',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=80',
    tags: ['Portfolio', 'Paket jasa', 'Testimoni', 'Konsultasi']
  },
  {
    name: 'Digital Kit',
    niche: 'Produk Digital',
    price: 'Mulai Rp39K',
    theme: '#22d3ee',
    desc: 'Cocok untuk ebook, preset, Canva template, mini course, file desain, dan bundle digital. Bisa tampilkan benefit produk, bonus, harga, dan link delivery.',
    code: 'DK',
    demo: 'demos/digital-kit.html',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80',
    tags: ['Ebook', 'Preset', 'Template', 'Course']
  }
];

function renderTemplates() {
  const templateGrid = document.getElementById('templateGrid');
  if (!templateGrid) return;
  templateGrid.innerHTML = templates.map((item) => `
    <article class="template-card reveal" style="--themeGlow:${item.theme}">
      <div class="template-art">
        <img src="${item.image}" alt="Preview ${item.name}" loading="lazy" />
        <span>${item.code}</span>
      </div>
      <div class="template-body">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="template-tags">${item.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
        <div class="template-meta"><span>${item.niche}</span><b>${item.price}</b></div>
        <div class="template-actions">
          <a class="btn btn-soft" href="${item.demo}" target="_blank" rel="noreferrer">Lihat demo</a>
          <a class="btn btn-primary" href="https://forms.gle/VqqfZQ54HhXaM4mo6" target="_blank" rel="noreferrer">Pilih template</a>
        </div>
      </div>
    </article>
  `).join('');
}

function setupMenu() {
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  if (!menuBtn || !navLinks) return;
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

function setupFaq() {
  document.querySelectorAll('.faq-item button').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      item.classList.toggle('open');
    });
  });
}

function setupReveal() {
  const els = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('show');
    });
  }, { threshold: 0.12 });
  els.forEach((el) => observer.observe(el));
}

function setupPlanMessage() {
  document.querySelectorAll('.buy-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const plan = btn.dataset.plan;
      if (!plan) return;
      sessionStorage.setItem('linktoko_plan', plan);
    });
  });
}

renderTemplates();
setupMenu();
setupFaq();
setupReveal();
setupPlanMessage();
