/* ===== STR Laser Website - Main JavaScript ===== */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();

  initHeroSlider();
  initFaqAccordion();
  initSmoothScroll();
  initScrollReveal();
});

// Mobile hamburger menu
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    menu.classList.toggle('open');
    const icon = btn.querySelector('i');
    if (icon) {
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    }
  });
}

// Hero slider auto-rotation
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  if (slides.length < 2) return;

  let current = 0;
  const total = slides.length;

  function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('bg-red-brand'));
    slides[index].classList.add('active');
    if (dots[index]) dots[index].classList.add('bg-red-brand');
  }

  // Dot click handlers
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      current = i;
      showSlide(current);
      resetTimer();
    });
  });

  // Pause auto-rotation if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let timer = null;
  if (!prefersReducedMotion) {
    timer = setInterval(() => {
      current = (current + 1) % total;
      showSlide(current);
    }, 6000);
  }

  function resetTimer() {
    if (prefersReducedMotion) return;
    clearInterval(timer);
    timer = setInterval(() => {
      current = (current + 1) % total;
      showSlide(current);
    }, 6000);
  }

  showSlide(0);
}

// FAQ accordion
function initFaqAccordion() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const icon = btn.querySelector('.faq-icon');
      const isOpen = answer.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
      document.querySelectorAll('.faq-icon').forEach(i => i.style.transform = 'rotate(0deg)');

      // Open clicked
      if (!isOpen) {
        answer.classList.add('open');
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// Simple scroll-triggered reveal animation
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-6');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => observer.observe(el));
}
