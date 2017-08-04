/**
 * Created by ³¿ on 2017/7/29.
 */
define(['jquery'],function($){
    function Car(settings){
        this.defaultSettings = {
            selector:document.body,
            imgArr:[],
            speed:500,
            buttonStyle:'square',
            arrowsPos:'bottom'
        };
        $.extend(this.defaultSettings,settings);
        this.$container = $('<div class="carousel-container"></div>');
        this.$imgs = $('<div class="carousel-imgs"></div>');
        this.$nav = $('<ul class="carousel-nav"></ul>');
        this.$arrows = $('<div class="carousel-arrows"></div>');
        this.$left = $('<div class="carousel-left">&lt;</div>');
        this.$right = $('<div class="carousel-right">&gt;</div>');
    }
    Car.prototype.set = function(){
        this.nowIndex = 0;
        $(this.$container).addClass("carousel-container").append(this.$imgs).append(this.$nav).append(this.$arrows).appendTo($(this.defaultSettings.selector));
        for(var i = 0;i<this.defaultSettings.imgArr.length;i++){
        $(this.$imgs).append('<img src='+ this.defaultSettings.imgArr[i] +' alt=""/>');
        $(this.$nav).append('<li>'+(i+1)+'</li>');
        }
        $(this.$arrows).append(this.$left).append(this.$right);
        var that = this;
        that.$left.add(that.$right).addClass('bottom');
        console.log(that.nowIndex);
        var $li = that.$nav.children();
        changeImg();
        $li.on('mouseover',function(){
            that.nowIndex= $(this).index();
            changeImg();
        });
        that.$left.add(that.$right).on('click',function(){
            if($(this).attr('class').indexOf('carousel-left')!=-1){
                that.nowIndex--;
                if(that.nowIndex<0){
                    that.nowIndex = $li.length-1;
                }
            }else{
                that.nowIndex++;
                if(that.nowIndex==$li.length){
                    that.nowIndex = 0;
                }
            }
            changeImg();
        });
        play();
        this.$container.hover(function(){
            clearInterval(that.timer);
        },function(){
            play();
        });

        function play(){
            that.timer = setInterval(function(){
                that.$right.trigger('click');
            },that.defaultSettings.speed);
        }

        function changeImg(){
            $li.eq(that.nowIndex).addClass('selected').siblings().removeClass('selected');
            that.$imgs.children().eq(that.nowIndex).addClass('selected').siblings().removeClass('selected');
        }

    };







return Car;
});