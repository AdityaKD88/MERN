const user = {
    name : 'Ramu',
    email : 'ramu@mail.com',
    age : 56,
    password : 'uncbe674',
    'roll-no' : 'A12787'
}

console.log(user.name);
console.log(user['age']);

console.log(user['roll-no']);

user.city = 'Lucknow';
console.log(user);

user.age = 42;
console.log(user);

const smartphone = {
    brand : 'Samsung',
    model : 's23',
    price : 80000,
    colors : ['Black', 'Blue', 'Grey']
};

console.log(smartphone.colors.at(-1));

smartphone.colors[2] = 'Red';
console.log(smartphone);

const smartphoenList = [
    { brand : 'Samsung',
      model : 's23',
      price : 80000,
      colors : ['Black', 'Blue', 'Grey']}
];

console.log(smartphoenList[0].brand);
console.log(smartphoenList[0].colors[1][0]);

const smartphoneList2 = [
    { brand: 'Samsung', model : 's23', price : 80000, colors : ['black','blue','grey'] },
    { brand: 'Lava', model : 'Agni', price : 20000, colors : ['red','yellow'] },
    { brand: 'Xiaomi', model : 'Note 13 Pro', price : 60000, colors : ['blue','black'] },
    { brand: 'Oppo', model : 'F21', price : 35000, colors : ['white','silver'] },
    { brand: 'Xiaomi', model : 'K50i', price : 26000, colors : ['black','grey'] },
    { brand: 'Samsung', model : 'M55', price : 30000, colors : ['blue', 'red', 'yellow'] },
];

console.log(smartphoneList2[0]);

console.log(smartphoneList2[0].colors[1]);

smartphoneList2[2].price = 65000;
console.log(smartphoneList2[2]);

let brands = smartphoneList2.map( (phone) => { return phone.brand } );
console.log(brands);

// create an array of prices
let prices = smartphoneList2.map( (phone) => { return phone.price*0.9 } );
console.log(prices);

const budgetPhone = smartphoneList2.filter( (phone) => { return phone.price < 50000 } );
console.log(budgetPhone);

// WAP to filter phones with brand samsung
let search = 'Samsung';

const result = smartphoneList2.filter((phone) => { return phone.brand === search });
console.log(result);

// WAP to filter smartphone having black color

const blackPhones = smartphoneList2.filter( (phone) => { return phone.colors.includes('black') } );
console.log(blackPhones);

