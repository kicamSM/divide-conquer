function findRotatedIndex(array, value) {
    let pivot = findPivot(array)

    if (pivot > 0 && value >= array[0] && value <= array[pivot - 1]) {
        // * this is dealing with the first half of the array
      return locateValue(array, value, 0, pivot - 1);
    } else {
        // *this is dealing with the second half of the array. 
      return locateValue(array, value, pivot, array.length - 1);
    }
}

// [6, 7, 8, 9, 1, 2, 3, 4], 22

function locateValue(array, value, leftIdx, rightIdx) {
    if (array.length === 0) return -1;
    if(value < array[leftIdx] || value > array[rightIdx]) return -1; 
 
    while (leftIdx <= rightIdx) {
        let midIdx = Math.floor((leftIdx + rightIdx) / 2);
        if (array[midIdx] === value) {
          return midIdx;
        } else if (value < array[midIdx]) {
          rightIdx = midIdx - 1;
        } else {
          leftIdx = midIdx + 1;
        }
      }
      return -1;

}

function findPivot(array) {
    if(array.length === 1 || array[0] < array[array.length - 1]) return 0; 
    // * If The length = 1 OR if first item in array is less than the last item in array return 0 

    let leftIdx = 0; 
    let rightIdx = array.length - 1; 

    while(leftIdx <= rightIdx) {

        let midIdx = Math.floor((leftIdx + rightIdx) / 2);

        if(array[midIdx] > array[midIdx + 1]) {
            // *if value of midIdx is greater than value of midIdx + 1 
            console.log("if is running")
             return midIdx + 1}
        else if(array[leftIdx] <= array[midIdx]) {
            // *else if value of leftIdx is less than or equal to value of midIdx
            console.log("else if is running")
            leftIdx = midIdx + 1; 
        } else {
            // *else move right index 
            console.log("else is running")
            rightIdx = midIdx - 1;
        }
    }

}




module.exports = findRotatedIndex





// function findRotatedIndex(array, value) {

//     let leftIdx = 0;
//     console.log("leftIdx:", leftIdx);
//     let rightIdx = array.length - 1;
//     console.log("rightIdx:", rightIdx) 

//     // [6, 7, 8, 9, 1, 2, 3, 4], 3

//     // midIdx = 3
//     // midVal = 9

//     // else if
//         // rightIdx = 3 -1 = 2

//     while(leftIdx <= rightIdx) {

//         let midIdx = Math.floor((rightIdx + leftIdx)/ 2);
//         console.log("midIdx:", midIdx)
//         let midVal = array[midIdx]; 
//         console.log("midVal:", midVal)

//         if(midVal === value) {
//             console.log("if statement is running:")
//             return(midIdx);
//         } else if(midVal > value) {
//             console.log("else if statement is running:")
//             rightIdx = midIdx -1;
//             console.log("Redefined rightIdx:", rightIdx)
//             // if(rightIdx === -1) {
//             //     return array.length
//             // }
//         } else {
//             console.log("else statement is running:")
//             leftIdx = midIdx + 1;
//             console.log("Redefined left index:", leftIdx)
//         }
//     }
 

//  return -1 
// }

// ([3,4,1,2])

// function findPivot(array) {
//     let leftIdx = 0;
//     console.log("leftIdx:", leftIdx);
//     let rightIdx = array.length - 1;
//     console.log("rightIdx:", rightIdx) 

//         while(leftIdx <= rightIdx) {

//         let midIdx = Math.floor((rightIdx + leftIdx)/ 2);
//         console.log("midIdx:", midIdx)
//         let midVal = array[midIdx]; 
//         console.log("midVal:", midVal)

//         if(midVal < array[midIdx + 1] && midVal < array[midIdx -1]) {
//             console.log("if statement is running:")
//             return(midIdx);
//         } else if(midVal > array[midIdx + 1]) {
//             console.log("else if statement is running:")
//             console.log("midVal:", midVal)
//             console.log("array[midIdx + 1]:", array[midIdx + 1])
           
//             // findPivot([3,4,1,2])

//             leftIdx = midIdx;
//             console.log("Redefined leftIdx:", leftIdx)
//             // if(rightIdx === -1) {
//             //     return array.length
//             // }
//         } else if(midVal > array[midIdx - 1]) {
//             console.log("else if 2 statement is running:")
//                 leftIdx = midIdx - 1; 
//                 console.log("Redefined leftIdx in else if 2:", leftIdx)
//         } else {
//             console.log("else statement is running:")
//             rightIdx = midIdx + 1;
//             console.log("Redefined right index:", rightIdx)
//         }
//     }
 

//  return -1 
// }

// [6, 7, 8, 9, 1, 2, 3, 4]
//                 ^

// midIdx = 3 
// midVal = 9

// else if 
    // redefeined left idx = 3
    // midIdx = 5 
    // midVal = 2

// else if 2 
    // redf


// [6, 7, 8, 9, 1, 2, 3, 4]
//                 ^

// midIdx = 3 
// midVal = 9

// else if statement
    // leftIdx = 3
    // midIdx = 5
    // midVal = 2

// else statement 


// [37, 44, 66, 102, 10, 22]
//      ^       

// midIdx = 2 
// midVal = 66

// else if 2 statement  midVal (66) > array[midIdx -1] (44)
    // redefining leftIdx midIdx


    // redefining rightIdx = 3 (midIdx 2);
    // midIdx = 1
    // midVal = 44

// else statement 
    // redefining rightIdx = 2 (midIdx 1);
    // midIdx = 1

// else if statement
    // leftIdx = 3
    // midIdx = 5
    // midVal = 2

// else statement 
