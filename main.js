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

sr.reveal('.home__data, .about__data, .footer__container')
sr.reveal('.home__images', {delay: 1000})
sr.reveal('.home__dam-1', {delay: 1000, scale: 0, rotate: {z: 45}})
sr.reveal('.home__dam-2, .home__dam-3', {delay: 1400, scale: 0, rotate: {z: 45}})
sr.reveal('.home__dam-4', {delay: 1700, scale: 0, rotate: {z: 45}})
sr.reveal('.about__img-1', {delay: 600, origin: 'right'})
sr.reveal('.contact__image, .delivery__img', {origin: 'left'})
sr.reveal('.contact__data, .delivery__data', {origin: 'right'})

let mixerOrder = mixitup('order__content', {
    selectors: {
        target: '.order__card'
    },
    animation: {
        duration: 300
    }
});

mixerProducts.filter('.burger')

const linkOrder = document.querySelectorAll('.order__item')

function activeOrder(){
    linkOrder.forEach(l=> l.classList.remove('active-order'))
    this.classList.add('active-order')
}

LinkOrder.forEach(l=> l.addEventListener('click, activeOrder'))