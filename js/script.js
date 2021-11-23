$(document).ready(function() {

  // What we do section
    $('.design').click(function(){
      $('#text1').toggle();
      $('#image1').toggle();
    });

    $('.development').click(function(){
      $('#text2').toggle();
      $('#image2').toggle();
    });

    $('.product').click(function(){
      $('#text3').toggle();
      $('#image3').toggle();
    });

    // portfolio section
    $('#col1').hover(function(){
      $('#txt1').toggle()
      
  })
  
  $('#col2').hover(function(){
      $('#txt2').toggle()
      
  })
  
  $('#col3').hover(function(){
  $('#txt3').toggle()
      
  })
  
  $('#col4').hover(function(){
      $('#txt4').toggle()
      
  })
  
  $('#col5').hover(function(){
      $('#txt5').toggle()
      
  })
  
  $('#col6').hover(function(){
      $('#txt6').toggle()
      
  })
  
  $('#col7').hover(function(){
      $('#txt7').toggle()
      
  })
  
  $('#col8').hover(function(){
      $('#txt8').toggle()
      
  });

  // received message alert
  function myFunction(){
    document.getElementById("alert").innerHTML = "We have successfully received your message."
}

  });