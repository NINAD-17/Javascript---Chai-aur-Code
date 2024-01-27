// Reduce
// Accumulater is a empty variable
// Initial value is goes in the accumulator
// Then by loop, it updates as accumulator = accumulator + current value

const myNums = [1, 2, 3];

const myTotal = myNums.reduce( (acc, curr) => {
    console.log(`accumulator: ${acc} and current value: ${curr}`);
    return acc + curr;
}, 0); // 0 is the initial value for accumulator

console.log(myTotal);
