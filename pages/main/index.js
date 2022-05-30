const hamburger = document.querySelector('.open-btn');
const navList = document.querySelector('.nav-links');


hamburger.addEventListener('click', () => {
  navList.classList.toggle('nav-active');
});

navList.addEventListener('click', (e) => {
  if (navList.classList.contains('nav-active')) {
    if (e.target.tagName === 'A' || e.target.tagName === 'I') {
      navList.classList.remove('nav-active');
    }
  }
});