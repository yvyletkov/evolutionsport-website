requestInfo('stat-children')
    .then((res) => {
        $("#stat-children").text(res[0].children);
        $("#stat-quests").text(res[0].quests);
        $("#stat-comeback").text(res[0].comeback);
    })
    .catch((err) => console.log(err))
