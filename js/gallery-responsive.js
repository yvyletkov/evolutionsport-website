
window.onload = function () {

    $(document).ready(function() {
        $(".fancybox").fancybox();
    });

    if (window.innerWidth < 768) {
        $('.gallery-responsive').addClass('owl-carousel');
        $('.gallery-responsive').owlCarousel({
            items: 3,
            nav: true,
            center: true,
            loop: true,
            gutter: 20,
            navText: [
                '<img src="../img/arrow-thin-left.png">',
                '<img src="../img/arrow-thin-right.png">'
            ],
        })
    }

}