const burger = document.getElementById('burger')
const nav = document.getElementById('nav-links')

function toggleMenu() {
    burger.classList.toggle('burger_toggle')
    nav.classList.toggle('nav_active')
}

burger.addEventListener('click', toggleMenu)


/* const blinkBox = document.getElementsById('idiv_1');

blinkBox.addEventListener('mouseover', () => {
    alert('Hej');
    const blinkBorder = setInterval (() => { 
        blinkBox.style.borderColor = blinkBox.style.borderColor === 'transparent' ? '#ccc' : 'transparent';
    }, 400);

    blinkBox.addEventListener('mouseout', () => {
        clearInterval(blinkBorder);
        blinkBox.style.borderColor = '#ccc';

    }, {once: true});
});
*/

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });