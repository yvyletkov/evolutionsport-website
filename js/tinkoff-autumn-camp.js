// // $(".credit-btn").on("click", (e) => {
// //   e.preventDefault();
// //   swal({
// //     title: "Выберите рассрочку или кредит",
// //     showCloseButton: true,
// //     html:
// //       '<button type="button" class="TINKOFF_BTN_YELLOW tinkoff-btn"></button>' +
// //       '<button type="button" class="TINKOFF_BTN_YELLOW tinkoff-btn" onclick="tinkoff.create({shopId: "e891aeeb-4ce9-41d8-be57-d697cf1a07d7",showcaseId: "ca0e3920-a934-428b-8383-6412e18cf459",items: [{name: "путёвка в Детский лагерь", price: 14400, quantity: 1},],sum: 14400})"></button>',
// //     preConfirm: function () {
// //         return new Promise(function (resolve) {
// //             resolve([
// //                 $('#swal-input1').val(),
// //                 $('#swal-input2').val(),
// //                 $('#swal-textarea1').val()
// //             ])
// //         })
// //     }
// //   });
// // });

// // $(".tinkoff-btn").on("click", function () {
// //   tinkoff.create({
// //     shopId: "e891aeeb-4ce9-41d8-be57-d697cf1a07d7",
// //     showcaseId: "ca0e3920-a934-428b-8383-6412e18cf459",
// //     items: [{ name: "путёвка в Детский лагерь", price: 14400, quantity: 1 }],
// //     sum: 14400,
// //   });
// // });

// $(document).ready(function() {
//     $("#close_account").on("click", function(e) {
//       var buttons = $('<div>')
//       .append(createButton('Ok', function() {
//          swal.close();
//          console.log('ok'); 
//       })).append(createButton('Later', function() {
//          swal.close();
//          console.log('Later'); 
//       })).append(createButton('Cancel', function() {
//          swal.close();
//          console.log('Cancel');
//       }));
      
//       e.preventDefault();
//       swal({
//         title: "Are you sure?",
//         html: buttons,
//         type: "warning",
//         showConfirmButton: false,
//         showCancelButton: false
//       });
//     });
//   });
  
//   function createButton(text, cb) {
    
//     return $('<button>' + text + '</button>').on('click', cb);
//   }
