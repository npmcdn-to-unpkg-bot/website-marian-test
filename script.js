//animate balloons to fit window size
$( "#balloon1" ).click(function() {
  windowHeight = $(window).innerHeight() -50
  $( "#balloon1" )
    .animate({ top: "0px"}, 1000)
    .animate({
      width: "100%",
      left: "25px",
      height: windowHeight
    }, 1000 )
    .animate({ fontSize: "32px" }, 1000, complete: fadeInText() );
    complete: function() {
      $(".main-text").fadeIn({ display: "block"}, 1000);
    }
});

function fadeInText() {
$(".main-text").fadeIn({ display: "block"}, 1000)
};
// //rezise window height function
//
//   function setHeight() {
//     windowHeight = $(window).innerHeight() -50;
//     $('#balloon1').css('min-height', windowHeight);
//   };
//
//
//   $(window).resize(function() {
//     setHeight();
//   });
