/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 50,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SIMPLE RESPONSIVE CAROUSEL ===============*/
;(function(){
    const carousel = document.getElementById('home-carousel')
    if(!carousel) return

    const track = carousel.querySelector('.carousel__track')
    const slides = Array.from(track.children)
    const nav = carousel.querySelector('.carousel__nav')
    let currentIndex = 0
    let autoplayId = null

    // create indicators
    slides.forEach((_, i) => {
        const dot = document.createElement('button')
        dot.className = 'carousel__indicator'
        if(i === 0) dot.classList.add('active')
        dot.setAttribute('aria-label', 'Go to slide ' + (i+1))
        dot.addEventListener('click', () => { goToSlide(i) })
        nav.appendChild(dot)
    })

    const indicators = Array.from(nav.children)

    function update() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`
        indicators.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex))
    }

    function goToSlide(index){
        currentIndex = (index + slides.length) % slides.length
        update()
        resetAutoplay()
    }

    function next(){ goToSlide(currentIndex + 1) }
    function prev(){ goToSlide(currentIndex - 1) }

    // prev/next buttons removed — navigation handled by autoplay and indicators

    // autoplay
    function startAutoplay(){ autoplayId = setInterval(next, 4000) }
    function stopAutoplay(){ if(autoplayId) clearInterval(autoplayId) }
    function resetAutoplay(){ stopAutoplay(); startAutoplay() }

    carousel.addEventListener('mouseenter', stopAutoplay)
    carousel.addEventListener('mouseleave', startAutoplay)

    // touch support (basic)
    let startX = 0
    carousel.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX })
    carousel.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX
        const diff = endX - startX
        if(Math.abs(diff) > 40) { if(diff < 0) next(); else prev() }
    })

    // init
    update()
    startAutoplay()
})()
