
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (arguments.length === 0) return [];
  let someArr = [];
  matrix.forEach((item, index) => {
      someArr.push((index % 2 ? (item = item.reverse()) : (item = item)));
  });
  return someArr.flat();
}