requestInfo('statistics-sports-fees')
    .then((res) => {
        $("#stat-meeting").text(res[0].meeting);
        $("#stat-athletes").text(res[0].athletes);
        $("#stat-tournaments").text(res[0].tournaments);
    })
    .catch((err) => console.log(err))
