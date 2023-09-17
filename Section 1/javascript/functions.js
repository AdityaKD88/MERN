function addNums(a, b) {
    var c = a+b;
    console.log(c);
}

addNums(34, 678);
// console.log(c);

const getAvg = function(m1, m2, m3, m4=120){
    let total = ((m1+m2+m3+m4)/800)*100;
    console.log(total+'%');
    return total;
}

let percentage = getAvg(136,199,67,136);
let percentag = getAvg(136,199,67);

console.log(percentage);
console.log(percentag);

// Arrow Function

const fact = (n) => {
    let f=1;
    for(i=2; i<=n; i++){
        f=f*i
    }
    return f
}

let ans = fact(6)
console.log(ans);

// WAP to check if a number is prime.
const isPrime=(num) =>{
    let flag=0
    for(let i=2; i<num; i++){
        if(num%i==0){
            console.log(num, 'is not a prime number');
            break
        }
        else{
            flag=1
        }
    }
    if(flag==1){
        console.log(num, 'is a prime number')
    }
}

isPrime(7)
isPrime(40)

// WAP to check if a number is palindrome

const isPalindrome = (num) => {
    let temp=num;
    let rev=0;
    while(num>0){
        dig=num%10
        rev=rev*10+dig
        num=parseInt(num/10)
    }
    if(rev==temp)
    console.log(temp, 'is a Palindrome number')
    else
    console.log(temp, 'is not a palindrome number')
}

isPalindrome(14451)
isPalindrome(16461)

// WAP to take sum of all perfect square from 10 to 100

let s=0
for(let i=10; i<=100; i++){
    if(i**0.5%1===0){
        s+=i
    }
}
console.log(s);