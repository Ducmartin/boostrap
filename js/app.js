$(document).ready(function () {
   $(".icon-respon-menu").click(function () {
      $('#site').toggleClass('open-respon-menu');
      $(".icon-respon-menu").toggleClass("fa-bars fa-times")
      $("#carouselExampleIndicators").toggleClass('opacity')
      return false
   })
   $(window).resize(function () {
      if ($(document).width() >= 768) {
         $('#site').removeClass('open-respon-menu')
         $(".icon-respon-menu").removeClass("fa-times").addClass("fa-bars")
      }
   })
})