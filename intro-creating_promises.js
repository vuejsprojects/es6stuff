/*
https://ponyfoo.com/articles/es6-promises-in-depth

in ES6, a promise is a state machine representation of an asynchronous 
operation and can be in one of 3 states: "pending", "fulfilled", or "rejected".
* pending: operation in progress
* settled fulfilled: an asynchronous operation that's completed successfully
* settled rejected: promise represents an asynchronous operation that failed

A promise constructor takes an "executor" or "resolver" function that 
takes 2 functions as arguments, resolve and reject.
Resolve and reject can be passed an arguments that will be passed to the 
then or reject chaining.
Note: reject should be passed an Error exception as good practice. 

Promises can be used both for synchronous and async call but makes more sense for
async calls.
A promise is an altyernative to callbacks or event driven api .
fetch('foo', (err, res) => {
  if (err) {
    // handle error
  }
  // handle response
})
or
fetch('foo')
  .on('error', err => {
    // handle error
  })
  .on('data', res => {
    // handle response
  })
ex:
const p = fetch('some resource');
fetch returns a promise, when the resource loading is complete the one can chain a then
callback that is executed once the resource is fetched.

To create a new promise:
const resolve = function(some_result) {

}
const reject = function(some_result) {

}

const resolver_function = function(resolve, reject) {
    ....
    // do something
    // got some result and now I can fulfill or reject the promise 
    // with the "reslult" as parameter
    resolve(result);
    // or result in this case being an error message
    reject(result);
}
const p = new Promise(resolver_functon)

If the promise p is fulfilled p.then() is called
If the promise p is rejected p.catch() is called

Note: .then and .catch return a new promise every time

ex:
new promise(resolve => resolve({ foo: 'bar' })


*/
// The resolver function is defined by the user, and its parameters resolve and reject 
// a part of the Promise API and NOT define by the user!
//
// The following resolve function is a misconception
// const resolve = function(resource) {
//     console.log('After 1 sec I got the remote resource: ', resource);
// };

const p = new Promise((resolve, reject) => {
    console.log('Doing what I have to do will take 2 second');
    // faking the resource I got after 2 sec
    let resource = {};
    const r = Math.floor(Math.random() * 2 );
    if (r) {
        resource.result = 'All is fantastic';
    }
    else {
        resource.error = new Error('Could not get the resource');
    }

    setTimeout(
        function() {
            if (resource.error) {
                // reject parameter must be an exception!!!
                reject(resource.error);
            }
            else {
                resolve(resource);
            }
            
        }, 
        2000
    );
});

// This separate catch will result in UnhandledPromiseRejectionWarning exception
// p.catch(error => console.log('Something bad happened: ', error.message));

// To prevent the UnhandledPromiseRejectionWarning exception from occuring
// One must chain the then and catch
// Though according to some litterature not chaining the catch should work
// without throwing this warning!
p.then(result => console.log('All is good I got result: ', result)).
catch(error => console.log('Something bad happened: ', error.message));

p.then(result => console.log('A second fullfilment handler can be added: ', result)).
catch(error => console.log('And a second rejection handler - Something bad happened: ', error.message));

// equivalent to catch
p.then(result => console.log('A third form of fullfilment handler can be added: ', result), 
error => console.log('And a third form of rejection handler - Something bad happened: ', error.message));


console.log('I fired the ops I need to execute now I am waiting for the outcome');
console.log('The outcome is a random success or failure');
console.log('...');
