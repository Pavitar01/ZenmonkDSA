


// const matrix = [
//     [1, 3, 5, 7],
//     [10, 11, 16, 20],
//     [23, 30, 34, 60],
//   ];
//   let found = false;
// //   console.log(matrix.length);
//   const target = 3;
// //   console.log(isfound());
//   const rows = matrix.length;
//   const cols = matrix[0].length;
//   console.log(cols)
//   console.log(rows)
//   function isfound() {
//     for (let i = 0; i < matrix.length; i++) {
//       for (let j = 0; j < matrix[i].length; j++) {
//         if (matrix[i][j] === target) {
//           return true;
          
//         }
//       }
//     }
//     return false; // Return false if the target is not found
//   }
   

const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ];
  
  const target = 3;
  console.log(isFound());
  
  function isFound() {
    const rows = matrix.length;
    const cols = matrix[0].length; // here we are having m*n matrix so the colum must be same

  
    let left = 0;
    let right = rows * cols - 1; // we finding the last elemenst that is 11
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const midElement = matrix[Math.floor(mid / cols)][mid % cols]; //wwe are finding the exact elements 
  
      if (midElement === target) {
        return true;
      }
  
      if (midElement < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return false; // Return false if the target is not found
  }
  