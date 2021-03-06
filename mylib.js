function $(selector, context) {
    context=context||document;
    switch (selector.charAt(0)){
        case '#': return context.getElementById(selector.substring(1));break;
        case '.': return getByClass(selector.substring(1),context);break;
        default:  return context.getElementsByTagName(selector);break;
    }
}

function getByClass(selector,context){
    context=context||document;
    let result=[];
    let arr=context.getElementsByTagName('*');
    let re=new RegExp(`\\b${selector}\\b`);
    for(let i=0;i<arr.length;i++){
        if(re.test(arr[i].className)){
            result.push(arr[i]);
        }
    }
    return result;

}
function next(elem){
    do{
        elem = elem && elem.nextSibling;
    }while(elem && elem.nodeType != 1);
    return elem;
}
function prev(elem){
    do{
        elem = elem && elem.previousSibling;
    }while(elem && elem.nodeType !=1);
    return elem;
}
function last(elem) {
    elem =elem.lastChild;
    return elem && elem.nodeType == 1 ? elem : prev(elem)
}