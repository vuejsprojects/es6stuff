const p = new Promise(function (resolve, reject) {
    const timeout = 3000;
    console.log('t0 - It will take ', timeout, ' msec to reject p');
    setTimeout(() => {
        console.log(timeout, " msec later p is rejected");
        reject("new Error('fail')");
    }, 3000);
});

/*
Resolving a promise A with a promise B makes promise A to wait for promise B to settle
if promise B takes longer than promise A. The settlement status of promise A in any
case (i.e. taking longer or not) is the one of promis B
*/

const p2 = new Promise(function (resolve, reject) {
    const timeout = 1000;
    setTimeout(() => {
        console.log(timeout, ' msec later, resolving P2 with reuslt P, but P is pending');
        console.log('so we wait for p to settle ....');
        resolve(p);
    }, 1000)
});

p2.then(result => console.log('p2 is fulfilled with result: ', result))
.catch(error => console.log('from p2 - p was rejected: ', error));
console.log('t0 - Waiting for the outcome');
p.catch(error => {
    console.log("p was rejected with: ", error);
});