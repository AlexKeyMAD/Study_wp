$("#draggable").draggable();
$("#draggable").draggable({ containment: "#parent-div", scroll: false });
$("#draggable").resizable();
$("#red-sq").draggable();
$("#green-sq").droppable({
    drop: function(event, ui) {
        console.log(event);
    }
});
$("#accordion").accordion({ axis: "y", clearStyle: "button", fillSpace: true, collapsible: true });
$("#sortable").sortable();
$("#sortable").disableSelection();