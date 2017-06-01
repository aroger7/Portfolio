$(document).ready(function () {
    $("a").click(function (e) {
        var href = $(e.currentTarget).attr("href");
        if (href[0] === "#") {
            var target = $(href);
            //e.preventDefault();
            var offset = window.innerWidth <= 992 ? $(".navbar-brand").height() : 0;
            //var offset = 0;
            console.log("Scroll top = " + (target.offset().top - offset));
            $("html, body").stop().animate({
                scrollTop: target.offset().top - offset
            }, 500, "swing");
        }
    });
})
