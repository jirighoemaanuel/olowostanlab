let navbar = document.querySelector('.navbar');
let navLinks = document.querySelector('.nav-links');
let navLink = document.querySelectorAll('.nav-link');
let openBtn = document.querySelector('.open-btn');
let closeBtn = document.querySelector('.close-btn');

$('.open-btn').click(function () {
  navbar.classList.add('navbar-nav');
  navLinks.classList.add('nav-links-navbar');
  navLink.forEach((link) => {
    link.classList.add('nav-link-navbar');
  });
  openBtn.classList.add('btn-hide');
  closeBtn.classList.remove('btn-hide');
  $('#nav').slideDown('slow');
});

$('.close-btn').click(function () {
  navbar.classList.remove('navbar-nav');
  navLinks.classList.remove('nav-links-navbar');
  navLink.forEach((link) => {
    link.classList.remove('nav-link-navbar');
  });
  openBtn.classList.remove('btn-hide');
  closeBtn.classList.add('btn-hide');
  $('#nav').slideUp('slow');
});

/* --------------- Sticky Navbar --------------- */
