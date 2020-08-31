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

// $(document).on("click", "#sidebarCollapse", function (e) {
//   $(".norm-menu-wrap").toggleClass("active");
// });

$(document).on("click", ".norm-menu__close", function (e) {
  $(".norm-menu-wrap").removeClass("active");
});

$(".norm-menu-items-item.list-wrap span").click(function (e) {
  e.preventDefault();
  $(this).closest(".norm-menu-items-item").toggleClass("active");
  if ($(".norm-menu-items-item").is(".active")) {
    $(".norm-menu-items-item").removeClass("active");
    $(this).closest(".norm-menu-items-item").addClass("active");
  }
});

//дата для бронирования
// const dateNow = () => {
//     const today = new Date();
//     const myDate = document.querySelectorAll('.booking__input');
//     myDate.forEach((e) => e.value = today.toISOString().substr(0, 10) )
//   };
// dateNow();

// анимации иконки меню
$('#sidebarCollapse').click(function(){
  console.log(this)
    $(this).toggleClass('active');
    $('.norm-menu-wrap').toggleClass('active');
});
