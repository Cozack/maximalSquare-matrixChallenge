function MatrixChalange (strArr) {
    let maxSquare = 0;
    for (let i = 0; i < strArr.length; i++) {
        for (let k = 0; k < strArr[0].length; k++) {
            if (strArr[i][k] === '1') {
                let maxLength = getMaxLength(strArr, i, k);
                if (maxLength ** 2 > maxSquare)
                    maxSquare = maxLength ** 2;
            }
        }
    }

    return maxSquare;
}

function getMaxLength (strArr, i, k) {
    let max = 1;
    while (i + max < strArr.length && k + max < strArr[0].length) {
        let lastColumn = k + max;
        let lastRow = i + max;
        let rowIter = i;
        while (rowIter <= lastRow) {
            if (strArr[rowIter][lastColumn] === '0')
                return max;

            rowIter++;
        }

        let columnIter = k;
        while (columnIter <= lastColumn) {
            if(strArr[lastRow][columnIter] === "0")
                return max;
            columnIter++;
        }

        max++;
    }

    return max;
}