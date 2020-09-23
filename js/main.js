// ДАТАПИКЕР
$(".input-image.date")
    .datepicker({
        dateFormat: "mm-dd-yy",
        changeMonth: true,
        changeYear: true,
        yearRange: "1900:2100",
        autoclose: true,
    })
    .keyup(function () {
        this.value = this.value.replace(/[^\d]/g, "");
    });
//КОНЕЦ ДАТАПИКЕР