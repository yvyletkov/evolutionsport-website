const roomsPricesUrl = "http://erp-evo.ml:1337/resort-prices";

requestInfo(roomsPricesUrl)
    .then((res) => {
        $("#peaceful-price").text(`от ${res[0].peaceful} руб.`);
        $("#borderline-price").text(`от ${res[0].borderline} руб.`);
        $("#athletic-price").text(`от ${res[0].athletic} руб.`);
        $("#starry-price").text(`от ${res[0].starry} руб.`);
        $("#stormy").text(`от ${res[0].stormy} руб.`);
    })
    .catch((err) => console.log(err))
