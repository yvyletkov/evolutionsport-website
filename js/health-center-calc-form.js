window.onload = () => {
  let rehabilitationOptions = [
    { value: "active-longevity", innerHTML: "Активное долголетие" },
    { value: "brain-injury", innerHTML: "Черепно-мозговая травма" },
    { value: "cerebral-palsy", innerHTML: "Детский церебральный паралич" },
    { value: "insult", innerHTML: "Инсульт" },
    { value: "musculoskeletal", innerHTML: "Опорно-двигательный аппарат" },
  ];
  let sanatoriumOptions = [
    { value: "antistress", innerHTML: "Антистресс" },
    { value: "childrens-health", innerHTML: "Укрепление здоровья детей" },
    { value: "easy-breathing", innerHTML: "Легкое дыхание" },
    { value: "easy-walk", innerHTML: "Легкая походка" },
    { value: "movement-is-life", innerHTML: "Движение - это жизнь" },
  ];
  let parasportOptions = [
    { value: "active-life", innerHTML: "Актив-лайф" },
    { value: "dipl-life", innerHTML: "Дипл-лайф" },
    { value: "light-sport", innerHTML: "Лайт-спорт" },
  ];
  let selectDirectionsElement = document.getElementById(
    "health-center-directions"
  );
  let parentElement = document.getElementById("health-center-programs");
  function mapFunc(el) {
    let newOptionElement = document.createElement("option");
    newOptionElement.innerHTML = el.innerHTML;
    newOptionElement.setAttribute("value", el.value);
    parentElement.appendChild(newOptionElement);
  }
  function addOptionElements() {
    if (selectDirectionsElement.selectedIndex === 1) {
      rehabilitationOptions.map((el) => mapFunc(el));
    } else if (selectDirectionsElement.selectedIndex === 2) {
      sanatoriumOptions.map((el) => mapFunc(el));
    } else if (selectDirectionsElement.selectedIndex === 3) {
      parasportOptions.map((el) => mapFunc(el));
    }
  }
  addOptionElements();

  selectDirectionsElement.addEventListener("change", () => {
    document.getElementById("health-center-programs").innerHTML = "";

    addOptionElements();
  });

  $("#health-center-calc-form").submit((e) => {
    e.preventDefault();
    mainApi($("#health-center-calc-form").serializeArray())
      .then(async (res) => {
        console.log(res);
        if (res.ok) {
          let data = await res.json();
          console.log("RES", data);

          $(".cost-content-direction-value").html(
            $("#health-center-directions option:selected").text()
          );
          $(".cost-content-program-value").html(
            $("#health-center-programs option:selected").text()
          );
          $(".cost-content-duration-value").html(
            $("#health-center-durations option:selected").text()
          );
          $(".cost-content-rehabilitants-value").html(
            $("#health-center-rehabilitants").val()
          );
          $(".cost-content-guests-value").html(
            $("#health-center-guests").val()
          );
          $(".cost-content-cost").html("от " + data.data.sum);

          $("#health-center-calc-form").hide();
          $(".cost-content")
            .css("visibility", "visible")
            .css("height", "unset");
          $(".cost-content").css("display", "block");

          $("#btn-reset").on("click", () => {
            $(".cost-content").css("visibility", "hidden").css("height", "0");
            $("#health-center-calc-form").show();
            $(".cost-content").css("display", "none");
          });
          $("#buy-credit").on("click", () => {
            tinkoff.create({
              shopId: "e891aeeb-4ce9-41d8-be57-d697cf1a07d7",
              showcaseId: "ca0e3920-a934-428b-8383-6412e18cf459",
              items: [
                {
                  name: `${$(".cost-content-direction-value").text()} : ${$(
                    ".cost-content-program-value"
                  ).text()}`,
                  price: data.data.sum,
                  quantity: 1,
                },
              ],
              sum: data.data.sum,
            });
          });
          $("#buy-012").on("click", () => {
            tinkoff.create({
              shopId: "e891aeeb-4ce9-41d8-be57-d697cf1a07d7",
              showcaseId: "ca0e3920-a934-428b-8383-6412e18cf459",
              items: [
                {
                  name: `${$(".cost-content-direction-value").text()} : ${$(
                    ".cost-content-program-value"
                  ).text()}`,
                  price: data.data.sum,
                  quantity: 1,
                },
              ],
              promoCode: "installment_0_0_12_11",
              sum: data.data.sum,
            });
          });
          $("#buy-06").on("click", () => {
            tinkoff.create({
              shopId: "e891aeeb-4ce9-41d8-be57-d697cf1a07d7",
              showcaseId: "ca0e3920-a934-428b-8383-6412e18cf459",
              items: [
                {
                  name: `${$(".cost-content-direction-value").text()} : ${$(
                    ".cost-content-program-value"
                  ).text()}`,
                  price: data.data.sum,
                  quantity: 1,
                },
              ],
              promoCode: "installment_0_0_6_6",
              sum: data.data.sum,
            });
          });
          $("#buy-04").on("click", () => {
            tinkoff.create({
              shopId: "e891aeeb-4ce9-41d8-be57-d697cf1a07d7",
              showcaseId: "ca0e3920-a934-428b-8383-6412e18cf459",
              items: [
                {
                  name: `${$(".cost-content-direction-value").text()} : ${$(
                    ".cost-content-program-value"
                  ).text()}`,
                  price: data.data.sum,
                  quantity: 1,
                },
              ],
              promoCode: "installment_0_0_4_5",
              sum: data.data.sum,
            });
          });

          $("#booking-btn").on("click", () => {
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
              confirmButtonText:
                '<span class="header__popup__btn">Далее</span>',
              cancelButtonText:
                '<span class="header__popup__btn">Закрыть</span>',
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
              ] = `Контактная форма после рассчета стоимости программы "${$(
                "#health-center-programs option:selected"
              ).text()}"`;
              result.name = $("#swal-input1").val();
              result.email = $("#swal-input2").val();
              result.phone = $("#swal-input3").val();
              mainApi(result).then((res) => {
                console.log(res);
                if (res.ok) {
                  swal({
                    type: "success",
                    text:
                      "Спасибо! Наши менеджеры свяжутся с Вами в самое ближайшее время",
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
          title:
            "Извините, забронировать программу онлайн сейчас невозможно :(",
          text: "Пожалуйста, позвоните нам по номеру 8(800)777-18-26",
        });
        console.log(err);
      });
  });
};

//ОПРОСНИК
$(document).ready(function () {
  let showQuiz = () => {
    $(".popup-wrapper").css("display", "flex");
    $(".popup .quiz").removeClass("hidden");
    $(".popup-wrapper").removeClass("hidden");
  };
  if (!document.cookie.includes("YARIKVODILA")) {
    setTimeout(showQuiz, 15000);
  }

  $(".btn.btn_blue.advantages__order").on("click", (e) => {
    e.preventDefault();
    showQuiz();
  });
});
//ОПРОСНИК КОНЕЦ
