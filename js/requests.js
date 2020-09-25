const mainURL = "http://77.232.53.82:8051/erp/site/forms/";

//mainURL = "http://77.232.53.82:8051/erp/site/forms/";

function objectifyForm(data) {
    if (data["form-name"]) return data; // если объект уже норм, то оставляем как есть

    let wellSerializedData = {};
    for (let i = 0; i < data.length; i++) {
        wellSerializedData[data[i]['name']] = data[i]['value'];
    }
    return wellSerializedData;
}

async function mainApi(info) {
    try {
        const res = await fetch(mainURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(objectifyForm(info)),
        });

        if (!res.ok) {
            throw new Error(`error ${res.status}`);
        }
        console.log(res);
        return res;
    } catch (err) {
        console.log(err);
    }
}

$(".children-form").on("submit", function (event) {
    event.preventDefault();
    const data = $(".children-form").serializeArray();
    mainApi(data)
        .then((res) => {
            if (res.ok) {
                swal({
                    type: "success",
                    title: "Спасибо! Ваша заявка будет обработана",
                    text: "Наш менеджер с вами свяжется в указанное время",
                });
            }
        })
        .catch((err) => {
            swal({
                type: "error",
                title: "Извините, ваша заявка не отправлена",
                text: "Что-то пошло не так мы уже работаем над ошибкой",
            });
            console.log(err);
        });
});

$(".map-form").on("submit", function (event) {
    event.preventDefault();
    const data = $(".map-form").serializeArray();
    mainApi(data)
        .then((res) => {
            if (res.ok) {
                swal({
                    type: "success",
                    title: "Спасибо!",
                    text: "Ваша заявка будет обработана и наш менеджер с вами свяжется",
                });
            }
        })
        .catch((err) => {
            swal({
                type: "error",
                title: "Извините, ваша заявка не отправлена",
                text: "Что-то пошло не так мы уже работаем над ошибкой",
            });
            console.log(err);
        });
});

// $(".price-form").on("submit", function (event) {
//     event.preventDefault();
//     const data = $(".price-form").serializeArray();
//     mainApi(data)
//         .then((res) => {
//             console.log(res);
//             res.map((e) => console.log(typeof e.value));
//             if (res.ok) {
//                 swal({
//                     type: "success",
//                     title: "Спасибо!",
//                     text: "Ваша заявка будет обработана и наш менеджер с вами свяжется",
//                 });
//                 this.reset();
//             }
//         })
//         .catch((err) => {
//             swal({
//                 type: "error",
//                 title: "Извините, ваша заявка не отправлена",
//                 text: "Что-то пошло не так мы уже работаем над ошибкой",
//             });
//             console.log(err);
//         });
// });

$(".tarifes-list").on("submit", function (event) {
    event.preventDefault();
    const sum = $("#new__price-first").text().match(/\d+/g).join("");
    let obj = {};
    if ($("p").is(".tarifes-list-item-row__item")) {
        const childNum = $("#child-num").text();
        const daysNum = $("#days-num").text();
        obj = {
            form_name: "autumn-camp-day",
            price: sum,
            count_children: childNum,
            count_days: daysNum,
        };
    } else {
        obj = {
            form_name: "autumn-camp",
            price: sum,
        };
    }
    console.log(obj);
    mainApi(obj)
        .then((res) => {
            console.log(res.data.sum);
            // $(".tarifes-list-item-prices__new").text(function{
            //   res.data.sum
            // })
            document.querySelector(".tarifes-list-item-prices__new").textContent = res.data.sum
        })
        .catch((err) => {
            console.log(err);
        });
});

// $(".tarifes-list-item-row__plus, .tarifes-list-item-row__minus").on('click', function(event) {
//   event.preventDefault();
//   const sum = $("#new__price-first").text().match(/\d+/g).join("");
//   let obj = {};
//   if ($("p").is(".tarifes-list-item-row__item")) {
//     const childNum = $("#child-num").text();
//     const daysNum = $("#days-num").text();
//     obj = {
//       form_name: "autumn-camp-day",
//       price: 1100,
//       count_children: childNum,
//       count_days: daysNum,
//     };
//   } else {
//     obj = {
//       form_name: "autumn-camp",
//       price: sum,
//     };
//   }
//   console.log(obj);
//   mainApi(obj)
//     .then((res) => {
//       console.log(res.data.sum);
//       document.querySelector(".tarifes-list-item-prices__new").textContent = res.data.sum
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// })


