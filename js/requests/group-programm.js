async function requestInfo(url) {
    try {
        const res = await fetch(`https://admin.evolutionsport.ml/${url}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
        });

        if (!res.ok) {
            throw new Error(`error ${res.status}`);
        }
        return await res.json();
    } catch (err) {
        console.log(err);
    }
}

requestInfo('group-programs')
    .then((res) => {
        $("#4-visits-fitness-price").text(res.four_visits_fitness);
        $("#8-visits-fitness-price").text(res.eight_visits_fitness);
        $("#12-visits-fitness-price").text(res.twelve_visits_fitness);
        $("#7-days-fitness-price").text(res.seven_days_fitness);
        $("#45-minutes-fitness-price").text(res.fourtyfive_min_fitness);
        $("#45-minutes-fitness-price-split").text(res.fourtyfive_min_fitness_split);

        $("#4-visits-yoga-price").text(res.four_visits_yoga);
        $("#8-visits-yoga-price").text(res.eight_visits_yoga);
        $("#12-visits-yoga-price").text(res.twelve_visits_yoga);
        $("#7-days-yoga-price").text(res.seven_days_yoga);
        $("#45-minutes-yoga-price").text(res.fourtyfive_minutes_yoga);
        $("#45-minutes-yoga-price-split").text(res.fourtyfive_minutes_yoga_split);
    })
    .catch((err) => console.log(err))
