//   let aboutSet = $("aboutSet").offset().top;
  

 

  $(document).ready(function(){

    // var typed = new Typed('.Maro', {
      // Waits 1000ms after typing "First"
    //   strings: ['Marwan Essam', 'Web Devolober'],
    //   typeSpeed:500,
    // });

    

  let AboutOffset = $("#About").offset().top;

  $(window).scroll(function () {
      let wScroll = $(window).scrollTop();
      if (wScroll > AboutOffset -50){
          $('#Nav-Scroll').css("backgroundColor" , "black")
          $('#Nav-Scroll').addClass("pad")
          $('#btnUp').fadeIn(500)
          
      }else{
        $('#Nav-Scroll').css("backgroundColor" , "transparent")
        $('#Nav-Scroll').removeClass("pad")
        $('#btnUp').fadeOut(50)
        
      }
  })

  $("#btnUp").click(function () {
      $("body,html").animate({scrollTop:0}, 1000)
      
  })

  


$("a[href^='#']").click (function (e) {
    let aHref = e.target.getAttribute('href');
    console.log(aHref);
    let sectionOffset= $(aHref).offset().top;
    $("body,html").animate({scrollTop: sectionOffset}, 1000)
    
    
});


$(document).ready(function(){
      $("#loading .spinner").fadeOut(10 , ()=>{
        $("#loading .spinner").parent().fadeOut(10 , ()=>{
          $("#loading").remove();
          $("body").css("overflow-y" , "auto")
        })
      });
})




  $("#setting").click(function () {
    $(".color").toggle(); 
  });

    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10
    });

    particlesJS.load('particles-js', 'js/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });

  });