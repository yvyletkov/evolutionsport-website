const start = $("input[name='date-from']");
const end = $("input[name='date-to']");
let dateStart;
let dateEnd;


start
.datepicker({
    format: "dd.mm.yyyy",
    changeMonth: true,
    autoclose: true,
})
.on('change', function(){
    end.data('datepicker').update(start.val());
    start.blur();
    end.focus();
    dateStart = +start.val().replace(/(\d{2}).(\d{2}).(\d{2})/, "$2$1$3");;
})


end.on('change', function(){
    dateEnd = +end.val().replace(/(\d{2}).(\d{2}).(\d{2})/, "$2$1$3");
    if(dateEnd < dateStart){
        end.data('datepicker').update(start.val());
    }
})
.datepicker({
    format: "dd.mm.yyyy",
    changeMonth: true,
    autoclose: true,
})
