$(document).ready(function () {

    $(`   
        <div class="popup">
            <div class="popup__header">
                <div class="popup__close-btn"><span>Скрыть</span>×</div>
            </div>
            <div class="popup__content">
                <p>Проходили ли вы у нас спортивные сборы?</p>
            </div>
            <div class="popup__checkboxes-wrapper">
                <input name="form-name" value="Parasport quiz" type="hidden">
                <input class="popup-checkbox" id="yes-checkbox" type="radio" name="answer">
                <label for="yes-checkbox">Да, проходили</label>
                <input class="popup-checkbox" id="no-checkbox" type="radio" name="answer">
                <label for="no-checkbox">Нет, но хотим пройти</label>
            </div>
            <div class="popup__form-wrapper hidden">
<!--                <form class="popup__form">-->
<!--                    <input type="hidden" name="form-name" value="default-contact-form">-->
<!--                    <input type="hidden" name="rus-form-name" value="Опросник на странице 'Детский осенний лагерь'">-->
<!--                    <input required class="popup__form__input" placeholder="Ваше имя*" id="name" name="name"-->
<!--                           type="text">-->
<!--                    <input required class="popup__form__input" placeholder="Ваш телефон*" name="phone" type="tel"-->
<!--                           id="phone">-->
<!--                    <input class="popup__form__input" placeholder="Ваш Email" id="email" name="email" type="email">-->
<!--                    <button class="popup__btn_submit">Отправить</button>-->
<!--                    <span class="popup__form__footer-text">*поля, обязательные для заполнения</span>-->
<!--                </form>-->
            <div class="d-flex align-items-center justify-content-center">
                <a class="whapp-icon mb-5" target="_blank" href="https://wa.link/l4vna1">
                    <img style="width: 70px" class="contact-us__icon mx-3 mx-lg-0 my-lg-3" src="../img/icons/whatsapp.svg"/>
                </a>
            </div>
            </div>
            <div class="popup__btn">Далее</div>
        </div>
    `).appendTo('.popup-wrapper')

    $('.whapp-icon').hover(function () {
            $(this).css({filter: 'brightness(90%)', transition: 'all 300ms'});
        },
        function () {
            $(this).css({filter: 'none'});
        })

    $(".popup__btn").on('click', function () {
        $(".popup__btn").off("click");

        if ($("#yes-checkbox").prop("checked")) {
            $(".popup__content p").html(
                "Мы рады что Вы снова с нами! Хотите узнать цены?"
            );
            $("#yes-checkbox + label").html("Да, подскажите");
            $("#no-checkbox + label").html("Нет, не хочу знать");
            $("#yes-checkbox").prop("checked", false);

            $(".popup__btn").click(function () {
                if ($("#yes-checkbox").prop("checked")) {
                    $(".popup__checkboxes-wrapper").addClass("hidden");
                    $(".popup__btn").addClass("hidden");
                    $(".popup__form-wrapper").removeClass("hidden");
                    $(".popup__content p").html(
                        "Если у Вас остались вопросы,<br/>Вы можете задать их нашему менеджеру в чате:"
                    );
                } else {
                    $(".popup__content p").html(
                        "Это бесплатно и займет буквально пару минут,<br/>разрешите помочь Вам в выборе?"
                    );
                    $("#yes-checkbox + label").html("Да, давайте");
                    $("#no-checkbox + label").html("Нет, спасибо");
                    $("#no-checkbox").prop("checked", false);

                    $("#no-checkbox").click(() => {
                        $(".popup__btn").html("Закрыть");
                        $(".popup__btn").click(function () {
                            $(".popup").addClass("hidden");
                            $(".popup-wrapper").addClass("hidden");
                        });
                    });
                    $("#yes-checkbox").click(() => {
                        $(".popup__btn").html("Далее");
                        $(".popup__btn").off("click");
                        $(".popup__btn").click(function () {
                            $(".popup__checkboxes-wrapper").addClass("hidden");
                            $(".popup__btn").addClass("hidden");
                            $(".popup__form-wrapper").removeClass("hidden");
                            $(".popup__content p").html(
                                "Оставляйте свои контакты,<br/>и мы с радостью поможем в выборе:"
                            );
                        });
                    });
                }
            });
        } else {
            $("#no-checkbox").prop("checked", false);

            $(".popup__content p").html(
                "Мы рады что Вы выбрали нас! Хотите узнать цены?"
            );
            $("#yes-checkbox + label").html("Да, подскажите");
            $("#no-checkbox + label").html("Нет, не хочу знать");

            $(".popup__btn").click(function () {
                if ($("#yes-checkbox").prop("checked")) {
                    $(".popup__checkboxes-wrapper").addClass("hidden");
                    $(".popup__btn").addClass("hidden");
                    $(".popup__form-wrapper").removeClass("hidden");
                    $(".popup__content p").html(
                        "Оставляйте свои контакты,<br/>и мы с радостью проконсультируем Вас:"
                    );
                } else {
                    $(".popup__content p").html(
                        "Это бесплатно и займет несколько минут,<br/>разрешите помочь Вам в выборе?"
                    );
                    $("#yes-checkbox + label").html("Да, давайте");
                    $("#no-checkbox + label").html("Нет, спасибо");
                    $("#no-checkbox").prop("checked", false);

                    $("#no-checkbox").click(() => {
                        $(".popup__btn").html("Закрыть");
                        $(".popup__btn").click(function () {
                            $(".popup").addClass("hidden");
                            $(".popup-wrapper").addClass("hidden");
                        });
                    });
                    $("#yes-checkbox").click(() => {
                        $(".popup__btn").html("Далее");
                        $(".popup__btn").off("click");
                        $(".popup__btn").click(function () {
                            $(".popup__checkboxes-wrapper").addClass("hidden");
                            $(".popup__btn").addClass("hidden");
                            $(".popup__form-wrapper").removeClass("hidden");
                            $(".popup__content p").html(
                                "Оставляйте свои контакты,<br/>и мы с радостью поможем в выборе:"
                            );
                        });
                    });
                }
            });
        }
    });

    $(".popup__close-btn").click(function () {
        $(".popup .quiz").addClass("hidden");
        $(".popup-wrapper").addClass("hidden");
        document.cookie = 'YARIKVODILA=YARIKVODILA;max-age=2600';
    });

    $(".popup__form").submit((e) => {
        e.preventDefault();
        mainApi($(".popup__form").serializeArray())
            .then((res) => {
                console.log(res);
                if (res.ok) {
                    $(".popup__form-wrapper").addClass("hidden");
                    $(".popup__content p").html(
                        "<div class='thanks-content'>Спасибо</div><span>Наш менеджер свяжется с Вами по указанному телефону в самое ближайшее время</span>"
                    );
                    $(".popup__btn").html("Вернуться к сайту");
                    $(".popup__btn").removeClass("hidden");
                    $(".popup__btn").click(function () {
                        $(".popup").addClass("hidden");
                        $(".popup-wrapper").addClass("hidden");
                        $(".btn.btn_blue.advantages__order").css("display", "none");
                    });
                    document.cookie = "YARIKVODILA=YARIKVODILA;max-age=2600";
                }
            })
            .catch((err) => {
                swal({
                    type: "error",
                    title: "Извините, рассчет стоимости временно невозможен",
                    text: "Что-то пошло не так, мы уже работаем над ошибкой",
                });
                console.log(err);
            });
    });

    let showQuiz = () => {
        $(".popup-wrapper").css("display", "flex");
        $(".popup .quiz").removeClass("hidden");
        $(".popup-wrapper").removeClass("hidden");
    };
    // if (!document.cookie.includes("YARIKVODILA")) {
    if (true) {
        setTimeout(showQuiz, 2000);
    }

    $(".btn.btn_blue.advantages__order").on("click", (e) => {
        e.preventDefault();
        showQuiz();
    });
});


