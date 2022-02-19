const fname = "some";
let age = 23;
age = 25;
const arr = [1, 2, 3, 4, 5, 7];
//template string
const st = `hello!
${fname}
${age}
yo`;
//spread operator
const arr2 = [...arr, 56, 534, 2, 25];
const yo = Math.max(...arr2);
//arrow function
const func = () => 1;
const func3 = x => x - 1;
const func2 = (x = 0) => x - 1; // default parameter value
const func1 = (x, y, z) => x + y + z;
const func11 = (x, y, z) => {
    x + y + z;
    return 0;
}

console.log(func2(6));

