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

const getEvents = async () => {
  const res = await fetch(`${BD_SERVER_URL}evo/events/modified-list`, {
    method: "GET",
  })
  if (res.status === 200) {
    dataNews = await res.json();
  }
  else console.log('error while loading events: ' + res.status)

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

}

window.addEventListener('load', getEvents)

// dataNews = [
//   {
//     date: "2020-9-25",
//     value: "Чемпионат и первенство Республики Крым по плаванию",
//     desc: "25.10.2020 - 27.10.2020г. Водно-спортивный комплекс",
//     img: "polo.jpg",
//   },
//   {
//     date: "2020-9-26",
//     value: "Чемпионат и первенство Республики Крым по плаванию",
//     desc: "25.10.2020 - 27.10.2020г. Водно-спортивный комплекс",
//     img: "polo.jpg",
//   },
//   {
//     date: "2020-9-27",
//     value: "Чемпионат и первенство Республики Крым по плаванию",
//     desc: "25.10.2020 - 27.10.2020г. Водно-спортивный комплекс",
//     img: "polo.jpg",
//   },
//   {
//     date: "2020-9-25",
//     value:
//       "Первенство Республики Крым среди юношей и девушек до 19 лет по бадминтону",
//     desc: "25.10.2020 - 27.10.2020г. Малый зал",
//     img: "badminton.jpg",
//   },
//   {
//     date: "2020-9-26",
//     value:
//       "Первенство Республики Крым среди юношей и девушек до 19 лет по бадминтону",
//     desc: "25.10.2020 - 27.10.2020г. Малый зал",
//     img: "badminton.jpg",
//   },
//   {
//     date: "2020-9-27",
//     value:
//       "Первенство Республики Крым среди юношей и девушек до 19 лет по бадминтону",
//     desc: "25.10.2020 - 27.10.2020г. Малый зал",
//     img: "badminton.jpg",
//   },
//   {
//     date: "2020-10-1",
//     value: "Первенство крыма по водному поло",
//     desc: "01.10.2020 - 04.10.2020г. Водно-спортивный комплекс",
//     img: "water-polo.jpg",
//   },
//   {
//     date: "2020-10-2",
//     value: "Первенство крыма по водному поло",
//     desc: "01.10.2020 - 04.10.2020г. водно-спортивный комплекс",
//     img: "water-polo.jpg",
//   },
//   {
//     date: "2020-10-3",
//     value: "Первенство крыма по водному поло",
//     desc: "01.10.2020 - 04.10.2020г. водно-спортивный комплекс",
//     img: "water-polo.jpg",
//   },
//   {
//     date: "2020-10-4",
//     value: "Первенство крыма по водному поло",
//     desc: "01.10.2020 - 04.10.2020г. Водно-спортивный комплекс",
//     img: "water-polo.jpg",
//   },
//   {
//     date: "2020-10-11",
//     value: "Кубок «Чёрного моря» по каратэ",
//     desc: "11.10.2020г. Физкультурно-оздоровительный комплекс",
//     img: "black-sea.jpg",
//   },
//   {
//     date: "2020-10-17",
//     value: "Открытое первенство ЦС «Эволюция»",
//     desc: "17.10.2020г. Водно-спортивный комплекс",
//     img: "water-polo.jpg",
//   },
//   {
//     date: "2020-11-13",
//     value: "Кубок Республики Крым по бадминтону",
//     desc: "13.11.2020г. Малый спортивный зал",
//     img: "badminton.jpg",
//   },
//   {
//     date: "2020-11-14",
//     value: "Кубок Республики Крым по бадминтону",
//     desc: "14.11.2020г. Малый спортивный зал",
//     img: "badminton.jpg",
//   },
//   {
//     date: "2020-11-14",
//     value: "Открытые соревнования «Первый старт» ",
//     desc: "14.11.2020г. Малый спортивный зал",
//     img: "first-start.jpg",
//   },
//   {
//     date: "2020-11-15",
//     value: "Кубок Республики Крым по бадминтону",
//     desc: "15.11.2020г. Малый спортивный зал",
//     img: "badminton.jpg",
//   },
//   {
//     date: "2020-11-12",
//     value: "Республиканские соревнования «Крымские надежды»",
//     desc: "12.11.2020г. Малый спортивный зал",
//     img: "krimskie-nad.jpg",
//   },
//   {
//     date: "2020-11-13",
//     value: "Республиканские соревнования «Крымские надежды»",
//     desc: "13.11.2020г. Малый спортивный зал",
//     img: "krimskie-nad.jpg",
//   },
//   {
//     date: "2020-11-14",
//     value: "Республиканские соревнования «Крымские надежды»",
//     desc: "14.11.2020г. Малый спортивный зал",
//     img: "krimskie-nad.jpg",
//   },
//   {
//     date: "2020-11-15",
//     value: "Республиканские соревнования «Крымские надежды»",
//     desc: "15.11.2020г. Малый спортивный зал",
//     img: "krimskie-nad.jpg",
//   },
//   {
//     date: "2020-11-16",
//     value: "Чемпионат России по регби на колясках",
//     desc: "16.10.2020г. Физкультурно-оздоровительный комплекс",
//     img: "regbi.jpg",
//   },
//   {
//     date: "2020-11-17",
//     value: "Чемпионат России по регби на колясках",
//     desc: "17.10.2020г. Физкультурно-оздоровительный комплекс",
//     img: "regbi.jpg",
//   },
//   {
//     date: "2020-11-18",
//     value: "Чемпионат России по регби на колясках",
//     desc: "18.10.2020г. Физкультурно-оздоровительный комплекс",
//     img: "regbi.jpg",
//   },
//   {
//     date: "2020-11-19",
//     value: "Чемпионат России по регби на колясках",
//     desc: "19.10.2020г. Физкультурно-оздоровительный комплекс",
//     img: "regbi.jpg",
//   },
//   {
//     date: "2020-11-20",
//     value: "Чемпионат России по регби на колясках",
//     desc: "20.10.2020г. Физкультурно-оздоровительный комплекс",
//     img: "regbi.jpg",
//   },
//   {
//     date: "2020-11-21",
//     value: "Чемпионат России по регби на колясках",
//     desc: "21.10.2020г. Физкультурно-оздоровительный комплекс",
//     img: "regbi.jpg",
//   },
//   {
//     date: "2020-11-22",
//     value: "Чемпионат России по регби на колясках",
//     desc: "22.10.2020г. Физкультурно-оздоровительный комплекс",
//     img: "regbi.jpg",
//   },
//   {
//     date: "2020-11-29",
//     value: "Первенство РК по синхронному плаванию",
//     desc: "29.11.2020г. Водно-спортивный комплекс",
//     img: "sinh-water.jpg",
//   },
//   {
//     date: "2020-12-24",
//     value: "Республиканские соревнования по плаванию «Новогодние старты»",
//     desc: "24.12.2020г. Водно-спортивный комплекс",
//     img: "new-year-start.jpg",
//   },
//   {
//     date: "2020-12-25",
//     value: "Республиканские соревнования по плаванию «Новогодние старты»",
//     desc: "25.12.2020г. Водно-спортивный комплекс",
//     img: "new-year-start.jpg",
//   },
//   {
//     date: "2020-12-26",
//     value: "Республиканские соревнования по плаванию «Новогодние старты»",
//     desc: "26.12.2020г. Водно-спортивный комплекс",
//     img: "new-year-start.jpg",
//   },
//   {
//     date: "2020-12-26",
//     value: "Открытые соревнования «Новогодний старт»",
//     desc: "26.12.2020г. Водно-спортивный комплекс",
//     img: "new-year-start.jpg",
//   },
//   {
//     date: "2020-12-27",
//     value: "Республиканские соревнования по плаванию «Новогодние старты»",
//     desc: "27.12.2020г. Водно-спортивный комплекс",
//     img: "new-year-start.jpg",
//   },
// ];

// inline

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
