var rem = 0
var num = 342
var digit = 0

while(num>0){
    digit = num % 10
    rem = (rem * 10) + digit
    
    num = Math.floor(num/10)
}
console.log(rem)