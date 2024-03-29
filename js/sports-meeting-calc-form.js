$(".price-form").submit((e) => {
  e.preventDefault();
  const data = $('.price-form').serializeArray();
  mainApi(data)
      .then(async (res) => {
    console.log(res);
        if (res.ok) {
          let data = await res.json();
          // $(".cost-content-direction-value").html();
          $(".cost-content-duration-value").html(
              `с ${$("input[name='date-from']").val()} до ${$(
                  "input[name='date-to']"
              ).val()}`
          );
          $(".cost-content-rehabilitants-value").html(
              $("input[name='athletes']").val()
          );
          $(".cost-content-guests-value").html($("input[name='trainers']").val());
          $(".cost-content-program-value").html($("").text());
          $(".cost-content-program-value").html(
              $(".input-image option:selected").text()
          );
          $(".cost-content-cost").html("от " + data.data.sum);

          $(".price-form").hide();
          $(".cost-content").css("visibility", "visible");
          $(".cost-content").css("display", "block").css("height", "276");

          $("#btn-reset").on("click", () => {
            $(".cost-content").css("visibility", "hidden").css("height", "0");
            $(".price-form")[0].reset();
            $(".price-form").show();
            $(".cost-content").css("display", "none");
          });

          $("#btn-booking").on("click", () => {
            swal({
              title:
                  '<p class="header__popup__title">Пожалуйста, укажите свои контактные данные,<br/>и мы поможем Вам забронировать выбранную программу</p>',
              html:
                  '<input name="name" id="swal-input1" class="header__popup__input" placeholder="Ваше имя">' +
                  '<input name="email" type="email" id="swal-input2" class="header__popup__input" placeholder="Ваша почта">' +
                  '<input name="phone" type="number" id="swal-input3" class="header__popup__input" placeholder="Номер телефона">',
              showCancelButton: true,
              confirmButtonColor: "#355b8e",
              cancelButtonColor: "#4a4a4a",
              confirmButtonText: '<span class="header__popup__btn">Далее</span>',
              cancelButtonText: '<span class="header__popup__btn">Закрыть</span>',
              preConfirm: function () {
                return new Promise(function (resolve) {
                  resolve([
                    $("#swal-input1").val(),
                    $("#swal-input2").val(),
                    $("#swal-input3").val(),
                    $("#swal-textarea1").val(),
                  ]);
                });
              },
            }).then(function () {
              let result = {};
              result["form-name"] = "default-contact-form";
              result[
                  "rus-form-name"
                  ] = `Контактная форма после рассчета стоимости спортсборов, спортсооружения "${$(
                  ".input-image option:selected"
              ).text()}"`;
              result.name = $("#swal-input1").val();
              result.email = $("#swal-input2").val();
              result.phone = $("#swal-input3").val();
              mainApi(result).then((res) => {
                console.log(res);
                if (res.ok) {
                  swal({
                    type: "success",
                    text: "Спасибо! Наши менеджеры свяжутся с Вами в самое ближайшее время",
                  });
                }
              });
            });
          });
        }
  })
  .catch((err) => {
      swal({
          type: "error",
          title: "Извините, забронировать программу онлайн сейчас невозможно :(",
          text: "Пожалуйста, позвоните нам по номеру 8(800)777-18-26",
      });
      console.log(err);
  });
});
