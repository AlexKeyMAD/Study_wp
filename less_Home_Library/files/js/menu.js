window.addEventListener('DOMContentLoaded', function() {
    let arr_a = document.getElementsByTagName('a'),
        arr_pages = [];

    for (let i = 0; i < arr_a.length; i++) {
        let arr_atr = arr_a[i].getAttributeNames();
        if (arr_atr.indexOf('id') != -1) {
            /*let id = arr_a[index].id,
                elem = document.getElementById('content');*/
            arr_pages.push(arr_a[i]);
            console.log(arr_pages);
            /*elem.src = 'files/content/' + id + '.html';*/
        }

    }
}, false);