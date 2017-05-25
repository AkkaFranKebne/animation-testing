$(document).ready(function(){
    
    jQuery('#ImageMap1').maphilight();
    jQuery('#test-island').maphilight();

    
    $('#test-island').maphilight({ 
        stroke: true, 
        strokeColor: 'ffffff',
        strokeWidth: 2,
        fillColor: '009DDF', 
        fillOpacity: 0.3 
    });
    
    
    /*
    mozna wstawic w area:
    
    data-maphilight='{"strokeColor":"0000ff","strokeWidth":5,"fillColor":"00ff00","fillOpacity":0.6}'>
    
    http://jsfiddle.net/k67gq/6/
    
    
    */

    
   var areas = $('area');
    
    
    
    
    
    areas.on('mouseenter', function(event){
       event.preventDefault();
       console.log("mouseenter");
        $(this).maphilight();


    });
        
    areas.on('mouseleave', function(event){
       event.preventDefault();
       console.log("mouseleave");

   });
   areas.on('click', function(event){
       event.preventDefault();
       console.log("click");
   });
   
   
    
 //-------------------end----------------------------   
});