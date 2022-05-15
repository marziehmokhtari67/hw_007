function filterOddNumber(array){
let new_array=[] 
for(let i=0;i<array.length+1;i++){
if (array[i]%2==0){
new_array.push(array[i])
}
else {continue}
}
return new_array
}

console.log(filterOddNumber([5,6,8,9,7]));
function findStr(array){   
for(let i=0;i<array.length+1;i++){
if (typeof(array[i])==='string'){
return array[i]
}
else {continue}
}
}
console.log(findStr([1,'a',3,'b']))

function someElement(value,index,array){
    for(let i=0;i<=array.length;i++){
        if (array.indexOf(array[i])===index){
         if(array[i]>=value){
             return true
         }
         else {return false}
        }
        else {return false}
    }

}
console.log(someElement(18,2,[20,18,16,19]))


function slice(start,end,array){
    let new_array=[]
for(let i=0;i<=array.length;i++){
    if (array.indexOf(array[i])>=start && array.indexOf(array[i])<end){
    
            new_array.push(array[i]) 
    
    }
    else {continue}
}
return new_array
}
console.log(slice(2,5,[1,2,3,4,5,6,7]))


function splice (index,howmany,array,item1,item2){
    let new_array=[]
    for(let i=0;i<array.length;i++){
     if( array.indexOf(array[i])<index || array.indexOf(array[i]) >(index+howmany-1)){
        new_array.push(array[i])
    }
    else if (array.indexOf(array[i])===index){
        if (item1!==null||item2!==null){
         new_array.push(item1)
         new_array.push(item2)
        }
    }
    
    else if(array.indexOf(array[i])>index && array.indexOf(array[i]) <=(index+howmany-1)){
        continue}
    
    }
return new_array
}
console.log(splice(2,3,[1,2,3,4,5,6],'a','b'))