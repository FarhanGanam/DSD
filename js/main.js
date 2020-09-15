// --------------   Responsive Navigation Side-Bar --------------

let navbar = document.querySelector('.fa-bars');
let nav = document.querySelector('nav');
let navClose = document.querySelector('.close');
let dropDown = document.querySelector('.dropdown');
let menuOpen = document.querySelector('.menu-open');
let hoverMenu = document.querySelectorAll('.hover');

navbar.addEventListener('click', function(){
  nav.classList.add('slide')
})

navClose.addEventListener('click', function() {
  nav.classList.remove('slide');
})

menuOpen.addEventListener('click', function() {
  dropDown.classList.toggle('open');
  menu1.classList.toggle('open');
})

hoverMenu.forEach(function(menu) {
  menu.addEventListener('click', function() {
    menu.classList.toggle('open')
  })
})

// ---------- Carousel Images Slide ------------


const carouselSlide = document.querySelector('.carousel-slide');
const carouselImg = document.querySelectorAll('.slide');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
let counter = 1;
const slide = carouselImg[0].clientWidth;
const auto = true;
const intervelTime = 5000;
let slideInterval;

carouselSlide.style.transform = 'translateX(' + (-slide * counter) + 'px)';

nextBtn.addEventListener('click', () => {
  if(counter >= carouselImg.length -1) return;
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-slide * counter) + 'px)';
})

prevBtn.addEventListener('click', () => {
  if(counter <= 0) return;
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-slide * counter) + 'px)';
})

carouselSlide.addEventListener('transitionend', () => {
  if(carouselImg[counter].id === 'last-clone') {
    carouselSlide.style.transition = 'none';
    counter = carouselImg.length -2;
    carouselSlide.style.transform = 'translateX(' + (-slide * counter) + 'px)';
  }
  if(carouselImg[counter].id === 'first-clone') {
    carouselSlide.style.transition = 'none';
    counter = carouselImg.length -counter;
    carouselSlide.style.transform = 'translateX(' + (-slide * counter) + 'px)';
  }
})

if(auto) {
  slideInterval = setInterval(() => {
    setTimeout(() => {
      if(counter >= carouselImg.length -1) return;
      carouselSlide.style.transition = 'transform 0.4s ease-in-out';
      counter++;
      carouselSlide.style.transform = 'translateX(' + (-slide * counter) + 'px)';
    }, 1000);
  }, 8000);
}

// ---------- Slide-in animation ------------

const data = document.querySelectorAll('.data');

const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
};

const run = () =>
  data.forEach(dat => {
    if (isInViewport(dat)) {
      dat.classList.add('show');
    } else {
      dat.classList.remove('show');
    }
  });

// Events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);