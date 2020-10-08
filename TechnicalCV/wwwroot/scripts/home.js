
$('document').ready(function () {



    var lang = {
        html: "90%",
        css: "90%",
        javascript: "70%",
        python: "65%",
        aspnet: "65%",
        bootstrap: "75%",
        java: "60%"
    };
    var multiply = 4;

    $.each(lang, function (language, pourcent) {
        var delay = 700;

        setTimeout(function () {
            $("#" + language + "-pourcent").html(pourcent);
        }, delay * multiply);

        multiply++;
    });

    //$('.smoothscroll').on('click', function (e) {
    //    e.preventDefault();

    //    var target = this.hash,
    //        $target = $(target);

    //    $('html, body').stop().animate({
    //        'scrollTop': $target.offset().top
    //    }, 800, 'swing', function () {
    //        window.location.hash = target;
    //    });
    //});

});