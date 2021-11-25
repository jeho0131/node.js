const animal = {
    leg : 4,
    tail : 1,
    say() {
        console.log('I have 4 legs 1 tail');
    }
}

const dog = {
    sound: 'Wang',
    happy: true
}
dog.__proto__ = animal;

const cat = {
    sound : 'yaong',
    happy: false
}
cat.__proto__ = dog;

console.log(cat.happy);
console.log(cat.leg);
console.log(cat.sound);