$(function(){
var board = $("#cards")
var clickSave = false;
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

function shuffle(){
	gif.sort(function(a, b){
		return Math.random() - 0.5;
	});
}
shuffle();

$(board).on('click', '.gif', function(){
	var relate = parseInt($(this).attr("id").replace("c", "")) -1;

	$(this).css("background-image", ("url(./" + gif[relate] + ")"));
	
	
	if (gif[clickSave] === gif[relate] && clickSave !== relate){
		$(this).hide();
		$("#c" + (clickSave + 1)).hide();
	}
	clickSave = relate;
	
	})

 $('#newgame').on('click', function(){
 	clickSave = false;
 	shuffle();
 	$('.gif').show().css("background-image", "url(./images/spade_card.jpeg)");

 	})
});




