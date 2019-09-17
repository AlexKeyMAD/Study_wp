let but = document.getElementById('button'),
    inp = document.getElementById('text'),
    txt = document.getElementById('OldText'),
    textOld = '';

but.onclick = function() {
    textOld = inp.value;
    txt.innerHTML = textOld;
    inp.value = 'Введите текст';
}