$(document).ready(function() {	

console.log('spaghetti');

$('.best-quote-ever').click(function(e) {
	$('.dropdown').slideToggle()
})

$('.dropdown').click(function(e) {
	$('.by-steven').slideToggle()
})


//document.getElementById('button');

//Math.floor(Math.random() * array.length)

var images = ['Winston1.jpg', 'Abe1.jpg', 'Homer1.jpg', 'Dude1.jpeg'];


//document.getElementById('button');

//$('.container').css("background-image", 'url(../images/winston1.jpg)';)

Math.floor(Math.random() * images.length)

$('.button').click(function(e) {
	//$('images').remove();
	$('.container').css({'background-image': 'url: images/' + images[Math.floor(Math.random() * images.length)] +')'});
	$('<img src = "images/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.container');
	})

});