// $(".price-form").on("submit", function (event) {
//     event.preventDefault();
//     swal({
//         type: "error",
//         title: "Извините, ваша заявка не отправлена",
//         text: "Что-то пошло не так мы уже работаем над ошибкой",
//       });
// 
// import mainApi from './requests';

// mainApi({name:'1', value:'2'})
// .then((data) => {
//     console.log(data)
// })
// $('.tarifes-list-item__btn').on('click', function(event){
//     event.preventDefault();
//     const childNum = $("#child-num").text();
//     const daysNum = $("#days-num").text();
//     const sum = +$("#new__price-first").text().match(/\d+/g).join("");
//     swal({
//         title: `Цена составит ${childNum * sum * daysNum} рублей`,
//         html:
//           '<p>Введите ваше имя</p>' +
//           '<input type="email" id="swal-input1" class="swal2-input">' +
//           '<p>Введите номер телефона</p>' +
//           '<input type="tel" id="swal-input2" class="swal2-input">' ,
//         focusConfirm: false,
//         showCancelButton: true,
//         confirmButtonColor: '#ff5908',
//         cancelButtonColor: '#666',
//         confirmButtonText: 'Забронировать',
//         cancelButtonText: 'Отмена',
//         inputValidator: (value) => {
//             return !value && 'You need to write something!'
//           }
        // preConfirm: () => {
        //   return [
        //     document.getElementById('swal-input1').value,
        //     document.getElementById('swal-input2').value
        //   ]
        // }
      // })
    // swal({
    //     type: 'warning',
    //     title: 'Письмо директору',
    //     html:
    //       '<input name="name" id="swal-input1" class="swal2-input" placeholder="Ваше имя">' +
    //       '<input name="email" id="swal-input2" class="swal2-input" placeholder="Email для ответа">' +
    //       '<textarea name="text" id="swal-textarea1" class="swal2-textarea" placeholder="Введите текст сообщения..." style="display: flex;"></textarea>', 
    //     showCancelButton: true,
    //     confirmButtonColor: '#ff5908',
    //     cancelButtonColor: '#666',
    //     confirmButtonText: 'Далее',
    //     cancelButtonText: 'Отмена',
    //     preConfirm: function () {
    //       return new Promise(function (resolve) {
    //         resolve([
    //           $('#swal-input1').val(),
    //           $('#swal-input2').val(),
    //           $('#swal-textarea1').val()
    //         ])
    //       })
    //     },                    
    //   }).then(function (result) {
    //   var result = {};
    //   result.name = $('#swal-input1').val();
    //   result.email = $('#swal-input2').val(); 
    //   result.text = $('#swal-textarea1').val();         
    //   const res = fetch("http://95.181.172.100/erp/mock/", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json;charset=utf-8",
    //     },
    //     body: JSON.stringify(result),
    //   });
  
    //   if (!res.ok) {
    //     throw new Error(`error ${res.status}`);
    //   }
    //   return res;
    // })

// })
async function mainApi(info) {
  try {
    const res = await fetch("http://95.181.172.100/erp/site/forms/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(info),
    });

    if (!res.ok) {
      throw new Error(`error ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    console.log(err);
  }
}

$(document).on("click", ".tarifes-list-item-row__minus", function () {
  var num = +$(this).next(".tarifes-list-item-row__item").html();
  if (num == 1) {
    return false;
  }
  num--;
  $(this).next(".tarifes-list-item-row__item").html(num.toString());
  if (num <= 2) {
    const sum = +$("#new__price-first").text().match(/\d+/g).join("");
    const oldSum = +$(".tarifes-list-item-prices__old")
      .text()
      .match(/\d+/g)
      .join("");
    $("#tarifes-item-first").addClass("tarifes-row-item_disabled");
    if ($("#tarifes-item-first").hasClass("tarifes-row-item_active")) {
      $("#tarifes-item-first").removeClass("tarifes-row-item_active");
      $(".tarifes-list-item-prices__old").removeClass("active");
      document.querySelector(
        ".tarifes-list-item-prices__new"
      ).textContent = `${sum + oldSum * 0.05} руб`;
    }
  }
});$(document).on("click", ".tarifes-list-item-row__minus", function (event) {
  var num = +$(this).next(".tarifes-list-item-row__item").html();
  if (num == 1) {
    return false;
  }
  num--;
  $(this).next(".tarifes-list-item-row__item").html(num.toString());
  if (num < 2) {
    const sum = +$("#new__price-first").text().match(/\d+/g).join("");
    const oldSum = +$(".tarifes-list-item-prices__old")
      .text()
      .match(/\d+/g)
      .join("");
    $("#tarifes-item-first").addClass("tarifes-row-item_disabled");
    if ($("#tarifes-item-first").hasClass("tarifes-row-item_active")) {
      $("#tarifes-item-first").removeClass("tarifes-row-item_active");
      $(".tarifes-list-item-prices__old").removeClass("active");
      document.querySelector(
        ".tarifes-list-item-prices__new"
      ).textContent = `${sum + oldSum * 0.05} руб`;
    }
  }
  event.preventDefault();
  let obj = {};
  if ($("p").is(".tarifes-list-item-row__item")) {
    const childNum = $("#child-num").text();
    const daysNum = $("#days-num").text();
    obj = {
      "form-name": "autumn-camp-day",
      price: 1100,
      "count-children": childNum,
      "count-days": daysNum,
    };
  } else {
    obj = {
      "form-name": "autumn-camp",
      price: 1100,
    };
  }
  console.log(obj);
  mainApi(obj)
    .then((res) => {
      console.log(res);
      document.querySelector(".tarifes-list-item-prices__new").textContent = `${res.data.sum} руб`
    })
    .catch((err) => {
      console.log(err);
    });
});

$(document).on("click", ".tarifes-list-item-row__plus", function (event) {
  var num = +$(this).prev(".tarifes-list-item-row__item").html();
  if (num == 20) {
    return false;
  }
  num++;
  $(this).prev(".tarifes-list-item-row__item").html(num.toString());
  if (num >= 2) {
    $("#tarifes-item-first").removeClass("tarifes-row-item_disabled");
  }
  event.preventDefault();
  let obj = {};
  if ($("p").is(".tarifes-list-item-row__item")) {
    const childNum = $("#child-num").text();
    const daysNum = $("#days-num").text();
    obj = {
      "form-name": "autumn-camp-day",
      price: 1100,
      "count-children": childNum,
      "count-days": daysNum,
    };
  } else {
    obj = {
      "form-name": "autumn-camp",
      price: 1100,
    };
  }
  console.log(obj);
  mainApi(obj)
    .then((res) => {
      console.log(res.data.sum);
      document.querySelector(".tarifes-list-item-prices__new").textContent = `${res.data.sum} руб`
    })
    .catch((err) => {
      console.log(err);
    });
});