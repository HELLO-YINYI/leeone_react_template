/**
 * Created by YINYI on 2018/7/18.
 */

/*-----------------------时间戳转换为标准时间显示--------------------------*/
export function getLocalTime(time) {
    //格式为 2017-4-17 16:03
    let data = new Date(parseInt(time) * 1000);
    let year = data.getFullYear();
    let month = data.getMonth() + 1;
    let day = data.getDate();
    let hour = data.getHours() < 10 ? '0'+data.getHours() : data.getHours();
    let minutes = data.getMinutes() < 10 ? '0'+data.getMinutes() : data.getMinutes();
    let second = data.getSeconds() < 10 ? '0'+data.getSeconds() : data.getSeconds();
    return year + "-" + month + "-" + day + "  " + hour + ":" + minutes + ":" + second;
}





/*-----------------------转义包含Html标签的字符串--------------------------*/
export function escapeHtml(str) {
    var arrEntities={'lt':'<','gt':'>','nbsp':' ','amp':'&','quot':'"'};
    return str.replace(/&(lt|gt|nbsp|amp|quot);/ig,function(all,t){return arrEntities[t];});
}






/*-----------------------监听页面是否滚动到最底部--------------------------*/
//页面是否滚动到底部
function getScrollTop(){
    var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
    if(document.body){
        bodyScrollTop = document.body.scrollTop;
    }
    if(document.documentElement){
        documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    return scrollTop;
}
//文档的总高度
function getScrollHeight(){
    var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
    if(document.body){
        bodyScrollHeight = document.body.scrollHeight;
    }
    if(document.documentElement){
        documentScrollHeight = document.documentElement.scrollHeight;
    }
    scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
    return scrollHeight;
}
function getWindowHeight(){
    var windowHeight = 0;
    if(document.compatMode == "CSS1Compat"){
        windowHeight = document.documentElement.clientHeight;
    }else{
        windowHeight = document.body.clientHeight;
    }
    return windowHeight;
}
//外部调用方法
export function isScrollToBottom() {
    if(getScrollTop() + getWindowHeight() == getScrollHeight()){
        return true;
    }else {
        return false;
    }
}

