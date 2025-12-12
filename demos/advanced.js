let x = 10;
const y = 20;
console.log("Let/Const:",x,y);


const add = (a, b) => a+ b;
console.log("Arrow Add:", add(5, 3));


const name = " Harsh";
console.log(`Hello ${name}, welcome to ES6!`);

const nums = [100, 200];
const [n1, n2] = nums;
console.log("Array Destructure:", n1, n2);


const user = { id: 1, uname: "Sam"};
const{ id, uname } = user;
console.log("Object Destructure:", id, uname);


const promise = new Promise(resolve => {
    setTimeout(() => resolve("Promise Resolved!"),1000);
});
promise.then(msg => console.log("Promise:", msg));


const fetchData = async () => {
    const data = await promise;
    console.log("Async/Await:", data);
};
fetchData();


console.log("Event Loop Start");

setTimeout(() => console.log("Timeout Executed"),0);

console.log("Event Loop End");


function outer() {
    let count = 0;
    return function inner() {
        count++;
        return count;
    };
}
const counter = outer();
console.log("Closure:", counter());
console.log("Closure:", counter());


console.log("Hoisting Example:");
var a = 50;
console.log(a);


