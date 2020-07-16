var modal = document.getElementById('modal');
var modalbtn = document.getElementById('btnOpen');
var body = document.getElementsByTagName('body')

const nav = document.querySelector('nav');
const logo = document.querySelector('.logo');
const input = document.querySelector('.inputt');
const ul = document.querySelector('nav ul');
const tatas = document.querySelector('.tombolatas');

modalbtn.addEventListener('click', openmodal);
window.addEventListener('click', closeoutside);

function openmodal(){
    modal.style.display = 'flex';
}

function closeoutside(e){
    if(e.target == modal){
    modal.style.display = 'none';
    }
}

window.onscroll = function(){
    var top = window.scrollY;
    if(top >= 50){
        nav.classList.add('active');
        logo.classList.add('active');
        ul.classList.add('active');
        tatas.classList.add('active');
    }else{
        nav.classList.remove('active');
        logo.classList.remove('active');
        ul.classList.remove('active');
        tatas.classList.remove('active');
    }
}

function scrollwin(){
    window.scrollTo(0,600);
}

function scrollup(){
    window.scrollTo(0,0);
}



