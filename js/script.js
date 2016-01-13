$(document).ready(function() {
 
  $("#owl-example").owlCarousel({items: 4,});


//счетчик до следующего полета

  $(function () {
    var austDay = new Date();           //сегодняшняя дата
    austDay = new Date(austDay.getFullYear() + 1, 0, 1);      //дата, до которой считаем
    //console.log(austDay);
    $("#defaultCountdown").countdown({until: austDay, padZeroes: true});
  
  });

});



