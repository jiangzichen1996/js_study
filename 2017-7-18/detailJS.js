/**
 * Created by 晨 on 2017/7/19.
 */
$(function(){
    /*搜素框*/
    $("#inputSearch").on('focus',function(){
        if($(this).val()==this.defaultValue){//this.defaultValue  使用原生对象
            $(this).val('');
        }
    }).on('blur',function(){
        if($(this).val()==''){//this.defaultValue  使用原生对象
            $(this).val(this.defaultValue);
        }
    });
    /*hot小气球*/
    var $hot ='<span class="hot"></span>';
    $('.promoted').append($hot);
    /* 网页换肤 */
    $('#skin li').on('click',function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        var skin = $(this).attr('id');
        //cookie 的用法  $.cookie  要使用{expires：7}这种句式
        $('#cssfile').attr('href',"styles/skin/"+skin+".css");
        $.cookie('skin',skin,{expires:7});
    });
    skin = $.cookie('skin');
    $('#'+skin).addClass('selected').siblings().removeClass('selected');
    $('#cssfile').attr('href',"styles/skin/"+skin+".css");
    /*导航效果*/
    $('#nav a').hover(function(){
        $(this).next().css('display','block');
    },function(){
        $(this).next().css('display','none');
    });
    /*放大镜*/
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
