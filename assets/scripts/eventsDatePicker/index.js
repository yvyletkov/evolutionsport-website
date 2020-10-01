var now = new Date();

var data = [
  {
    date: "2020-09-29",
    value: "Тут событие",
  },
  {
    date: "2020-09-20",
    value: "Тут событие",
  },
  {
    date: "2020-09-15",
    value: "Тут событие",
  },
  {
    date: "2020-09-30",
    value: "Тут событие",
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
  // onSelected: function (view, date, data) {
  //   console.log("view:" + view);
  //   console.log("date:" + date);
  //   console.log("data:" + (data || "hello"));
  // },
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
  if(text === -1){
    text = 11
  }
  $(".calendar-block__year span").text(monthArray[text]);
});

$("#next-month").on("click", function (event) {
  event.preventDefault();
  let text = +$(".m").text();
  if(text === 12){
    text = 0
  }
  $(".calendar-block__year span").text(monthArray[text]);
});
