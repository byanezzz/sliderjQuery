$(document).ready(function(){
  var items = $('.slider li').length;
  var pos = 1;
  for (var i = 0; i < items; i++) {
    $('.pagination').append('<li><span class="fa fa-circle" aria-hidden="true"></span></li>')
  }
  $('.slider li').hide();
  $('.slider li:first').show();
  $('.pagination li span').css({
    'padding': '5px 9px'});
  $('.pagination li:first span').css({
    'color': 'grey'});
  $('.pagination li').click(pagination);
  $('.right i').click(next);
  $('.left i').click(prev);
  
  setInterval(function(){
    next();
  }, 4000);
  function pagination() {
    var positionImg = $(this).index() + 1;
    $('.slider li').hide();
    $('.slider li:nth-child(' + positionImg + ')').fadeIn();
    $('.pagination li span').css({'color':'#337ab7'});
    $('.pagination li:nth-child(' + positionImg + ') span').css({'color':'grey'});
    pos = positionImg;
  }
  function next() {
    if (pos >= items) {
      pos = 1;
    }else {
      pos++;
    }
    $('.slider li').hide();
    $('.slider li:nth-child(' + pos + ')').fadeIn();
    $('.pagination li span').css({'color':'#337ab7'});
    $('.pagination li:nth-child(' + pos + ') span').css({'color':'grey'});
  } 
  function prev() {
    if (pos <= 1) {
      pos = items;
    }else {
      pos--;
    }
    $('.slider li').hide();
    $('.slider li:nth-child(' + pos + ')').fadeIn();
    $('.pagination li span').css({'color':'#337ab7'});
    $('.pagination li:nth-child(' + pos + ') span').css({'color':'grey'});
  } 
});