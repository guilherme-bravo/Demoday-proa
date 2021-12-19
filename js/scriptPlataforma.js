
$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

     $('#login').click(function(){
         $('.login-form').addClass('popup');
     });

     $('.login-form form .fa-times').click(function(){
         $('.login-form').removeClass('popup');
     });

     $(window).on('load scroll',function(){

         $('#menu').removeClass('fa-times');
         $('.navbar').removeClass('nav-toggle');

        $('.login-form').removeClass('popup');

        $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let id = $(this).attr('id');
            let offset = $(this).offset().top - 200;

            if(top > offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }


        });

    });

}); 


var slides=document.querySelector('.slider-items').children;
var nextSlide=document.querySelector(".right-slide");
var prevSlide=document.querySelector(".left-slide");
var totalSlides=slides.length;
var index=0;

nextSlide.onclick=function () {
    next("next");
}
prevSlide.onclick=function () {
    next("prev");
}

function next(direction){

  if(direction=="next"){
     index++;
      if(index==totalSlides){
       index=0;
      }
  } 
  else{
          if(index==0){
           index=totalSlides-1;
          }
          else{
           index--;
          }
   }

 for(i=0;i<slides.length;i++){
         slides[i].classList.remove("active");
 }
 slides[index].classList.add("active");     

}


