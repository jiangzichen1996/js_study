/**
 * Created by �� on 2017/7/18.
 */
$(function(){

        /*���ؿ�*/
        $("#inputSearch").on('focus',function(){
            console.log(this.defaultValue);
            if($(this).val()==this.defaultValue){//this.defaultValue  ʹ��ԭ������
                $(this).val('');
            }
        }).on('blur',function(){
            if($(this).val()==''){//this.defaultValue  ʹ��ԭ������
                $(this).val(this.defaultValue);
            }
        });
        /*hotС����*/
    var $hot ='<span class="hot"></span>';
        $('.promoted').append($hot);
    /* �ֲ�ͼ */
    var $imgs = $('#JS_imgWrap img');
    var $a =$('#jnImageroll div a');
    var timer;
    var nowIndex = 0;
    changeImg();
    $a.on('mouseover',function(){
        nowIndex = $(this).index();
        changeImg();
    });
    function play(){
    timer = setInterval(function(){
    nowIndex++;
    if(nowIndex>$a.length-1){nowIndex=0}
    changeImg()
},2000);}
    play();
    $imgs.add($a).on('mouseover',function(){
        clearInterval(timer);
    });
    $imgs.add($a).on('mouseout',function(){
        play();
    });
    function changeImg(){
        $a.eq(nowIndex).addClass('chos').siblings().removeClass('chos');
        $imgs.eq(nowIndex).stop(false,true).fadeIn().siblings().stop(false,true).fadeOut();
    }
/*��ǩ*/
    var $jna = $('#jnNoticeInfo a');

    $jna.hover(function(e){
        var $input = '<div class="tip">';
        $(this).attr('tip',$(this).attr('title'));
        var $tip = $('.tip');
        if($tip.length==0){
        $($input).appendTo($('body')).html($(this).attr('title'));//appendTo ���� ��ǰ��Ӧ����$("��ǩ")����ʽ
        }else{
            $tip.html($(this).attr('title'));
        }
        $(this).removeAttr('title');


    },function(){
        console.log();
        var $tip = $('.tip');
        $tip.remove();
        $(this).attr('title',$(this).attr('tip'));

    });
    $jna.on('mousemove',function(e){
        var $tip = $('.tip');
        $tip.offset({
        left: e.pageX+20,
        top: e.clientY+20
    });});
/* ��ҳ���� */
    $('#skin li').on('click',function(){
        $(this).addClass('selected').siblings().removeClass('selected');
    var skin = $(this).attr('id');
        //cookie ���÷�  $.cookie  Ҫʹ��{expires��7}���־�ʽ
        $('#cssfile').attr('href',"styles/skin/"+skin+".css");
        $.cookie('skin',skin,{expires:7});
    });
    skin = $.cookie('skin');
    $('#'+skin).addClass('selected').siblings().removeClass('selected');
    $('#cssfile').attr('href',"styles/skin/"+skin+".css");
/*  �ֲ�ͼ2  */
    $("#jnBrandTab li").on('click',function(){
        $(this).addClass('chos').siblings().removeClass('chos');
        nowIndex = $(this).index();
        var $len = $("#jnBrandList li").innerWidth();//jsҪʹ��inner outerȡ�ÿ��
        $len = -$len*4*nowIndex;
        console.log();
        //animate ���� ��һ������ֱ��{�����Ϳ�����}
        $("#jnBrandList").stop().animate({
                left:$len
        },1000);
    }).eq(0).addClass('chos').siblings().removeClass('chos');












});