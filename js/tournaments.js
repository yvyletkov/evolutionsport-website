$( function() {
  $( "#datetourn" ).datepicker();
} );


$('.dropdown-item').on('click', (event) => {
  if(event.target.textContent === 'Баскетбол'){
    console.log('basket')
  } else if (event.target.textContent === 'Единоборства') {
    console.log('fights')
  }
})