$(document).ready(function(){   
    // 侧边栏滑动模块
    (function(){
        var sidebar=$('.sidebar');
        var mask=$('.mask');
        var sidebar_trigger=$('.sidebar_trigger');
        var showSidebar=function(){
            mask.fadeIn();
            sidebar.animate({'right':0});
        }
        var hideSidebar=function(){
            mask.fadeOut();
            sidebar.css('right',-sidebar.width());
        }
        sidebar_trigger.bind('click',showSidebar);
        mask.bind('click',hideSidebar);
    })();
    //返回顶部模块
    (function(){
        var isPC=function(){
            var userAgentInfo = navigator.userAgent;
            var Agents = ["Android", "iPhone","SymbianOS", "Windows Phone", "iPod"];
            var flag = true;
            for (var v = 0; v < Agents.length; v++) {
                if (userAgentInfo.indexOf(Agents[v]) > 0) {
                    flag = false;
                    break;
                }
            }
            if(window.screen.width>=768){
                 flag = true;           
            }
            return flag;
            
            };
        if(isPC()){
            //如果是PC端，就出现back2top
            var backtotop=$('.back-to-top');
            backtotop.bind('click', function(){
                $('html,body').animate({scrollTop:0},800)
            });
            $(window).on('scroll',function(){
                if($(window).scrollTop()>400){
                    backtotop.fadeIn();
                }else{
                    backtotop.fadeOut();
                }
            });
        }else{
            //如果是移动端，就不需要出现back2top
        }       
    })();
    // 招聘信息-下拉手风琴效果
    (function(){
        //全部下拉内容隐藏
        $(".bellows__content-wrapper").hide();
        // 默认第一列展开
        $("#bellows_1").show();
        $(".bellows__header").click(function(){    
            $(this).next().slideDown();
            $(this).parent(".bellows__item").addClass("bellows--is-open");
            $(".bellows__header").not(this).next().slideUp();
            $(".bellows__header").not(this).parent(".bellows__item").removeClass("bellows--is-open");
        });      
    })();
});


 $(function(){
    var aLi = $('#brand .bd-box li');
    var aImg =  $('#brand .bd-box li div.just img');
    var aSpan = $('#brand .bd-box li div.against img');
    var aSpann = $('#brand .bd-box li div.against');
    aLi.each(function(index){
        $(this).mouseover(function(){
            aSpan.eq(index).stop();
            aSpann.eq(index).stop();
            aImg.eq(index).stop();
            aImg.eq(index).css({zIndex:1}).animate({
                left:250.5,
                width:0
            },80,'',function(){
                $(this).hide();
                aSpan.eq(index).show().css({zIndex:3}).animate({
                    left:0,
                    width:500
                },80)
                aSpann.eq(index).show().css({zIndex:4}).animate({
                    left:0,
                    width:500
                },80)
            })
        })
        $(this).mouseout(function(){
            aSpan.eq(index).stop();
            aSpann.eq(index).stop();
            aImg.eq(index).stop();
            aSpan.eq(index).css({zIndex:1}).animate({
                left:250.5,
                width:0
            },80,''),
            aSpann.eq(index).css({zIndex:1}).animate({
                left:250.5,
                width:0
            },80,'',function(){
                $(this).hide();
                aImg.eq(index).show().css({zIndex:2}).animate({
                    left:0,
                    width:500
                },80)
            })
        })
    })
  })
