/**
 * Created by �� on 2017/7/19.
 */
$(function(){
    /*���ؿ�*/
    $("#inputSearch").on('focus',function(){
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
    /*����Ч��*/
    $('#nav a').hover(function(){
        $(this).next().css('display','block');
    },function(){
        $(this).next().css('display','none');
    });
    /*�Ŵ�*/
    $(function(){
        $('.jqzoom').jqzoom({
            zoomType: 'standard',
            lens:true,
            preloadImages: false,
            alwaysOn:false,
            zoomWidth: 340,
            zoomHeight: 340,
            xOffset:10,
            yOffset:0,
            position:'right'
        });
    });






});
