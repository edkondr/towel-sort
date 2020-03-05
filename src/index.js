
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var array = [];
  if(matrix === undefined){
    return array;
  }
  else{
    for(var i=0; i<matrix.length; i++){
      if(i===0 || i%2){
        array.push(matrix[i]);
      }
      else{
        array.push(matrix[i].reverse());
      }
      }
  return array;
}
}
