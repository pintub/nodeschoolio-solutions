//console.log(process.argv)
let sum = 0;

for (const key in process.argv) {
    if(key == 0 || key == 1) {
        continue;
    }
    sum += Number(process.argv[key])
}

console.log(sum)