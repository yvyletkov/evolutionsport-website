async function mainApi(info) {
  try {
    const res = await fetch("http://95.181.172.100/erp/mock/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(info),
    });

    if (!res.ok) {
      throw new Error(`error ${res.status}`);
    }
    return res;
  } catch (err) {
    console.log(err);
  }
}

$(".children-form").on("submit", function (event) {
  event.preventDefault();
  const data = $(".children-form").serializeArray();
  mainApi(data)
    .then((res) => {
      if (res.ok) {
        swal({
          type: "success",
          title: 'Спасибо! Ваша заявка будет обработана',
          text: 'Наш менеджер с вами свяжется в указанное время',
        })
      }
    })
    .catch((err) => {
      swal({
        type: "error",
        title: 'Извините, ваша заявка не отправлена',
        text: 'Что-то пошло не так мы уже работаем над ошибкой'
      })
      console.log(err);
    });
});

$(".map-form").on("submit", function (event) {
  event.preventDefault();
  const data = $(".map-form").serializeArray();
  mainApi(data)
    .then((res) => {
      if (res.ok) {
        swal({
          type: "success",
          title: 'Спасибо!',
          text: 'Ваша заявка будет обработана и наш менеджер с вами свяжется',
        })
      }
    })
    .catch((err) => {
      swal({
        type: "error",
        title: 'Извините, ваша заявка не отправлена',
        text: 'Что-то пошло не так мы уже работаем над ошибкой'
      })
      console.log(err);
    });
});

$(".price-form").on("submit", function (event) {
  event.preventDefault();
  const data = $(".price-form").serializeArray();
  mainApi(data)
    .then((res) => {
      if (res.ok) {
        swal({
          type: "success",
          title: 'Спасибо!',
          text: 'Ваша заявка будет обработана и наш менеджер с вами свяжется',
        })
        this.reset();
      }
    })
    .catch((err) => {
      swal({
        type: "error",
        title: 'Извините, ваша заявка не отправлена',
        text: 'Что-то пошло не так мы уже работаем над ошибкой'
      })
      console.log(err);
    });
});
