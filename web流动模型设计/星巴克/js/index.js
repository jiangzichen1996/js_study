/**
 * Created by 晨 on 2017/8/2.
 */
require(['jquery'],function($){
    var $mask = $('#menu-mask');
    var $list = $('#menu-list');
    var $body = $('body');
    var $menu = $('#menu');
    $menu.on('click',function(){
        $list.css('width','270px');
        $('#menu-mask').css('display','block');
        $('#menu-list li').hover(function(e){
            if($(this).parent().attr('class')=='nav-top'){
                $(e.target).children('a').css('color','white');
            }else{
                $(e.target).children('a').andSelf().css('color','#b89f7a');
            }
        },function(e){
            if($(this).parent().attr('class')=='nav-top'){
                $(e.target).children('a').css('color','#b89f7a');
            }else{
                $(e.target).children('a').andSelf().css('color','white');
            }
        });
    });
    $mask.on('click',function(e){
        if(this == e.target){
            $list.css('width','0');
            $('#menu-mask').css('display','none');
        }
    });
    var lastScroll = 0;
    var $header = $('#wrapper header');
     function move () {
             if(lastScroll-$body.scrollTop()>0){
                 $header.css('height','100px');
                 $list.css('width','0');
                 $('#menu-mask').css('display','none');

             }else if(lastScroll-$body.scrollTop()<0){
                 $header.css('height','0');
                 $list.css('width','0');
                 $('#menu-mask').css('display','none');

             }
             lastScroll = $body.scrollTop();
    }

    var timer = setInterval(move,10);
    setInterval(function(){
        if($body.scrollTop()<120){
            $header.css('position','fixed');
            clearInterval(timer);
        }else{
            timer = setInterval(move,10)
        }
    },10);






});
