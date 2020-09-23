lazyload();

$(function () {
    // scroll functions
    $(window).scroll(function (e) {
        // add/remove class to navbar when scrolling to hide/show
        var scroll = $(window).scrollTop();
        if (scroll >= 150) {
            $(".navbar").addClass("navbar-black");
        } else {
            $(".navbar").removeClass("navbar-black");
        }
    });
});

$(document).on("click", ".norm-menu__close", function (e) {
    $(".norm-menu-wrap").removeClass("active");
});

$(".norm-menu-items-item.list-wrap span, #infrastructure-menu-item, #services-menu-item, #about-menu-item").click(function (e) {
    e.preventDefault();
    $(this).closest(".norm-menu-items-item").toggleClass("active");
    if ($(".norm-menu-items-item").is(".active")) {
        $(".norm-menu-items-item").removeClass("active");
        $(this).closest(".norm-menu-items-item").addClass("active");
    }
});

$("#sidebarCollapse").click(function () {
    $(".norm-menu-wrap").addClass("active");
});
