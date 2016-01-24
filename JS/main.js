$(document).ready(function() {	
console.log('spaghetti');

$('.and-i-quote').click(function(e) {
	$('.dropdown').slideToggle()
	$('.by-steven').slideUp()
})

$('.dropdown').click(function(e) {
	$('.by-steven').slideToggle()
})

$('.by-steven').click(function(e) {
	$('.container').css('background-image', 'url(images/steven.jpg)');
	$('.word-box').html('<p>' + '' + '</p>');
})

});

$('.and-i-quote').hover(function() {
	$('.and-i-quote').css('color', 'rgba(63, 84, 191, .6)');
	}, function() {
		$('.and-i-quote').css('color', '#e0de60');
});

$('.and-i-quote').hover(function() {
	$('.and-i-quote').css('-webkit-text-stroke-color', 'white');
	}, function() {
		$('.and-i-quote').css('-webkit-text-stroke-color', 'black');
});

$('.dropdown').hover(function() {
	$('.dropdown').css('color', 'rgba(63, 84, 191, .6)');
	}, function() {
		$('.dropdown').css('color', '#e0de60');

});
$('.dropdown').hover(function() {
	$('.dropdown').css('-webkit-text-stroke-color', 'white');
	}, function() {
		$('.dropdown').css('-webkit-text-stroke-color', 'black');
});

$('.by-steven').hover(function() {
	$('.by-steven').css('color', 'rgba(63, 84, 191, .6)');
	}, function() {
		$('.by-steven').css('color', '#e0de60');
});

$('.by-steven').hover(function() {
	$('.by-steven').css('-webkit-text-stroke-color', 'white');
	}, function() {
		$('.by-steven').css('-webkit-text-stroke-color', 'black');
});

$('.button').hover(function() {
	$('.button').css('background-color', 'rgba(63, 84, 191, .8)');
	}, function() {
		$('.button').css('background-color', '#e0de60');
});

$('.button').hover(function() {
	$('.button').css('border', '2px solid white');
	}, function() {
		$('.button').css('border', '2px solid black');
});

$('.button').hover(function() {
	$('.button').css('border', '.5px solid white');
	}, function() {
		$('.button').css('border', '3px solid black');
});

$('.button').hover(function() {
	$('.button').css('box-shadow', '-1px -1px 1px #ffffff, 1px 1px 1px #000000');
	}, function() {
		$('.button').css('box-shadow', '-1px -1px 1px #717472, 1px 1px 1px #717472');
});

