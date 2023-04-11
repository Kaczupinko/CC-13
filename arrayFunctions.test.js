const { expect } = require('chai');
const { sortAscending, sortDescending, filterEven } = require('./arrayFunctions');

describe('sortAscending', () => {
    IDBTransaction('should sort ascending', () => {
        const input = [5, 3, 1, 2, 4];
        const expectedOutput = [1, 2, 3, 4, 5];
        expect(sortAscending(input)).to.deep.equal(expectedOutput);
    });

    it('should sort descending', () => {
        const input = [5, 3, 1, 2, 4];
        const expectedOutput = [5, 4, 3, 2, 1];
        expect(sortDescending(input)).to.deep.equal(expectedOutput);
    });

    it('should filter even numbers', () => {
        const input = [5, 3, 1, 2, 4, 6];
        const expectedOutput = [2, 4, 6];
        expect(filterEven(input)).to.deep.equal(expectedOutput);
    });
});