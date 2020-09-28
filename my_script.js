$(function(){

/* Top-Pageボタン制御 */

$('.page_top').hide();

$(window).scroll(function(){
  if($(this).scrollTop() > 100){  //スクロールが100に達した時
    $('.page_top').fadeIn();
  }else{
    $('.page_top').fadeOut();
  }
});

$('.page_top').click(function(){
  $('body,html').animate({scrollTop: 0}, 500);  //topへスクロール
  return false;
});

/* nav ドロップダウンメニュー */
/* 初期表示 */

if(window.matchMedia('(max-width: 680px)').matches){
  $('#drop_menu_hidden').hide();  //スマホサイズの時
}else{
  $('#drop_menu_hidden').hide();  //PCサイズの時
}

/* クリック時操作*/

$('#spnavi li').click(function(){
  if($('#drop_menu_hidden').is(':hidden')){
    $('#drop_menu_hidden:not(:animated)').slideDown('fast');
  }else{
    $('#drop_menu_hidden:not(:animated)').slideUp('fast');
  }
});

/* リサイズ処理 */

$(window).resize(function(){
  if(window.matchMedia('(max-width: 680px)').matchs){
    $('#drop_menu_hidden').hide();  //スマホサイズの時
  }else{
    $('#drop_menu_hidden').show();  //PCサイズの時
  }
})

/* メニューアニメーション操作 */

$('.menu_box img').waypoint(function(){
  if($('.menu_box img').css('visibility') == 'visible'){
  }else{
    $('.menu_box img').css('visibility','visible');
    $('.menu_box img').toggleClass('animated fadeInUp');
  }
},{offset: '50%'});

/* スライドショー */

$('#nav_btn .next').click(function(){
  $('#slide:not(:animated)').animate({
    'margin-left' : -1*$('#slide li').width()
  },function(){
    $('#slide').append($('#slide li:first-child'));  //アニメーション終了後
    $('#slide').css('margin-left','0');
  });
});

$('#nav_btn .prev').click(function(){
  $('#slide:not(:animated)').prepend($('#slide li:last-child'))
  .css('margin-left', -1*$('#slide li').width())
  .animate({
    'margin-left' : 0
  });
});


});
