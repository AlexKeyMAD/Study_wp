$("#draggable").draggable();
$("#draggable").draggable({ containment: "#parent-div", scroll: false });
$("#draggable").resizable();
$("#red-sq").draggable();
$("#green-sq").droppable({
    drop: function(event, ui) {
        console.log(event);
    }
});