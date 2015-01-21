/**
 *
 * Created by Crixalis on 2015/1/21.
 */

/*
* sibings() 操作除当前的所有全局同级元素
* next()   下一个元素
* nextAll() 下面所有元素
* nextUntil() 区间元素
* prev()
* preAll()
* preUntil()
* */
$(document).ready(function(){
    //$("h4").siblings().css({border:"3px solid #FF0000"});
    //$("h4").next().css({border:"3px solid #FF0000"});
    //$("h4").nextAll().css({border:"3px solid #FF0000"});
    $("h2").nextUntil("h5").css({border:"3px solid #FF0000"});

});