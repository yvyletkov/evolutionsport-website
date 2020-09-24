// ДАТАПИКЕР
// $(".date-range")
//     .datepicker({
//         dateFormat: "mm-dd-yy",
//         changeMonth: true,
//         changeYear: true,
//         yearRange: "1900:2100",
//         autoclose: true,
//     })
//     .keyup(function () {
//         this.value = this.value.replace(/[^\d]/g, "");
//     });
//КОНЕЦ ДАТАПИКЕР


const start = $("input[name='date-from']");
const end = $("input[name='date-to']");


start
.datepicker({
    format: "dd/mm/yyyy",
    changeMonth: true,
    autoclose: true,
})
.on('change', function(){
    end.data('datepicker').update(start.val());
    start.blur();
    end.focus();
})
// start.datepicker({
//     onSelect: function (fd, date) {
//         end.data('datepicker')
//                 .update('minDate', date);

//         end.focus();
//     }
// })


end.datepicker({
    format: "dd/mm/yyyy",
    startDate: start.val(),
    changeMonth: true,
    autoclose: true,

})
// $( "input[name='date-from']").datepicker({

// })