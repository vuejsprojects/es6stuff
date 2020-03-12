/*
When one already knows whether the promise is fulfilled or rejected what the result
is, one can skip using the function constructor new Promise().

*/

new Promise(resolve => {
    const result = "result known in advance";
    resolve(result);
}).catch(error => console.log("there shouldn't be any issue"))
.then(outcome => console.log(outcome));

// is equuivalent to (except I din't add any catch)

Promise.resolve("result known in advance").then(outcome => console.log('Without constructor ',outcome));

// Same for a rejection
Promise.reject("error known in advance").catch(outcome => console.log('Without constructor ',outcome));