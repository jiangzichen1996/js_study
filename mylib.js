/**
 * Created by �� on 2017/7/10.
 */
/**
 * ����ָ��Ԫ�ص���һ��Ԫ���ֵ�
 * @param elem
 * @return ָ����Ԫ�ص���һ���ֵ�Ԫ��
 */
function next(elem){
    do{
        elem=elem&&elem.nextSibling;
    }while(elem && elem.nodeType != 1);
    return elem;
}
/**
 * ����ָ��Ԫ�ص�ǰһ��Ԫ���ֵ�
 * @param elem
 * @return ָ����Ԫ�ص�ǰһ���ֵ�Ԫ��
 */
function prev(elem){
    do{
        elem=elem&&elem.previousSibling;
    }while(elem && elem.nodeType != 1);
    return elem;
}

/**
 *����Ԫ�صĵ�һ�����ӽڵ�
 * @param elem
 */
function first(elem){
    elem = elem.firstChild;
    return elem && elem.nodetype==1?elem:next(elem);
}
/**
 *����Ԫ�ص����һ�����ӽڵ�
 * @param elem
 */
function last(elem){
    elem = elem.lastChild;
    return elem && elem.nodetype==1?elem:prev(elem);
}
/*ɾ������Ԫ��*/
function remove(elem){
    elem.parentNode.removeChild(elem);

}
/*
 * ���¡
 * @ param elem ��ǰԪ��
 * */
function cloneObj(obj){
    var newObj = {};//Ҫ��newObj���Ͷ�Ϊ����
    for(var p in obj){
        if(typeof obj[p]==='object'){
            newObj[p]=arguments.callee(obj[p]);//�Ż� ʹ�ݹ��뺯�����޹�
        }else{
            newObj[p] = obj[p];
        }

    }
    return newObj;
}
/*�ڸ���Ԫ��ǰ�����һ����Ԫ��*/
function before(elem,newNode){
    elem.parentNode.insertBefore(newNode,elem);
}
/*�ڸ���Ԫ�غ������һ����Ԫ��*/
function after(elem,newNode){
    if(elem.nextElementSibling){
        elem.parentNode.insertBefore(newNode,elem.nextSibling);
    }else{
        elem.parentNode.appendChild(newNode);
    }
}
/*���������ֵ�Ԫ�ؽڵ�*/
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
 * ���ҷ���className��Ԫ��
 * @param className
 * @param context
 * @returns {Array}
 */
//indexof �����ַ������ֵ�λ�� �ҵ�����λ�� �Ҳ�������-1
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
 * ��ȡ��ǰԪ����ʽ
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
 * ���ӻ��ȡ��ʽ
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
 * ��Ԫ�ؽ����¼���
 * @param elem
 * @param type
 * @param fn
 */
function addEvent(elem,type,fn){
    if(elem.addEventListener){//��׼�����
        elem.addEventListener(type,fn,false);
    }else if(elem.attachEvent){
         elem[type+fn] = function(){
            fn.call(elem);};
        elem.attachEvent("on"+type,elem[type+fn]//��֤������Ψһ ��ֹ�ظ���
        );//ie8 ��this ���window
    }else{elem["on"+type]=fn;}
}
/**
 * �Ƴ��¼���
 * @param elem
 * @param type
 * @param fn
 */

function removeEvent(elem,type,fn){
    if(elem.removeEventListener){//��׼�����
        elem.removeEventListener(type,fn,false);
    }else if(elem.detachEvent){
        elem.detachEvent("on"+type,elem[type+fn]
        );//ie8 ��this ���window
    }else{elem["on"+type]=fn;}

}
