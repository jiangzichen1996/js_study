/**
 * Created by 晨 on 2017/7/13.
 */
/*function $(selector, context) {
    context = context || document;
    switch (selector.charAt(0)){
        case '#'://charAt应该从0开始  选择结构使用switch switch结构选择要加:
            return [document.getElementById(selector.substring(1))];//统一使用数组的形式
            break;
        case'.':
        return context.getElementsByClassName(selector.substring(1));
        default :
        return context.getElementsByTagName(selector);

}
}*/        //'#div1'  '.class' 'li'tagName
//function getByClass(className, context) {
//    context = context||document;//直接按照TagName查找，不通过getByclassName
//        var arr = context.getElementsByTagName('*');
//        var aClass = [];
//        var bb =new RegExp("\\b"+className+"\\b");//不能直接使用RegExp 要用new对象的方式 要使用双反斜杠使"\"转义
//        for(var i=0; i<arr.length;i++){
//            if(bb.test(arr[i].className)){
//                aClass.push(arr[i]);//直接返回arr[i]而不是arr[i].className
//            }
//        }
//        return aClass;
//
//}

function getByClass(className,context){
    context = context || document;
    var arr = [];
    var aa = context.getElementsByTagName('*');
    var bb = new RegExp('\\b'+className+'\\b');
    for(var i=0;i<aa.length;i++)
    {
        if(bb.test(aa[i].className)){
            arr.push(aa[i]);
        }
    }
    return arr;
}

function next(elem) {
    do{
        elem=elem&&elem.nextSibling;
    }while(elem&&elem.nodeType!=1); //当节点类型不为节点时循环
                                    //  节点类型应该使用nodeType
    return elem;

}
/**
 * 返回指定的元素的前一个元素兄弟
 * @param elem
 * @return 指定的元素的前一个元素兄弟
 */
function prev(elem) {//找到了 但是不是元素
    do{
        elem=elem.previousSibling;
    }while(elem&&elem.nodeType!=1);
    return elem;

}
function first(elem){
    elem=elem.firstChild;
    return elem && elem.nodeType!=1? next(elem): elem;//如果不是元素节点 就找子节点的第一个元素兄弟节点

}

function last(elem){
    elem = elem.lastChild;
    return elem && elem.nodeType==1?elem:prev(elem);
}

function before(elem,newNode){//插入元素要使用insertbefore
    elem.parentNode.insertBefore(newNode,elem);//顺序是先要插入的元素，再写位置
}

function after(elem,newNode){
    if(elem.nextSibling){
        before(elem.nextSibling,newNode);//找的下一个节点 不是元素节点
    }
    else{
        elem.parentNode.appendChild(newNode);
    }

}
function remove(elem){
    elem.parentNode.removeChild(elem);
}
function siblings(elem){//找到他的所有的兄弟元素
    var arr=[];
    var element=elem.parentNode.children;
    for(var i=0;i<element.length;i++){
        if(element[i]!=elem){//children取得的是所有的元素节点  在这里只要它不等于自己就ok
            arr.push(element[i]);
        }
    }
    return arr;
}

function cloneObj(obj){
    var newObj={};
    for(var p in obj){
        if(typeof obj[p]!=='object'){//object是字符串
            newObj[p]=obj[p];
            }
        else{
            newObj[p]=arguments.callee(obj[p]);
        }

    }
    return newObj;
}
function extend(target, obj) {
    for(var p in obj){
        if(target[p]==='object')
        target[p]=cloneObj(obj[p]);
    }else{
        target[p] = obj[p];
    }
    return target;
}
function trim(str){
    return str.replace(/^\s+|\s+$/g,'');//要定义为全局 使用或去除首尾空格
}
function getStyle(elem,attr){
    if(elem.currentStyle){//ie 使用currentStyle
        return elem.currentStyle[attr];
    }else if(window.getComputedStyle){//标准浏览器 应使用window
        return getComputedStyle(elem,false)[attr];
    }else{
        return elem.style[attr];
    }
}

function addEvent(elem,type,fn){
    if(elem.addEventListener){
        elem.addEventListener(type,fn,false);
    }else if(elem.attachEvent){
        elem[type+fn]=function(){//使用类型加函数名，防止重名
            fn.call(elem);
        };
        elem.attachEvent('on'+type,elem[type+fn]);//函数名不应该使用字符串
    }else{
        elem['on'+type]=fn;
    }
}

function removeEvent(elem,type,fn){
    if(elem.removeEventListener){
        elem.removeEventListener(type,fn,false);
    }else if(elem.detachEvent){
        elem.detachEvent('on'+type,elem[type+fn]
        );
    }else{elem['on'+type]=null;}
}

function $(selector,context){
    context = context || document;
    switch (selector.charAt(0)){
        case '#':
            element = [document.getElementById(selector.substring(1))];
            break;
        case'.':
            element = context.getElementsByClassName(selector.substring(1));
            break;
        default :
            element = context.getElementsByTagName(selector);
}
    return {
        click:function(fn){
            for(var i=0;i<element.length;i++){
                addEvent(element[i],'click',fn);
            }return this;//将正确的指针返回！！
        },
        mouseover:function(fn){
            for(var i=0;i<element.length;i++){
                addEvent(element[i],'mouseover',fn);
            }return this;
        },
        mouseout:function(fn){
            for(var i=0;i<element.length;i++){
                addEvent(element[i],'mouseout',fn);
            }return this;
        },
        css:function(attr,value){
            if(value){
                for(var i=0;i<element.length;i++){
                    element.style[attr]=value;}
                return this;
            }else if(typeof attr==='string'){
                return getStyle(element[0],attr);
            }else{
                for(var p in attr){
                    switch (p){
                        case 'width':
                        case 'height':
                        case 'padding':
                        case 'paddingLeft'://padding后面加Left padding只能为正
                        case 'paddingRight':
                        case 'paddingTop':
                        case 'paddingBottom':
                            value =/\%/.test(attr[p])?attr[p]:Math.max(parseInt(attr[p]),0)+'px';
                            //应加保证大于等于0
                            break;
                        case 'left':
                        case 'top':
                        case 'bottom':
                        case 'right':
                        case 'margin':
                        case 'marginLeft':
                        case 'marginRight':
                        case 'marginTop':
                        case 'marginBottom':
                            value = /\%/.test(attr[p])?attr[p]:parseInt[attr[p]]+'px';
                            break;
                        default: value=attr[p];
                    }
                    for(var i=0;i<element.length;i++){
                        element[i].style[p]=value;
                    }
                }
                return this;
            }
        }
    }
}