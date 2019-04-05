jQuery(document).ready(function($) {
    var alterClass = function() {
      var ww = document.body.clientWidth;
      if (ww < 263) {
        $('.padDiv').addClass('pl-0');
      } else if (ww >= 263) {
        $('.padDiv').removeClass('pl-0');
      };

      if (ww < 373) {
        $('.dayBtnP3').addClass('my-2 text-center');
      } else if (ww >= 263) {
        $('.dayBtnP3').removeClass('my-2');
      };

      if(ww < 768){
        $('.dayHead').addClass('text-center');
        $('.topSection').addClass('text-center');
        $('.topSectionEnd').removeClass('justify-content-end');
        $('.topSectionEnd').addClass('text-center justify-content-center');
        $('.task').addClass('py-3 text-center');
      }
      else if(ww >= 768){
        $('.dayHead').removeClass('text-center');
        $('.topSection').removeClass('text-center');
        $('.topSectionEnd').addClass('justify-content-end');
        $('.topSectionEnd').removeClass('text-center justify-content-center');
        $('.task').removeClass('py-3 text-left pl-0');
      }

      if (ww < 1200) {
        
        $('.dayDiv').addClass('text-center');
        $('.dayUl').addClass('list-unstyled');
        $('.dayBtn').addClass('py-2 text-center');
        $('.dayBtn').removeClass('pl-0');
        $('.tc').addClass('text-center justify-content-center');
      } else if (ww >= 1200) {
        $('.dayBtn').removeClass('py-2');
        $('.dayDiv').removeClass('text-center');
        $('.dayUl').removeClass('list-unstyled');
      };
    };
    $(window).resize(function(){
      alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
  });