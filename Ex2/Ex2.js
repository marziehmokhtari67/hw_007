function identifiers(str){
    if (str===''|| str===null){
     return "{"+"}"
    }
    else{
    let arr=str.split('')
   let Letter= arr.find(function(item,index){
    return   arr.indexOf(item)!==index  })
    let obj={}
    obj[Letter]=[arr.indexOf(Letter),arr.indexOf(Letter,arr.indexOf(Letter)+1)]
    return obj}

}
console.log(identifiers('BACBDB'));