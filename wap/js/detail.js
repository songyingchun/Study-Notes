// var swiper = new Swiper('.swiper-container', {
//     prevButton: '.btnl',
//     nextButton: '.btnr'
//     //loop : true, //是否循环
// });


//头部固定
// $("body").on("touchmove", function (e) {
//     var top = $(document).scrollTop();
//     var top02 = $(".area02").offset().top;
//     if (top <= top02) {
//         $('.boxms').removeClass('boxmsfix');
//     }
//     else {
//         $('.boxms').addClass('boxmsfix');
//     }
// })



// var aa;
// function errpop(a, b) {
//     $('.poptxt').show();
//     $('.poptxt span').html(a);
//     clearTimeout(aa)
//     aa = setTimeout(function () {
//         $('.poptxt').hide();
//         $('.poptxt span').html('');
//     }, b)
// }

//弹框切换
// var wi = $('.sidebox').css('width').split("px")[0];
// var he = $('.sidebox').css('height').split("px")[0];

// var Alegs = $('.swiper-container01').length;

//for(var i=0;i<Alegs;i++){
// $('.swiper-container01').each(function () {
//     var _this = $(this)
//     new Swiper($(this), {
//         prevButton: $(this).siblings('.btnl01'),
//         nextButton: $(this).siblings('.btnr01'),
//         width: wi, //你的slide宽度
//         height: he,
//         onInit: function (swiper) {//初始化执行
//             var pss = swiper.activeIndex;
//             //$('.newpop').eq(i).find('p.tit').html($('.sidebox li').eq(pss).find('span').html());
//             _this.parents('.newpop').find('p.tit').html(_this.parents('.newpop').find('.sidebox li').eq(pss).find('span').html());
//         },
//         onTransitionEnd: function (swiper) {//触发完成后化执行
//             var pss = swiper.activeIndex;
//             _this.parents('.newpop').find('p.tit').html(_this.parents('.newpop').find('.sidebox li').eq(pss).find('span').html());
//         }
//         //loop : true, //是否循环
//     });
// })

// $('.area07 .pic').click(function () {
//     /*获取图片位置索引*/
//     var curr = $(this).parents('li').index(); //当前li的位置，当前页数下的位置；
//     var current = $(this).parents('ul').index(); //当前ul的位置,也就是第几页；
//     var page = curr + current * 8;
//     $('.cover').show();
//     $('.newpop').eq(page).removeClass('hide');
// })

// function hideside() {
//     $('.cover').hide();
//     $('.newpop').addClass('hide');
//     $('.whitedo').addClass('hide');
// }

// function showtips() {
//     $('.cover').show();
//     $('.whitedo').removeClass('hide');
// }

// function hideips() {
//     $('.cover').hide();
//     $('.whitedo').addClass('hide');
// }

// var ulleg = $('.area07 ul').length;
// var swiper02 = new Swiper('.swiper-container02', {
//     prevButton: '.npB01',
//     nextButton: '.npB02',
//     onInit: function (swiper) {//初始化执行
//         var pss = swiper.activeIndex;
//         if (ulleg == 1) {
//             $('.npBtn').hide();
//         }
//         else {
//             if (pss == 0) {
//                 $('.npBtn .npB01').hide();
//                 $('.npBtn .npB02').show();
//             }
//             else if (pss == ulleg - 1) {
//                 $('.npBtn .npB01').show();
//                 $('.npBtn .npB02').hide();
//             }
//             else {
//                 $('.npBtn .npB01').show();
//                 $('.npBtn .npB02').show();
//             }
//         }

