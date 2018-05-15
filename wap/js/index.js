var swiper = new Swiper('.swiper-container', {
  prevButton:'.btnl',
  nextButton:'.btnr'
  //loop : true, //是否循环
});

//元素下载
//$('.area06 .btn01').click(function(){
//	$('.cover').show();
//	$('.pop').removeClass('hide');
//})
//$('.pop i,.cover').click(function(){
//	$('.cover').hide();
//	$('.pop').addClass('hide');
//})

//锚点
$('.area02 li').click(function(){
	var ztop=$('.boxms').height();
	var indexs=$(this).index();
	var top=$(".area0"+(indexs+3)).offset().top-ztop;
	$("html,body").stop().animate({scrollTop:top},200);
})

//头部固定
$("body").on("touchmove", function(e) {
	var top=$(document).scrollTop();
	var top02=$(".area02").offset().top;
	if(top<=top02){
		$('.boxms').removeClass('boxmsfix');
	}
	else{
		$('.boxms').addClass('boxmsfix');
	}
})

window.onload=window.onscroll=function(){
	var top=$(document).scrollTop();
	var top02=$(".area02").offset().top;
	if(top<=top02){
		$('.boxms').removeClass('boxmsfix');
	}
	else{
		$('.boxms').addClass('boxmsfix');
	}
}

var aa;
function errpop(a,b){
	$('.poptxt').show();
	$('.poptxt span').html(a);
	clearTimeout(aa)
	aa=setTimeout(function(){
		$('.poptxt').hide();
	$('.poptxt span').html('');
	},b)
}

//投票
// $('.area07 .pic a').click(function(){
// 	if($(this).hasClass("cured")){
// 		return errpop("你已经投过票了！",1000);
// 	}
// 	else{
// 		//投票操作
// 		errpop("感谢您的投票",1000);
// 	}
// })


//弹框切换
var wi=$('.sidebox').css('width').split("px")[0];
var he=$('.sidebox').css('height').split("px")[0];

var Alegs=$('.swiper-container01').length;

//for(var i=0;i<Alegs;i++){
	$('.swiper-container01').each(function(){
		var _this=$(this)
		new Swiper($(this), {
			prevButton: $(this).siblings('.btnl01'),
			nextButton: $(this).siblings('.btnr01'),
			width: wi, //你的slide宽度
			height:he,
			onInit: function(swiper){//初始化执行
				var pss=swiper.activeIndex;
				//$('.newpop').eq(i).find('p.tit').html($('.sidebox li').eq(pss).find('span').html());
				_this.parents('.newpop').find('p.tit').html(_this.parents('.newpop').find('.sidebox li').eq(pss).find('span').html());
			},
			onTransitionEnd: function(swiper){//触发完成后化执行
				var pss=swiper.activeIndex;
				_this.parents('.newpop').find('p.tit').html(_this.parents('.newpop').find('.sidebox li').eq(pss).find('span').html());
			}
			//loop : true, //是否循环
		});
	})
	
//}

// var swiper01 = new Swiper('.swiper-container01', {
//   prevButton:'.btnl01',
//   nextButton:'.btnr01',
//   width: wi, //你的slide宽度
//   height:he,
//   onInit: function(swiper){//初始化执行
//   	var pss=swiper.activeIndex;
//   	$('.newpop p.tit').html($('.sidebox li').eq(pss).find('span').html());
//   },
//   onTransitionEnd: function(swiper){//触发完成后化执行
//   	var pss=swiper.activeIndex;
//   	$('.newpop p.tit').html($('.sidebox li').eq(pss).find('span').html());
//   }
//   //loop : true, //是否循环
// });

//function showside(){
//	$('.cover').show();
//	$('.newpop').removeClass('hide');
//}
$('.area07 .pic').click(function(){
	/*获取图片位置索引*/
	var curr=$(this).parents('li').index(); //当前li的位置，当前页数下的位置；
	var current=$(this).parents('ul').index(); //当前ul的位置,也就是第几页；
	var page=curr+current*8;
	$('.cover').show();
	$('.newpop').eq(page).removeClass('hide');
})

function hideside(){
	$('.cover').hide();
	$('.newpop').addClass('hide');
	$('.whitedo').addClass('hide');
}

function showtips(){
	$('.cover').show();
	$('.whitedo').removeClass('hide');
}

function hideips(){
	$('.cover').hide();
	$('.whitedo').addClass('hide');
}

var ulleg=$('.area07 ul').length;
var swiper02 = new Swiper('.swiper-container02', {
  prevButton:'.npB01',
  nextButton:'.npB02',
  onInit: function(swiper){//初始化执行
  	var pss=swiper.activeIndex;
  	if(ulleg==1){
  		$('.npBtn').hide();
  	}
  	else{
  		if(pss==0){
  			$('.npBtn .npB01').hide();
  			$('.npBtn .npB02').show();
  		}
  		else if(pss==ulleg-1){
  			$('.npBtn .npB01').show();
  			$('.npBtn .npB02').hide();
  		}
  		else{
  			$('.npBtn .npB01').show();
  			$('.npBtn .npB02').show();
  		}
  	}
  	
  },
  onTransitionEnd: function(swiper){//触发完成后化执行
  	var pss=swiper.activeIndex;
  	if(ulleg==1){
  		$('.npBtn').hide();
  	}
  	else{
  		if(pss==0){
  			$('.npBtn .npB01').hide();
  			$('.npBtn .npB02').show();
  		}
  		else if(pss==ulleg-1){
  			$('.npBtn .npB01').show();
  			$('.npBtn .npB02').hide();
  		}
  		else{
  			$('.npBtn .npB01').show();
  			$('.npBtn .npB02').show();
  		}
  	}
  }
  //loop : true, //是否循环
});
