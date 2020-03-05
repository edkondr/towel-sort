
// You should implement your task here.

module.exports = function towelSort (matrix) {
   var array = matrix.reduce(function (a,b) {
     return a.concat(b)
   })
   var sortArray=array.sort(function (a,b) {
     return a-b;
   })
  return sortArray
}
