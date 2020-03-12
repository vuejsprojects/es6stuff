// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await

/*
Invoking an async function  returns a promise. This is one 
of the traits of async functions — their return values are guaranteed 
to be converted to promises.
*/

let hello = async function () { return "Hello" };
hello().then(result => console.log(result));  // output Hello

/*
One can use await when calling any function that returns a Promise, including web API functions.
This can be put in front of any async promise-based function to pause your code 
on that line until the promise fulfills, then return the resulting value. 
In the meantime, other code that may be waiting for a chance to execute gets to do so.
*/


async function helloAgain() {
    return await Promise.resolve("Oh Hello");
};

// a shorthand of then
helloAgain().then(console.log);