// -------- САБМИТ ФОРМЫ РАССЧЕТА СТОИМОСТИ ЦЕНТРА ЗДОРОВЬЯ
$(document).ready(() => {
    $("#health-center-bid-form").on("submit", function (event) {

        event.preventDefault();
        const data = $("#health-center-bid-form").serializeArray();
        mainApi(data)
            .then((res) => {
                if (res.ok) {
                    swal({
                        type: "success",
                        title: "Спасибо! Ваша заявка будет обработана",
                        text: "Наш менеджер с вами свяжется в ближайшее время",
                    });
                }
            })
            .catch((err) => {
                swal({
                    type: "error",
                    title: "Извините, ваша заявка не отправлена",
                    text: "Что-то пошло не так, мы уже работаем над ошибкой",
                });
                console.log(err);
            });
    });
});
// --- КОНЕЦ САБМИТ ФОРМЫ РАССЧЕТА СТОИМОСТИ ЦЕНТРА ЗДОРОВЬЯ


// -------- ФОРМА ЗАЯВКИ ЦЕНТРА ЗДОРОВЬЯ
$(document).ready(
    function () {
        $(".banner-desc__order").click(() => {
            swal({
                title: '<p class="header__popup__title">Пожалуйста, укажите свои контактные данные</p>',
                html:
                    '<label class="popup__label" for="health-center-bid-form__name">ФИО*</label>' +
                    '<input placeholder="Укажите своё имя" required class="header__popup__input w-100" type="text" id="health-center-bid-form__name">' +

                    '<label class="popup__label" for="health-center-bid-form__email">E-mail</label>' +
                    '<input placeholder="Укажите свою почту" type="email" class="header__popup__input w-100" id="health-center-bid-form__email">' +

                    '<label class="popup__label" for="health-center-bid-form__phone">Номер телефона*</label>' +
                    '<input placeholder="Укажите свой номер телефона" required class="header__popup__input w-100" type="number" name="phone" id="health-center-bid-form__phone">' +

                    '<label class="popup__label" for="health-center-bid-form__country">Страна*</label>' +
                    '<input placeholder="В какой стране Вы живете?" required class="header__popup__input w-100" type="text" name="country" id="health-center-bid-form__country">' +

                    '<label class="popup__label" for="health-center-bid-form__city">Город</label>' +
                    '<input placeholder="В каком городе Вы живете?" class="header__popup__input w-100" type="text" name="city" id="health-center-bid-form__city">' +

                    '<label class="popup__label" for="health-center-bid-form__date-of-birth">Дата рождения</label>' +
                    '<input placeholder="Укажите Вашу дату рождения" class="header__popup__input w-100" type="text" name="date-of-birth" id="health-center-bid-form__date-of-birth">' +

                    '<label class="popup__label" for="health-center-bid-form__full-diagnosis">Полный медицинский диагноз</label>' +
                    '<textarea class="header__popup__input w100" placeholder="Можете указать, при желании" name="full-diagnosis" id="health-center-bid-form__full-diagnosis"></textarea>' +

                    '<label class="popup__label" for="health-center-bid-form__where-treated">Проходили ли раньше реабилитацию? Если да, то где?</label>' +
                    '<textarea class="header__popup__input w100" placeholder="Нам будет интересно узнать" name="where-treated" id="health-center-bid-form__where-treated"></textarea>',
                showCancelButton: true,
                confirmButtonColor: '#0f4179',
                cancelButtonColor: '#666',
                confirmButtonText: '<span class="header__popup__btn">Оставить заявку</span>',
                cancelButtonText: '<span class="header__popup__btn">Закрыть окно</span>',
                preConfirm: function () {
                    return new Promise(function (resolve) {
                        resolve([
                            $('#health-center-bid-form__name').val(),
                            $('#health-center-bid-form__email').val(),
                            $('#health-center-bid-form__phone').val(),
                            $('#health-center-bid-form__country').val(),
                            $('#health-center-bid-form__city').val(),
                            $('#health-center-bid-form__date-of-birth').val(),
                            $('#health-center-bid-form__full-diagnosis').val(),
                            $('#health-center-bid-form__where-treated').val(),
                        ])
                    })
                },
            })
                .then(function () {
                    let result = {};
                    result["form-name"] = "health-center-bid-form";
                    result["rus-form-name"] = "Подача заявки в Центре Здоровья";
                    result.program = $('title').html();
                    result.name = $('#health-center-bid-form__name').val();
                    result.email = $('#health-center-bid-form__email').val();
                    result.phone = $('#health-center-bid-form__phone').val();
                    result.country = $('#health-center-bid-form__country').val();
                    result.city = $('#health-center-bid-form__city').val();
                    result["date-of-birth"] = $('#health-center-bid-form__date-of-birth').val();
                    result["full-diagnosis"] = $('#health-center-bid-form__full-diagnosis').val();
                    result["where-treated"] = $('#health-center-bid-form__where-treated').val();

                    mainApi(result)
                        .then((res) => {
                            console.log(res);
                            if (res.ok) {
                                swal({
                                    type: 'success',
                                    text: 'Заявку успешно подана! Наш менеджер свяжется с Вами для уточнения деталей в самое ближайшее время'
                                });
                            }
                        })
                })
        })
    }
);
// --- КОНЕЦ ФОРМА ЗАЯВКИ ЦЕНТРА ЗДОРОВЬЯ


