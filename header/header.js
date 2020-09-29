$(document).ready(function () {
    let galleryTouched = false;
    lazyload();
    $('.gallery-responsive').on('touchstart', function (e) {
        if (!galleryTouched) {
            lazyload();
            galleryTouched = true;
        }
    })
});

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


$(document).ready(function (){
    let YaMapsShown = false;

    $(window).scroll(function() {
        if (!YaMapsShown){
            if($(window).scrollTop() + $(window).height() > $(document).height() - 2000) {
                showYaMaps();
                YaMapsShown = true;
            }
        }
    });

    function showYaMaps(){
        let script   = document.createElement("script");
        script.type  = "text/javascript";
        script.src   = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9a421540de853b065d785f0fc604e13be13cbd2e8f6e69e5346192b568227b5a&amp;width=100%25&amp;height=495&amp;lang=ru_RU&amp;scroll=true";
        script.async = true;
        document.getElementById("YaMaps").appendChild(script);
    }

});


