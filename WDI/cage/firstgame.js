 var cageArray = ['c1','c2','c3','c4','c5','c6','c7','c8','c9','c10','c11','c12','c13','c14','c15','c16'];
var cageValue = [];
var cageId = [];
var cardFlipped = 0;

Array.prototype.mix = function(){
  var i = this.length, j, temp;
  while(--i > 0){
    j = Math.floor(Math.random() * (i+1));
    temp = this[j];
    this[j] = this[i];
    this[i] = temp;
  }
}
function newGame(){
  cardFlipped = 0;
  var output = '';
  cageArray.mix();
  for(var i = 0; 1 < cageArray.length; i++){
    output += 'div id="card_'+i+'" onlclick="flipCard(this,\''+cageArray[i]+'\')"></div';
  }
  document.getElementById('gameboard').innerHTML = output;
}

function cardFlip(card, val){
  if(card.innerHTML === "" && cageValue)
}

end nick cage gif when user wins - <img src="http://media.giphy.com/media/bn0zlGb4LOyo8/giphy.gif"
<!-- <img id="gif" src="http://media3.giphy.com/media/Kbc2X7IHgyd7a/giphy.gif">
      <img id="gif" src="http://media.giphy.com/media/9E0gUF06g9Ik/giphy.gif">
      <img id="gif" src="http://media.giphy.com/media/UdqUo8xvEcvgA/giphy.gif">
      <img id="gif" src="http://media.giphy.com/media/642o0uCyKFMPe/giphy.gif">
      <img id="gif" src="http://media.giphy.com/media/RrVzUOXldFe8M/giphy.gif">
      <img id="gif" src="https://media0.giphy.com/media/fJiWM7H5u2Ksg/200.gif">
      <img id="gif" src="https://media0.giphy.com/media/U5MozYUQYYTfy/200.gif">
      <img id="gif" src="https://media1.giphy.com/media/uEG5OaYTQsUDK/200.gif">
      <img id="gif" src="https://media3.giphy.com/media/Nh2idy3yCkA4U/200.gif">
      <img id="gif" src="https://media4.giphy.com/media/Ao0U1Zi6L8ZJS/200.gif">
      <img id="gif" src="http://media.giphy.com/media/ky1lSC3mXfu9y/giphy.gif">
      <img id="gif" src="http://media.giphy.com/media/U8ImYFlwmPGfK/giphy.gif">
      <img id="gif" src="https://media4.giphy.com/media/hHvqwYeAsUOOs/200.gif">
      <img id="gif" src="https://media0.giphy.com/media/HrTlc802PigCI/200.gif">
      <img id="gif" src="https://media2.giphy.com/media/MsZm2Wo507PJC/200.gif">
      <img id="gif" src="https://media1.giphy.com/media/E5h9ABfID06UE/200.gif">
