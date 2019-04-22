$('.brands-tabs li').mouseenter(function(){
	var n=$(this).index()
	$('.hoverarr').css('left',`${242*n}px`)
});
$(function(){
	$(window).scroll(function(){
		var scrolltop=$(this).scrollTop();
		if(scrolltop>=200){
			$("#elevator_item").show();
		}else{
			$("#elevator_item").hide();
		}
	});
	$("#elevator").click(function(){
		$("html,body").animate({scrollTop:0},500);
	});
	$(".qr").hover(function(){
		$(".qr-popup").show();
	},function(){
		$(".qr-popup").hide();
	});
});
//$('.duku li').mouseleave(function(){
//   $('.heart').hide();
//});
//$('.duku li').mouseenter(function(){
//   $('.heart').show();
//});
$('.duku li').hover(function(){
	$(this).children().children('.heart').toggle();
});
$(window).scroll(function(){
	console.log($('.mainNav').offset().top)
	var w=($(window).scrollTop())
	var h=($(window).height())
	if(w>161){
		$('.mainNav').css({'position':'fixed','width':'1583px','left':'0px','top':'0px',})
	}else{
		$('.mainNav').css('position','relative')
	}
})