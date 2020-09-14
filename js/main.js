$(document).ready(
    function () {
        $(".nav-link.button-blue__mobile, .nav-link.button-blue").click( () => {
            swal({
                title: 'Пожалуйста, укажите свои контактные данные, и мы Вам перезвоним',
                html:
                    '<input name="name" id="swal-input1" class="swal2-input" placeholder="Ваше имя">' +
                    '<input style="width: 100%" name="phone" id="swal-input2" class="swal2-input" placeholder="Номер телефона">',
                showCancelButton: true,
                confirmButtonColor: '#ff5908',
                cancelButtonColor: '#666',
                confirmButtonText: 'Далее',
                cancelButtonText: 'Отмена',
                preConfirm: function () {
                    return new Promise(function (resolve) {
                        resolve([
                            $('#swal-input1').val(),
                            $('#swal-input2').val(),
                            $('#swal-textarea1').val()
                        ])
                    })
                },
            }).then(function (result) {
                var result = {};
                result["form-name"] = "quiz-parasport-form";
                result["rus-form-name"] = "Контактная форма из шапки сайта";
                result.name = $('#swal-input1').val();
                result.phone = $('#swal-input2').val();
                $.ajax({
                    url:"http://95.181.172.100/erp/site/forms/",
                    type: "POST",
                    data: JSON.stringify(result),
                    error: function(xhr,status,error){
                        console.log(status);
                        console.log(error);
                    }
                }).done(function() {
                    Swal({type: 'success', text: 'Сообщение отправлено'});
                });
            })
        })
    }
)