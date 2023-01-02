const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

const nums = [1,2,3,4,5];

const randomNumber2 = Math.random();

if(randomNumber > 0.7) {
    alert('The number is greater than 0.7!')
}

if(randomNumber > 0.7 && randomNumber2 > 0.7 || (!(randomNumber > 0.2) || !(randomNumber2 > 0.2))) {
    alert(`This is a second alert! 
    number 1: ${randomNumber}
    number 2: ${randomNumber2}`);
} 

console.log(randomNumber);
console.log(randomNumber2);

// for(const num in nums) {
//     console.log(nums[num]);
//     console.log('-------------');
// }

for(let i = nums.length-1; i >= 0; i--) {
    console.log(nums[i]);
    console.log('-------------');
}

for( const num of nums) {
    console.log(num);
    console.log('*************')
}