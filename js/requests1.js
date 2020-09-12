function objectifyForm(formArray) {

  let returnArray = {};
  for (let i = 0; i < formArray.length; i++){
    returnArray[formArray[i]['name']] = formArray[i]['value'];
  }
  return returnArray;
}

async function mainApi(info) {
  try {
    const res = await fetch("http://95.181.172.100/erp/site/forms/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(objectifyForm(info)),
    });

    if (!res.ok) {
      throw new Error(`error ${res.status}`);
    }
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
}

$("#health-center-bid-form").on("submit", function (event) {
  event.preventDefault();
  const data = $("#health-center-bid-form").serializeArray();
  mainApi(data)
    .then((res) => {
      if (res.ok) {
        swal({
          type: "success",
          title: "Спасибо! Ваша заявка будет обработана",
          text: "Наш менеджер с вами свяжется в ближайшее время",
        });
      }
    })
    .catch((err) => {
      swal({
        type: "error",
        title: "Извините, ваша заявка не отправлена",
        text: "Что-то пошло не так, мы уже работаем над ошибкой",
      });
      console.log(err);
    });
});

