var now = new Date();
let dataNews = [];


function templates(e, desc, img) {
  return `<div class="item">
              <a href="#">
                <img class="img-fluid" src="${BD_SERVER_URL}${img}" alt=""/>
              </a>
              <div class="news-details"><strong>${e}</strong><span class="news-subtitle">
                ${desc}</span>
              </div>
          </div>`;
}

const monthArray = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const getEvents = async () => {
  const res = await fetch(`${BD_SERVER_URL}evo/events/modified-list`, {
    method: "GET",
  })
  if (res.status === 200) {
    dataNews = await res.json();

    var $ca = $("#one").calendar({
      width: 300,
      height: 320,
      startWeek: 1,
      data: dataNews,
      weekArray: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
      monthArray: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ],
      date: now,
      onSelected: function (view, date, data) {
        // console.log("view:" + view);
        // console.log("date:" + typeof date.format('yyyy-mm-dd'));
        // const month = +date.getMonth();
        // console.log(month)
        // if (date.getMonth() !== 11) {
        //   date.setMonth(month + 1);
        // }
        // console.log(date, date.getMonth());
        // if(date.getMonth() == 0){
        //   date.setMonth(12)
        // }
        // console.log(date.getMonth() + 1)
        // date.setMonth(month + 1)
        // console.log(date)
        date = date.format("yyyy-mm-dd");
        // console.log($("#calendar-slider .item").length);
        $("#calendar-slider").slick("removeSlide", null, null, true);
        dataNews.map((e) => {
          const formatDate = (new Date(e.date)).format("yyyy-mm-dd");
          // e.date.format("yyyy-mm-dd");
          // console.log(e.date.format("yyyy-mm-dd"))
          if (formatDate == date) {
            $("#calendar-slider").slick(
                "slickAdd",
                templates(e.value, e.desc, e.img)
            );
          }
        });
        // console.log("data:" + (data || "hello"));
      },
      // viewChange: function (view, y, m) {
      //   console.log(view, y, m);
      // },
    });

    const loadMonth = +$(".m").text() - 1;
    $(".calendar-block__year span").text(monthArray[loadMonth]);

    $("#prev-month").on("click", function (event) {
      event.preventDefault();
      let text = +$(".m").text() - 2;
      if (text === -1) {
        text = 11;
      }
      $(".calendar-block__year span").text(monthArray[text]);
    });

    $("#next-month").on("click", function (event) {
      event.preventDefault();
      let text = +$(".m").text();
      if (text === 12) {
        text = 0;
      }
      $(".calendar-block__year span").text(monthArray[text]);
    });


  }
  else console.log('error while loading events: ' + res.status)

}

window.addEventListener('load', getEvents)



