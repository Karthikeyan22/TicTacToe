
var h=document.createElement('h2');
document.body.appendChild(h);
h.setAttribute('class','message');
h.setAttribute('id','msg');

var divMain = document.createElement('div');
document.body.appendChild(divMain);
divMain.setAttribute('id', 'divMain');
divMain.setAttribute('class', 'grid');

var div1 = document.createElement('div');
divMain.appendChild(div1);
div1.setAttribute('id', 'div1');
div1.setAttribute('class', 'griditem');
div1.setAttribute('index','1')
div1.setAttribute('onclick','play(this)')

var div2 = document.createElement('div');
divMain.appendChild(div2);
div2.setAttribute('id', 'div2');
div2.setAttribute('index','2')
div2.setAttribute('class', 'griditem');
div2.setAttribute('onclick','play(this)')


var div3 = document.createElement('div');
divMain.appendChild(div3);
div3.setAttribute('id', 'div3');
div3.setAttribute('index','3')
div3.setAttribute('class', 'griditem');
div3.setAttribute('onclick','play(this)')


var div4 = document.createElement('div');
divMain.appendChild(div4);
div4.setAttribute('id', 'div4');
div4.setAttribute('index','4')
div4.setAttribute('class', 'griditem');
div4.setAttribute('onclick','play(this)')


var div5 = document.createElement('div');
divMain.appendChild(div5);
div5.setAttribute('id', 'div5');
div5.setAttribute('index','5')
div5.setAttribute('class', 'griditem');
div5.setAttribute('onclick','play(this)')


var div6 = document.createElement('div');
divMain.appendChild(div6);
div6.setAttribute('id', 'div6');
div6.setAttribute('index','6')
div6.setAttribute('class', 'griditem');
div6.setAttribute('onclick','play(this)')


var div7 = document.createElement('div');
divMain.appendChild(div7);
div7.setAttribute('id', 'div7');
div7.setAttribute('index','7')
div7.setAttribute('class', 'griditem');
div7.setAttribute('onclick','play(this)')


var div8 = document.createElement('div');
divMain.appendChild(div8);
div8.setAttribute('id', 'div8');
div8.setAttribute('index','8')
div8.setAttribute('class', 'griditem');
div8.setAttribute('onclick','play(this)')


var div9 = document.createElement('div');
divMain.appendChild(div9);
div9.setAttribute('id', 'div9');
div9.setAttribute('index','9')
div9.setAttribute('class', 'griditem');
div9.setAttribute('onclick','play(this)')


var b=document.createElement('button');
document.body.appendChild(b);
b.setAttribute('class','reset');
b.setAttribute('type','submit');
b.setAttribute('onclick','clear()')
b.innerHTML='RESET';


function startGame() {

    document.players = "PLAYER 1";
    document.winner = null;
    displayMsg(" Start");
}

function displayMsg(msg) {
    document.getElementById("msg").innerText = msg;
}

function play(griditem) {
    if (griditem.innerText == "") {
        griditem.innerText = document.players;
        switchTurn();
    } 
}

function switchTurn() {

    if (Winner(document.players)) {
        displayMsg(document.players + " Won! Congrat's");
        document.winner = document.players;
    } else if (document.players == "PLAYER 1") {
        document.players = "PLAYER 2";
        displayMsg(document.players + "'s turn!");
    } else {
        document.players = "PLAYER 1";
        displayMsg(document.players + "'s turn!");
    }
}

function Winner(move) {
    var result = false;
    if (checkRow(1, 2, 3, move) || 
        checkRow(4, 5, 6, move) ||
        checkRow(7, 8, 9, move) || 
        checkRow(1, 4, 7, move) ||
        checkRow(2, 5, 8, move) ||
        checkRow(3, 6, 9, move) ||
        checkRow(1, 5, 9, move) ||
        checkRow(3, 5, 7, move)) {
        
        result = true;
    }
    return result;
}

function checkRow(a, b, c, move) {
    var result = false;
    if (getValue(a) == move && getValue(b) == move && getValue(c) == move) {
        result = true;
    }
    return result;
}

function getValue(number) {
    return document.getElementById("div"+number).innerText;
}

function clear() {
    location.reload();    
}