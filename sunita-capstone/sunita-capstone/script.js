$(function () {
  $('.images').slick({
    autoplay: true
  });
  var $window = $(window);
  var $header = $('header');

  $window.on('scroll', function(){
    console.log($window.scrollTop());
    $header.css('background-color', 'green');
  });
})

document.addEventListener("click", changeColor, false);

function changeColor() {
    document.body.style.backgroundColor = "	#D8BFD8";
}
