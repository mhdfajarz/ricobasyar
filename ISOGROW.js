const modal = document.getElementById('modal');
const modalbtn = document.getElementById('btnOpen');
const body = document.getElementsByTagName('body');
const menu = document.getElementById('foto-menu');
const tmenu = document.getElementById('menu');
const tmenu2 = document.querySelector('.menu-content');
const nav = document.querySelector('nav');
const logo = document.querySelector('.logo');
const input = document.querySelector('.inputt');
const ul = document.querySelector('nav ul');
const tatas = document.querySelector('.tombolatas');
const filepre = document.getElementById('inputfile');
const previewimg = document.querySelector('.image-preview__image');

modalbtn.addEventListener('click', openmodal);
window.addEventListener('click', closeoutside);
menu.addEventListener('click', openmenu);
window.addEventListener('click', closemenu);

function openmenu(){
    tmenu.style.display = 'flex';
}

function openmodal(){
    modal.style.display = 'flex';
}

function closemenu(e){
    if(e.target == tmenu){
    tmenu.style.display = 'none';
    }
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
        tmenu2.classList.add('active');
    }else{
        nav.classList.remove('active');
        logo.classList.remove('active');
        ul.classList.remove('active');
        tatas.classList.remove('active');
        tmenu2.classList.remove('active');
    }
}

function scrollwin(){
    window.scrollTo(0,600);
}

function scrollup(){
    window.scrollTo(0,0);
}

filepre.addEventListener('change', function() {
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        previewimg.style.display = "block";

        reader.addEventListener("load", function() {
            previewimg.setAttribute("src", this.result);
        });

        reader.readAsDataURL(file);
    }else{
        previewimg.style.display = null;
        previewimg.setAttribute("src", "");
    }
});




