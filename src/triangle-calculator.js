function getNumbersFromPreviousRow(previousRow, columnIndex) {
    let previousElementInPreviousRow = previousRow[columnIndex - 1];
    previousElementInPreviousRow = previousElementInPreviousRow || 0;

    let nextElementInPreviousRow = previousRow[columnIndex];
    nextElementInPreviousRow = nextElementInPreviousRow || 0;

    return [previousElementInPreviousRow, nextElementInPreviousRow];
}

export function createTriangle(nrRows) {
    if (typeof nrRows !== 'number') throw new Error('Only numbers allowed!');
    if (nrRows < 0) throw new Error('Input must be bigger than zero.');

    const triangle = [[1]];

    for (let rowIndex = 1; rowIndex < nrRows; rowIndex++) {
        triangle.push([]);

        for (let columnIndex = 0; columnIndex <= rowIndex; columnIndex++) {
            const previousRow = triangle[rowIndex - 1];
            const currentRow = triangle[rowIndex];

            if ([0, nrRows - 1].includes(columnIndex)) {
                currentRow[columnIndex] = 1;
                continue;
            }

            const [previousRowNumber01, previousRowNumber02] =
                getNumbersFromPreviousRow(previousRow, columnIndex);

            currentRow[columnIndex] = previousRowNumber01 + previousRowNumber02;
        }
    }

    return triangle;
}
