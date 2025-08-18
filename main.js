document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ JavaScript is working!");
});

window.addEventListener("scroll", function() {
  const header = document.querySelector(".header");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const shadowHeader = () =>{
    const header= document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >=350 ? scrollUp.classList.add('show-scroll')
                       : scrollUp.classList.remove('show-scroll')
}  
window.addEventListener('scroll', scrollUp)

const sections =document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 300,
})

sr.reveal('.home__data, .about__data, .footer__container, .order__container')
sr.reveal('.home__img', {delay: 1000})
sr.reveal('.home__dam-1', {delay: 1000, scale: 0, rotate: {z: 45}})
sr.reveal('.home__dam-2, .home__dam-3', {delay: 1400, scale: 0, rotate: {z: 45}})
sr.reveal('.home__dam-4, .home__dam-5, .about__dam-4, .about__dam-5' , {delay: 1700, scale: 0, rotate: {z: 45}})
sr.reveal('.about__img-1', {delay: 600, origin: 'right'})
sr.reveal('.contact__image, .delivery__img', {origin: 'left'})
sr.reveal('.contact__data, .delivery__data', {origin: 'right'})


document.querySelectorAll('.openPayment').forEach(function(button) {
    button.addEventListener('click', function() {
        document.getElementById('paymentModal').style.display = 'block';
    });
});

document.getElementById('closePayment').addEventListener('click', function() {
    document.getElementById('paymentModal').style.display = 'none';
});

const closePayment = document.getElementById('closePayment');

closePayment.addEventListener('click', () => {
    paymentModal.style.display = 'none';
});