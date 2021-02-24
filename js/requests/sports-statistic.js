const sportsStatisticUrl = "http://erp-evo.ml:1337/statistics-sports-fees";

requestInfo(sportsStatisticUrl)
    .then((res) => {
        $("#stat-meeting").text(res[0].meeting);
        $("#stat-athletes").text(res[0].athletes);
        $("#stat-tournaments").text(res[0].tournaments);
    })
    .catch((err) => console.log(err))
