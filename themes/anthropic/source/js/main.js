// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  var btn = document.querySelector('.mobile-menu-btn');
  var nav = document.querySelector('.site-nav');
  if (btn && nav) {
    btn.addEventListener('click', function() {
      nav.classList.toggle('open');
    });
  }
});
