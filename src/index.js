
// You should implement your task here.

module.exports = function towelSort (array) {
  if (!array || array.length == 0){
    return [];
  }
  for(let i = 1; i<array.length; i=i+2) {
    array[i].sort((a,b) => b-a);//стрелочная функция
  }
  return array.flat();
}