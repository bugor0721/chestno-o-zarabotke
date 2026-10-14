// ==== FAQ аккордеон ====
document.querySelectorAll('.faq-q').forEach(function (q) {
  q.addEventListener('click', function () {
    var item = q.parentElement;
    var answer = item.querySelector('.faq-a');
    var isOpen = item.classList.contains('open');

    document.querySelectorAll('.faq-item').forEach(function (i) {
      i.classList.remove('open');
      var a = i.querySelector('.faq-a');
      if (a) a.style.maxHeight = null;
    });

    if (!isOpen) {
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

// ==== Плавная прокрутка к якорям ====
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener('click', function (e) {
    var target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
// ==== Все внутренние ссылки (статьи, категории) — в новой вкладке ====
document.querySelectorAll('a[href*="articles/"], a[href*="categories/"]').forEach(function (link) {
  // Пропускаем ссылки на главную и якоря
  var href = link.getAttribute('href');
  if (href && !href.includes('../index.html') && !href.includes('#')) {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  }
});

// ==== Партнёрские ссылки (внешние) — тоже в новой вкладке ====
document.querySelectorAll('a[href^="http"]').forEach(function (link) {
  if (!link.hasAttribute('target')) {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  }
});