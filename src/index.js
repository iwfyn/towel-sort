// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    return matrix.reduce(function (sum, item, ind) {
      item.sort((a, b) => (ind % 2 == 0 || ind == 0) ? a - b : b - a,).map(el => sum.push(el))
      return sum;
    }, []);
};