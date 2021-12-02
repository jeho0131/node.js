console.log('start');

async function Func2() {
    return 'Func2'
}

Func2().then( (result) => {
    console.log(result);
})

console.log('end');