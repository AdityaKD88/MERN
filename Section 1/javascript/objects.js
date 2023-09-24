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
