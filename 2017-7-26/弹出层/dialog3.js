/**
 * Created by �� on 2017/7/27.
 */
define(['jquery'],function($){
    return {
      open: function(settings){
        var defaultSettings={
            width : 500,//���ü�this
            height:400,
            title:'�ҵĵ�����',
            content:''
        };
          $.extend(defaultSettings,settings);
          var html = '<div class="dialog-container">'
              +'<div class="dialog-mask"></div>'
              +'<div class="dialog-box">'
              +'<div class="dialog-title">'
              +'<div class="dialog-item">'+defaultSettings.title+'</div>'
              +'<div class="dialog-close">[x]</div>'
              +'</div><div class="dialog-content">'+defaultSettings.content+'</div>'
              +'</div></div>';

          $('body').append(html);
          $('.dialog-close').on('click',function(){
          $(this).parents().remove('.dialog-container');


      })








      }


}});