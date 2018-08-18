
//全局变量 i表示图片的索引，timer
var i=0;
var timer;
$(function(){
	/*找到id=igs里面索引为0的div显示出来,其他平行元素隐藏*/
	$("#igs div").eq(0).show().siblings().hide();
	Showtime();
	//鼠标移到当前的div时
	$(".ch div").hover(function(){
		i = $(this).index();	//获取鼠标当前的索引，
		Show(); 				//显示索引当前对应的图片
		clearInterval(timer);	//清除轮播，停止播放
	}, function(){
		Showtime(); 			//鼠标移走时，继续播放
	});
	//鼠标点击当前按钮时执行的事件，往左播放
	$(".btn1").click(function(){
	clearInterval(timer);		//清除轮播，停止播放
	if(i==0){					//如果当前的索引是第一张图片，切换到最好一张
		i=4;
	}
	i--;						//每点击一次索引i自减，也就是图片往左播放
	Show();						//开始轮播
	Showtime();
	});
	//往右播放
	$(".btn2").click(function(){
		clearInterval(timer);//清除轮播
		if(i==3){
			i=-1;
		}
		i++;
		Show();
		Showtime();
	});
});

//显示图片
function Show(){
	//给图片添加300毫秒的过渡动画
	$("#igs div").eq(i).fadeIn(300).siblings().fadeOut(300);
	//当图片切换时，下面的数字也会变化，改变背景颜色达到这一效果
	$(".ch div").eq(i).css("background-color","red").siblings().css("background-color","#f25e5e66");}
//切换图片
function Showtime(){
	/*开始轮播*/
	timer = setInterval(function(){
	i++;
	/*如果是最后一张图片，那么从第一张开始*/
	if(i==4)
		i=0;
	//显示图片
	Show();
	},2800); //2800表示2800毫秒执行一次fuction；setInterval(function(),time)
}

