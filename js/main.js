$(".c-openBtn").click(function () {
    $(this).toggleClass('active');
    $('.l-header__nav').fadeToggle();
});

$(function(){
	$('.toggle_title').click(function(){
		$(this).toggleClass('selected');
		$(this).next().slideToggle();
	});
});

$('#check').change(function() {
    // チェックが入っていたら有効化
    if ( $(this).is(':checked') ){ 
        // ボタンを有効化
        $('#button').prop('disabled', false);
    } else { 
        // ボタンを無効化
        $('#button').prop('disabled', true); 
    }
});


$('#slider').vegas({
    transitionDuration: 1000,
    delay: 5000,
    animationDuration: 20000,
    animation: 'kenburns',
    slides: [
      { src: './images/top/main-visual.jpg'},
      { src: './images/top/slide02.jpg'},
      { src: './images/top/slide03.jpg'},
      { src: './images/top/top-about.jpg'},   
      ],
});

$(function() {
  $(window).on('scroll resize', function() {
    var setHeight = 100;//設定した高さ
    var wHeight = $(window).height();//ウィンドウの高さ
    var scrollTop = $(window).scrollTop();//ページの上からスクロールされた分
    $('.animate').each(function() {
      var targetPosition = $(this).offset().top;//対象要素と画面上部までの距離
      if(scrollTop > targetPosition - wHeight + setHeight) {
        $(this).addClass('show');
      }
    })
  });
});

$(window).on('load scroll', function(){
  
  $('.animated').css('opacity', '0');

  //animatedのclassを持った要素をセレクタに指定
  var elem = $('.animated');

  elem.each(function () {

    //data属性からアニメーション名を取得
    var isAnimate = $(this).data('animate');
    //animated要素に位置を取得
    var elemOffset = $(this).offset().top;
    //現在のスクロールポジションを取得
    var scrollPos = $(window).scrollTop();
    //ウィンドウの高さを取得
    var wh = $(window).height();

    //animated要素がウィンドウ内の中央位置にきたら処理
    if(scrollPos > elemOffset - wh + (wh / 2)){
      $(this).addClass(isAnimate);
    }
  });

});