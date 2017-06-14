date
cal
pwd
ls -l
mkdir
mv (move or rename)
cp
rm
rm -rf
cat -h
history
[TAB]
node
^c
^a / ^e
document.querySelector('p.important').textContent
document.querySelector('#nav ol li').textContent
document.querySelector('h1, p').textContent = "I'm on the page!"
var big_shot = document.querySelector('#primary')
num += 5
num -= 1
num *= 3
num /= 0.5
num++
num--
++num
--num
\n
===
!==
typeof
document.querySelector('#result').textContent = response
document.querySelector('img').src = image_path
&&
|| // or
Math
Math.PI
Math.E
Math.pow(9, 2)
Math.random()
Math.floor(7.2)
Math.ceil(7.2)
Math.ceil( Math.random() * 10 )
Math.ceil( Math.random() * 10 )
parseInt("23")
parseInt(23)
parseInt("boink")
$('body').css('background-color', 'red')
$('img').attr('src','http://i.imgur.com/nWGCwiE.gif')
$('h1').text('hello')
$('#notification').html('<div class="alert">Hold on! <b>an error</b> has occured!</p>')
$('.container').append("<p>What's the difference between <i>.append()</i> and .html()?</p>")
$('h1').show() - convenience method to set element's 'display' property to 'block'
$('p#secret').hide() - set element's 'display' property to 'none'
$('ol li').fadeIn() - fade in a set of matched elements over time
$('p .comments').fadeOut() - fade out as set of matched elements over time
$('div#thing').slideDown() - animate an element sliding down over time
$('#message').slideUp() - animate an element sliding up over time
$('.alert').slideToggle()
var new_div = $('<div class="important">Got a new div coming in here!</div>')
new_div.css('color','red').attr('id','primary').text("Hi, I'm new here")
$('body').append(new_div)
new_div.fadeOut(2000).delay(1000).fadeIn().slideUp(4000)
$('div').on('click', function(){
  console.log('A div has been clicked!')
})
$('#target').click(function(){
  $('#target').show().css('color', 'red').text('boom goes the dynamite!')
})
$('#target').on('mouseover', function(){
  $('#target').addClass('highlighted')
})
$('#target').on('mouseleave', function(){
  $('#target').removeClass('highlighted')
})
var mouse_tracker = function(event){
  console.log(event.pageX, event.pageY, !!event.which)
})
$('body').on('mousemove', mouse_tracker)
var el_finder = function(event){
  console.log("calling el_finder for:", this, event.target)
  $(this).attr('id', 'active');
}
$('div').click(el_finder)
$('button#go').on('click', function(){
  $('#output').text( $('input#color').val() )
})
$('input#type').on('keypress', function (e) {
  $('label').text(e.keyCode)
})
$('body').on('keypress', function(e){
  String.fromCharCode(e.keyCode)
})
concat()	Joins two or more arrays, and returns a copy of the joined arrays
indexOf()	Search the array for an element and returns its position
join()	Joins all elements of an array into a string
lastIndexOf()	Search the array for an element, starting at the end, and returns its position
pop()	Removes the last element of an array, and returns that element
push()	Adds new elements to the end of an array, and returns the new length
reverse()	Reverses the order of the elements in an array
shift()	Removes the first element of an array, and returns that element
slice()	Selects a part of an array, and returns the new array
sort()	Sorts the elements of an array
splice()	Adds/Removes elements from an array
toString()	Converts an array to a string, and returns the result
unshift()	Adds new elements to the beginning of an array, and returns the new length
valueOf()	Returns the primitive value of an array
