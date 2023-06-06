// let arr1 = [2,1,100,3], arr2 = [-5,-2,10,-3,7], d = 6;


// for (let i = 0; i < arr1.length; i++) {
// let tot = 0;

//   for (let j = 0; j < arr2.length; j++) {
//     let count = Math.abs(arr1[i] - arr2[j]);
//     if (count < d) {
//       tot++;
//     }
//   }
// }
// console.log(tot);

let arr1 = [2, 1, 100, 3];
let arr2 = [-5, -2, 10, -3, 7];
let d = 6;
let tot = 0;

for (let i = 0; i < arr1.length; i++) {
    let small=false;
  for (let j = 0; j < arr2.length; j++) {
    let count = Math.abs(arr1[i] - arr2[j]);
    if (count < d) {
small=true;
break;
    }
  }
  
  if (!small) {//becoz in outloop there is small false so we have to make it invrse
    tot++;
  }
}

console.log(tot);
