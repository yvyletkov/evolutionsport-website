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

// $(".input-image.date")
//     .datepicker({
//         dateFormat: "mm-dd-yy",
//         changeMonth: true,
//         changeYear: true,
//         yearRange: "1900:2100",
//         autoclose: true,
//     })
//     .keyup(function () {
//         this.value = this.value.replace(/[^\d]/g, "");
//     });

// $(".nav-link.button-blue__mobile, .nav-link.button-blue").click( // ФОРМА ПЕРЕЗВОНА В ХЕДЕРЕ
//     (e) => {
//         e.preventDefault();
//         swal({
//             html: '<form id="header-contact-form">' +
//
//                 '<p>Пожалуйста, укажите свои контактные данные, и мы Вам перезвоним</p>' +
//
//                 '<input type="hidden" name="form-name" value="quiz-new-program-form">' +
//                 '<input type="hidden" name="rus-form-name" value="Форма из шапки сайта (Перезвоните мне)">' +
//
//                 '<label for="health-center-bid-form__name">Ваше имя</label>' +
//                 '<input required type="text" name="name" id="header-contact-form__name">' +
//
//                 '<label for="health-center-bid-form__email">Ваш E-mail</label>' +
//                 '<input  type="email" name="email" id="header-contact-form__email">' +
//
//                 '<label for="health-center-bid-form__phone">Ваш номер телефона</label>' +
//                 '<input required type="number" name="phone" id="header-contact-form__phone">' +
//
//                 '<button type="submit">Отправить</button>' +
//
//                 '</form>',
//             focusConfirm: false,
//             showCancelButton: false,
//             showConfirmButton: false,
//             confirmButtonColor: '#ff5908',
//             cancelButtonColor: '#666',
//             confirmButtonText: 'Забронировать',
//             cancelButtonText: 'Отмена',
//         })
//     }
// );



$(document).ready(
    function () {
        $(".nav-link.button-blue__mobile, .nav-link.button-blue").click( () => {
            swal({
                title: '<p class="header__popup__title">Пожалуйста, укажите свои контактные данные,<br/>и мы Вам перезвоним</p>',
                html:
                    '<input name="name" id="swal-input1" class="header__popup__input" placeholder="Ваше имя">' +
                    '<input name="phone" type="number" id="swal-input2" class="header__popup__input" placeholder="Номер телефона">',
                showCancelButton: true,
                confirmButtonColor: '#0f4179',
                cancelButtonColor: '#666',
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
            }).then(function (result) {
                var result = {};
                result["form-name"] = "quiz-parasport-form";
                result["rus-form-name"] = "Контактная форма из шапки сайта";
                result.name = $('#swal-input1').val();
                result.phone = $('#swal-input2').val();
                $.ajax({
                    url:"http://95.181.172.100/erp/site/forms/",
                    type: "POST",
                    data: JSON.stringify(result),
                    error: function(xhr,status,error){
                        console.log(status);
                        console.log(error);
                    }
                }).done(function() {
                    swal({type: 'success', text: 'Сообщение отправлено'});
                });
            })
        })
    }
)


// $(document).ready(
//     () => {
//         $("#header-contact-form").on("submit", (event) => {
//             debugger
//             event.preventDefault();
//             const data = $("#header-contact-form").serializeArray();
//             mainApi(data)
//                 .then((res) => {
//                     if (res.ok) {
//                         swal({
//                             type: "success",
//                             title: "Спасибо! Ваша заявка будет обработана",
//                             text: "Наш менеджер с вами свяжется в ближайшее время",
//                         });
//                     }
//                 })
//                 .catch((err) => {
//                     swal({
//                         type: "error",
//                         title: "Извините, ваша заявка не отправлена",
//                         text: "Что-то пошло не так, мы уже работаем над ошибкой",
//                     });
//                     console.log(err);
//                 });
//         })
//     }
// );