//     },
//     onTransitionEnd: function (swiper) {//触发完成后化执行
//         var pss = swiper.activeIndex;
//         if (ulleg == 1) {
//             $('.npBtn').hide();
//         }
//         else {
//             if (pss == 0) {
//                 $('.npBtn .npB01').hide();
//                 $('.npBtn .npB02').show();
//             }
//             else if (pss == ulleg - 1) {
//                 $('.npBtn .npB01').show();
//                 $('.npBtn .npB02').hide();
//             }
//             else {
//                 $('.npBtn .npB01').show();
//                 $('.npBtn .npB02').show();
//             }
//         }
//     }
//     //loop : true, //是否循环
// });
$(function () {
    window.onload = window.onscroll = function () {
        var top = $(document).scrollTop();
        var top02 = $(".area02").offset().top;
        if (top <= top02) {
            $('.boxms').removeClass('boxmsfix');
        }
        else {
            $('.boxms').addClass('boxmsfix');
        }
    }

    //锚点
    $('.area02 li').click(function () {
        var ztop = $('.boxms').height();
        var indexs = $(this).index();
        var top = $(".area0" + (indexs + 3)).offset().top - ztop;
        $("html,body").stop().animate({ scrollTop: top }, 200);
    });

    // 第五屏
    var swiper1 = new Swiper('.swiper-container1', {
        scrollbar: '.swiper-scrollbar',
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        scrollbarHide: false,
        freeMode: true,
        roundLengths: true, //防止文字模糊
    });

    var swiper3List = [],
        $swiperItems = $("#JSwiperList .swiper-item");

    // 第六屏
    var swiper2 = new Swiper('.swiper-container2', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 3,
        paginationClickable: true,
        loop: true,
        lazyLoading: true,
        lazyLoadingInPrevNext: true,
        preventClicks: false,//默认true
        onTransitionEnd: function (swiper) {
            var index = swiper.activeIndex - 3,
                swiperItem = $swiperItems.eq(index),
                swiper3 = swiper3List[index];
            
            swiperItem.addClass("active").siblings().removeClass("active");

            if(index < 0) {
                index += 10;
            }

            if(!swiper3) {
                setTimeout(() => {
                    swiper3 = new Swiper(swiperItem.find(".swiper-container3"), {
                        // pagination: '.swiper-pagination',
                        paginationClickable: '.swiper-pagination',
                        nextButton: '.swiper-button-next',
                        prevButton: '.swiper-button-prev',
                        loop: true,
                        lazyLoading: true,
                        lazyLoadingInPrevNext: true,
                        // spaceBetween: 30
                    });
                    swiper3List[index] = swiper3;
                }, 50);
            }
        }
    });

    $(".area06 .swiper-container2 .swiper-slide").click(function () {
        var index = $(this).index();
        swiper2.slideTo(index);
    });



    // 第七屏
    // var swiper4 = new Swiper('.swiper-container4', {
    //     // pagination: '.swiper-pagination',
    //     paginationClickable: '.swiper-pagination',
    //     nextButton: '.swiper-button-next',
    //     prevButton: '.swiper-button-prev',
    //     loop: true,
    //     // spaceBetween: 30
    // });

    var swiper4List = [],
        $swiper4swiperItems = $("#JArea07SwiperList .swiper-item");

    $("#JControlList").on("click", ".control-item", function () {
        var index = $(this).index(),
            swiper4 = swiper4List[index],
            item = $swiper4swiperItems.eq(index);

        $(this).addClass("active").siblings().removeClass("active");
        item.addClass("active").siblings().removeClass("active");

        if(!swiper4) {
            setTimeout(() => {
                swiper4 = new Swiper(item.find(".swiper-container4"), {
                    // pagination: '.swiper-pagination',
                    paginationClickable: '.swiper-pagination',
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    loop: true,
                    lazyLoading: true,
                    lazyLoadingInPrevNext: true,
                    // spaceBetween: 30
                });
                swiper4List[index] = swiper4;
            }, 50);
        }
    });

    $("#JControlList .control-item").eq(0).trigger("click");

    // 第八屏
    var swiper5 = new Swiper('.swiper-container5', {
        // pagination: '.swiper-pagination',
        paginationClickable: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        loop: true,
        lazyLoading: true,
        lazyLoadingInPrevNext: true,
        // spaceBetween: 30
    });

    // 第九屏
    var swiper6 = new Swiper('.swiper-container6', {
        // pagination: '.swiper-pagination',
        paginationClickable: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        loop: true,
        lazyLoading: true,
        lazyLoadingInPrevNext: true,
        // spaceBetween: 30
    });
});
