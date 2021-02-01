$(document).ready(function () {
  let showQuiz = () => {
    $(".popup-wrapper").css("display", "flex");
    $(".popup .quiz").removeClass("hidden");
    $(".popup-wrapper").removeClass("hidden");
  };
  if (!document.cookie.includes("YARIKVODILA")) {
  // if (true) {
    setTimeout(showQuiz, 8000);
  }

  $(".btn.btn_blue.advantages__order").on("click", (e) => {
    e.preventDefault();
    showQuiz();
  });
});

$(document).ready(function () {
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
            "Оставляйте свои контакты,<br/>и мы с радостью подскажем Вам наши преимущества:"
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
        $(".popup__form-wrapper").addClass("hidden"); // ПОТОМ ПЕРЕНЕСТИ В SUCCESS
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
