const arr=[1,1,4,2,1,3];
const arr1=[...arr];
const arr2=[]
arr1.sort();

for(let i=0;i<arr1.length;i++){
    if(!(arr1[i]==arr[i])){
        arr2.push(i);

    }
    else{
      continue;
    }
}

console.log(arr2);