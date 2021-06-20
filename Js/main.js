$(document).ready(function(){

    
    $nav=$('.nav');
    $toggleCollapse=$('.toggle-collapse');

    /*****Click event on toggle event******/
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse')
    })
//hidinng and unhiding the age buttons
//$('#age_id').click(function(){
  //  $('#age-btn').fadeToggle();
//})
//owl carousel for blog

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    nav:true,
    navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')]
});

});

