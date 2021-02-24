const healthCenterStatisticUrl = "http://erp-evo.ml:1337/stat-healths";

requestInfo(healthCenterStatisticUrl)
    .then((res) => {
        $("#stat-sanatorium_resort").text(res[0].sanatorium_resort);
        $("#stat-rehabilitation").text(res[0].rehabilitation);
        $("#stat-comeback").text(res[0].comeback);
    })
    .catch((err) => console.log(err))
