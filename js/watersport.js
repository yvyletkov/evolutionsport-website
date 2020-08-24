$(function () {
	if($('#nested-in-korpus-first').length) {
        var nestedInKorpusFirst = tns({
            container: '#nested-in-korpus-first',
            items: 1,
            loop: true,
            // autoHeight: true,
            nested: 'inner',
            nav: false,
            navPosition: "bottom",
            controlsText: [
                '<img src="../img/arrow-korpus-left.png">',
                '<img src="../img/arrow-korpus-right.png">'
            ],
        });
    }
    if($('#nested-in-korpus-second').length) {
        var nestedInKorpusSecond = tns({
            container: '#nested-in-korpus-second',
            items: 1,
            loop: true,
            // autoHeight: true,
            nested: 'inner',
            nav: false,
            navPosition: "bottom",
            controlsText: [
                '<img src="../img/arrow-korpus-left.png">',
                '<img src="../img/arrow-korpus-right.png">'
            ],
        });
    }
    if($('#nested-in-korpus-third').length) {
        var nestedInKorpusThird = tns({
            container: '#nested-in-korpus-third',
            items: 1,
            loop: true,
            nested: 'inner',
            nav: false,
            navPosition: "bottom",
            controlsText: [
                '<img src="../img/arrow-korpus-left.png">',
                '<img src="../img/arrow-korpus-right.png">'
            ],
        });
    }
    if($('#nested-in-korpus-fourth').length) {
        var nestedInKorpusFourth = tns({
            container: '#nested-in-korpus-fourth',
            items: 1,
            loop: true,
            nested: 'inner',
            nav: false,
            navPosition: "bottom",
            controlsText: [
                '<img src="../img/arrow-korpus-left.png">',
                '<img src="../img/arrow-korpus-right.png">'
            ],
        });
    }
    if($('#nested-out-korpus').length) {
        var nestedOutKorpus = tns({
            container: '#nested-out-korpus',
            items: 1,
            nav: false,
            nested: 'outer',
            mouseDrag: true,
            controlsText: [
                '<img src="../img/arrow-thin-left.png">',
                '<img src="../img/arrow-thin-right.png">'
            ]
        });
    }
    if($('#infra').length) {
        var sboryInfra = tns({
            container: '#infra',
            items: 1,
            gutter: 15,
            loop: true,
            nav: false,
            navPosition: 'bottom',
            animateIn: 'jello',
            controlsText: [
                '<img src="../img/red-arrow-left.png">',
                '<img src="../img/red-arrow-right.png">'
            ],
        });
    }
    if($('#baths-slider-watersport').length) {
        var bathsSlider = tns({
            container: '#baths-slider-watersport',
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
});
$(document).ready(function() {

// Gets the video src from the data-src on each button

var $videoSrc;  
$('.video-btn').click(function() {
    $videoSrc = $(this).data( "src" );
});
console.log($videoSrc);

  
  
// when the modal is opened autoplay it  
$('#myModal').on('shown.bs.modal', function (e) {
    
// set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
$("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
})
  

// stop playing the youtube video when I close the modal
$('#myModal').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#video").attr('src',$videoSrc); 
}) 
 
// document ready  
});
