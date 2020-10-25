


module.exports = function towelSort (array) {
  if (!array || array.length == 0){ //проверка массива
    return [];
  }
  for(let i = 1; i<array.length; i=i+2) {//сортировка массива четные меняем местами
    array[i].sort((a,b) => b-a);
  }
  return array.flat();//возвращаем новый массив с подмасивами
}