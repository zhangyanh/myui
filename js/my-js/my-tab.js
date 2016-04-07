//tab


$.fn.tab = function(){
	$(".js-head a").on("click",function(){
			$(this).addClass("cur").siblings().removeClass("cur");
			$(".js-cont").eq($(".js-head a").index(this)).show().siblings().hide();
		})
}






