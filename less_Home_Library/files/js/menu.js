window.addEventListener('DOMContentLoaded', function() {

    let btnPy = document.getElementById('btn-python'),
        btnJS = document.getElementById('btn-js'),
        btn1c = document.getElementById('btn-1c'),
        ulPy = document.getElementById('ul-python'),
        ulJS = document.getElementById('ul-js'),
        ul1c = document.getElementById('ul-1c');

    function hideElementsMenu() {
        ulPy.hidden = false;
        ulJS.hidden = false;
        ul1c.hidden = false;
    }

    btnPy.onclick = function() {
        hideElementsMenu();
        ulPy.hidden = true;
    }
    btnJS.onclick = function() {
        hideElementsMenu();
        ulJS.hidden = true;
    }
    btn1c.onclick = function() {
        hideElementsMenu();
        ul1c.hidden = true;
    }

    hideElementsMenu();

}, false);