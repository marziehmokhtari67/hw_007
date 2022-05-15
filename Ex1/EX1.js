function Circle(r){
    this.radius=r
    this.area= function getArea(){
        return Math.PI*(this.radius**2)
    }
    this.primeter=function getPrimeter(){
        return Math.PI*2*this.radius
    }
}
let result=new Circle(3)
console.log(result.area())
console.log(result.primeter());