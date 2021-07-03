let sitenav = document.querySelector('.sitenav');
if(sitenav){
    togglerBtn = document.querySelector('.sitenav__menu-toggler');
}

if(togglerBtn){
    togglerBtn.addEventListener('click', () => {
        sitenav.classList.toggle('menu-toggler__open');
    })
}
