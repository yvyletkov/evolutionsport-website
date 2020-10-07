var now = new Date();

function templates(e, data) {
  return `<div class="item">
              <a href="#">
                <img class="img-fluid" src="img/news/news_sweeming.jpg" alt="Акция! Специальное предолжение на Cooper Pass"/>
              </a>
              <div class="news-details"><strong>${e}</strong><span class="news-subtitle">
                ${data}</span>
              </div>
          </div>`;
}

const dataNews = [
  {
    date: "2020-09-25",
    value:
      "Чемпионат и первенство Республики Крым по плаванию <br> Первенство Республики Крым среди юношей и девушек до 19 лет по бадминтону",
  },
  {
    date: "2020-09-26",
    value:
      "Чемпионат и первенство Республики Крым по плаванию <br> Первенство Республики Крым среди юношей и девушек до 19 лет по бадминтону",
  },
  {
    date: "2020-09-27",
    value:
      "Чемпионат и первенство Республики Крым по плаванию <br> Первенство Республики Крым среди юношей и девушек до 19 лет по бадминтону",
  },
  {
    date: "2020-10-1",
    value: "Первенство крыма по водному поло",
    desc: "01.10.2020 - 04.10.2020г.",
  },
  {
    date: "2020-10-2",
    value: "Первенство крыма по водному поло",
    desc: "01.10.2020 - 04.10.2020г.",
  },
  {
    date: "2020-10-3",
    value: "Первенство крыма по водному поло",
    desc: "01.10.2020 - 04.10.2020г.",
  },
  {
    date: "2020-10-4",
    value: "Первенство крыма по водному поло",
    desc: "01.10.2020 - 04.10.2020г.",
  },
  {
    date: "2020-10-11",
    value: "Кубок «Чёрного моря» по каратэ",
    desc: "11.10.2020г."
  },
  {
    date: "2020-10-17",
    value: "Открытое первенство ЦС «Эволюция»",
    desc: "17.10.2020г."
  },
  {
    date: "2020-11-12",
    value: "Республиканские соревнования «Крымские надежды»",
  },
  {
    date: "2020-11-13",
    value: "Кубок Республики Крым по бадминтону",
  },
  {
    date: "2020-11-13",
    value: "Республиканские соревнования «Крымские надежды»",
  },
  {
    date: "2020-11-13",
    value: "Республиканские соревнования «Крымские надежды»",
  },
  {
    date: "2020-11-13",
    value: "Республиканские соревнования «Крымские надежды»",
  },
  {
    date: "2020-11-14",
    value:
      "Кубок Республики Крым по бадминтону <br> Республиканские соревнования «Крымские надежды» <br> Открытые соревнования «Первый старт» ",
  },
  {
    date: "2020-11-15",
    value:
      "Кубок Республики Крым по бадминтону <br> Республиканские соревнования «Крымские надежды»",
  },
  {
    date: "2020-11-16",
    value: "Чемпионат России по регби на колясках",
  },
  {
    date: "2020-11-17",
    value: "Чемпионат России по регби на колясках",
  },
  {
    date: "2020-11-18",
    value: "Чемпионат России по регби на колясках",
  },
  {
    date: "2020-11-19",
    value: "Чемпионат России по регби на колясках",
  },
  {
    date: "2020-11-20",
    value: "Чемпионат России по регби на колясках",
  },
  {
    date: "2020-11-21",
    value: "Чемпионат России по регби на колясках",
  },
  {
    date: "2020-11-22",
    value: "Чемпионат России по регби на колясках",
  },
  {
    date: "2020-11-29",
    value: "Первенство РК по синхронному плаванию",
  },
  {
    date: "2020-12-24",
    value: "Республиканские соревнования по плаванию «Новогодние старты»",
  },
  {
    date: "2020-12-25",
    value: "Республиканские соревнования по плаванию «Новогодние старты»",
  },
  {
    date: "2020-12-26",
    value:
      "Республиканские соревнования по плаванию «Новогодние старты» <br> Открытые соревнования «Новогодний старт»",
  },
  {
    date: "2020-12-27",
    value: "Республиканские соревнования по плаванию «Новогодние старты»",
  },
];

