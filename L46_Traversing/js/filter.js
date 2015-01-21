/**
 * Created by Crixalis on 2015/1/21.
 */
/*
* first()  寻找同样元素中的第一个
* last()   最后一个
* eq()     从0开始的索引查找
* filter() 过滤元素类型
* not()    除当前元素所有元素
* */

$(document).ready(function(){
   //$("div p").first().css("backgroundColor","red");
   //$("div p").last().css("backgroundColor","red");
   //$("div p").eq(2).css("backgroundColor","red");
   //$("div p").filter(".pclass").css("backgroundColor","red");
   $("div p").not(".pclass").css("backgroundColor","red");
});