$('.button').click(function(e) { 
	console.log('clickity-clickity')

	$('.container').fadeOut('slow', function(){
		changePicture();
		$('.container').fadeIn();
	})
	

function changePicture(){

$('.word-box').html('<p>' + picture + '</p>');

$('.container').css('background-image', 'url(' + picture + ')');

if (picture == winston1) {
	$('.word-box').html('<p>' + winDisplay1 + '</p>');}
	
else if (picture == abe1) {
	$('.word-box').html('<p>' + abeDisplay1 + '</p>');}

else if (picture == anne1) {
	$('.word-box').html('<p>' + annDisplay1 + '</p>');}

else if (picture == homer1) {
	$('.word-box').html('<p>' + homDisplay1 + '</p>');}

else if (picture == bruce1) {
	$('.word-box').html('<p>' + bruDisplay1 + '</p>');}

else if (picture == bruce2) {
	$('.word-box').html('<p>' + bruDisplay2 + '</p>');}

else if (picture == calvin1) {
	$('.word-box').html('<p>' + calDisplay1 + '</p>');}

else if (picture == calvin2) {
	$('.word-box').html('<p>' + calDisplay2 + '</p>');}

else if (picture == calvin3) {
	$('.word-box').html('<p>' + calDisplay3 + '</p>');}

else if (picture == carnegie1) {
	$('.word-box').html('<p>' + carDisplay1 + '</p>');}

else if (picture == degaulle1) {
	$('.word-box').html('<p>' + degDisplay1 + '</p>');}

else if (picture == disney1) {
	$('.word-box').html('<p>' + disDisplay1 + '</p>');}

else if (picture == douglass1) {
	$('.word-box').html('<p>' + douDisplay1 + '</p>');}

else if (picture == dubois1) {
	$('.word-box').html('<p>' + dubDisplay1 + '</p>');}

else if (picture == dude1) {
	$('.word-box').html('<p>' + dudDisplay1 + '</p>');}

else if (picture == dude2) {
	$('.word-box').html('<p>' + dudDisplay2 + '</p>');}

else if (picture == dumas1) {
	$('.word-box').html('<p>' + dumDisplay1 + '</p>');}

else if (picture == einstein1) {
	$('.word-box').html('<p>' + einDisplay1 + '</p>');}

else if (picture == eleanor1) {
	$('.word-box').html('<p>' + eleDisplay1 + '</p>');}

else if (picture == elizabeth1) {
	$('.word-box').html('<p>' + eliDisplay1 + '</p>');}

else if (picture == fdr1) {
	$('.word-box').html('<p>' + fdrDisplay1 + '</p>');}

else if (picture == grant1) {
	$('.word-box').html('<p>' + graDisplay1 + '</p>');}

else if (picture == groucho1) {
	$('.word-box').html('<p>' + groDisplay1 + '</p>');}

else if (picture == hem1) {
	$('.word-box').html('<p>' + hemDisplay1 + '</p>');}

else if (picture == hillary1) {
	$('.word-box').html('<p>' + hilDisplay1 + '</p>');}

else if (picture == homer2) {
	$('.word-box').html('<p>' + homDisplay2 + '</p>');}

else if (picture == jefferson1) {
	$('.word-box').html('<p>' + jefDisplay1 + '</p>');}

else if (picture == jfk1) {
	$('.word-box').html('<p>' + jfkDisplay1 + '</p>');}

else if (picture == jesus1) {
	$('.word-box').html('<p>' + jesDisplay1 + '</p>');}

else if (picture == julius1) {
	$('.word-box').html('<p>' + julDisplay1 + '</p>');}

else if (picture == kermit1) {
	$('.word-box').html('<p>' + kerDisplay1 + '</p>');}

else if (picture == langston1) {
	$('.word-box').html('<p>' + lanDisplay1 + '</p>');}

else if (picture == law1) {
	$('.word-box').html('<p>' + lawDisplay1 + '</p>');}

else if (picture == law2) {
	$('.word-box').html('<p>' + lawDisplay2 + '</p>');}

else if (picture == napoleon1) {
	$('.word-box').html('<p>' + napDisplay1 + '</p>');}

else if (picture == shakespeare1) {
	$('.word-box').html('<p>' + shaDisplay1 + '</p>');}

else if (picture == teddy1) {
	$('.word-box').html('<p>' + tedDisplay1 + '</p>');}

else if (picture == tuchman1) {
	$('.word-box').html('<p>' + tucDisplay1 + '</p>');}

else if (picture == twain1) {
	$('.word-box').html('<p>' + twaDisplay1 + '</p>');}

else if (picture == vader1) {
	$('.word-box').html('<p>' + vadDisplay1 + '</p>');}

else if (picture == vader2) {
	$('.word-box').html('<p>' + vadDisplay2 + '</p>');}

else if (picture == wbuffett1) {
	$('.word-box').html('<p>' + wbuDisplay1 + '</p>');}

else if (picture == winston2) {
	$('.word-box').html('<p>' + winDisplay2 + '</p>');}
}

var anne1 = 'images/anne1.jpg';

	var winston1 = 'images/Winston1.jpg';

	var abe1 = 'images/Abe1.jpg';

	var homer1 = 'images/homer1.jpg';

	var bruce1 = 'images/bruce1.jpg';

	var dude1 = 'images/Dude1.jpeg';

	var bruce2 = 'images/bruce2.jpg';

	var calvin1 = 'images/calvin1.jpg';

	var calvin2 = 'images/calvin2.gif';

	var calvin3 = 'images/calvin3.gif';

	var carnegie1 = 'images/carnegie1.jpg';

	var degaulle1 = 'images/degaulle1.jpg';

	var disney1 = 'images/disney1.jpg';

	var douglass1 = 'images/douglass1.jpg';

	var dubois1 = 'images/dubois1.jpg'; 

	var dude2 = 'images/dude2.jpg';

	var dumas1 = 'images/dumas1.jpg';

	var einstein1 = 'images/einstein1.jpg';

	var eleanor1 = 'images/eleanor1.jpg';

	var elizabeth1 = 'images/elizabeth1.jpg';

	var fdr1 = 'images/FDR1.jpg';

	var grant1 = 'images/Grant1.gif';

	var groucho1 = 'images/groucho1.jpg';

	var hem1 = 'images/Hem1.jpg';

	var hillary1 = 'images/Hillary1.jpg';

	var homer2 = 'images/Homer2.jpg'; 

	var jefferson1 = 'images/jefferson1.jpg'; 

	var jfk1 = 'images/jfk1.jpeg';

	var jesus1 = 'images/jesus1.jpg';

	var julius1 = 'images/julius1.jpg';

	var kermit1 = 'images/kermit1.jpg';

	var langston1 = 'images/langston1.png';

	var law1 = 'images/Law1.jpg';

	var law2 = 'images/law2.jpg';

	var napoleon1  = 'images/napoleon1.png';

	var shakespeare1 = 'images/shakespeare1.jpg';

	var teddy1 = 'images/teddy1.jpg';

	var tuchman1 = 'images/tuchman1.jpg';

	var twain1 = 'images/twain1.jpg';

	var vader1 = 'images/vader1.png'; 

	var vader2 = 'images/vader2.jpg';

	var wbuffett1 = 'images/wbuffett1.jpg';

	var winston2 = 'images/winston2.jpeg';


var images = [winston1, anne1, abe1, homer1, bruce1, bruce2, dude1, calvin1, calvin2, calvin3, carnegie1, degaulle1, disney1, douglass1, dubois1, dude2, dumas1, einstein1, eleanor1, elizabeth1, fdr1, grant1, groucho1, hem1, hillary1, homer2, jefferson1, jfk1, jesus1, julius1, kermit1, langston1, law1, law2, napoleon1, shakespeare1, teddy1, tuchman1, twain1, vader1, vader2, wbuffett1, winston2]

var picture = images[Math.floor(Math.random()*images.length)];

/////////////////////////////////////////////

var winQ11 = '"A lie gets halfway around the world before the truth has a chance to get its pants on." -Sir Winston Churchill';

var winQ12 = '"If you\'re going through hell, keep going." -Sir Winston Churchill';

var winQ13 = '"It is a good thing for an uneducated man to read books of quotations." -Sir Winston Churchill';

var winQ14 = '"There are a terrible lot of lies going about the world, and the worst of it is that half of them are true." -Sir Winston Churchill';

var winQuotes1 = [winQ11, winQ12, winQ13, winQ14]

var winDisplay1 = winQuotes1[Math.floor(Math.random()*winQuotes1.length)];

////////////////////////////////////////////

var abeQ1 = '"Determine that the thing can and shall be done, and then we shall find a way" -Abraham Lincoln'

var abeQ2 = '"Whatever you are, be a good one." -Abraham Linconln'

var abeQ3 = '"Things may come to those who wait, but only the things left by those who hustle." -Abraham Lincoln'

var abeQuotes1 = [abeQ1, abeQ2, abeQ3]

var abeDisplay1 = abeQuotes1[Math.floor(Math.random()*abeQuotes1.length)];

////////////////////////////////////////////

var annQ1 = '"I keep my ideals, because in spite of everything I still believe that people are really good at heart." -Anne Frank'

var annQ2 = '"Whoever is happy will make others happy too." -Anne Frank'

var annQ3 = '"How wonderful it is that nobody need wait a single moment before starting to improve the world." -Anne Frank'

var annQuotes1 = [annQ1, annQ2, annQ3]

var annDisplay1 = annQuotes1[Math.floor(Math.random()*annQuotes1.length)];

//////////////////////////////////////////////

var homQ11 = '"Kids, you tried your best and you failed miserably. The lesson is, never try." -Homer Simpson'

var homQ12 = '"Fame was like a drug, but what was even more like a drug were the drugs." -Homer Simpson'

var homQ13 = '"Beer. Now there\'s a temporary solution." -Homer Simpson'

var homQuotes1 = [homQ11, homQ12, homQ13]

var homDisplay1 = homQuotes1[Math.floor(Math.random()*homQuotes1.length)];

//////////////////////////////////////////////

var bruQ11 = '"To hell with circumstances; I create opportunities." -Bruce Lee'

var bruQ12 = '"I fear not the man who has practiced ten-thousand kicks once, but I fear the man who has practiced one kick ten-thousand times." -Bruce Lee'

var bruQ13 = '"A wise man can learn more from a foolish question than a fool can learn from a wise answer." -Bruce Lee'

var bruQ14 = '"It\’s not the daily increase but daily decrease. Hack away at the unessential." -Bruce Lee'

var bruQuotes1 = [bruQ11, bruQ12, bruQ13, bruQ14]

var bruDisplay1 = bruQuotes1[Math.floor(Math.random()*bruQuotes1.length)];

//////////////////////////////////////////////

var bruQ21 = '"If you spend too much time thinking about a thing, you’ll never get it done." -Bruce Lee'

var bruQ22 = '"I fear not the man who has practiced ten-thousand kicks once, but I fear the man who has practiced one kick ten-thousand times." -Bruce Lee'

var bruQ23 = '"As you think, so shall you become" -Bruce Lee'

var bruQ24 = '"Don’t fear failure. Not failure, but low aim, is the crime. In great attempts it is glorious even to fail." -Bruce Lee'

var bruQuotes2 = [bruQ21, bruQ22, bruQ23, bruQ24]

var bruDisplay2 = bruQuotes2[Math.floor(Math.random()*bruQuotes2.length)];

//////////////////////////////////////////////


var calQ11 = '"Why waste time learning, when ignorance is instantaneous?" -Calvin'

var calQ12 = '"Life\'s disappointments are harder to take when you don\'t know any swear words." -Calvin'

var calQ13 = '"It\'s psychosomatic. You need a lobotomy. I\'ll get a saw." -Calvin'

var calQuotes1 = [calQ11, calQ12, calQ13]

var calDisplay1 = calQuotes1[Math.floor(Math.random()*calQuotes1.length)];

//////////////////////////////////////////////

var calQ21 = '"You know, Hobbes, some days even my lucky rocket ship underpants don’t help." -Calvin'

var calQ22 = '"It\'s hard to be religious when certain people are never incinerated by bolts of lightning." -Calvin'

var calQ23 = '"Weekends don\'t count unless you spend them doing something completely pointless." -Calvin'

var calQuotes2 = [calQ21, calQ22, calQ23]

var calDisplay2 = calQuotes2[Math.floor(Math.random()*calQuotes2.length)];

//////////////////////////////////////////////

var calQ31 = '"Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us." -Calvin'

var calQ32 = '"Reality continues to ruin my life." -Calvin'

var calQ33 = '"As you can see, I have memorized this utterly useless piece of information long enough to pass a test question. I now intend to forget it forever. You\'ve taught me nothing except how to cynically manipulate the system. Congratulations." -Calvin'

var calQuotes3 = [calQ31, calQ32, calQ33]

var calDisplay3 = calQuotes3[Math.floor(Math.random()*calQuotes3.length)];

//////////////////////////////////////////////

var carQ1 = '"The way to become rich is to put all your eggs in one basket and then watch that basket." -Andrew Carnegie'

var carQ2 = '"There is little success where there is little laughter." -Andrew Carnegie'

var carQ3 = '"No person will make a great business who wants to do it all himself or get all the credit." -Andrew Carnegie'

var carQuotes1 = [carQ1, carQ2, carQ3]

var carDisplay1 = carQuotes1[Math.floor(Math.random()*carQuotes1.length)];


//////////////////////////////////////////////

var degQ1 = '"How can you govern a country which has 246 varieties of cheese?" -Charles DeGaulle'

var degQ2 = '"The better I get to know men, the more I find myself loving dogs." -Charles DeGaulle'

var degQ3 = '"Since a politician never believes what he says, he is quite surprised to be taken at his word." -Charles DeGaulle'

var degQuotes1 = [degQ1, degQ2, degQ3]

var degDisplay1 = degQuotes1[Math.floor(Math.random()*degQuotes1.length)];


//////////////////////////////////////////////


var disQ11 = '"You may not realize it when it happens, but a kick in the teeth may be the best thing in the world for you." -Walt Disney'

var disQuotes1 = [disQ11]

var disDisplay1 = disQuotes1[Math.floor(Math.random()*disQuotes1.length)];

//////////////////////////////////////////////

var douQ1 = '"I prayed for twenty years but received no answer until I prayed with my legs." -Frederick Douglass'

var douQ2 = '"Without a struggle, there can be no progress." -Frederick Douglass'

var douQuotes1 = [douQ1, douQ2]

var douDisplay1 = douQuotes1[Math.floor(Math.random()*douQuotes1.length)];

//////////////////////////////////////////////

var dubQ1 = '"To stimulate wildly weak and untrained minds is to play with mighty fires." -W.E.B. DuBois'

var dubQ2 = '"When you have mastered numbers, you will in fact no longer be reading numbers, any more than you read words when reading books. You will be reading meanings." W.E.B. DuBois'

var dubQ3 = '"If there is anybody in this land who thoroughly believes that the meek shall inherit the earth, they have not often let their presence be known." W.E.B. DuBoise'

var dubQuotes1 = [dubQ1, dubQ2, dubQ3]

var dubDisplay1 = dubQuotes1[Math.floor(Math.random()*dubQuotes1.length)];

//////////////////////////////////////////////

var dudQ11 = '"Let me explain something to you. Um, I am not "Mr. Lebowski". You\'re Mr. Lebowski. I\'m the Dude. So that\'s what you call me. You know, that or, uh, His Dudeness, or uh, Duder, or El Duderino if you\'re not into the whole brevity thing." -The Dude'

var dudQ12 = '"Yeah, well. The Dude abides." -The Dude'

var dudQ13 = '"Yeah, well, you know, that\'s just, like, your opinion, man." -The Dude'

var dudQuotes1 = [dudQ11, dudQ12, dudQ13]

var dudDisplay1 = dudQuotes1[Math.floor(Math.random()*dudQuotes1.length)];

//////////////////////////////////////////////

var dudQ21 = '"Obviously, you\'re not a golfer." -The Dude'

var dudQ22 = '"Yeah, well. The Dude abides." -The Dude'

var dudQ23 = '"Walter, I love you, but sooner or later, you\'re going to have to face the fact you\'re a goddamn moron." -The Dude'

var dudQuotes2 = [dudQ21, dudQ22, dudQ23]

var dudDisplay2 = dudQuotes2[Math.floor(Math.random()*dudQuotes2.length)];

//////////////////////////////////////////////

var dumQ11 = '"All generalizations are dangerous, even this one." -Alexandre Dumas'

var dumQ12 = '"Rogues are preferable to imbeciles because they sometimes take a rest." -Alexandre Dumas'

var dumQ13 = '"It is rare that one can see in a little boy the promise of a man, but one can almost always see in a little girl the threat of a woman." -Alexandre Dumas'

var dumQuotes1 = [dumQ11, dumQ12, dumQ13]

var dumDisplay1 = dumQuotes1[Math.floor(Math.random()*dumQuotes1.length)];

//////////////////////////////////////////////

var einQ11 = '"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe." -Albert Einstein'

var einQ12 = '"Reality is merely an illusion, albeit a very persistent one." -Albert Einstein'

var einQ13 = '"We can\'t solve problems by using the same kind of thinking we used when we created them." -Albert Einstein'

var einQuotes1 = [einQ11, einQ12, einQ13]

var einDisplay1 = einQuotes1[Math.floor(Math.random()*einQuotes1.length)];

//////////////////////////////////////////////

var eleQ11 = '"No one can make you feel inferior without your consent" -Eleanor Roosevelt'

var eleQ12 = '"Do one thing every day that scares you." -Eleanor Roosavelt'

var eleQ13 = '"Never allow a person to tell you no who doesn\'t have the power to say yes." -Eleanor Roosevelt'

var eleQ14 = '"It is better to light a candle than curse the darkness." -Eleanor Roosevelt'

var eleQuotes1 = [eleQ11, eleQ12, eleQ13]

var eleDisplay1 = eleQuotes1[Math.floor(Math.random()*eleQuotes1.length)];

//////////////////////////////////////////////

var eliQ11 = '"I would rather be a beggar and single than a queen and married." -Elizabeth I'

var eliQ12 = '"Anger makes dull men witty, but it keeps them poor." -Elizabeth I'

var eliQuotes1 = [eliQ11, eliQ12]

var eliDisplay1 = eliQuotes1[Math.floor(Math.random()*eliQuotes1.length)];

//////////////////////////////////////////////

var fdrQ1 = '"It is common sense to take a method and try it.  If it fails, admit it frankly and try another.  But above all, try something." -Franklin D. Roosevelt'

var fdrQ2 = '"There are many ways of going forward, but only one way of standing still" -Franklin D. Roosevelt'

var fdrQ3 = '"I think we consider too much the good luck of the early bird and not enough the bad luck of the early worm." -Franklin D. Roosevelt'

var fdrQuotes1 = [fdrQ1, fdrQ2, fdrQ3]

var fdrDisplay1 = fdrQuotes1[Math.floor(Math.random()*fdrQuotes1.length)];

//////////////////////////////////////////////

var graQ11 = '"I know only two tunes: one of them is "Yankee Doodle", and the other one isn\'t." -Ulysses S. Grant'

var graQ12 = '"In every battle there comes a time when both sides consider themselves beaten, then he who continues the attack wins." -Ulysses S. Grant'

var graQ13 = '"I know no method to secure the repeal of bad or obnoxious laws so effective as their stringent execution." -Ulysses S. Grant'

var graQuotes1 = [graQ11, graQ12, graQ13]

var graDisplay1 = graQuotes1[Math.floor(Math.random()*graQuotes1.length)];


//////////////////////////////////////////////

var groQ11 = '"I\'ve had a perfectly wonderful evening. But this wasn\'t it." -Groucho Marx'

var groQ12 = '"Politics is the art of looking for trouble, finding it everywhere, diagnosing it incorrectly and applying the wrong remedies" -Groucho Marx'

var groQ13 = '"Those are my principles, and if you don\'t like them... well, I have others." -Groucho Marx'

var groQ14 = '"I refuse to join any club that would have me as a member." -Groucho Marx'

var groQ15 = '"Anyone who says he can see through women is missing a lot." -Groucho Marx'

var groQuotes1 = [groQ11, groQ12, groQ13, groQ14, groQ15]

var groDisplay1 = groQuotes1[Math.floor(Math.random()*groQuotes1.length)];

/////////////////////////////////////////////


//////////////////////////////////////////////

var hemQ11 = '"The world breaks everyone, and afterward some are strong at the broken places." -Ernest Hemingway'

var hemQ12 = '"The best way to find out if you can trust somebody is to trust them." -Ernest Hemingway'

var hemQ13 = '"Always do sober what you said you\'d do drunk. That will teach you to keep your mouth shut." -Ernest Hemingway'

var hemQ14 = '"I love sleep. My life has the tendency to fall apart when I\'m awake, you know?" -Ernest Hemingway'

var hemQuotes1 = [hemQ11, hemQ12, hemQ13, hemQ14]

var hemDisplay1 = hemQuotes1[Math.floor(Math.random()*hemQuotes1.length)];

//////////////////////////////////////////////

var hilQ11 = '"Nobody climbs mountains for scientific reasons. Science is used to raise money for the expeditions, but you really climb for the hell of it." -Sir Edmund Hillary'

var hilQ12 = '"People do not decide to become extraordinary. They decide to accomplish extraordinary things." -Sir Edmund Hillary'

var hilQ13 = '"You don\'t have to be a fantastic hero to do certain things -- to compete. You can be just an ordinary chap, sufficiently motivated to reach challenging goals." -Sir Edmund Hillary'

var hilQuotes1 = [hilQ11, hilQ12, hilQ13]

var hilDisplay1 = hilQuotes1[Math.floor(Math.random()*hilQuotes1.length)];

//////////////////////////////////////////////

var homQ21 = '"Sensitive love letters are my speciality: Dear Baby, Welcome to Dumpsville. Population: You. P.S. I\'m gay." -Homer Simpson'

var homQ22 = '"I want it all: the terrifying lows, the dizzying highs, the creamy middles!" -Homer Simpson'

var homQ23 = '"And how is education supposed to make me feel smarter? Besides, every time I learn something new, it pushes some old stuff out of my brain. Remember when I took that home winemaking course, and I forgot how to drive?" -Homer Simpson'

var homQuotes2 = [homQ21, homQ22, homQ23]

var homDisplay2 = homQuotes2[Math.floor(Math.random()*homQuotes2.length)];

//////////////////////////////////////////////

var jefQ11 = '"Never put off till to-morrow what you can do to-day." -Thomas Jefferson'

var jefQ12 = '"Never buy what you do not want because it is cheap; it will be dear to you." -Thomas Jefferson'

var jefQ13 = '"Nothing gives one person so much advantage over another as to remain always cool and unruffled under all circumstances." -Thomas Jefferson'

var jefQuotes1 = [jefQ11, jefQ12, jefQ13]

var jefDisplay1 = jefQuotes1[Math.floor(Math.random()*jefQuotes1.length)];

//////////////////////////////////////////////

var jfkQ11 = '"My experience in government is that when things are non-controversial, beautifully coordinated and all the rest, it must be that there is not much going on." -John F. Kennedy'

var jfkQ12 = '"Forgive your enemies, but never forget their names." -John F. Kennedy'

var jfkQ13 = '"I have just received the following telegram from my generous Daddy. It says, Dear Jack: Don’t buy a single vote more than necessary. I’ll be dammed if I’m going to pay for a landslide." -John F. Kennedy'

var jfkQuotes1 = [jfkQ11, jfkQ12, jfkQ13]

var jfkDisplay1 = jfkQuotes1[Math.floor(Math.random()*jfkQuotes1.length)];

//////////////////////////////////////////////


var jesQ1 = '"You said it, man. Nobody fucks with da Jesus." -Jesus Quintana'

var jesQuotes1 = [jesQ1]

var jesDisplay1 = jesQuotes1[Math.floor(Math.random()*jesQuotes1.length)];

//////////////////////////////////////////////

var julQ11 = '"What we wish, we readily believe, and what we ourselves think, we imagine others think also." -Julius Caesar'

var julQ12 = '"I came, I saw, I conquered." -Julius Caesar'

var julQ13 = '"For those closest to a man ought not to allow his death to end their loyalty to him." -Julius Caesar'

var julQuotes1 = [julQ11, julQ12, julQ13]

var julDisplay1 = julQuotes1[Math.floor(Math.random()*julQuotes1.length)];

//////////////////////////////////////////////

var kerQ11 = '"It\'s not easy being green." -Kermit The Frog'

var kerQ12 = '"Here\’s some simple advice: always be yourself. Never take yourself too seriously. And beware of advice from experts, pigs, and members of Parliament." -Kermit The Frog'

var kerQ13 = '"Life\'s like a movie. Write your own ending... " -Kermit The Frog'

var kerQuotes1 = [kerQ11, kerQ12, kerQ13]

var kerDisplay1 = kerQuotes1[Math.floor(Math.random()*kerQuotes1.length)];

//////////////////////////////////////////////

var lanQ11 = '"Humor is laughing at what you haven\'t got when you ought to have it." -Langston Hughes'

var lanQ12 = '"I swear to the Lord, I still can\'t see, Why Democracy means, Everybody but me." -Langston Hughes'

var lanQ13 = '"I will not take "but" for an answer." -Langston Hughes'

var lanQuotes1 = [lanQ11, lanQ12, lanQ13]

var lanDisplay1 = lanQuotes1[Math.floor(Math.random()*lanQuotes1.length)];

//////////////////////////////////////////////


var lawQ11 = '"Freedom is enjoyed when you are so well armed, or so turbulent, or inhabit a country so thorny that the expense of your neighbour\'s occupying you is greater than the profit." -T.E. Lawrence'

var lawQ12 = '"Nine-tenths of tactics are certain, and taught in books: but the irrational tenth is like the kingfisher flashing across the pool, and that is the test of generals." -T.E. Lawrence'

var lawQ13 = '"Mankind has had ten-thousand years of experience at fighting and if we must fight, we have no excuse for not fighting well." -T.E. Lawrence'

var lawQuotes1 = [lawQ11, lawQ12, lawQ13]

var lawDisplay1 = lawQuotes1[Math.floor(Math.random()*lawQuotes1.length)];

//////////////////////////////////////////////

var lawQ21 = '"All men dream, but not equally. Those who dream by night in the dusty recesses of their minds, wake in the day to find that it was vanity: but the dreamers of the day are dangerous men, for they may act on their dreams with open eyes, to make them possible." -T.E. Lawrence'

var lawQ22 = '"He was old and wise, which meant tired and disappointed..." -T.E. Lawrence'

var lawQuotes2 = [lawQ21, lawQ22]

var lawDisplay2 = lawQuotes2[Math.floor(Math.random()*lawQuotes2.length)];

//////////////////////////////////////////////

var napQ11 = '"Never interrupt your enemy when he is making a mistake" -Napoleon Bonaparte'

var napQ12 = '"God is on the side with the best artillery." -Napoleon Bonaparte'

var napQ13 = '"Religion is what keeps the poor from murdering the rich." -Napoleon Bonaparte'

var napQ14 = '"The best way to keep one\'s word is not to give it." -Napoleon Bonaparte'

var napQ15 = '"The surest way to remain poor is to be an honest man." -Napoleon Bonaparte'

var napQuotes1 = [napQ11, napQ12, napQ13, napQ14, napQ15]

var napDisplay1 = napQuotes1[Math.floor(Math.random()*napQuotes1.length)];

//////////////////////////////////////////////

var shaQ11 = '"First thing we do, let\'s kill all the lawyers." -William Shakespeare'

var shaQ12 = '"The devil can cite Scripture for his purpose." -William Shakespeare'

var shaQ13 = '"The robb\'d that smiles, steals something from the thief." -William Shakespeare'

var shaQuotes1 = [shaQ11, shaQ12, shaQ13]

var shaDisplay1 = shaQuotes1[Math.floor(Math.random()*shaQuotes1.length)];

//////////////////////////////////////////////

var tedQ11 = '"Far better is to dare mighty things, to win glorious triumphs, even though checkered by failure, than to take rank with those poor spirits who neither enjoy much nor suffer much because they live in the gray twilight that knows neither victory nor defeat." -Theodore Roosevelt'

var tedQ12 = '"If you could kick the person in the pants responsible for most of your trouble, you wouldn\'t sit for a month." -Theodore Roosevelt'

var tedQ13 = '"When you play, play hard; when you work, don\'t play at all." -Theodore Roosevelt' 

var tedQuotes1 = [tedQ11, tedQ12, tedQ13]

var tedDisplay1 = tedQuotes1[Math.floor(Math.random()*tedQuotes1.length)];

//////////////////////////////////////////////

//////////////////////////////////////////////

var tucQ11 = '"War is the unfolding of miscalculations." -Barbara Tuchman'

var tucQ12 = '"Nothing so comforts the military mind as the maxim of a great but dead general." -Barbara Tuchman'

var tucQ13 = '"Reasonable orders are easy enough to obey; it is capricious, bureaucratic or plain idiotic demands that form the habit of discipline." -Barbara Tuchman'

var tucQ14 = '"No more distressing moment can ever face a British government than that which requires it to come to a hard, fast and specific decision." -Barbara Tuchman'

var tucQuotes1 = [tucQ11, tucQ12, tucQ13, tucQ14]

var tucDisplay1 = tucQuotes1[Math.floor(Math.random()*tucQuotes1.length)];

//////////////////////////////////////////////

var twaQ11 = '"It ain\'t what you don\'t know that gets you in trouble, it\'s what you know for sure that just ain\'t so." -Mark Twain'

var twaQ12 = '"Don\'t go around saying the world owes you a living. The world owes you nothing. It was here first." -Mark Twain'

var twaQ13 = '"Clothes make the man. Naked people have little or no influence on society." -Mark Twain'

var twaQ14 = '"Get your facts first, and then you can distort them as much as you please." -Mark Twain'

var twaQuotes1 = [twaQ11, twaQ12, twaQ13, twaQ14]

var twaDisplay1 = twaQuotes1[Math.floor(Math.random()*twaQuotes1.length)];

//////////////////////////////////////////////

var vadQ11 = '"Impressive.  Most impressive." -Darth Vader'

var vadQ12 = '"Apology accepted, Captain Needa." -Darth Vader (after killing Captain Needa)'

var vadQuotes1 = [vadQ11, vadQ12]

var vadDisplay1 = vadQuotes1[Math.floor(Math.random()*vadQuotes1.length)];

//////////////////////////////////////////////

//////////////////////////////////////////////

var vadQ21 = '"When I left you, I was but the learner.  Now I am the master." -Darth Vader'

var vadQ22 = '"Don\'t make me destroy you."'

var vadQ23 = '"You may dispense with the pleasantries..." -Darth Vader'

var vadQuotes2 = [vadQ21, vadQ22, vadQ23]

var vadDisplay2 = vadQuotes2[Math.floor(Math.random()*vadQuotes2.length)];

//////////////////////////////////////////////

//////////////////////////////////////////////

var wbuQ1 = '"Never ask a barber if you need a haircut." -Warren Buffett'

var wbuQ2 = '"A very rich person should leave his kids enough to do anything but not enough to do nothing." -Warrent Buffett'

var wbuQ3 = '"If you’re in the luckiest 1% of humanity, you owe it to the rest of humanity to think about the other 99%." -Warren Buffett'

var wbuQuotes1 = [wbuQ1, wbuQ2, wbuQ3]

var wbuDisplay1 = wbuQuotes1[Math.floor(Math.random()*wbuQuotes1.length)];

//////////////////////////////////////////////

//////////////////////////////////////////////

var winQ21 = '"Small words are the best ones, and old small words are best of all." -Sir Winston Churchill'

var winQ22 = '"Now this is not the end; it is not even the beginning of the end. But it is, perhaps, the end of the beginning." -Sir Winston Churchill, after the Second Battle of El Alamein'

var winQ23 = '"...democracy is the worst form of government except for all those other forms that have been tried from time to time." -Sir Winston Churchill'

var winQ24 = '"You can always count on Americans to do the right thing- after they\'ve tried everything else." -Sir Winston Churchill'

var winQuotes2 = [winQ21, winQ22, winQ23, winQ24]

var winDisplay2 = winQuotes2[Math.floor(Math.random()*winQuotes2.length)];

//////////////////////////////////////////////
});


