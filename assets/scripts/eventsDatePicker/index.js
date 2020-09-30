var now = new Date();
var year = now.getFullYear();
// var month = now.getMonth();
var date = now.getDate();
const monthRu = new Date().toLocaleString('ru', {       
  month: 'long',
}).toUpperCase();

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
  onSelected: function (view, date, data) {
    console.log("view:" + view);
    console.log("date:" + date);
    console.log("data:" + (data || "hello"));
  },
  viewChange: function (view, y, m) {
    console.log(view, y, m);
  },
});
console.log(now)