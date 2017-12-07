$.noConflict();

(function($) {

  $(document).ready(function(){

    $(function(){
      $('.slideshow img:gt(0)').hide();
      setInterval(function(){
        $('.slideshow :first-child').hide()
          .next('img').fadeIn(1000)
          .end().appendTo('.slideshow');},
      5500);
    });

  });

})(jQuery);
