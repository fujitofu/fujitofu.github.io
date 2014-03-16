/*
* How to detect browser width
*/
$(window).ready(function() {
    var wi = $(window).width();  
    var hi = $(window).height(); 
    $("p.testp").text('Initial screen width is currently: ' + wi + 'px.');
    $("p.testb").text('Initial screen height is currently: ' + hi + 'px.');       
          
          
    $('#image').css('width', '100%');
    $('#image').css('height', '100%');
    
    $('#mid').css('height', '50%');
    $('#image').css('width', '100%');
    
    $('#imagehold').css('width', '100%');
    $('#imagehold').css('height', '100%');

    $('.darkhold').css('width', '100%');
    $('.darkhold').css('height', '100%');
    
    $('#image2').css('width', '90%');
    $('#image2').css('height', '90%');
 
    $('#image3').css('width', '90%');
    $('#image3').css('height', '90%');
    
    $('#image4').css('width', '90%');
    $('#image4').css('height', '90%');
 
    $('#image5').css('width', '90%');
    $('#image5').css('height', '90%');
    
    $('#image6').css('width', '90%');
    $('#image6').css('height', '90%');
 
    $('#image7').css('width', '90%');
    $('#image7').css('height', '90%');
    
    $('#image8').css('width', '90%');
    $('#image8').css('height', '90%');
 
    $('#image9').css('width', '90%');
    $('#image9').css('height', '90%');
    
    $('#image10').css('width', '90%');
    $('#image10').css('height', '90%');
 
    $('#image11').css('width', '90%');
    $('#image11').css('height', '90%');
    
    $('#image12').css('width', '90%');
    $('#image12').css('height', '90%');

    $('#blur').css('width', '100%');
    $('#blur').css('height', '100%');
    

    $(window).resize(function() {
        var wi = $(window).width();
        var hi = $(window).height();
        
        $('#image').css('width', '100%');
        $('#image').css('height', '100%');
        
        $('#imagehold').css('width', '100%');
        $('#imagehold').css('height', '100%');

        $('.darkhold').css('width', '100%');
        $('.darkhold').css('height', '100%');

        $('#image2').css('width', '90%');
        $('#image2').css('height', '90%');

        $('#image3').css('width', '90%');
        $('#image3').css('height', '90%');

        $('#image4').css('width', '90%');
        $('#image4').css('height', '90%');

        $('#image5').css('width', '90%');
        $('#image5').css('height', '90%');

        $('#image6').css('width', '90%');
        $('#image6').css('height', '90%');

        $('#image7').css('width', '90%');
        $('#image7').css('height', '90%');

        $('#image8').css('width', '90%');
        $('#image8').css('height', '90%');

        $('#image9').css('width', '90%');
        $('#image9').css('height', '90%');

        $('#image10').css('width', '90%');
        $('#image10').css('height', '90%');

        $('#image11').css('width', '90%');
        $('#image11').css('height', '90%');

        $('#image12').css('width', '90%');
        $('#image12').css('height', '90%');

        $('#blur').css('width', '100%');
        $('#blur').css('height', '100%');

        if (wi <= 480){
            $("p.testp").text('Screen width is less than or equal to 480px. Width is currently: ' + wi + 'px. Height is currently: ' + hi + 'px.');
            }
        else if (wi <= 767){
            $("p.testp").text('Screen width is between 481px and 767px. Width is currently: ' + wi + 'px.'); 
            }
        else if (wi <= 980){
            $("p.testp").text('Screen width is between 768px and 980px. Width is currently: ' + wi + 'px.');
            }
        else if (wi <= 1200){
            $("p.testp").text('Screen width is between 981px and 1199px. Width is currently: ' + wi + 'px.');
            }
        else {
            $("p.testp").text('Screen width is greater than 1200px. Width is currently: ' + wi + 'px.');
            }
    });            
});