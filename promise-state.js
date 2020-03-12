const p = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(100), 2000)
})
// Then is executed 2 sec later
p.then(result => console.log(result));  // output 100

// This timeout is executed right away
// so 2 sec after 100 is displayed 2000 is displayed
setTimeout(() => p.then(result => console.log(result * 20)), 4000)  // output 2000