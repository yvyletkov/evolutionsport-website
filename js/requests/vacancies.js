async function requestInfo(url) {
    try {
        const res = await fetch(`https://admin.evolutionsport.ml/${url}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
        });

        if (!res.ok) {
            throw new Error(`error ${res.status}`);
        }
        return await res.json();
    } catch (err) {
        console.log(err);
    }
}

async function requestVacancy(info) {
    try {
        const res = await fetch('https://team.upro-dev.ml/forms/notify/', {
            method: "POST",
            headers: {"Content-Type": "application/json;charset=utf-8"},
            body: JSON.stringify(info),
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

function template(vacancy) {
    return (
        `<div class="vacancy-block-tabs-tab-slider-item">
            <div class="vacancy-block-tabs-tab-slider-item-info">
                <div class="row vacancy-block-tabs-tab-slider-item-info__text">
                    <div class="col-12 col-md-6">
                        <img class="mx-auto" src="https://admin.evolutionsport.ml${vacancy.file.url}" alt="">
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="vacancy-block-tabs-tab-slider-item-info__title">
                            <h3>${vacancy.title}</h3>
                        </div>
                        <p>Опыт работы: ${vacancy.exp}</p>
                        <p>Зарплата: ${vacancy.salary ? vacancy.salary : "Зарплата по результатам собеседования"}</p>
                        <p>Должностные обязанности:</p>
                        <ul>
                            ${vacancy.duties.duties ? vacancy.duties.duties.map((e) => `<li>${e}</li>`).join("") : ''}
                        </ul>
                        <p>Требования:</p>
                        <ul>
                            ${vacancy.duties.demads ? vacancy.duties.demads.map((e) => `<li>${e}</li>`).join("") : ''}
                        </ul>
                        <button class="btn btn-primary"
                                id="vacancy-feedback"
                                style="background-color:#4273b3;border-color:#4273b3">
                        Оставить резюме</button>
                    </div>
                </div>
            </div>
        </div>`
    )
}

requestInfo('vacancies')
    .then((res) => {
        res.forEach((vacancy) => {
            if (vacancy.type === "food") {
                $(template(vacancy)).appendTo('#food');
            }
            if (vacancy.type === "housekeeping") {
                $(template(vacancy)).appendTo("#housekeeping");
            }
            if (vacancy.type === "trainers") {
                $(template(vacancy)).appendTo("#trainers");
            }
        })
        $(document).on('click', '.tabs-navigation-item', function (e) {
            e.preventDefault();
            let tabContainers = $(this).closest('.tabs').find('.tabs-tab');
            tabContainers.removeClass('active');
            tabContainers.filter(this.hash).addClass('active');
            $('.tabs-navigation-item').removeClass('active');
            $(this).addClass('active');
            $('.vacancy-block-tabs-tab-slider.slick-initialized').slick('unslick');
            $('.vacancy-block-tabs-tab-slider').slick({
                arrows: false,
                dots: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            });
        });
        $(document).ready(function () {
            $('.vacancy-block-tabs-tab-slider').slick({
                arrows: false,
                dots: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            });
        });

        $(document).on('click', '.vacancy-block-tabs-tab .supaSlider-insideSliderBlock__next', function () {
            $(this).closest('.vacancy-block-tabs-tab').find('.vacancy-block-tabs-tab-slider').slick('slickNext');
        })
        $(document).on('click', '.vacancy-block-tabs-tab .supaSlider-insideSliderBlock__prev', function () {
            $(this).closest('.vacancy-block-tabs-tab').find('.vacancy-block-tabs-tab-slider').slick('slickPrev');
        })
    })
    .catch((err) => console.log(err))

$("#phone").mask("+7(999)999-9999");

$(document).on("click", "#vacancy-feedback", () => {
    $(".popup-wrapper").css("display", "flex");
})

$(document).on("click", ".popup__close-btn", () => {
    $(".popup-wrapper").css("display", "none");
});

$(".popup__form").submit((e) => {
    e.preventDefault();
    let data = {
        "form": {"url": "https://vacancies.evolutionsport.ru"},
        "inputs": $(".popup__form").serializeArray().map((e) => ({alias: e.name, value: e.value}))
    }
    console.log(data)
    requestVacancy(data)
      .then((res) => {
        console.log(res);
        if (res.ok) {
            $(".popup-wrapper").css("display", "none");
            swal({
                type: "success",
                title: "Резюме отправлено, спасибо!",
                text: "Ваше резюме отправлено в отедел кадров",
              });
            $(".popup__form").trigger("reset")
        }
    })
    .catch((err) => {
        $(".popup-wrapper").css("display", "none");
        swal({
          type: "error",
          title: "Извините, рассчет стоимости временно невозможен",
          text: "Что-то пошло не так, мы уже работаем над ошибкой",
        });
        $(".popup__form").trigger("reset")
      });
})