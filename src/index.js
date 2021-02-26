
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return !matrix ? [] : matrix
    .map((v, i) => {return (i % 2) ? v.reverse() : v})
    .reduce(((v, i) => [...v, ...i]), []);
}
