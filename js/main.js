// КОНТАКТНАЯ ФОРМА В ХЕДЕРЕ
$(document).ready(
    function () {
        $(".nav-link.button-blue__mobile, .nav-link.button-blue").click( () => {
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
                $.ajax({
                    url: "http://95.181.172.100/erp/site/forms/",
                    type: "POST",
                    data: JSON.stringify(result),
                    error: function(xhr,status,error){
                        console.log(status);
                        console.log(error);
                    }
                }).done(function() {
                    swal({type: 'success', text: 'Спасибо! Наши менеджеры свяжутся с Вами в самое ближайшее время'});
                });
            })
        })
    }
)
// КОНЕЦ КОНТАКТНАЯ ФОРМА В ХЕДЕРЕ

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