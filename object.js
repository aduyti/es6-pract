const myLap = {
    processor: {
        name: 'i7',
        core: 2,
        thread: 4,
        clockSpeed: '2.4GHz'
    },
    ram: '8GB',
    storage: '2TB',
    graphics: '4GB',
    display: '17inch',
    price: 43000
};
const accessory = {
    keyboard: 'A4Tech',
    mouse: 'A4Tech',
}
// destructuring 
const { processor, ram, graphics } = myLap;
const [a, b, c, d, e] = [1, 2, .2, 25, 55];
const [x, y] = [1, 2, .2, 25, 55];
// optional chaining
const xv = myLap?.processor?.name;
const xy = myLap?.processor?.cache;
// spread operator on object
const mySetup = { ...myLap, ...accessory };
console.log(mySetup);