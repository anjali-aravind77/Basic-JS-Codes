var num = 211
var digit = 0
var sum = 0
while(num > 0){
    digit = num % 10
    sum = sum + digit**3
    num = Math.floor(num / 10)
}
console.log(sum)