//Первая задача
firstRow = prompt('Введите первую строку');
secondRow = prompt('Введите вторую строку');

function getAmountChar(char, row) {
    let counter = 0;
    for(let i = 0; i < row.length; i++){
        if (row.charAt(i) === char) {
            counter++;
        }
    }
    return counter;
};

function getRow(firstRow, secondRow) {
    return getAmountChar('а', firstRow) > getAmountChar('а', secondRow) ? firstRow : secondRow;
};

alert(getRow(firstRow, secondRow));






