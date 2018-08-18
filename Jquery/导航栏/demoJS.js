
$(".alink").hover(function(){
	$(this).addClass("highlight")
	.children("a").show().end()
	.siblings().removeClass("highlight").children("a").hide();
});
