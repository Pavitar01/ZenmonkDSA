let nums = [2,3,5];
let result=[]
let count=0;

for (let i = 0; i < nums.length; i++) {
  for (let j = 0; j < nums.length; j++) {
count += Math.abs(nums[i] - nums[j]);
  }
result.push(count)

  count=0;
}

console.log(result);

// function calculateDifferences(nums) {
//     let newarr = [];
  
//     for (let i = 0; i < nums.length; i++) {
//       let diff = 0;
//       for (let j = 0; j < nums.length; j++) {
//         diff += Math.abs(nums[i] - nums[j]);
//       }
//       newarr.push(diff);
//     }
  
//     return newarr;
//   }
  
//   let nums = [2, 3, 5];
//   let result = calculateDifferences(nums);
//   console.log(result);
  