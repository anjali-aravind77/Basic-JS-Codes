var num = 9
var flag = 0
for(var i=0; i<=num ;i++){
    if(num % i ==0){
        flag = 1
        break
    }
    else{
        flag = 0
    }
}
if(flag>0){
    console.log("not prime")
}
else{
    console.log("prime")
}