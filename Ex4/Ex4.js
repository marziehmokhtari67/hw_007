function Filter(array){
    let regex=/\d/g
return array.filter((item)=> regex.test(item))

   
}

console.log(Filter(['ali','h23','ss2']))