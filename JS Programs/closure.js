function base(a){
    return (b)=> {
        return a+b;       
    }
}
var addsix = base(6);

console.log(addsix(10));

//multiply using closure
const mul = (a)=>{
    return (b)=>{
        return (c)=>{
            return a*b*c;
        }
    }
}
mul(2)(3)(4);