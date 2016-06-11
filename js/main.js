$(document).ready(function() {

    // increment value plus one 
    $(".plus-button").on('click', function() {
        var plusValue = parseInt($('#productCount').val());
        if (!isNaN(plusValue)) {
            $('#productCount').val(plusValue + 1);
        } else {
            $('#productCount').val(1);
        }
    });

    // decrement value minus one
    $(".minus-button").on('click', function() {
        var minusValue = parseInt($('#productCount').val());
        if (!isNaN(minusValue) && minusValue > 1) {
            $('#productCount').val(minusValue - 1);
        } else {
            $('#productCount').val(1);
        }
    });


});



/*window load*/
$(window).load(function() {

});


if (!Modernizr.touch) {
    $(window).resize(function() {

    });
}

$(window).on('orientationchange', function() {

});
