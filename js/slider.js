//封装移动函数
function animate(element,target){
    clearInterval(element.animateTimer);
    var left = element.offsetLeft;
    var step = (target - left) / 50;
    element.animateTimer = setInterval(function(){
        left += step;
        element.style.left = left + 'px';
        if(Math.abs(target - left) <= Math.abs(step)){
            clearInterval(element.animateTimer);
            element.style.left = target + 'px';
        }
    },10);
}
window.onload =function(){
    var ul = document.getElementsByTagName('ul')[0];
    var spanArr = document.getElementsByClassName('control')[0].getElementsByTagName('span');
    //4.最后一张显示后，克隆第一张图片继续显示第一张
    ul.appendChild(ul.children[0].cloneNode(true));
    var ulLeft = ul.offsetLeft;
    console.log(ulLeft);
    var ulIndex = 0;  //默认第一张图片下标
    // console.log(ulLeft);
    //开启
    var autoPlayTimer = setInterval(function(){
        //4.2 从最后一张滚回到第一张(ulIndex == 5)之后  需重置回第一张状态
        if(ulIndex == 3){
            ulIndex = 0;
            ul.style.left = '0';
            ulLeft = 0;
        }
        ulLeft -= 1500;
        // console.log(ulLeft);
        animate(ul, ulLeft);
        ulIndex++;
        for(var i = 0; i< spanArr.length; i++){
            spanArr[i].className = '';
        }
        //4.3改变页面  第五张图片结束后ulIndex是4 
        //第六张图片即第一张图片的ulIndex是5  所以求ulIndex % 5恢复ulIndex为0 
        spanArr[ulIndex % 3].className = 'current';
    },4000);
    //第二大步  给小圆点span添加点击事件
    for(var i = 0; i< spanArr.length; i++){
        var span = spanArr[i];
        span.index = i;
        span.onclick = function(){
            //实现点击span后图片移动
            var targetLeft = -1500 * this.index; //0 - 4
            //点击后自动滚动到 当前圆点对应的图片的位置  即左移800*下标
            animate(ul, targetLeft);
            //记录此时的ulLeft ulIndex 为了继续从当前点击图片向下一张图片移动
            ulLeft = targetLeft;
            ulIndex = this.index;
            //切换当前span选中样式
            for(var j = 0; j<spanArr.length; j++){
                spanArr[j].className = '';
            }
            this.className = 'current';
        }
    }
}