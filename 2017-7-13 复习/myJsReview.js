/**
 * Created by �� on 2017/7/13.
 */
/*function $(selector, context) {
    context = context || document;
    switch (selector.charAt(0)){
        case '#'://charAtӦ�ô�0��ʼ  ѡ��ṹʹ��switch switch�ṹѡ��Ҫ��:
            return [document.getElementById(selector.substring(1))];//ͳһʹ���������ʽ
            break;
        case'.':
        return context.getElementsByClassName(selector.substring(1));
        default :
        return context.getElementsByTagName(selector);

}
}*/        //'#div1'  '.class' 'li'tagName
//function getByClass(className, context) {
//    context = context||document;//ֱ�Ӱ���TagName���ң���ͨ��getByclassName
//        var arr = context.getElementsByTagName('*');
//        var aClass = [];
//        var bb =new RegExp("\\b"+className+"\\b");//����ֱ��ʹ��RegExp Ҫ��new����ķ�ʽ Ҫʹ��˫��б��ʹ"\"ת��
//        for(var i=0; i<arr.length;i++){
//            if(bb.test(arr[i].className)){
//                aClass.push(arr[i]);//ֱ�ӷ���arr[i]������arr[i].className
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
    }while(elem&&elem.nodeType!=1); //���ڵ����Ͳ�Ϊ�ڵ�ʱѭ��
                                    //  �ڵ�����Ӧ��ʹ��nodeType
    return elem;

}
/**
 * ����ָ����Ԫ�ص�ǰһ��Ԫ���ֵ�
 * @param elem
 * @return ָ����Ԫ�ص�ǰһ��Ԫ���ֵ�
 */
function prev(elem) {//�ҵ��� ���ǲ���Ԫ��
    do{
        elem=elem.previousSibling;
    }while(elem&&elem.nodeType!=1);
    return elem;

}
function first(elem){
    elem=elem.firstChild;
    return elem && elem.nodeType!=1? next(elem): elem;//�������Ԫ�ؽڵ� �����ӽڵ�ĵ�һ��Ԫ���ֵܽڵ�

}

function last(elem){
    elem = elem.lastChild;
    return elem && elem.nodeType==1?elem:prev(elem);
}

function before(elem,newNode){//����Ԫ��Ҫʹ��insertbefore
    elem.parentNode.insertBefore(newNode,elem);//˳������Ҫ�����Ԫ�أ���дλ��
}

function after(elem,newNode){
    if(elem.nextSibling){
        before(elem.nextSibling,newNode);//�ҵ���һ���ڵ� ����Ԫ�ؽڵ�
    }
    else{
        elem.parentNode.appendChild(newNode);
    }

}
function remove(elem){
    elem.parentNode.removeChild(elem);
}
function siblings(elem){//�ҵ��������е��ֵ�Ԫ��
    var arr=[];
    var element=elem.parentNode.children;
    for(var i=0;i<element.length;i++){
        if(element[i]!=elem){//childrenȡ�õ������е�Ԫ�ؽڵ�  ������ֻҪ���������Լ���ok
            arr.push(element[i]);
        }
    }
    return arr;
}

function cloneObj(obj){
    var newObj={};
    for(var p in obj){
        if(typeof obj[p]!=='object'){//object���ַ���
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
    return str.replace(/^\s+|\s+$/g,'');//Ҫ����Ϊȫ�� ʹ�û�ȥ����β�ո�
}
function getStyle(elem,attr){
    if(elem.currentStyle){//ie ʹ��currentStyle
        return elem.currentStyle[attr];
    }else if(window.getComputedStyle){//��׼����� Ӧʹ��window
        return getComputedStyle(elem,false)[attr];
    }else{
        return elem.style[attr];
    }
}

function addEvent(elem,type,fn){
    if(elem.addEventListener){
        elem.addEventListener(type,fn,false);
    }else if(elem.attachEvent){
        elem[type+fn]=function(){//ʹ�����ͼӺ���������ֹ����
            fn.call(elem);
        };
        elem.attachEvent('on'+type,elem[type+fn]);//��������Ӧ��ʹ���ַ���
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
            }return this;//����ȷ��ָ�뷵�أ���
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
                        case 'paddingLeft'://padding�����Left paddingֻ��Ϊ��
                        case 'paddingRight':
                        case 'paddingTop':
                        case 'paddingBottom':
                            value =/\%/.test(attr[p])?attr[p]:Math.max(parseInt(attr[p]),0)+'px';
                            //Ӧ�ӱ�֤���ڵ���0
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