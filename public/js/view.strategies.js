$(function() {
  //calculate vertical divider css
  var fourWideWidth = $(".fluid-segment .four.wide.column").outerWidth();
  $(".vertical.divider.strategies").css({
    left: fourWideWidth
  });
});
