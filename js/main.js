$(function () {

    // scroll functions
    $(window).scroll(function(e) {
    
        // add/remove class to navbar when scrolling to hide/show
        var scroll = $(window).scrollTop();
        if (scroll >= 150) {
            $('.navbar').addClass("navbar-black");
        } else {
            $('.navbar').removeClass("navbar-black");
        }
    
    });
	
    
});

$(document).on('click', '#sidebarCollapse', function (e) {
    $('.norm-menu-wrap').toggleClass('active');
});

$(document).on('click', '.norm-menu__close', function (e) {
    $('.norm-menu-wrap').removeClass('active');
});


$(document).on('click', '.norm-menu-items-item.list-wrap span', function (e) {
    $(this).closest('.norm-menu-items-item').toggleClass('active');
});
