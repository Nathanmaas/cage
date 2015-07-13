$(function(){
// var cageArray = ['c1','c2','c3','c4','c5','c6','c7','c8','c9','c10','c11','c12','c13','c14','c15','c16','c17','c18','c19','c20']'c16'];
var board = $("#cards")
var spadeOpen = "";
var gifOpen = "";
var counter = 0;
var gifFlip = 0;
var gif = [   
"images/nick1.gif",
"images/nick2.gif",
"images/nick3.gif",
"images/nick4.gif",
"images/nick5.gif",
"images/nick6.gif",
"images/nick7.gif",
"images/nick8.gif",
"images/nick9.gif",
"images/nick10.gif",
];

$(gif).each(function(){
	var cagegif = $('<img />').attr('src', this);
});

function mix(max, min){
	return Math.round(Math.random() * (max - min) + min);
}

function shuffle(){
	var gifs = $(board).children();
	var thisGif = $(board + " div:first-child");
	var gifArray = new Array();

	for(var i = 0; i < gifs.length; i++){
		gifArray[i] = $("#" + thisGif.attr("id") + " img").attr("src");
		thisGif = thisGif.next();
	}

	thisGif = $(board + " div:first-child");

	for(var i = 0; i < gifs.length; i++){
		var run = mix(0, gifArray.length -1);

		$("#" + agif.attr("id") + " img").attr("src", gifArray[run]);
		gifArray.splice(run, 1)
		thisGif = thisGif.next();
		}
		return shuffle();
	}
});



