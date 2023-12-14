function menuShow() {

    let menuMobile = document.querySelector('.mobile-menu');
    
    if (menuMobile.classList.contains('open')) 
    {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src="./img/menu_white_36dp.svg";
    }
    else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').src="./img/close_white_36dp.svg";
    }

}

function htmlClick(){
    
    let cards = document.querySelector('#html');

    if (cards.classList.contains('flip')){
        cards.classList.remove('flip');
    }
    else{
        cards.classList.add('flip');
    }
}
function cssClick () {
    
    let cards = document.querySelector('#css');

    if (cards.classList.contains('flip')){
        cards.classList.remove('flip');
    }
    else{
        cards.classList.add('flip');
    }
}
function jsClick () {
    
    let cards = document.querySelector('#js');

    if (cards.classList.contains('flip')){
        cards.classList.remove('flip');
    }
    else{
        cards.classList.add('flip');
    }
}
function pythonClick () {
    
    let cards = document.querySelector('#python');

    if (cards.classList.contains('flip')){
        cards.classList.remove('flip');
    }
    else{
        cards.classList.add('flip');
    }
}
function githubClick () {
    
    let cards = document.querySelector('#github');

    if (cards.classList.contains('flip')){
        cards.classList.remove('flip');
    }
    else{
        cards.classList.add('flip');
    }
}