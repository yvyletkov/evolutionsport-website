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

$(".norm-menu-items-item.list-wrap span").click(function (e) {
    e.preventDefault();
    $(this).closest(".norm-menu-items-item").toggleClass("active");
    if ($(".norm-menu-items-item").is(".active")) {
        $(".norm-menu-items-item").removeClass("active");
        $(this).closest(".norm-menu-items-item").addClass("active");
    }
});

$("#sidebarCollapse").click(function () {
    $(this).toggleClass("active");
    $(".norm-menu-wrap").toggleClass("active");
});


// КОНТАКТНАЯ ФОРМА С ХЕДЕРА
$(document).ready(
    function () {
        $(".nav-link.button-blue__mobile, .nav-link.button-blue").click( () => {
            swal({
                title: '<p class="header__popup__title">Пожалуйста, укажите свои контактные данные,<br/>и мы Вам перезвоним</p>',
                html:
                    '<input name="name" id="swal-input1" class="header__popup__input" placeholder="Ваше имя">' +
                    '<input name="phone" type="number" id="swal-input2" class="header__popup__input" placeholder="Номер телефона">',
                showCancelButton: true,
                confirmButtonColor: '#355b8e',
                cancelButtonColor: '#4a4a4a',
                confirmButtonText: '<span class="header__popup__btn">Перезвоните мне</span>',
                cancelButtonText: '<span class="header__popup__btn">Закрыть окно</span>',
                preConfirm: function () {
                    return new Promise(function (resolve) {
                        resolve([
                            $('#swal-input1').val(),
                            $('#swal-input2').val(),
                            $('#swal-textarea1').val()
                        ])
                    })
                },
            }).then(function () {
                let result = {};
                result["form-name"] = "quiz-parasport-form";
                result["rus-form-name"] = "Контактная форма из шапки сайта";
                result.name = $('#swal-input1').val();
                result.phone = $('#swal-input2').val();
                mainApi(result)
                    .then((res) => {
                        console.log(res);
                        if (res.ok) {
                            debugger
                            swal({type: 'success', text: 'Сообщение отправлено'});
                        }
                    })

            })
        })
    }
);
// КОНЕЦ КОНТАКТНАЯ ФОРМА С ХЕДЕРА



