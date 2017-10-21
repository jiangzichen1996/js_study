function $(selector, context) {
    context=context||document;
    switch (selector.charAt(0)){
        case '#': return context.getElementById(selector.substring(1));break;
        case '.': return context.getElementsByClassName(selector.substring(1));break;
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
// function next