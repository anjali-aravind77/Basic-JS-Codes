var limit = 50
var sume=0
var sumo=0
for(var i=0;i<limit;i++){
    if(i%2==0){
        sume = sume + i
    }
    else{
        sumo = sumo + i
    }
}
console.log("sum of even" + sume)
console.log("sum of odd" + sumo)