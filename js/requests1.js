const URL = "http://77.232.53.82:8051/erp/site/forms/";

//testURL = "http://77.232.53.82:8051/";
//mainURL = "http://95.181.172.100/erp/site/forms/";

function objectifyForm(formArray) {
    if (formArray["form-name"]) return formArray;

    let returnArray = {};
    for (let i = 0; i < formArray.length; i++) {
        returnArray[formArray[i]['name']] = formArray[i]['value'];
    }
    return returnArray;
}

async function mainApi(info) {
    try {
        const res = await fetch( URL, {
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

// САБМИТ ФОРМЫ РАССЧЕТА СТОИМОСТИ ЦЕНТРА ЗДОРОВЬЯ
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
// КОНЕЦ САБМИТ ФОРМЫ РАССЧЕТА СТОИМОСТИ ЦЕНТРА ЗДОРОВЬЯ


// ФОРМА ЗАЯВКИ ЦЕНТРА ЗДОРОВЬЯ
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
// КОНЕЦ ФОРМА ЗАЯВКИ ЦЕНТРА ЗДОРОВЬЯ


function getAndShowPopUpNewProgram() {
    let iframeEl = document.createElement("iframe");
    iframeEl.src = 'http://95.181.172.100/erp/site/all-pages-quiz/';
    iframeEl.style.cssText = "width: 100%; height: 100%; position: fixed; top:0; right: 0; z-index: 1";
    document.getElementsByTagName("body")[0].appendChild(iframeEl);
};
// setTimeout(getAndShowPopUpNewProgram,0);






