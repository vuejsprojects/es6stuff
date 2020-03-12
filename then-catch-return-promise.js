/*
Remember then and catch return a promise so it possible to chain some processing.
The result of the first promise is well know it's [1, 2, 3]
The second the get the result of the first one
*/

Promise.resolve([1, 2, 3])
    .then(values => values.map(value => value * 2))
    .then(values => console.log(values));

/*
The same works for rejection
*/

Promise.reject(new Error('Database ds.214.53.4.12 connection timeout!'))
    .catch(error => { throw new Error('Internal Server Error') })
    .catch(error => console.info(error));
