let navbar = document.querySelector('.navbar');
let navLinks = document.querySelector('.nav-links');
let navLink = document.querySelectorAll('.nav-link');
let openBtn = document.querySelector('.open-btn');
let closeBtn = document.querySelector('.close-btn');
let header = document.querySelector('header');

let navMail = document.querySelector('.navbar-mail');

$('.open-btn').click(function () {
  navbar.classList.add('navbar-nav');
  navLinks.classList.add('nav-links-navbar');
  navLink.forEach((link) => {
    link.classList.add('nav-link-navbar');
  });

  navLinks.classList.add('pad');
  navMail.classList.add('navbar-mail-show');
  openBtn.classList.add('btn-hide');
  // header.style('overflow:hidden');
  closeBtn.classList.remove('btn-hide');
  $('#nav').slideDown('slow');
});

$('.close-btn').click(function () {
  navbar.classList.remove('navbar-nav');
  navLinks.classList.remove('nav-links-navbar');
  navLink.forEach((link) => {
    link.classList.remove('nav-link-navbar');
  });
  pageBody.style('overflow:scroll');
  navLinks.classList.remove('pad');
  openBtn.classList.remove('btn-hide');
  navMail.classList.add('btn-hide');
  closeBtn.classList.add('btn-hide');
  // pageroot.style('overflow:scroll');
  $('#nav').slideUp('slow');
});

/* --------------- Sticky Navbar --------------- */
