//Create a function that reverses a string:
//Method 1 O(n)
function reverse(str){
    let arr = str.split('');
    for(let i = 0; i <= arr.length / 2; i++){
        let tmp = str[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = tmp;
    }
    return arr.join('');
}
//Method 2 O(n)
function reverse2(str)
{
    return str.split('').reverse().join('');
}

//Method 3 O(n)
const reverse3 = str => str.split('').reverse().join('');
let strig = '';
let newstrig = reverse(strig);
console.log(newstrig);
