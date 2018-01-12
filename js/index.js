$(document).ready(function() {

    $('#first #back').animate({marginTop:'0'},2000, function(){
        $('#frame').css({display:'block'});
    });

    $('#first #back').delay(3000).animate({marginTop:'100vh'},2000, function(){
        $('#first').css({display:'none'});
        $('#content').css({display:'block'});
        $('footer').css({display:'block'});
    });

    $('article #menu').delay(6000).animate({top:'4vw'});
    $('article #logo').delay(6000).animate({left:'4vw'},1500);
    $('#content').delay(7000).animate({opacity:'1'},1500);

    $('#menu').mouseover(function(){
        $('.select_menu').css({display:'block'});
        $('.select_menu').animate({width:'10vw', marginLeft:'45vw'});
    });

    $('#menu').mouseleave(function(){
        $('.select_menu').animate({width:'0vw', marginLeft:'50vw'},function(){
            $('.select_menu').css({display:'none'});
        });
    });

    $('#close').mouseover(function(){
        $('.select_menu').css({display:'block'});
        $('.select_menu').animate({width:'10vw', marginLeft:'45vw'});
    });

    $('#close').mouseleave(function(){
        $('.select_menu').animate({width:'0vw', marginLeft:'50vw'},function(){
            $('.select_menu').css({display:'none'});
        });
    });

    $('#menu').click(function(){

        $('.select_menu').animate({width:'0vw', marginLeft:'50vw'},function(){
            $('.select_menu').css({display:'none'});
        });        
        $('article #menu').animate({top:'-4vw'});
        $('#content').animate({opacity:'0'},1500, function(){
            $('#content').css({display:'none'});
            $('footer').css({display:'none'});
            $('#menu_panel').css({display:'block'});
            $('#menu_panel').css({opacity:'1'});
            $('#close').animate({top:'4vw'});
            $('#menu_barra').delay(800).animate({height:'60vh'}, function(){
                $('#menu_content').animate({opacity:'1'});
            });
        });

    });

    $('#close').click(function(){

        $('.select_menu').animate({width:'0vw', marginLeft:'50vw'},function(){
            $('.select_menu').css({display:'none'});
        }); 

        $('#close').animate({top:'-4vw'});
        $('#menu_content').animate({opacity:'0'}, function(){
            $('#menu_barra').animate({height:'0vh'}, function(){

                $('#menu_panel').animate({opacity:'0'},500, function(){
                    $('#menu_panel').css({display:'none'});
                    $('#content').css({display:'block'});
                    $('footer').css({display:'block'});
                    $('#content').animate({opacity:'1'},1500);
                    $('article #menu').animate({top:'4vw'});
                    $('.menu_txt').css({opacity:'0',display:'none'});   
                    $('#menu_panel nav ul li').removeClass('menu_active');

                } );           

            });
        });

    });

    $('#menu_panel nav ul li').click(function(){
        var presente = $(this).index();

        console.log(presente);

        $('#menu_panel nav ul li').removeClass('menu_active');
        $(this).addClass('menu_active');

        $('.menu_txt').animate({opacity:'0'},300,function(){
            $('.menu_txt').css({display:'none'});
            $('.menu_txt').eq(presente).css({display:'block'});
            $('.menu_txt').eq(presente).animate({opacity:'1'},500);
        });


    });

});