function getLength(array){
    let new_array=array.join(',').split(',').map(Number)
     return new_array.length
}
console.log(getLength([1,[[[2,3]]]]))