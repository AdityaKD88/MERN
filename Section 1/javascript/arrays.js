const nums = [12, 456, 234, 78, 23, 7];

console.log(nums);
console.log(nums.length);

const movies = ['Oppenheimer', 'Dream Girl 2', 'Gadar 2', 'RRR', 'Avengers', 'Flash']


// indexing
console.log(movies[2]);

console.log(movies.indexOf('Avengers'));

console.log(movies.at(-2));

// slicing
console.log(movies.slice(1,5));
console.log(movies.slice(3));
console.log(movies.slice(3, -1));
console.log(movies.slice(3, 5));

// adding elements
movies.push('Red'); // to add element at the end of array
movies.unshift('Batman'); // to add element at the beginning of array
console.log(movies);

// removing elements
movies.pop(); // to remove element from the end of array
movies.shift(); // to remove element from the beginning of array
console.log(movies);

// removes more than 1 element from any index
movies.splice(2, 3);
console.log(movies);

console.log(...movies); // spread operator

console.log(['new element', ...movies, 'new element', ...nums]);
console.log([...movies.slice(0,2), 'new element', ...movies.slice(2)]);

console.log([...'Aditya']);

const add_element = (arr, id, ele) => {
    return [...arr.slice(0,id), ele, ...arr.slice(id)]
}

console.log(add_element([1,2,3,4,5,6], 4, 9));

alpha = ['a', 'b', 'c', 'd', 'e']

// Object.defineProperty(Array.prototype, 'add_element', {
//     value: function(id, ele) {return [...this.slice(0,id), ele, ...this.slice(id)];}
// });