var data = [
  {
    date: "2020-09-25",
    value:
      "Чемпионат и первенство Республики Крым по плаванию <br> Первенство Республики Крым среди юношей и девушек до 19 лет по бадминтону",
  },
  {
    date: "2020-09-26",
    value:
      "Чемпионат и первенство Республики Крым по плаванию <br> Первенство Республики Крым среди юношей и девушек до 19 лет по бадминтону",
  },
  {
    date: "2020-09-27",
    value:
      "Чемпионат и первенство Республики Крым по плаванию <br> Первенство Республики Крым среди юношей и девушек до 19 лет по бадминтону",
  },
  {
    date: "2020-10-01",
    value: "Первенство крыма по водному поло",
  },
  {
    date: "2020-10-02",
    value: "Первенство крыма по водному поло",
  },
  {
    date: "2020-10-03",
    value: "Первенство крыма по водному поло",
  },
  {
    date: "2020-10-04",
    value: "Первенство крыма по водному поло",
  },
  {
    date: "2020-10-11",
    value: "Кубок «Чёрного моря» по каратэ",
  },
  {
    date: "2020-10-17",
    value: "Открытое первенство ЦС «Эволюция»",
  },
  {
    date: "2020-11-12",
    value: "Республиканские соревнования «Крымские надежды»",
  },
  {
    date: "2020-11-13",
    value:
      "Кубок Республики Крым по бадминтону <br> Республиканские соревнования «Крымские надежды»",
  },
  {
    date: "2020-11-14",
    value:
      "Кубок Республики Крым по бадминтону <br> Республиканские соревнования «Крымские надежды» <br> Открытые соревнования «Первый старт» ",
  },
  {
    date: "2020-11-15",
    value:
      "Кубок Республики Крым по бадминтону <br> Республиканские соревнования «Крымские надежды»",
  },
  {
    date: "2020-11-16",
    value: "Чемпионат России по регби на колясках",
  },
  {
    date: "2020-11-17",
    value: "Чемпионат России по регби на колясках",
  },
  {
    date: "2020-11-18",
    value: "Чемпионат России по регби на колясках",
  },
  {
    date: "2020-11-19",
    value: "Чемпионат России по регби на колясках",
  },
  {
    date: "2020-11-20",
    value: "Чемпионат России по регби на колясках",
  },
  {
    date: "2020-11-21",
    value: "Чемпионат России по регби на колясках",
  },
  {
    date: "2020-11-22",
    value: "Чемпионат России по регби на колясках",
  },
  {
    date: "2020-11-29",
    value: "Первенство РК по синхронному плаванию",
  },
  {
    date: "2020-12-24",
    value: "Республиканские соревнования по плаванию «Новогодние старты»",
  },
  {
    date: "2020-12-25",
    value: "Республиканские соревнования по плаванию «Новогодние старты»",
  },
  {
    date: "2020-12-26",
    value:
      "Республиканские соревнования по плаванию «Новогодние старты» <br> Открытые соревнования «Новогодний старт»",
  },
  {
    date: "2020-12-27",
    value: "Республиканские соревнования по плаванию «Новогодние старты»",
  },
];

// inline
var $ca = $("#one").calendar({
  width: 300,
  height: 320,
  startWeek: 1,
  data: data,
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
    const month = +date.getMonth();
    date.setMonth(month + 1);
    date = date.format("yyyy-mm-dd");
    // if ($("#calendar-index-slider").length) {
    //   tns({
    //     container: "#calendar-index-slider",
    //     disable: true,
    //   });
    // }
    // const calendarSlider = tns({
    //   container: ".content-slider",
    //   disable:true,
    //   preventScrollOnTouch: false,
    // })
    console.log($("#calendar-slider .item").length);
    $("#calendar-slider").slick("removeSlide", null, null, true);
    $("#calendar-index-slider").html("");
    dataNews.map((e) => {
      // console.log(date, e.date);
      if (e.date == date) {
        // console.log(e.value, $('.news-details strong').text())

        // $("#calendar-index-slider").html(`<div id="empty"></div>`);
        // if ($("#calendar-index-slider").length === 0) {
        // $("#calendar-index-slider").css("display", "none")
        // }
        // $("#calendar-index-slider").html(template);
        $("#calendar-slider").slick("slickAdd", templates(e.value, e.desc));
        //   $("#calendar-slider").slick({
        //     infinite: true,
        //     slidesToShow: 3,
        //     slidesToScroll: 3
        // });
        // $("#calendar-slider").append(templates(e.value));

        // // $(".content-slider img").css("height", "auto");
        // if($("#calendar-index-slider .item").length > 3){
        //   const calendarSlider = tns({
        //     container: ".content-slider",
        //     disable:false,
        //     items: 1,
        //     gutter: 20,
        //     loop: true,
        //     nav: false,
        //     navPosition: "bottom",
        //     preventScrollOnTouch: false,
        //     controlsText: [
        //       '<img src="img/arrow-thin-left.png">',
        //       '<img src="img/arrow-thin-right.png">',
        //     ],
        //     responsive: {
        //       768: {
        //         items: 1,
        //       },
        //       1024: {
        //         items: 2,
        //       },
        //       1440: {
        //         items: 3,
        //       },
        //       320: {
        //         items: 1,
        //       }
        //     },
        //   });
        // } else {
        //   const calendarSlider = tns({
        //     container: ".content-slider",
        //     disable:true,
        //     preventScrollOnTouch: false,
        //   })
        // }
        console.log(e.value);
      }
    });

    // console.log("data:" + (data || "hello"));
  },
  // viewChange: function (view, y, m) {
  //   console.log(view, y, m);
  // },
});

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
