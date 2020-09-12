$(function () {
    if ($('#about-us-slide').length) {
        var aboutSlider = tns({
            container: '#about-us-slide',
            items: 1,
            gutter: 20,
            loop: true,
            nav: false,
            navPosition: 'bottom',
            controlsText: [
                '<img src="../img/arrow-blue-left.png">',
                '<img src="../img/arrow-blue-right.png">'
            ],
            responsive: {
                768: {
                    items: 2
                },
                1024: {
                    items: 3
                }
            }
        });
    }
    if ($('#calendar-index-slider').length) {
        var calendarSlider = tns({
            container: '#calendar-index-slider',
            items: 1,
            gutter: 20,
            loop: true,
            nav: false,
            navPosition: 'bottom',
            controlsText: [
                '<img src="../img/arrow-thin-left.png">',
                '<img src="../img/arrow-thin-right.png">'
            ],
            responsive: {
                768: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });
    }
    if ($('#news-index-slider').length) {
        var newsSlider = tns({
            container: '#news-index-slider',
            items: 1,
            gutter: 20,
            loop: true,
            nav: false,
            navPosition: 'bottom',
            controlsText: [
                '<img src="../img/arrow-thin-left.png">',
                '<img src="../img/arrow-thin-right.png">'
            ],
            responsive: {
                768: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
    }
});

