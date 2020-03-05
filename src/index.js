
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let array = [];
 if(matrix === undefined){
   return array;
 }
 else{
   for(let i=0; i<matrix.length; i++){
     if(i===1 || i % 2){
       array.push(matrix[i].reverse());
     }
     else  {
       array.push(matrix[i]);
     }
     }
     return array;
 
}
}