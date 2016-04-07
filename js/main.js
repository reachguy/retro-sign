var $lines = $('.lines');
var $engage = $('.engage');
var $btn = $('.btn');

$('svg').on('click', function (e) {
  $('.engage').toggleClass('engaged');
  $btn.toggleClass('button');
  $lines.toggleClass('is-clicked');
});
