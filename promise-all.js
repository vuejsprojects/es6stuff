/*
Promise.all makes it possible to run concurent paths

Promise.all has two possible outcomes.
    Settle with a single rejection reason as soon as one of its dependencies is rejected
    Settle with all fulfillment results as soon as all of its dependencies are fulfilled

*/

Promise.all([
    new Promise(resolve => {
        // do stuff
        setTimeout(() => {
            resolve('first result');
        }, 5000);
    }), new Promise(resolve => {
        // do different stuff
        setTimeout(() => resolve('second result'), 5000);
    })
]).then(results => {
    clearInterval(interval);
    console.log('It took 5 sec not 10 sec to fulfill: ', results);
});

let n = 1;
const interval = setInterval(() => {
    console.log(n);
    n += 1;
}, 1000);
