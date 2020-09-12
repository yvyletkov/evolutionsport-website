$(function () {
    if ($('#nested-in-korpus-first').length){
        var nestedInKorpusFirst = tns({
            container: '#nested-in-korpus-first',
            items: 1,
            loop: true,
            // autoHeight: true,
            nested: 'inner',
            nav: false,
            navPosition: "bottom",
            controlsText: [
                '<img src="img/arrow-korpus-left.png">',
                '<img src="img/arrow-korpus-right.png">'
            ],
        });
    }
    if ($('#nested-in-korpus-second').length) {
        var nestedInKorpusSecond = tns({
            container: '#nested-in-korpus-second',
            items: 1,
            loop: true,
            // autoHeight: true,
            nested: 'inner',
            nav: false,
            navPosition: "bottom",
            controlsText: [
                '<img src="img/arrow-korpus-left.png">',
                '<img src="img/arrow-korpus-right.png">'
            ],
        });
    }
    if ($('#nested-in-korpus-third').length) {
        var nestedInKorpusThird = tns({
            container: '#nested-in-korpus-third',
            items: 1,
            loop: true,
            nested: 'inner',
            nav: false,
            navPosition: "bottom",
            controlsText: [
                '<img src="img/arrow-korpus-left.png">',
                '<img src="img/arrow-korpus-right.png">'
            ],
        });
    }
    if ($('#nested-in-korpus-fourth').length) {
        var nestedInKorpusFourth = tns({
            container: '#nested-in-korpus-fourth',
            items: 1,
            loop: true,
            nested: 'inner',
            nav: false,
            navPosition: "bottom",
            controlsText: [
                '<img src="img/arrow-korpus-left.png">',
                '<img src="img/arrow-korpus-right.png">'
            ],
        });
    }
    if ($('#nested-out-korpus').length) {
        var nestedOutKorpus = tns({
            container: '#nested-out-korpus',
            items: 1,
            nav: false,
            nested: 'outer',
            mouseDrag: true,
            controlsText: [
                '<img src="img/arrow-thin-left.png">',
                '<img src="img/arrow-thin-right.png">'
            ]
        });
    }
    if ($('#baths-slider').length) {
        var bathsSlider = tns({
            container: '#baths-slider',
            items: 1,
            loop: true,
            nav: false,
            navPosition: 'bottom',
            controlsText: [
                '<img src="../img/red-arrow-left.png">',
                '<img src="../img/red-arrow-right.png">'
            ],
        });
    }
    if ($('#resort-transfer').length) {
        var resortTransfer = tns({
            container: '#resort-transfer',
            items: 1,
            gutter: 15,
            loop: true,
            nav: false,
            navPosition: 'bottom',
            animateIn: 'jello',
            controlsText: [
                '<img src="../img/arrow-blue-left.png">',
                '<img src="../img/arrow-blue-right.png">'
            ],
        });
    }
});