$(function () {
    if ($('#nomer-first').length){
        var nomerFirst = tns({
            container: '#nomer-first',
            items: 1,
            loop: true,
            nav: false,
            gutter: 0,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            navPosition: 'bottom',
            controlsText: [
                '<img src="../img/arrow-blue-left.png">',
                '<img src="../img/arrow-blue-right.png">'
            ],
        });
    }
    if ($('#nomer-second').length) {
        var nomerSecond = tns({
            container: '#nomer-second',
            items: 1,
            loop: true,
            nav: false,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            navPosition: 'bottom',
            controlsText: [
                '<img src="../img/arrow-blue-left.png">',
                '<img src="../img/arrow-blue-right.png">'
            ],
        });
    }
});