alert('Страница загружена!!!');

document.getElementById('button-change').onclick = function() {
    document.getElementById('text').innerHTML = 'Добрый день';
}

document.getElementById('create-text').onclick = function() {
    var new_p = document.createElement('p');
    new_p.innerHTML = 'Новый элемент';
    document.body.append(new_p);
}

document.getElementById('text-color').onclick = function() {
    var elem_p = document.getElementsByTagName('p');

    for (let index = 0; index < elem_p.length; index++) {
        elem_p[index].style.color = 'red';

    }
}