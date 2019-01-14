/*
$(function () {

  function scrollEnable() {
    var html = jQuery('html');
    var scrollPosition = html.data('scroll-position');
    console.log(scrollPosition);
    html.css('overflow', html.data('previous-overflow'));
    window.scrollTo(scrollPosition[0], scrollPosition[1]);
  }

  function scrollDisable() {
    var scrollPosition = [
      self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
      self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
    ];

    var html = jQuery('html'); // it would make more sense to apply this to body, but IE7 won't have that
    html.data('scroll-position', scrollPosition);
    html.data('previous-overflow', html.css('overflow'));
    html.css({'overflow':'hidden'});
    window.scrollTo(scrollPosition[0], scrollPosition[1]);
  }
  scrollEnable();
  scrollDisable();
});
*/
function openBlackMark(){
  $('body').addClass('blackMark');
  $('.blackmark').removeClass('off');
}
function offBlackMark(){
  $('body').removeClass('blackMark');
  $('.blackmark').addClass('off');
}