// Shared skip-to nav behaviour (tap-to-toggle on touch devices, auto-close on choose)
(function () {
  var nav = document.querySelector('.skipto');
  if (!nav) return;
  var toggle = nav.querySelector('.skipto-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () { nav.classList.toggle('open'); });
  }
  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target)) nav.classList.remove('open');
  });
  nav.querySelectorAll('.skipto-menu a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('open');
      requestAnimationFrame(function () {
        if (document.activeElement) document.activeElement.blur();
      });
    });
  });
})();
