// $(function () {
//
//     // scroll functions
//     $(window).scroll(function(e) {
//
//         // add/remove class to navbar when scrolling to hide/show
//         var scroll = $(window).scrollTop();
//         if (scroll >= 150) {
//             $('.navbar').addClass("navbar-black");
//         } else {
//             $('.navbar').removeClass("navbar-black");
//         }
//
//     });
//
//
// });
//
// $(document).on('click', '#sidebarCollapse', function (e) {
//     $('.norm-menu-wrap').toggleClass('active');
// });
//
// $(document).on('click', '.norm-menu__close', function (e) {
//     $('.norm-menu-wrap').removeClass('active');
// });
//
//
// $(document).on('click', '.norm-menu-items-item.list-wrap span', function (e) {
//     $(this).closest('.norm-menu-items-item').toggleClass('active');
// });

$(".banner-desc__order").click( // ФОРМА ЗАЯВКИ ЦЕНТРА ЗДОРОВЬЯ
    (e) => {
        e.preventDefault();
        swal({
            html: '<form id="health-center-bid-form">' +

                '<p>Пожалуйста, укажите свои контактные данные</p>' +

                '<input type="hidden" name="form-name" value="health-center-bid-form">' +

                '<label for="health-center-bid-form__name">ФИО</label>' +
                '<input required type="text" name="name" id="health-center-bid-form__name">' +

                '<label for="health-center-bid-form__email">E-mail</label>' +
                '<input  type="email" name="email" id="health-center-bid-form__email">' +

                '<label for="health-center-bid-form__phone">Номер телефона</label>' +
                '<input required type="number" name="phone" id="health-center-bid-form__phone">' +

                '<label for="health-center-bid-form__country">Страна</label>' +
                '<input required type="text" name="country" id="health-center-bid-form__country">' +

                '<label for="health-center-bid-form__city">Город</label>' +
                '<input required type="text" name="city" id="health-center-bid-form__city">' +

                '<label for="health-center-bid-form__date-of-birth">Дата рождения</label>' +
                '<input required type="text" name="date-of-birth" id="health-center-bid-form__date-of-birth">' +

                '<label for="health-center-bid-form__full-diagnosis">Полный медицинский диагноз</label>' +
                '<textarea name="full-diagnosis" id="health-center-bid-form__full-diagnosis"></textarea>' +

                '<label for="health-center-bid-form__where-treated">Проходили ли раньше реабилитацию? Если да, то где?</label>' +
                '<textarea name="where-treated" id="health-center-bid-form__where-treated"></textarea>' +

                '<button type="submit">Отправить</button>' +

                '</form>',
            focusConfirm: false,
            showCancelButton: false,
            showConfirmButton: false,
            confirmButtonColor: '#ff5908',
            cancelButtonColor: '#666',
            confirmButtonText: 'Оставить заявку',
            cancelButtonText: 'Отмена',
        })
    }
)

function getAndShowPopUpNewProgram () {

    let iframeEl = document.createElement("iframe");
    iframeEl.src = 'http://95.181.172.100/erp/site/all-pages-quiz/';
    iframeEl.style.cssText = "width: 100%; height: 100%; position: fixed; top:0; right: 0; z-index: 100000";
    iframeEl.style.cssText = "width: 100%; height: 100%; position: fixed; top:0; right: 0; z-index: 100000";
    document.getElementsByTagName("body")[0].appendChild(iframeEl);

};
// setTimeout(getAndShowPopUpNewProgram,0);