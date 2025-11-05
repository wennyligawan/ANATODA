// mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (navToggle) navToggle.addEventListener('click', () => nav.classList.toggle('show'));

// smooth scroll for nav links
document.querySelectorAll('.nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    nav.classList.remove('show');
  });
});

// FAQ expand/collapse
document.querySelectorAll('#FAQ .faq .question').forEach(q => {
  q.addEventListener('click', () => q.parentElement.classList.toggle('active'));
});

// Active nav highlight based on scroll position
const sections = document.querySelectorAll('section.snap');
const options = { root: document.querySelector('.snap-container'), threshold: 0.6 };
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      document.querySelectorAll('.nav a').forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
      });
    }
  });
}, options);
sections.forEach(sec => observer.observe(sec));

document.getElementById("sendBtn").addEventListener("click", function() {
  const number = "6281385758464"; // nomor WA
  const name = document.getElementById("name")?.value.trim();
  const email = document.getElementById("email")?.value.trim();
  const message = document.getElementById("message")?.value.trim();

  if (!name || !email || !message) {
    alert("Please fill all fields before sending!");
    return;
  }

  const text = encodeURIComponent(
    `Halo! Nama saya ${name}.\nEmail: ${email}\nPesan: ${message}`
  );

  const url = `https://web.whatsapp.com/send?phone=${number}&text=${text}`;
  window.open(url, "_blank");
});
