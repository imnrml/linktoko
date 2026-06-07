const templates = [
  {
    name: 'Kuliner Express',
    niche: 'Kuliner',
    price: 'Rp39K',
    theme: '#f97316',
    desc: 'Untuk bisnis makanan & minuman. Menu, promo, jam buka, foto produk, dan WhatsApp order.',
    code: 'KE',
    demo: 'demos/kuliner-express.html',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=80'
  },
  {
    name: 'Fashion Drop',
    niche: 'Fashion',
    price: 'Rp49K',
    theme: '#ec4899',
    desc: 'Untuk katalog outfit, ukuran, lookbook, promo, dan tombol order cepat seller fashion.',
    code: 'FD',
    demo: 'demos/fashion-drop.html',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=80'
  },
  {
    name: 'Jasa Pro',
    niche: 'Jasa',
    price: 'Rp59K',
    theme: '#8b5cf6',
    desc: 'Untuk profil jasa, portfolio, paket layanan, testimoni, dan tombol konsultasi.',
    code: 'JP',
    demo: 'demos/jasa-pro.html',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=80'
  },
  {
    name: 'Digital Kit',
    niche: 'Produk Digital',
    price: 'Rp69K',
    theme: '#22d3ee',
    desc: 'Untuk ebook, preset, course, template digital, dan katalog produk digital.',
    code: 'DK',
    demo: 'demos/digital-kit.html',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80'
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
        <div class="template-meta"><span>${item.niche}</span><b>${item.price}</b></div>
        <div class="template-actions">
          <a class="btn btn-soft" href="${item.demo}" target="_blank" rel="noreferrer">Lihat demo</a>
          <a class="btn btn-primary" href="https://forms.gle/VqqfZQ54HhXaM4mo6" target="_blank" rel="noreferrer">Pilih</a>
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
