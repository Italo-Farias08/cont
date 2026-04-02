window.addEventListener('scroll',()=>{
 if(window.scrollY>50){header.classList.add('scrolled')}else{header.classList.remove('scrolled')}
})

function toggleMenu() {
  mobileMenu.classList.toggle('show');
  document.body.classList.toggle('menu-open');
}

const observer=new IntersectionObserver((e)=>{
 e.forEach(el=>{if(el.isIntersecting){el.target.classList.add('show')}})
})
document.querySelectorAll('.fade-up').forEach(el=>observer.observe(el))