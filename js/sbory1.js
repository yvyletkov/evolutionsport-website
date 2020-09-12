$(function () {
    if ($('#about-us-slide'), length) {
        var aboutSlider = tns({
            container: '#about-us-slide',
            items: 3,
            gutter: 20,
            loop: true,
            nav: false,
            navPosition: 'bottom',
            controlsText: [
                '<img src="../img/red-arrow-left.png">',
                '<img src="../img/red-arrow-right.png">'
            ],
        });
    }
});