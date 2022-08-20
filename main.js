var count1=0;
var count2=0;
var lastChild;


const circleSpinning = [
    { transform: 'rotate(0)' },
    { transform: 'rotate(10deg)' }
  ];

  const circleTiming = {
    duration: 2000,
    iterations: 1,
  }
  
  const circle = document.querySelector(".half-circle");
  
 
  
// $('.carousel-3d-controls').mdbCarousel3d();
(function() {
    var rotate;
    var back

    rotate = function() {
        return $('.card:first-child').fadeOut(400, 'swing', function() {
            return $('.card:first-child').appendTo('.cards').hide();
        }).fadeIn(400, 'swing');
    };
    back = function() {
        return(
            $(lastChild).replaceWith($('.card:nth-child(5)')),

        // $('.card:nth-child(6)').replaceWith($('.card:nth-child(5)')),
        // $('.card:nth-child(5)').replaceWith($('.card:nth-child(4)')),
        // $('.card:nth-child(4)').replaceWith($('.card:nth-child(3)')),
        // $('.card:nth-child(3)').replaceWith($('.card:nth-child(2)')),
        // $('.card:nth-child(2)').replaceWith($('.card:nth-child(1)')),
        $('.card:nth-child(1)').replaceWith($(lastChild))
        )
        // $('.card:nth-child(1)').replaceWith($('.card:nth-child(4)'))
        // replaceChild('.card:nth-child(4)'), '.card:nth-child(1)');
        // return $('.card:nth-child(4)').fadeOut(400, 'swing', function() {
        //     return $('.card:nth-child(4)').appendTo('.cards').hide();
        // }).fadeIn(400, 'swing');
    };

    $('.next').click(function() {
        return rotate();
        // return $('.card:first-child').replaceWith($('.card:nth-child(5)'))        
    });


    var y=2001;
    
$(document).ready(function(){
    $('#slidearea').bind('mousewheel', function(e){
        // console.log(e.originalEvent.wheelDelta)
        if(e.originalEvent.wheelDelta /120 > 0) {
            console.log('scrolling up !');
            circle.addEventListener('click', () => {
                console.log("this is the")
                circle.animate(circleSpinning, circleTiming);
              });
            count1++;
            if(count1==10){
                if(y==2005){
                    y=2000;
                }

                $("span").text( y+= 1);
                count1 = 0;            
                return rotate();
            }
            
        }
        else{
            console.log('scrolling down !');
            count2++;
            if(count2==10){
                if(y==2005){
                    y=2000;
                }
                $("span").text( y+= 1);
                count2 = 0;            
                return rotate();
            }
            // $("span").text( y+= 1);
            
        }
    });
});
    // $('.next').sc(function() {
    //     return rotate();
    // });
}).call(this);
// var x = 0;
// $(document).ready(function(){
//   $("slidearea").scroll(function(){
//     $("span").text( x+= 1);
//   });
// });

// var y = 0;
// var lastScrollTop = 0;
// $(document).ready(function(){
//   $(".k").scroll(function(){
//     var scroll = $(this).scrollTop();
//     console.log(scroll)
//     if (scroll > lastScrollTop){
//         // downscroll code
//         $("span").text( y+= 1);
//     } else {
//         $("span").text( y += - 1);
//     }
//     lastScrollTop = scroll;

    
//   });
// });




