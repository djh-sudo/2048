function getPosTop(i, j) {
    return (20 + i * 120);
}

function getPosLeft(i, j) {
    return (20 + j * 120);
}

function getNumberBackgroundColor(number) {
    switch (number) {
        case 2:
            return "#eee4da";
        case 4:
            return "#ede0c8";
        case 8:
            return "#f2b179";
        case 16:
            return "#f59563";
        case 32:
            return "#f67c5f";
        case 64:
            return "#f65e3b";
        case 128:
            return "#edcf72";
        case 256:
            return "#edcc61";
        case 512:
            return "#9c0";
        case 1024:
            return "#33b5e5";
        case 2048:
            return "#09c";
        case 4096:
            return "#a6c";
        case 8192:
            return "#93c";
    }
}

function getNumberColor(number) {
    if (number <= 4)
        return "#776e65"
    else return "white";
}

function noBlockHorizontalCol(row, col1, col2, board) {
    for (var i = col1 + 1; i < col2; i++) {
        if (board[row][i] != 0)
            return false;
    }
    return true;
}

function noBlockHorizontalRaw(col, row1, row2, board) {
    for (var i = row1 + 1; i < row2; i++) {
        if (board[i][col] != 0)
            return false;
    }
    return true;
}