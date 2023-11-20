 
 const d = new Date(2023, 11, 11);

 console.log(d.getDate());
 console.log(d.getDay());
 console.log(d.getMonth());
 console.log(d.getFullYear());
 

 const numbers = [4, 2, -5, 10, 115];
 console.log(Math.max(...numbers));

 
 console.log(parseInt("15.5") + 10);
 

 
 console.log(Math.trunc(4.9999999));
 

const number7 = 4.51;
const isInt = Number.isInteger(number7);
console.log(isInt);

console.log(Number.isInteger(30));

const dd =Math.random()*10;
console.log(Math.trunc(dd));



const number8 = 27;
console.log(number8.toString(2));

function format(message, formatCallback) {
    return formatCallback(message)
}


// indexOf
 
const colors = ['red', 'green', 'blue', 'green'];

const index = colors.indexOf('green',2);
console.log(index);


// lastIndex


const colors2 = ['red', 'green', 'blue', 'green'];

const index2 = colors2.lastIndexOf('green');
console.log(index2);


// findIndex
 
const ages = [12, 14, 19, 21];

const index3 = ages.findIndex(function(element){
    return element >= 18;
})
console.log(index3);


// find
 
const numbers2 = [11, 7, 9, 15];

const el =numbers2.find(function(element){
    return element % 3 === 0
})
console.log(el);


// filter
 
const numbers3 = [2, 3, 7, 4, 9];

const evenNumbers = numbers3.filter(function(currentValue){
    return currentValue % 2 === 0;
})
console.log(evenNumbers);


// concat

const primaryColors = ['red', 'yellow', 'blue'];
const secondaryColors = ['green', 'orange', 'violet'];

const colors3 = primaryColors.concat(secondaryColors, 'black');
console.log(colors3);


// slice

const colors4 = ['black', 'red', 'green', 'blue', 'white'];

const rgbColors = colors4.slice(1,4);
console.log(rgbColors);


// splice

const colors5 = ['black', 'red', 'green', 'blue', 'white'];

colors5.splice(2, 0, 'gray', 'yellow')
console.log(colors5);


// join

const arrColors = ['red', 'green', 'blue'];

const strColors = arrColors.join('-');
console.log(strColors);


// sort

const colors6 = ['black', 'red', 'green', 'blue', 'white'];
const numbers4 = [921, 735, 840];

colors6.sort();
console.log(colors6);

numbers4.sort();
console.log(numbers4);


// reverse

const colors7 = ['red', 'green', 'blue'];

colors7.reverse()
console.log(colors7);

// map

const numbers5 = [3, 7, 9]

const squaredNumbers = numbers5.map(function(currentValue){
    return currentValue * currentValue;
})
console.log(squaredNumbers);

// split

const strColors2 = 'red ; green ; blue ; black';

const arrColors2 = strColors2.split(' ; ', 3)
console.log(arrColors2);


// reduce

const numbers6 = [2, 4, 1, 3, 5];

const total = numbers6.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
}, 100)
console.log(total);


const car ={
    name: 'camry',
    color: 'white',
    currentSpeed: 0,
    move: function(speed){

        this.currentSpeed = speed;
        return `the ${this.name} is moving at speed of ${this.currentSpeed}km per hour`
    },
    stop: function(){
        this.currentSpeed = 0;
        return `the ${this.name} stopped`;
    }
}

console.log(car.move(100));


class Car {
    static numberOfCars = 0 ;
    #currentSpeed
    constructor(name, color, currentSpeed){
        this.name = name ;
        this.color = color ;
        this.#currentSpeed = currentSpeed ;
        Car.incrementNumberOfCars();

    }
    move(speed){
        this.#currentSpeed = speed;
        return `the ${this.name} is moving at speed of ${this.#currentSpeed}km per hour`;
    }
    stop(){
        this.#currentSpeed = 0;
        return `the ${this.name} stopped`;
    }
    static incrementNumberOfCars(){
        Car.numberOfCars++;
    }
}

const car1 = new Car('camry', 'white', 0);
const car2 = new Car('corolla', 'black', 0); 
console.log(car1.move(100));
console.log(car2.move(70));
console.log(Car.numberOfCars);


class Animal{
    constructor(name, color){
        this.name = name;
        this.color = color;
        this.speed = 0;
    }
    run (speed){
        this.speed = speed;
        return `${this.name} runs with speed ${this.speed}`;
    }
    makeSound(){
        return 'sound...'
    }
}

class Cat extends Animal{
    makeSound(){
        return 'new...'
    }
}

class Fox extends Animal{
    makeSound(){
        return 'bark...'
    }
}

const cat = new Cat ('snowy', 'white')
console.log(cat);
console.log(cat.makeSound());
