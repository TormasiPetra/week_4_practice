const arr = [1,2,3,4,5]

function returnDouble(number){
    return number * 2
}

const returnDouble2 = (number) => {
    return number * 2
}
 //arrow function, el lehet hagyni a zárójelet és egy sorba lehet írni, ha egy paraméter van és csak return van benne 
const returnDouble3 = number => number * 2

console.log( returnDouble3(25))


for (let i = 0; i < arr.length; i++){
    console.log(returnDouble2(arr[i]))
}


// metódus, ami az arrayen "él", de élhet ilyen a stringen, objecten... is, mi is tudunk majd ilyet csinálni --> type arr._____

function logDouble(number){
    console.log(number * 2)
} // ebbe a fv-be van kiszervezve a logika, és ezt lehet meghivni másik fv-ben

arr.forEach(logDouble)


// in line megadom a fv-t
arr.forEach(element => console.log(element * 2))
