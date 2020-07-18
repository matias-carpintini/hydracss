"use strict"

document.addEventListener('DOMContentLoaded', function () {
  const $html = document.querySelector('html');

  const current_theme = localStorage.getItem("theme") ? localStorage.getItem("theme") : "theme-light";
  $html.classList.add(current_theme);

  document.querySelectorAll('.modal-open').forEach(elem => {
    elem.addEventListener('click', function (event) {
      event.preventDefault();

      const modalID = this.dataset.modalId;
      const $modal = document.getElementById(modalID);

      $modal.setAttribute('aria-hidden', 'false')
      $modal.classList.add('is-open');
    });
  });

  document.querySelectorAll('.modal-close').forEach(elem => {
    elem.addEventListener('click', function (event) {
      event.preventDefault();

      const modalID = this.closest('.modal').getAttribute('id');
      const $modal = document.getElementById(modalID);

      $modal.setAttribute('aria-hidden', 'true');

      setTimeout(function () {
        $modal.classList.remove('is-open');
      }, 300);
    });
  })

  document.querySelector('.sidemenu-trigger').addEventListener('click', function (event) {
    event.preventDefault();

    const sidemenuID = this.dataset.sidemenuId;
    const $sidemenu = document.getElementById(sidemenuID);

    $sidemenu.classList.toggle('open');
  })

  document.getElementById('switch').addEventListener('click', function (event) {
    event.preventDefault();

    const current_theme = $html.classList.contains('theme-dark') ? 'theme-dark' : 'theme-light';
    const new_theme = current_theme == 'theme-dark' ? 'theme-light' : 'theme-dark'

    localStorage.setItem('theme', new_theme);
    $html.classList.remove(current_theme);
    $html.classList.add(new_theme);
  });
});