$('h1').hover(function(){
    $(this).css('color','blue')
  })

  $('h1').hover(function(){
    $(this).css('color','green')
  })


  $('img').hover(function(){
    $(this).css('height','250px')
     $(this).css('width','250px')
  })

  $('.homeText1').on('click',function(){
     $('.anasayfaDiv1').css('position','relative')
     $('.anasayfaDiv1').css('left','500px')
  })

   $('.homeText2').on('click',function(){
     $('.anasayfaDiv2').css('position','relative')
     $('.anasayfaDiv2').css('left','-500px')
  })

   $('.homeText3').on('click',function(){
     $('.anasayfaDiv3').css('position','relative')
     $('.anasayfaDiv3').css('left','500px')
  })