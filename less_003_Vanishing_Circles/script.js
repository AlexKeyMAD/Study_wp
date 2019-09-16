let circle1 = document.createElement('div'),
    circle2 = document.createElement('div'),
    circle3 = document.createElement('div');

document.body.append(circle1);
document.body.append(circle2);
document.body.append(circle3);

list_div = document.getElementsByTagName('div');

for (let index = 0; index < list_div.length; index++) {

    list_div[index].style.width = '100px';
    list_div[index].style.height = '100px';
    list_div[index].style.border = '2px solid';
    list_div[index].style.borderRadius = '50%';

}

list_div[0].style.backgroundColor = 'red';
list_div[1].style.backgroundColor = 'orange';
list_div[2].style.backgroundColor = 'green';