// -------- ЗАПРОС АЙФРЕЙМА С ОПРОСНИКОМ
function getAndShowPopUpNewProgram() {
    let iframeEl = document.createElement("iframe");
    iframeEl.src = 'http://95.181.172.100/erp/site/all-pages-quiz/';
    iframeEl.style.cssText = "width: 100%; height: 100%; position: fixed; top:0; right: 0; z-index: 1";
    document.getElementsByTagName("body")[0].appendChild(iframeEl);
};
// setTimeout(getAndShowPopUpNewProgram,0);
// --- КОНЕЦ ЗАПРОС АЙФРЕЙМА С ОПРОСНИКОМ


// -------- КОНТАКТНАЯ ФОРМА С ХЕДЕРА
$(document).ready(
    function () {
        $(".nav-link.button-blue__mobile, .nav-link.button-blue, #call-me-btn").click(() => {
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
                result["form-name"] = "default-contact-form";
                result["rus-form-name"] = "Контактная форма из шапки сайта";
                result.name = $('#swal-input1').val();
                result.phone = $('#swal-input2').val();
                mainApi(result)
                    .then((res) => {
                        console.log(res);
                        if (res.ok) {
                            swal({
                                type: 'success',
                                text: 'Спасибо! Наши менеджеры свяжутся с Вами в самое ближайшее время'
                            });
                        }
                    })

            })
        })
    }
);
// --- КОНЕЦ КОНТАКТНАЯ ФОРМА С ХЕДЕРА

// -------- КОНТАКТНАЯ ФОРМА СО СТРАНИЦЫ BOOKING
$(document).ready(
    function () {
        $(".call-me-btn, #call-me-btn").click(() => {
            swal({
                title: '<p class="header__popup__title">Пожалуйста, укажите свои контактные данные,<br/>и мы Вам перезвоним</p>',
                html:
                    '<input name="name" id="swal-input1" class="header__popup__input" placeholder="Ваше имя">' +
                    '<input name="phone" type="number" id="swal-input2" class="header__popup__input" placeholder="Номер телефона">' +
                    '<input name="email" type="email" id="swal-input3" class="header__popup__input" placeholder="Ваша почта">',
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
                            $('#swal-input3').val()
                        ])
                    })
                },
            }).then(function () {
                let result = {};
                result["form-name"] = "default-contact-form";
                result["rus-form-name"] = `Кнопка "Позвоните мне"/"Заказать звонок" со страницы "${$('title').html()}"`;
                result.name = $('#swal-input1').val();
                result.phone = $('#swal-input2').val();
                result.email = $('#swal-input3').val();
                mainApi(result)
                    .then((res) => {
                        console.log(res);
                        if (res.ok) {
                            swal({
                                type: 'success',
                                text: 'Спасибо! Наши менеджеры свяжутся с Вами в самое ближайшее время'
                            });
                        }
                    })

            })
        })
    }
);
// --- КОНЕЦ КОНТАКТНАЯ ФОРМА СО СТРАНИЦЫ BOOKING

