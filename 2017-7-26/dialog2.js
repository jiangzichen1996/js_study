/**
 * Created by 晨 on 2017/7/27.
 */
define(['jquery'],function($){
    function Dialog(settings){
        this.defaultSettings={
            width : 500,//不用加this
            height:400,
            title:'我的弹出层',
            content:''
        };
        this.$container = $('<div class="dialog-container"></div>');
        this.$mask = $('<div class="dialog-mask"></div>');
        this.$box = $('<div class="dialog-box"></div>');
        this.$title = $('<div class="dialog-title"></div>');
        this.$item = $('<div class="dialog-item"></div>');
        this.$close = $('<div class="dialog-close">[X]</div>');
        this.$content = $('<div class="dialog-content"></div>');
    }

    Dialog.prototype.open=function(){
        this.$container.append(this.$mask).append(this.$box).appendTo('body');
        this.$box.append(this.$title).append(this.$content);
        this.$title.append(this.$item).append(this.$close);
        this.$box.css({
            width: this.defaultSettings.width,
            height: this.defaultSettings.height
        });
        this.$item.html(this.defaultSettings.title                                   )
        if(this.defaultSettings.content.indexOf('.html')!=-1){
            this.$content.load(this.defaultSettings.content);
        }else{
            this.$content.html(this.defaultSettings.content);
        }
        this.$close.on('click',function(){
            this.$container.remove();
        }.bind(this));
    };




return Dialog;



});