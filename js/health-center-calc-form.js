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
    ];
    let selectDirectionsElement = document.getElementById("health-center-directions");
    let parentElement = document.getElementById("health-center-programs");
    function mapFunc (el) {
        let newOptionElement = document.createElement("option");
        newOptionElement.innerHTML = el.innerHTML;
        newOptionElement.setAttribute("value", el.value);
        parentElement.appendChild(newOptionElement);
    }
    function addOptionElements () {
        if (selectDirectionsElement.selectedIndex === 1) {
            rehabilitationOptions.map((el) => mapFunc(el))
        }
        else if (selectDirectionsElement.selectedIndex === 2) {
            sanatoriumOptions.map((el) => mapFunc(el))
        }
        else if (selectDirectionsElement.selectedIndex === 3) {
            parasportOptions.map((el) => mapFunc(el))
        }
    }
    addOptionElements();

    selectDirectionsElement.addEventListener("change",() => {

        document.getElementById("health-center-programs").innerHTML = "";

        addOptionElements();

    });

    $("#health-center-calc-form").submit((e) => {
        e.preventDefault();
        mainApi($('#health-center-calc-form').serializeArray())
            .then((res) => {
                console.log(res);
                if (res.ok) {

                    $(".cost-content-direction-value").html($('#health-center-directions option:selected').text());
                    $(".cost-content-program-value").html($('#health-center-programs option:selected').text());
                    $(".cost-content-duration-value").html($('#health-center-durations option:selected').text());
                    $(".cost-content-rehabilitants-value").html($("#health-center-rehabilitants").val());
                    $(".cost-content-guests-value").html($("#health-center-guests").val());

                    $("#health-center-calc-form").hide();
                    $(".cost-content").css("visibility", "visible").css("height", "unset");
                    $(".cost-content").css("display", "block");

                    $("#btn-reset").on("click", () => {
                        $(".cost-content").css("visibility", "hidden").css("height", "0");
                        $("#health-center-calc-form").show();
                        $(".cost-content").css("display", "none");
                    })
                    $("#btn-booking").on("click", () => {
                        $(".popup-wrapper-onlycontactform").css("display", "flex");
                        $(".popup-onlycontactform").removeClass("hidden");
                        $(".popup-wrapper-onlycontactform").removeClass("hidden");
                    })
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
    })

}