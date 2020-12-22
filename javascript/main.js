//page scroll smooth
$('.page-scroll').on('click' , function(e){

    //ambil isi href
    var href = $(this).attr('href');
    //tangkap element ybs
    var elemenHref = $(href);
    //pindahkan scroll
    $('html').animate({
        scrollTop: elemenHref.offset().top - 50

    }, 900);  

    e.preventDefault();     
});


//animasi portfolio
$(window).scroll(function(){

    var wScroll = $(this).scrollTop();
    
    if(wScroll > $('video , .portfolio').offset().top - 250){
        $('video , .portfolio p').each(function(i){
            setTimeout(function(){
                $('video , .portfolio p').eq(i).addClass('muncul');
            }, 300 * (i+1));
        });
    }    
});

//$('.navbar-collapse a , .navbar-brand img').click(function(){
  //  $(".navbar-collapse , .navbar-brand").collapse('hide');
//});
    
