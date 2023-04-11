function sortAscending(array) {
    return arr.sort((a, b) => a - b);
}

function sortDescending(arr) {
    return arr.sort((a, b) => b - a);
}

function filterEven(arr) {
    return arr.filter((num) => num % 2 === 0);
}

module.exports = { sortAscending, sortDescending, filterEven };
