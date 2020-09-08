window.onload = () => {
    let rehabilitationOptions = [
        {value: "active-longevity", innerHTML: "Активное долголетие"},
        {value: "brain-injury", innerHTML: "Черепно-мозговая травма"},
        {value: "cerebral-palsy", innerHTML: "Детский церебральный паралич"},
        {value: "insult", innerHTML: "Инсульт"},
        {value: "musculoskeletal", innerHTML: "Опорно-двигательный аппарат"},
    ];
    let sanatoriumOptions = [
        {value: "antistress", innerHTML: "Антистресс"},
        {value: "childrens-health", innerHTML: "Укрепление здоровья детей"},
        {value: "easy-breathing", innerHTML: "Легкое дыхание"},
        {value: "easy-walk", innerHTML: "Легкая походка"},
        {value: "movement-is-life", innerHTML: "Движение - это жизнь"},
    ];
    let parasportOptions = [
        {value: "active-life", innerHTML: "Актив-лайф"},
        {value: "dipl-life", innerHTML: "Дипл-лайф"},
        {value: "light-sport", innerHTML: "Лайт-спорт"}
    ]
    let selectDirectionsElement = document.getElementById("health-center-directions");

    selectDirectionsElement.addEventListener("change",() => {

        let parentElement = document.getElementById("health-center-programs");
        document.getElementById("health-center-programs").innerHTML = "";

        if (selectDirectionsElement.selectedIndex == 1) {
            rehabilitationOptions.map((el) => {
                let newOptionElement = document.createElement("option");
                newOptionElement.innerHTML = el.innerHTML;
                newOptionElement.setAttribute("value", el.value);
                parentElement.appendChild(newOptionElement);
            })
        }

        else if (selectDirectionsElement.selectedIndex == 2) {
            sanatoriumOptions.map((el) => {
                let newOptionElement = document.createElement("option");
                newOptionElement.innerHTML = el.innerHTML;
                newOptionElement.setAttribute("value", el.value);
                parentElement.appendChild(newOptionElement);
            })
        }

        else if (selectDirectionsElement.selectedIndex == 3) {
            parasportOptions.map((el) => {
                let newOptionElement = document.createElement("option");
                newOptionElement.innerHTML = el.innerHTML;
                newOptionElement.setAttribute("value", el.value);
                parentElement.appendChild(newOptionElement);
            })
        }

    });

    $("#health-center-calc-form").submit((e) => {
        e.preventDefault();
        $.ajax({
            url: "http://95.181.172.100/erp/mock/",
            type: "POST",
            data: $('#health-center-calc-form').serializeArray(),
            success: function (response) {
                console.log("RESPONSE:", response);
                $(".popup__form-wrapper").addClass("hidden") // ПОТОМ ПЕРЕНЕСТИ В SUCCESS
                $(".popup__content p").html("<div class='thanks-content'>Спасибо</div><span>Наш менеджер свяжется с Вами по указанному телефону в самое ближайшее время</span>");
                $(".popup__btn").html("Вернуться к сайту");
                $(".popup__btn").removeClass("hidden");
                $(".popup__btn").click(function () {
                    $(".popup").addClass("hidden");
                    $(".popup-wrapper").addClass("hidden");
                });
            },
            error: function (response) {
                console.log("ОШИБКА", response)
            }
        });
    })

}