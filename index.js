
function toggleNav() {
    var navBar = document.getElementById('mobileNavLinks');

    navBar.classList.toggle('show')
}

var open = document.getElementById('open');

open.addEventListener('click', toggleNav);

var close = document.getElementById('close');

close.addEventListener('click', toggleNav);