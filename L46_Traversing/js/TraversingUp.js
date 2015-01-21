/**
 * Created by Crixalis on 2015/1/21.
 */
/*
*    parent()
*    parents()
*    parentUtil()
*/
$(document).ready(function(){
   //$("p").parent().css({border:"3px solid #FF0000"});
   //$("p").parents("#div1").css({border:"3px solid #FF0000"});
   $("p").parentsUntil("#div1").css({border:"3px solid #FF0000"});
});
