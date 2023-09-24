const nums = [34, 8, 9, 35, 36, 29, 61];

const evens = nums.filter( (n) => {return n%2===0} );

console.log(evens);

const prices = [345, 8726, 238, 20, 1002, 400, 799, 1400];

// WAP to filter prices between 500 and 2000.

const filteredPrices = prices.filter( p => p>=500 && p<=2000 );
console.log(filteredPrices);

const nums2 = [4, 8, 9, 4, 1, 7, 3];

const result = nums2.map((n) => { return n**2 });
console.log(result);

const prices2 = ['$56.28', '$882.99', '$78.66', '$9.234'];
// [56, 882, 78, 9]

console.log(parseInt('$3.45'.slice(1)));

const result2 = prices2.map((n) => { return parseInt(n.slice(1)) });
console.log(result2);

const names = ['Dhruv Chaurasia', 'Aviral Chandra', 'Piyush Katyal'];
console.log('Raju Rastogi'.split(' ')[0]);

const fNames = names.map((n) => { return n.split(' ')[0] })
console.log(fNames);