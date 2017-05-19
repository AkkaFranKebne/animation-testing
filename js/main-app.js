$(document).ready(function(){
    console.log('ready to party!');
    var elements  = $('.element');
    
    
    function noticeMe(ele, delay){
        ele.delay(delay).animate({
                opacity: 1 ,    
                width: "202px",
                height: "202px"
        },200).animate({
                opacity: 0.5,  
                width: "200px",
                height: "200px"
        },400);
    };
    
    noticeMe(elements.eq(0), 0);
    noticeMe(elements.eq(3), 200);
    noticeMe(elements.eq(1), 400);
    noticeMe(elements.eq(2), 600);


    elements.hover(function(){
        $(this).css('cursor','pointer');
        $(this).animate({
            opacity: 1,
            width: "202px",
            height: "202px"
        },200).animate({
            width: "200px",
            height: "200px"
        },100);
    }, function(){
        $(this).animate({
            opacity: 0.5         
        },200);
    }
    );
    
 
 //scss

    elements.on('click', function(){
        $(this).addClass('transition'); //do addClass nie da sie dolozyc callback?
        $(this).delay(1000).show(function (){
            console.log("drugi poziom");
            location.href = '1-page.html';
        });
        return false;
    });

  
   
    
});
