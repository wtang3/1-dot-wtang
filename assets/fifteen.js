//Javascript 
var blockc;
var i;
/*
function play() {
tile = [ '<img class="image image1">' ,
 '<img class="image image2">' ,
 '<img class="image image3">' , 
'<img class="image image4">' , '<img class="image image5">' , '<img class="image image6">' , '<img class="image image7">' , '<img class="image image8">' , 
'<img class="image image9">' , '<img class="image image10">' , '<img class="image image11">' , '<img class="image image12">' , 
'<img class="image image13">' , '<img class="image image14">' , '<img class="image image15">' ] ;
document.getElementById('play').onclick = restart;
drawagain();


}
*/

function restart() {
for (i = 0; i < blockc.length; i++) {
blockc[i].innerHTML = '';
}

// picture tiles
tile = [ '<style class="image image1">1</style>' ,
 '<style class="image image2">2</style>' ,
 '<style class="image image3">3</style>' , 
'<style  class="image image4">4</style>' , '<style  class="image image5">5</style>' , 
'<style  class="image image6">6</style>' , '<style  class="image image7">7</style>' , 
'<style  class="image image8">8</style>' , 
'<style  class="image image9">9</style>' , '<style class="image image10">10</style>' , 
'<style class="image image11">11</style>' ,
'<style class="image image12">12</style>' , 
'<style  class="image image13">13</style>' , '<style  class="image image14">14</style>' , 
'<style  class="image image15">15</style>' ] ;
tile.shuffle();
	for (i = 0; i < tile.length; i++) {
	blockc[i].innerHTML = tile[i];
	}
	drawagain(tile.length);

	}

function drawagain(num){
	for (i = 0; i < blockc.length; i++) {	
	blockc[i].onclick = blockc[i].className = blockc[i].title = '';
	}

touchingCells = new Array();
Empty = blockc[num];
Empty.rowNum = new Number(getRowIndex(Empty));
Empty.cellNum = new Number(getCellIndex(Empty));
Empty.cellIndx = (Empty.rowNum*4)+Empty.cellNum;
touchingCells = getTouchingCells(Empty); //get the cells touching current blank square
assignOnclicks(); //to the cells currently touching the blank square
}

function getTouchingCells(obj) {
	var newTouchingCells = new Array();
	if (obj.cellNum-1 >= 0) { //get left touching cell
	newTouchingCells.push(table.rows[obj.rowNum].cells[obj.cellNum-1]);
	}
	if (obj.cellNum+1 <= 3) { //get right touching cell
	newTouchingCells.push(table.rows[obj.rowNum].cells[obj.cellNum+1]);
	}
	if (obj.rowNum-1 >= 0) {//get above touching cell
	newTouchingCells.push(table.rows[obj.rowNum-1].cells[obj.cellNum]);
	}
	if (obj.rowNum+1 <= 3) {//get below touching cell
	newTouchingCells.push(table.rows[obj.rowNum+1].cells[obj.cellNum]);
	}
	for (i = 0; i < newTouchingCells.length; i++) {
	newTouchingCells[i].className='touchingCells';
	newTouchingCells[i].title = 'Swap this number';
	}
	return newTouchingCells;
	
}

function getRowIndex(obj){
	var abc = obj.parentNode;
	while(abc.nodeName.toLowerCase() != 'tr'){
	abc = abc.parentNode;
	}

	return abc.rowIndex;
	}
	function getCellIndex(obj){
	var rowIndex = getRowIndex(obj);
	for(i=0; i < rows[rowIndex].cells.length; i++){
	if(obj == rows[rowIndex].cells[i]){return i;}
	
	}
}


function assignOnclicks(){
	for (i = 0; i < touchingCells.length; i++) {
	touchingCells[i].onclick=function() {
	var cellIndex = (getRowIndex(this)*4)+getCellIndex(this);
	var blankIndx = Empty.cellIndx;
	
//swap clicked cell contents with blank cell contents
	var temp = blockc[cellIndex].innerHTML;
	blockc[cellIndex].innerHTML = '';
	blockc[blankIndx].innerHTML = temp;

	if (isWinner()) {
	alert('You win...!!!');
	} else {
	drawagain(cellIndex); //cellIndex is the cell index of the new blank square
			}
	}
	}
}


function isWinner() {
	var isWin = true;
	for ( i = 0; i < tile.length; i++) {
		if (new Number(blockc[i].innerHTML) != tile[i]) {
			isWin = false;
			i = tile.length;
		}
	}
return isWin;
}
	Array.prototype.shuffle = function() {
	var s = [];
	while (this.length) s.push(this.splice(Math.random() * this.length, 1));
	while (s.length) this.push(s.pop());
	return this;
}


window.onload=function() {
	table = document.getElementById('tblBoard');
	rows = document.getElementById('tblBoard').getElementsByTagName('tr');
	blockc = document.getElementById('tblBoard').getElementsByTagName('td');
	document.getElementById('btnRestart').onclick = restart;
	restart();
}

	//document.getElementById("ex1").style.borderColor="#00FF00 #0000FF";
	// This can be removed later.
	function updateTimer() {
	"use strict";
	var timer = document.getElementById("timer"), minutes, seconds;
	time += 1;
	minutes = time / 60;
	seconds = time % 60;
	timer.innerHTML = Math.floor(minutes) + " Minutes " + seconds + " Seconds<br>" + moves + " Moves " + bestMoves + " Best Moves"  + "<br>Best Time: " + Math.floor(bestTime) / 60 + " Minutes " + (bestTime % 60) + " Seconds";
}

	document.write('<table id="tblBoard" align="center" cellspacing="1" cellpadding="1px" border="2" bgcolor="black">');
	document.write('<tr><td ></td><td></td><td></td><td></td></tr>');
	document.write('<tr><td></td><td></td><td></td><td></td></tr>');
	document.write('<tr><td></td><td></td><td></td><td></td></tr>');
	document.write('<tr><td></td><td></td><td></td><td></td></tr>');
	document.write('</table>');
