var $header = $('header');
var $h1 = $('h1');
var $main = $('main');
var $p1 = $('main p:first-child');
var $h2 = $('h2');
var $ul = $('ul');
var $img = $('img');
var $firstLi = $('li:first-child');
var $lastLi = $('li:last-child');
var $dl = $('dl');
var $dt = $('dt');
var $lastLi2 = $('li:last-child');

$header.addClass('masthead');
$h1.removeClass('big-heading');
$h1.addClass('logo');
$main.addClass('wrapper');
$p1.addClass('intro');
$h2.addClass('slug-head');
$ul.addClass('slug-list');
$img.addClass('slug-img');
$firstLi.addClass('slug-list-first');
$lastLi.addClass('slug-list-last');
$dl.addClass('classification');
$dt.removeClass('big-label');
$lastLi2.show();
