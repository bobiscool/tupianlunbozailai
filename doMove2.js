/**
 * 这个是一个为了启动div的domve函数
 */
function doMove2(obj,dir,attr,target) {
    dir = parseInt(getstyle(obj,attr))<target?dir:-dir;//
    //alert(dir);
    clearInterval(obj.timer);
    obj.timer = setInterval(
        function () {
            var position = parseInt(getstyle(obj, attr)) + dir;//取出当前自己的位置
            //判断自身的位指
            if (position > target&&dir>0 || position <target&&dir<0) {
                //oDiv.style[attr] = position + dir + 'px'; 这种写法,如果在中间过程中调用两个函数就会造成odiv在中间停止不前
                position = target;
            }//满足这两个条件才能在中间场地上驰骋!!!

            obj.style[attr] = position + 'px';

        }, 30);

};
