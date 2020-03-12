
/*
Promise.race. This is a similar method to Promise.all, except the first promise 
to settle will “win” the race, and its value will be passed along to branches of the race.
Rejections will also finish the race, and the race promise will be rejected.
*/

const p = Promise.race([
    new Promise(resolve => {
        // do stuff
        setTimeout(() => {
            resolve('first result');
        }, 10000);
    }),
    new Promise(function (resolve, reject) {
        setTimeout(() => {
            clearInterval(interval2);
            reject(new Error('request timeout after 5 sec'));
        }, 5000)
    })
]);

p.then(response => console.log(response))
    .catch(error => console.log(error));

let m = 1;
const interval2 = setInterval(() => {
    console.log(m);
    m += 1;
}, 1000);