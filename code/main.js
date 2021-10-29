var board = new Array();
var start = false;
var score = 0;
$(function() {
    newgame();
});

function newgame() {
    init();
    generateOneNumber();
    generateOneNumber();
}

function init() {
    start = true;
    score = 0;
    temp = document.getElementById("title");
    temp.style.color = "black";
    for (var i = 0; i < 4; i++) {
        board[i] = new Array();
        for (var j = 0; j < 4; j++) {
            // init the block
            board[i][j] = 0;
            var gridCell = $("#grid-cell-" + i + "-" + j);
            gridCell.css("top", getPosTop(i, j));
            gridCell.css("left", getPosLeft(i, j));
        }
    }
    updateBoardView();
}

function generateOneNumber() {
    if (!start)
        return;
    document.getElementById("score").innerHTML = score;
    var rx = parseInt(Math.floor(Math.random() * 4));
    var ry = parseInt(Math.floor(Math.random() * 4));
    while (true) {
        if (board[rx][ry] == 0) {
            break;
        }
        var rx = parseInt(Math.floor(Math.random() * 4));
        var ry = parseInt(Math.floor(Math.random() * 4));
    }
    var randomNumber = Math.random() < 0.5 ? 2 : 4;
    board[rx][ry] = randomNumber;
    showNumberWithAnimation(rx, ry, randomNumber);
}

function updateBoardView() {
    $(".number-cell").remove();
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            // init the block
            $("#grid-container").append("<div class='number-cell' id='number-cell-" + i + "-" + j + "'></div>");
            var numberCell = $("#number-cell-" + i + "-" + j);
            if (board[i][j] == 0) {
                numberCell.css("width", "0px");
                numberCell.css("height", "0px");
                numberCell.css("top", getPosTop(i, j) + 50);
                numberCell.css("left", getPosLeft(i, j) + 50);
            } else {
                numberCell.css("width", "100px");
                numberCell.css("height", "100px");
                numberCell.css("top", getPosTop(i, j));
                numberCell.css("left", getPosLeft(i, j));
                numberCell.css("background-color", getNumberBackgroundColor(board[i][j]));
                numberCell.css("color", getNumberColor(board[i][j]));
                numberCell.text(board[i][j]);
            }
        }
    }

}