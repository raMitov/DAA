//Make a function that merges two sorted arrays
//into one sorted array!
//mergeSortedArrays([0,3,4,31], [4,6,30]);
// [0,3,4,4,6,30,31]

//Metod 1 O(n^2) <not so good :(>
mergeSortedArrays = (arr1, arr2) => {
    let combinedArr = arr1.concat(arr2);
    for(let i = 0; i < combinedArr.length; i++){
        for(let j = i + 1; j < combinedArr.length; j++){
            if(combinedArr[i] > combinedArr[j]){
                let tmp = combinedArr[i];
                combinedArr[i] = combinedArr[j];
                combinedArr[j] = tmp;
            }
        }
    }
    return combinedArr;
}


//Method 2 0(Log n)
mergeSortedArrays1 = (arr1, arr2) => {
    return arr1.concat(arr2).sort((a, b) => a - b);
};

//Method 3 O(1) better! :)))
mergeSortedArrays2 = (arr1, arr2) =>{
    let sorted = [];
    let i = 0, j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            sorted.push(arr1[i]);
            i++;
        }
        else{
            sorted.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        sorted.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        sorted.push(arr2[j]);
        j++;
    }

    return sorted;
}

const arr1 = [1, 3, 2, 4];
const arr2 = [7, 9, 9, 11];
const merged = mergeSortedArrays(arr1, arr2);
console.log(merged);
