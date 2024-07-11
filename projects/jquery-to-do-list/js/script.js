// Timothy Pamplin 2024



$(window).on('keypress', function (e) {
    if (e.which == 13) {
        event.preventDefault();
        newItem();
    };
});

function newItem() {

    //variable declarations
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert('You must write something!');
    }
    else {
        $('#list').append(li);
    };

    //make a button to remove an item from the list.
    function crossOut(){
        li.toggleClass('strike');
    };

    li.on('dblclick', crossOut);

    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    function deleteListitem(){
        li.addClass('delete');
    }

    crossOutButton.on('click', deleteListitem);

    $('#list').sortable();


}