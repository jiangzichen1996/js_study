/**
 * Created by 晨 on 2017/7/10.
 */
/**
 * 返回指定元素的下一个元素兄弟
 * @param elem
 * @return 指定的元素的下一个兄弟元素
 */
function next(elem){
    do{
        elem=elem&&elem.nextSibling;
    }while(elem && elem.nodeType != 1);
    return elem;
}
/**
 * 返回指定元素的前一个元素兄弟
 * @param elem
 * @return 指定的元素的前一个兄弟元素
 */
function prev(elem){
    do{
        elem=elem&&elem.previousSibling;
    }while(elem && elem.nodeType != 1);
    return elem;
}

/**
 *查找元素的第一个孩子节点
 * @param elem
 */
function first(elem){
    elem = elem.firstChild;
    return elem && elem.nodetype==1?elem:next(elem);
}
/**
 *查找元素的最后一个孩子节点
 * @param elem
 */
function last(elem){
    elem = elem.lastChild;
    return elem && elem.nodetype==1?elem:prev(elem);
}
/*删除给定元素*/
function remove(elem){
    elem.parentNode.removeChild(elem);

}
/*
 * 深克隆
 * @ param elem 当前元素
 * */
function cloneObj(obj){
    var newObj = {};//要将newObj类型定为对象！
    for(var p in obj){
        if(typeof obj[p]==='object'){
            newObj[p]=arguments.callee(obj[p]);//优化 使递归与函数名无关
        }else{
            newObj[p] = obj[p];
        }

    }
    return newObj;
}
/*在给定元素前面插入一个新元素*/
function before(elem,newNode){
    elem.parentNode.insertBefore(newNode,elem);
}
/*在给定元素后面插入一个新元素*/
function after(elem,newNode){
    if(elem.nextElementSibling){
        elem.parentNode.insertBefore(newNode,elem.nextSibling);
    }else{
        elem.parentNode.appendChild(newNode);
    }
}
/*查找所有兄弟元素节点*/
function siblings(elem){
    var abrother=elem.parentNode.children;
    var arr = [];
    for(var i=0;i<abrother.length;i++){
        if(abrother[i]!=elem){
            arr.push(abrother[i]);
        }
    }
    return arr;

}

function $(selector,context){
    context = context ||document;
    switch (selector.charAt(0)){
        case'#':
            return [document.getElementById(selector.substring(1))];
            break;
        case'.':
            return getByClass(selector.substring(1),context);
            break;
        default :
            return context.getElementsByTagName(selector);
            break;
    }
}

function trim(str){
    return str.replace(/^\s+|s+$/g,"");
}
/**
 * 查找符合className的元素
 * @param className
 * @param context
 * @returns {Array}
 */
//indexof 查找字符串出现的位置 找到返回位置 找不到返回-1
function getByClass(className,context){
    context = context||document;
    var arr=context.getElementsByTagName('*');
    var result = [];
    var re = new RegExp("\\b"+className+"\\b");
    for(var i=0;i<arr.length;i++){

        if(re.test(arr[i].className)){
            result.push(arr[i]);
        }
    }
    return result;
}
/**
 * 获取当前元素样式
 * @param elem
 * @param attr
 * @returns {*}
 */
function getstyle(elem,attr){
    if(elem.currentstyle){//IE
        return elem.currentstyle[attr]
    }else if(window.getComputedStyle){
        return window.getComputedStyle(elem,false)[attr];
    }else{return elem.style[attr];}
}
/**
 * 增加或获取样式
 * @param elem
 * @param attr
 * @param value
 * @returns {*}
 */
function css(elem,attr,value){
    if(value){
        elem.style[attr] = value;
    }else{
        if(typeof attr ==='string'){
            return getstyle(elem,attr);
        }else{
            for(var p in attr){
                elem.style[p]=parseInt(attr[p])+'px';
            }
        }
    }

}

/**
 * 对元素进行事件绑定
 * @param elem
 * @param type
 * @param fn
 */
function addEvent(elem,type,fn){
    if(elem.addEventListener){//标准浏览器
        elem.addEventListener(type,fn,false);
    }else if(elem.attachEvent){
         elem[type+fn] = function(){
            fn.call(elem);};
        elem.attachEvent("on"+type,elem[type+fn]//保证函数名唯一 防止重复绑定
        );//ie8 绑定this 会绑到window
    }else{elem["on"+type]=fn;}
}
/**
 * 移除事件绑定
 * @param elem
 * @param type
 * @param fn
 */

function removeEvent(elem,type,fn){
    if(elem.removeEventListener){//标准浏览器
        elem.removeEventListener(type,fn,false);
    }else if(elem.detachEvent){
        elem.detachEvent("on"+type,elem[type+fn]
        );//ie8 绑定this 会绑到window
    }else{elem["on"+type]=fn;}

}
