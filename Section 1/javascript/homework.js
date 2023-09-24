// WAP to check if a number is divisible 7 and 11.

num =77;

if (num%7==0 & num%11==0){
    console.log(num, 'is divisible by both 7 & 11');
}else{
    console.log(num, 'is not divisible by both 7 and 11');
}

// WAP to check if a number is a perfect square.

num2 = 16;
if(num2**0.5===parseInt(num2**0.5)){
    console.log(num2, 'is perfect square');
}else{
    console.log(num2, 'is not perfect square');
}

// WAP to take an array of names of your friends and filter all the names having characters more than 6

names = ['Abhishek', 'Aman', 'Harsh', 'Varun', 'Anmol', 'Pulkit', 'Gaurav', 'Navneet', 'Avinav'];

filteredNames = names.filter( name => name.length>6)
console.log(filteredNames);

// WAP to print all prime numbers in range of 100 - 2000.

for(let num=100; num<=2000; num++){
    let flag=1;
    for(let i=2; i<num; i++){
        if(num%i===0){
            flag=0;
            break;
        }
    }
    if(flag==1){
        console.log(num);
    }
}

// WAP to print Fibonacci series.

let a=0, b=1;
for(let i=1; i<=10; i++){
    console.log(a);
    c=a+b;
    a=b;
    b=c;
}

let [x, y]=[0,1];
process.stdout.write(x+'')
process.stdout.write(y+'')
for(let i=0; i<8; i++){
    let z =x+y;
    process.stdout.write(z+'')
    x=y;
    y=z;
}


// WAP to print pyramid pattern.

// old way
console.log();
for(let i=1; i<=10; i++){
    for(let j=10; j>=i; j--){
        process.stdout.write(' ');
    }
    for(let k=1; k<=i; k++){
        process.stdout.write(' *');
    }
    console.log();
}

// new way
for(let i=1; i<=10; i++){
    process.stdout.write(' '.repeat(10-i));
    process.stdout.write(' *'.repeat(i));
    console.log();
}