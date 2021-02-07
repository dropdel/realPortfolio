let hiddenNav = document.getElementById('sideNav');
let activeLink = document.querySelector('a');

function openNav() {
    let stylingNav = hiddenNav.style;
    stylingNav.display = 'flex';
    stylingNav.width = '1px';
    stylingNav.flexFlow = 'column nowrap';
    stylingNav.justifyContent = 'space-around';
    stylingNav.alignItems = 'center';
    stylingNav.width = '75%';
}

function closeNav() {
    hiddenNav.style.width = '1px';
}

