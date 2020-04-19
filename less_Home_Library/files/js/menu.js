window.addEventListener('DOMContentLoaded', function() {
    let arr_a = document.getElementsByTagName('a'),
        arr_pages = [];

    for (let index = 0; index < arr_a.length; index++) {
        let arr_atr = arr_a[index].getAttributeNames();
        if (arr_atr.indexOf('id') != -1) {
            /*let id = arr_a[index].id,
                elem = document.getElementById('content');*/
            arr_pages.push(arr_a[index]);
            console.log(arr_pages);
            /*elem.src = 'files/content/' + id + '.html';*/
        }

    }
}, false);