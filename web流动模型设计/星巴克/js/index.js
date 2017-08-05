/**
 * Created by 晨 on 2017/8/2.
 */
require(['jquery'],function($){
    $('#menu').on('click',function(){
        $('#menu-list').css('width','270px');
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
        })


    })










});
