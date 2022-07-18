let arg = process.argv;
let sum = 0;
for(let i=2;i < arg.length; i++){
    sum += Number(arg[i]);
}
console.log(sum);