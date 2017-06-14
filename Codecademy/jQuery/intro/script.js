$(document).ready(function() {
  $('div').click(function() {
    $('div').fadeOut('slow');
  });
});



// $(document).ready(function() {
//   $('div').slideDown('slow');
// });



// $(document).ready(function() {
//   $('div').mouseenter(function() {
//     $('div').fadeTo('fast', 1);
//   });
//   $('div').mouseleave(function() {
//     $('div').fadeTo('fast', 0.5);
//   });
// });



// $(document).ready(function() {
//   $('div').mouseenter(function() {
//     $(this).animate({
//       height: '+=10px'
//     });
//   });
//   $('div').mouseleave(function() {
//     $(this).animate({
//       height: '-=10px'
//     });
//   });
//   $('div').click(function() {
//     $(this).toggle(1000);
//   });
// });



// $(document).ready(function() {
//   $('p').text('The DOM is now loaded and can be manipulated');
//   $('a').click(function(event) {
//     alert('The link will no longer take you to jquery.com');
//     event.preventDefault();
//   });
//   $('a').addClass('test').delay(1000).fadeOut(1000);
//   $('a').fadeIn(1000);
//   $('a').click(function() {
//     event.preventDefault();
//     $(this).hide('slow');
//     $(this).show('fast');
//   });
//   $('div').hide();
//   $('div').slideDown('slow');
//   $('div').fadeTo('slow', 0.75);
//   $('div').mouseenter(function() {
//     $(this).animate({
//       height: '+=10px'
//     });
//   });
//   $('div').mouseleave(function() {
//     $(this).animate({ // or $('div').fadeTo('fast', 1);
//       height: '-=10px' // do not need this when using FadeTo/In/Out
//     });
//   });
//   $('div').click(function() {
//     $(this).toggle(1000);
//   });
// });
