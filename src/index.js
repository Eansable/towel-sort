
// You should implement your task here.

module.exports = function towelSort (matrix = []) {

  let flatMatrix = [];
  for (let i = 0; i < matrix.length; i++){
  if (i % 2 === 0){
  flatMatrix = flatMatrix.concat(matrix[i]);
      }
  else {
   flatMatrix = flatMatrix.concat(matrix[i].reverse());
  }
}
  return flatMatrix;
}
