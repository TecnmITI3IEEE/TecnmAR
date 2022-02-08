
const menu = document.querySelector('.menu-container');
const nav = document.querySelector('nav');

menu?.addEventListener('click', () => {
    if( !nav?.classList.contains('show')){
        nav?.classList.add('show');
    }else{
        nav?.classList.remove('show')
    }
});