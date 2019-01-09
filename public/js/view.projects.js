$(function() {
  $(".image").dimmer({
    on: "hover",
    duration: {
      show: 1,
      hide: 1
    }
  });

  $(".dimmer .content").click(function() {
    var contentId = $(this).attr("id");
    var modalId = "#modal-".concat(contentId);
    $(modalId).modal("show");
  });

  // var windowHeight = $(window).height();
  // alert(windowHeight);
  // $(".ui.modal").css({
  //   height: windowHeight * 0.8
  // });
});
