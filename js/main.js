var $svg = $('svg');
var $engage = $('.engage');
var $btn = $('.btn');

$('svg').on('click', function (e) {
  $('.engage').toggleClass('engaged');
  $btn.toggleClass('button');
  $('svg').toggleClass('is-pressed');
});
