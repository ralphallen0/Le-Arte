//=========== SHOW MENU ==============//
const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

//=========== HIDE MENU WHEN CLICKING ==============//
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//=========== ACTIVE SCROLL SECTIONS BAR ==============//

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

//=========== CHANGE BG HEADER ==============//
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 560) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

//=========== SHOW SCROLL ==============//
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

//=========== MIXITUP ==============// 
const mixer = mixitup('.gallery__container', {
    selectors: {
        target: '.gallery__content'
    },
    animation: {
        duration: 300
    }
});


//=========== MODAL ==============// 

var modal = document.getElementById('myModal');


var images = document.getElementsByClassName('gallery__img');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");


for (var i = 0; i < images.length; i++) {
  var img = images[i];
  
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}



