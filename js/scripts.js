$( function() {
    var dateFormat = "mm/dd/yy",
        from = $( "#from" )
            .datepicker({
                defaultDate: "+1w",
                changeMonth: true,
                numberOfMonths: 1
            })
            .on( "change", function() {
                to.datepicker( "option", "minDate", getDate( this ) );
            }),
        to = $( "#to" ).datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 1
        })
            .on( "change", function() {
                from.datepicker( "option", "maxDate", getDate( this ) );
            });

    function getDate( element ) {
        var date;
        try {
            date = $.datepicker.parseDate( dateFormat, element.value );
        } catch( error ) {
            date = null;
        }

        return date;
    }
} );


jQuery(document).ready(function() {
    $(".input-reset-from").click(function() {

        $("#from").val('');

    });
    $(".input-reset-to").click(function() {

        $("#to").val('');

    });

    $(".list-btn").click(function () {
        $(this).addClass("active");
        $(".catalog").addClass("catalog__list-style");
        $(".card").addClass("card__list-style");
        $(".grid-btn").removeClass("active")

    })
    $(".grid-btn").click(function () {
        $(this).addClass("active");
        $(".catalog").removeClass("catalog__list-style");
        $(".card").removeClass("card__list-style");
        $(".list-btn").removeClass("active")
    })

});


