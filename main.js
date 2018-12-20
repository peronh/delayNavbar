$(document).ready(function() {


    $("header img.open").on("click", function() {
        $('#menu a').css('margin-left', '-789px');
        $(this).removeClass('active');
        $("header img").nextAll().addClass('active');

        $.each($("div#menu a"), function(i, el){
            setTimeout(function(){
                $(el).animate({marginLeft: '0'});
            },0 + ( i * 100 ));
        });
    });

    $("header img.close, #menu a").on("click" || window.isReload, function() {

        $('header img.active').removeClass('active');
        $("header img").prevAll().addClass('active');

        $.each($("div#menu a"), function(i, el){
            setTimeout(function(){
                $(el).animate({marginLeft: '769px'});
            },0 + ( i * 100 ));
        });
    });



});