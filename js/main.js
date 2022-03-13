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