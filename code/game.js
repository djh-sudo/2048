$(document).keydown(function(event) {
    var e = event;
    var k = e.keyCode;
    switch (k) {
        case 37: // left
            {
                if (moveLeft()) {
                    setTimeout(() => {
                        generateOneNumber();
                    }, 200);
                }
                isGameOver();
                break;
            }
        case 38:
            {
                // up
                if (moveUp()) {
                    setTimeout(() => {
                        generateOneNumber();
                    }, 200);
                }
                isGameOver();
                break;
            }
        case 39:
            {
                // right
                if (moveRight()) {
                    setTimeout(() => {
                        generateOneNumber();
                    }, 200);
                }
                isGameOver();
                break;
            }
        case 40:
            {
                // down
                if (moveDown()) {
                    setTimeout(() => {
                        generateOneNumber();
                    }, 200);
                }
                isGameOver();
                break;
            }

    }
});


function moveLeft() {
    if (!canMoveLeft(board)) {
        return false;
    } else {
        for (var i = 0; i < 4; i++) {
            for (var j = 1; j < 4; j++) {
                if (board[i][j] != 0) {
                    for (var k = 0; k < j; k++) {
                        if (board[i][k] == 0 && noBlockHorizontalCol(i, k, j, board)) {
                            showMoveAnimation(i, j, i, k);
                            board[i][k] = board[i][j];
                            board[i][j] = 0;
                        } else if (board[i][k] == board[i][j] && noBlockHorizontalCol(i, k, j, board)) {
                            showMoveAnimation(i, j, i, k);
                            board[i][k] += board[i][j];
                            score += board[k][j];
                            board[i][j] = 0;
                        }
                    }
                }
            }
        }
        setTimeout(() => {
            updateBoardView();
        }, 150);
        return true;
    }
}

function canMoveLeft(board) {
    for (var i = 0; i < 4; i++) {
        for (var j = 1; j < 4; j++) {
            if (board[i][j] != 0) {
                if (board[i][j - 1] == 0 || board[i][j] == board[i][j - 1]) {
                    return true;
                }
            }
        }
    }
    return false;
}

function canMoveRight(board) {
    for (var i = 0; i < 4; i++) {
        for (var j = 2; j >= 0; j--) {
            if (board[i][j] != 0) {
                if (board[i][j + 1] == 0 || board[i][j] == board[i][j + 1])
                    return true;
            }
        }
    }
    return false;
}

function moveRight() {
    if (!canMoveRight(board)) {
        return false;
    } else {
        for (var i = 0; i < 4; i++) {
            for (var j = 2; j >= 0; j--) {
                if (board[i][j] != 0) {
                    for (var k = 3; k > j; k--) {
                        if (board[i][k] == 0 && noBlockHorizontalCol(i, j, k, board)) {
                            showMoveAnimation(i, j, i, k);
                            board[i][k] = board[i][j];
                            board[i][j] = 0;
                        } else if (board[i][k] == board[i][j] && noBlockHorizontalCol(i, j, k, board)) {
                            showMoveAnimation(i, j, i, k);
                            board[i][k] += board[i][j];
                            score += board[k][j];
                            board[i][j] = 0;
                        }
                    }
                }
            }
        }
        setTimeout(() => {
            updateBoardView();
        }, 150);
        return true;
    }
}

function canMoveUp() {
    for (var j = 0; j < 4; j++) {
        for (var i = 1; i < 4; i++) {
            if (board[i][j] != 0) {
                if (board[i - 1][j] == 0 || board[i][j] == board[i - 1][j])
                    return true;
            }
        }
    }
    return false;
}

function moveUp() {
    if (!canMoveUp(board)) {
        return false;
    } else {
        for (var j = 0; j < 4; j++) {
            for (var i = 1; i < 4; i++) {
                if (board[i][j] != 0) {
                    for (var k = 0; k < i; k++) {
                        if (board[k][j] == 0 && noBlockHorizontalRaw(j, k, i, board)) {
                            showMoveAnimation(i, j, k, j);
                            board[k][j] = board[i][j];
                            board[i][j] = 0;
                        } else if (board[k][j] == board[i][j] && noBlockHorizontalRaw(j, k, i, board)) {
                            showMoveAnimation(i, j, k, j);
                            board[k][j] += board[i][j];
                            score += board[k][j];
                            board[i][j] = 0;
                        }
                    }
                }
            }
        }
        setTimeout(() => {
            updateBoardView();
        }, 150);
        return true;
    }
}


function canMoveDown() {
    for (var j = 0; j < 4; j++) {
        for (var i = 2; i >= 0; i--) {
            if (board[i][j] != 0) {
                if (board[i + 1][j] == 0 || board[i][j] == board[i + 1][j])
                    return true;
            }
        }
    }
    return false;
}

function moveDown() {
    if (!canMoveDown(board)) {
        return false;
    } else {
        for (var j = 0; j < 4; j++) {
            for (var i = 2; i >= 0; i--) {
                if (board[i][j] != 0) {
                    for (var k = 3; k > i; k--) {
                        if (board[k][j] == 0 && noBlockHorizontalRaw(j, i, k, board)) {
                            showMoveAnimation(i, j, k, j);
                            board[k][j] = board[i][j];
                            board[i][j] = 0;
                        } else if (board[k][j] == board[i][j] && noBlockHorizontalRaw(j, i, k, board)) {
                            showMoveAnimation(i, j, k, j);
                            board[k][j] += board[i][j];
                            score += board[k][j];
                            board[i][j] = 0;
                        }
                    }
                }
            }
        }
        setTimeout(() => {
            updateBoardView();
        }, 150);
        return true;
    }
}

function isGameOver() {
    max = 0;
    total = 0;
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (board[i][j] != 0)
                total++;
            max = board[i][j] > max ? board[i][j] : max;
        }
    }
    if (total == 16) {
        alert("游戏结束!");
        start = false;
    }
    if (max == 2048) {
        temp = document.getElementById("title");
        temp.style.color = "#8f7a66";
    }
    return true;
}