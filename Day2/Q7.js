let
list1 = ["happy","sad","good"], list2 = ["sad","happy","good"] 
// ist1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
let ind=[]
let jnd=[]
for(let i=0;i<list1.length;i++){
for(let j=0;j<list2.length;j++){
    if(list1[i]==list2[j]){
        ind.push(list1[i]);
        jnd.push(list2[j]);
        break;
    }
}
}

console.log(jnd);

