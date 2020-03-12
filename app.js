

const p = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('fail after 3 sec')), 3000)
});

const p2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Promise p2 is resolved after 1 sec and resloves p')
        resolve(p);
    }, 1000)
})

p2.then(result => console.log('Got a success: ', result, ' from p2'));
p2.catch(error => console.log('Got an error: ', error, ' from p2'));