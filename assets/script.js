$(document).ready(function(){
    $(".lplus").click(function(){
        var counterValue = parseInt($(".lCounterNumber").html());
        var nc = counterValue+1;
        if(counterValue>=50){
            $(".lCounterNumber").text("1");
        }else{
            $(".lCounterNumber").text(nc); 
        }
    });
    $(".lmin").click(function(){
        var counterValue = parseInt($(".lCounterNumber").html());
        var nc = counterValue-1;
        if(counterValue<=1){
            $(".lCounterNumber").text("1");
        }else{
            $(".lCounterNumber").text(nc); 
        }
    });
    $(".rPlus").click(function(){
        var counterValue = parseInt($(".rCounterNumber").html());
        var nc = counterValue+1;
        if(counterValue>=25){
            $(".rCounterNumber").text("1");
        }else{
            $(".rCounterNumber").text(nc); 
        }
    });
    $(".rMin").click(function(){
        var counterValue = parseInt($(".rCounterNumber").html());
        var nc = counterValue-1;
        if(counterValue<=1){
            $(".rCounterNumber").text("1");
        }else{
            $(".rCounterNumber").text(nc); 
        }
    });



    $(".dptPlus1").click(function(){
        var counterValue = parseInt($(".dptNight1").html());
        var nc = counterValue+1;
        if(counterValue>=10){
            $(".dptNight1").text("1");
        }else{
            $(".dptNight1").text(nc); 
        }
    });
    $(".dptMin1").click(function(){
        var counterValue = parseInt($(".dptNight1").html());
        var nc = counterValue-1;
        if(counterValue<=1){
            $(".dptNight1").text("1");
        }else{
            $(".dptNight1").text(nc); 
        }
    });
    $(".dptPlus2").click(function(){
        var counterValue = parseInt($(".dptNight2").html());
        var nc = counterValue+1;
        if(counterValue>=10){
            $(".dptNight2").text("1");
        }else{
            $(".dptNight2").text(nc); 
        }
    });
    $(".dptMin2").click(function(){
        var counterValue = parseInt($(".dptNight2").html());
        var nc = counterValue-1;
        if(counterValue<=1){
            $(".dptNight2").text("1");
        }else{
            $(".dptNight2").text(nc); 
        }
    });
    $(".dptPlus3").click(function(){
        var counterValue = parseInt($(".dptNight3").html());
        var nc = counterValue+1;
        if(counterValue>=10){
            $(".dptNight3").text("1");
        }else{
            $(".dptNight3").text(nc); 
        }
    });
    $(".dptMin3").click(function(){
        var counterValue = parseInt($(".dptNight3").html());
        var nc = counterValue-1;
        if(counterValue<=1){
            $(".dptNight3").text("1");
        }else{
            $(".dptNight3").text(nc); 
        }
    });

    $(".dptDelete1").click(function(){
        $(".dpt1").html("");
    });

    $(".dptDelete2").click(function(){
        $(".dpt2").html("");
    });

    $(".dptDelete3").click(function(){
        $(".dpt3").html("");
    });

    $(".ulc li").click(function(){
        var index = $(this).index();
        var newCityName = $(".newCityName").eq(index).text().split(",")[0];
        var code = '<section class="pt-1"><div class="row my-2 py-2 placeRow"><div class="col-sm-6 col-6"><span class="placesHeader my-auto">'+newCityName+'</span></div><div class="col-sm-2 col-2"><div class=" my-auto"><div class="row"><div class="mx-auto"><i class="fas fa-minus fnt12 placeColor dptMin4"></i> <span class="mx-2 dptNight4">3</span><i class="fas fa-plus fnt12 placeColor dptPlus4"></i></div></div></div></div><div class="col-sm-2 col-2"><div class="text-center my-auto"><i class="fas fa-exchange-alt fnt16 placeColor"></i></div></div><div class="col-sm-2 col-2"><div class="text-center my-auto"><i class="fas fa-trash-alt text-danger fnt16 dptDelete4"></i></div></div></div></section>'
        $("#city").modal('toggle');
        $(".m").append(code);
    });

    $(".dptPlus4").click(function(){
        var counterValue = parseInt($(".dptNight4").html());
        var nc = counterValue+1;
        if(counterValue>=10){
            $(".dptNight4").text("1");
        }else{
            $(".dptNight4").text(nc); 
        }
    });

    $(".confirm").click(function(){
        $("#gg").addClass("gif2");
    });

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

      if (ww < 575) {
        $('.mnthsCardTest').addClass('mnthCardBody');
        $('.mnthsCardTest').removeClass('mnthCardBody2');

        $('.mnthsCardItmTest').addClass('text-center');
        $('.mnthsCardItmTest').removeClass('TestMnth');

        $('.testMnthHead').addClass('text-secondary h4');
        $('.testMnthHead').removeClass('text-light h5');

        $('.blank').removeClass('mnthCurved2');

      } else if (ww >= 575) {
        $('.mnthsCardTest').removeClass('mnthCardBody');
        $('.mnthsCardTest').addClass('mnthCardBody2');

        $('.mnthsCardItmTest').addClass('TestMnth');
        $('.mnthsCardItmTest').removeClass('text-center');

        $('.testMnthHead').addClass('text-light h5');
        $('.testMnthHead').removeClass('text-secondary h4');

        $('.blank').addClass('mnthCurved2');
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

      // if(ww < 767 && ww > 575){
      //   $('.tab').addClass('container-fluid px-5');
      //   $('.tab').removeClass('container');
      // }
      // else{
      //   $('.tab').addClass('container');
      //   $('.tab').removeClass('container-fluid px-5');
      // }


      if (ww < 480) {
        
        $('.cardGroup').removeClass('col-md-9');
        $('.cardGroup').addClass('col-md-12');
        $('.mnthSec').removeClass('p-5');
        $('.mnthSec').addClass('p-4');
        $('.mnthGrp').addClass('row');
        $('.mnthItem').addClass('col-md-6');

        $('.planCard').addClass('col-12');
        $('.planCard').removeClass('col-6');
      } else if (ww >= 480) {
        $('.cardGroup').removeClass('col-md-12');
        $('.cardGroup').addClass('col-md-9');
        $('.mnthGrp').removeClass('row');
        $('.mnthItem').removeClass('col-md-6');
        $('.mnthSec').addClass('p-5');
        $('.mnthSec').removeClass('p-4');

        $('.planCard').addClass('col-6');
        $('.planCard').removeClass('col-12');
      };

      // if(ww < 340){
      //   $('.holidayCard').removeClass('col-sm-4');
      // }else if (ww >= 340) {
      //   $('.holidayCard').addClass('col-sm-4');

      // };


    };
    $(window).resize(function(){
      alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
});