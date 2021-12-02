function delayPromise(sec) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(new Date().toISOString());
        }, sec * 1000);
    });
}

console.log('start');

async function Func2 () {
    await delayPromise(3).then((result => {console.log(result)}));
    return 'Func2'
}

Func2().then( (result) => {
    console.log(result);
})

console.log('end');