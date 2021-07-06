let sitenav = document.querySelector('.sitenav');
if (sitenav) {
    togglerBtn = document.querySelector('.sitenav__menu-toggler');
}

if (togglerBtn) {
    togglerBtn.addEventListener('click', () => {
        sitenav.classList.toggle('menu-toggler__open');
    })
}

var elTabsItem = document.querySelectorAll('.tabs__item');
var elTabsLink = document.querySelectorAll('.tabs__link');
var elFeaturesPanel = document.querySelectorAll('.features__panel');
if (elTabsLink.length > 0) {
    elTabsLink.forEach(function (link) {
        link.addEventListener('click', function (evt) {
            evt.preventDefault();
            elTabsItem.forEach(function (item) {
                item.classList.remove('tabs__item--active')
            })
            link.parentElement.classList.add('tabs__item--active');
            elFeaturesPanel.forEach(function(panel){
                panel.classList.remove('features__panel--active')
            })
            document.querySelector(link.getAttribute('href')).classList.add('features__panel--active');
        }
        );

    }
    );
}




