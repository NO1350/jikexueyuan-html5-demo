/**
 * Created by Crixalis on 2015/1/21.
 */
/*
* children 只能修改子级元素 可选参数
* find  任意查找 必选参数
*/
$(document).ready(function(){
   $("#div1").children("p").css({border:"3px solid #FF0000"});
   //$("#div1").find("a").css({border:"3px solid #FF0000"});
});