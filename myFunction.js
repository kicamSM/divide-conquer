function findFloor(array, value, leftIdx = 0, rightIdx = array.length - 1) {
  
  if(leftIdx > rightIdx) return -1; 
  if (value >= arr[rightIdx]) return arr[right];

  let midIdx = (leftIdx + rightIdx / 2); 

  if(array[midIdx] === value) return array[midIdx]; 
  
  if(midIdx > 0 && array[midIdx - 1] <= value && value < array[midIdx]) {
    return array[midIdx - 1]
  }

  if (value < array[midIdx]) {
    return findFloor(arr, num, leftIdx, mid - 1);
  }


  return findFloor(array, value, midIdx + 1, rightIdx)
  
}

// ************************************************************************************

function findRotationCount(array) {
  let pivot = findPivot(array)
  return pivot 
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


// ****************************************************************************** 

// function findPivot(arr) {
//     if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
//     var start = 0;
//     var end = arr.length - 1;
//     while (start <= end) {
//       var mid = Math.floor((start + end) / 2);
//       if (arr[mid] > arr[mid + 1]) return mid + 1
//       else if (arr[start] <= arr[mid]) {
//         start = mid + 1
//       } else {
//         end = mid - 1
//       }
//     }
//   }

// function findPivot(array) {
//     if(array.length === 1 || array[0] < array[array.length - 1]) return 0; 
//     // * If The length = 1 OR if first item in array is less than the last item in array return 0 

//     let leftIdx = 0; 
//     let rightIdx = array.length - 1; 

//     while(leftIdx <= rightIdx) {
//         let midIdx = Math.floor((leftIdx + rightIdx) / 2);
//         if(array[midIdx] > array[midIdx +1]) {
//             return midIdx + 1
//         } else if(array[leftIdx] <= array[midIdx]) {
//             leftIdx = midIdx + 1; 
//         } else {
//             rightIdx = midIdx - 1;
//         }
//     }

// }


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

// [37, 44, 66, 102, 10, 22]

// midIdx  = 66

// else if 
    // 37 < 66
    // redefine leftIdx as midIdx + 1 ===102  leftIDx = 3
    // midIdx = 4


// else 
    // redefine rightIdx as midIdx (4 - 1) = 3
    // 102 is mid Idx






// ! Not working Not working Not working Not working Not working Not working Not working 

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



// ! The answer is below

// function findRotatedIndex(array, num) {
//   var pivot = findPivot(array)
//   if (pivot > 0 && num >= array[0] && num <= array[pivot - 1]) {
//     return binarySearch(array, num, 0, pivot - 1);
//   } else {
//     return binarySearch(array, num, pivot, array.length - 1);
//   }
// }

// function binarySearch(array, num, start, end) {
//   if (array.length === 0) return -1;
//   if (num < array[start] || num > array[end]) return -1;

//   while (start <= end) {
//     var mid = Math.floor((start + end) / 2);
//     if (array[mid] === num) {
//       return mid;
//     } else if (num < array[mid]) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }
//   return -1;
// }

// function findPivot(arr) {
//     console.log("arr:", arr)
//   if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
//   var start = 0
//   var end = arr.length - 1;
//   while (start <= end) {
//     var mid = Math.floor((start + end) / 2);
//     console.log("mid:", mid)
//     if (arr[mid] > arr[mid + 1]) return mid + 1
//     else if (arr[start] <= arr[mid]) {
//       start = mid + 1
//     } else {
//       end = mid - 1
//     }
//   }
// }

// * Working Working Working Working Working Working Working Working Working Working Working 


// function sortedFrequency(array, value) {

//     let leftIdx = 0;
//     console.log("leftIdx:", leftIdx);
//     let rightIdx = array.length - 1;
//     console.log("rightIdx:", rightIdx) 

//     while(leftIdx <= rightIdx) {
        
//         let midIdx = Math.floor((rightIdx + leftIdx)/ 2);
//         console.log("midIdx:", midIdx)
//         let midVal = array[midIdx]; 
//         console.log("midVal:", midVal)

//         if(midVal === value && array[midIdx - 1] !== midVal) {
//             leftIdx = midIdx; 
//             console.log("leftIdx redefined:", leftIdx);
//         } 

//         if(midVal === value && array[midIdx + 1] !== midVal) {
//             console.log("midIdx!!!:", midIdx)
//             rightIdx = midIdx; 
//             console.log("rightIdx redefined:", rightIdx) 
//         } 
//         console.log("midValue!!!:", midVal)
//         console.log("midIdx!!!:", midIdx)
//         console.log("rightIdx:", rightIdx)
//         console.log("leftIdx:", leftIdx)
//         console.log("array[rightIdx + 1]:", array[rightIdx + 1])
//         console.log("array[leftIdx - 1]:", array[leftIdx - 1])
//         // if(midVal === value && array[rightIdx + 1] !== midVal && array[leftIdx - 1] !== midVal){

//         //     return (rightIdx - leftIdx)
//         // }

//         if(midVal === value && array[midIdx + 1] !== midVal && array[midIdx - 1] !== midVal){

//             return (rightIdx - leftIdx)
//         }
        
//     }

//     return ("This is the return statement for now")
// }

// [1, 1, 2, 2, 2, 3, 3]

function sortedFrequency(array, value) {
    let firstVal = findFirstValue(array, value);
    console.log("firstVal", firstVal)
    let lastVal = findLastValue(array, value)
    console.log("lastVal", lastVal)

    if(firstVal === -1 && lastVal === -1) {
        return 0
    }

    return lastVal - firstVal + 1;
    
}

// [1, 1, 1, 2, 2], 2
//  midIdx = 2

// ([1, 2, 2, 2, 3], 2)
// midIdx = 2

// [1, 1, 1, 1, 1]
// leftIdx = 2


function findFirstValue(array, value) {
    let leftIdx = 0;
    let rightIdx = array.length - 1;
  
    while (leftIdx <= rightIdx) {
      let midIdx = Math.floor((leftIdx + rightIdx) / 2);
  
      if (array[midIdx] === value) {
        if (midIdx === 0 || array[midIdx - 1] !== value) {
          return midIdx;
        } else {
            rightIdx = midIdx - 1;
        }
      } else if (array[midIdx] < value) {
        leftIdx = midIdx + 1;
      } else {
        rightIdx = midIdx - 1;
        if (rightIdx < 0) {
          return -1;
        }
      }
    }
    return -1;
  }





// function findFirstValue(array, value) {
//     if (array[0] === value) {
//       return 0;
//     }
  
//     let leftIdx = 0;
//     let rightIdx = array.length - 1;
  
//     while (leftIdx <= rightIdx) {
//       let midIdx = Math.floor((leftIdx + rightIdx) / 2);
  
//       if (array[midIdx] === value && array[midIdx - 1] !== value) {
//         console.log("if statement is running")
        
//         return midIdx;
//       } else if (array[midIdx] < value) {
//         console.log("else if statement is running")
//         leftIdx = midIdx;
//         console.log("midIdx:", midIdx)
//         console.log("leftIdx:", leftIdx)
//       } else {
//         console.log("else statement is running")
//         rightIdx = midIdx;
//         console.log("rightIdx:", rightIdx)
//         if (rightIdx === 0) {
//           return -1;
//         }
//         // if (leftIdx === array.length) {
//         //     return -1;
//         //   }
//       }
//     }
  
//     return -1;
//   }

  
// function findFirstValue(array, value) {
//     let leftIdx = 0;
//     let rightIdx = array.length - 1;
  
//     while (leftIdx <= rightIdx) {
//       let midIdx = Math.floor((leftIdx + rightIdx) / 2);
  
//       if (array[midIdx] === value) {
//         console.log(" if is running")
//         if (array[midIdx - 1] !== value) {
//           return midIdx;
//         } else {
//           leftIdx = midIdx + 1;
//         }
//       } else if (array[midIdx] < value) {
//         console.log("else if is running")
//         leftIdx = midIdx + 1;
//       } else {
//         console.log("else is running")
//         rightIdx = midIdx - 1;
//         if (rightIdx < 0) {
//           return -1;
//         }
//       }
//     }
//     return -1;
//   }


// function findFirstValue(array, value) {
//     let leftIdx = 0;
//     let rightIdx = array.length - 1;

//     while(leftIdx <= rightIdx) {
//         let midIdx = Math.floor((rightIdx + leftIdx)/ 2); 

//         if(array[midIdx] === value && array[midIdx - 1] !== value) {
//             return midIdx;
//         }else {
//           rightIdx = midIdx; 
//           if(rightIdx === 0) {
//             return -1
//           }

//         }
//     }
//     return -1

// }

//  [2, 2, 2, 2, 2]

function findLastValue(array, value) {
    let leftIdx = 0;
    let rightIdx = array.length - 1;
  
    while (leftIdx <= rightIdx) {
      let midIdx = Math.floor((leftIdx + rightIdx) / 2);
  
      if (array[midIdx] === value) {
        if (midIdx === array.length - 1 || array[midIdx + 1] !== value) {
          return midIdx;
        } else {
          leftIdx = midIdx + 1;
        }
      } else if (array[midIdx] < value) {
        leftIdx = midIdx + 1;
      } else {
        rightIdx = midIdx - 1;
        if (rightIdx < 0) {
          return -1;
        }
      }
    }
    return -1;
  }


// function findLastValue(array, value) {
//   let leftIdx = 0;
//   let rightIdx = array.length - 1;

//   while (leftIdx <= rightIdx) {
//     let midIdx = Math.floor((leftIdx + rightIdx) / 2);

//     if (array[midIdx] === value && array[midIdx + 1] !== value) {
//       return midIdx;
//     } else if (array[midIdx] < value) {
//       leftIdx = midIdx + 1;
//     } else {
//       rightIdx = midIdx - 1;
//       if (rightIdx < 0) {
//         return -1;
//       }
//     }
//   }
//   return -1;
// }

// function findLastValue(array, value) {
//     let leftIdx = 0;
//     let rightIdx = array.length - 1;
  
//     while (leftIdx <= rightIdx) {
//       let midIdx = Math.floor((rightIdx + leftIdx) / 2);
  
//       if (array[midIdx] === value) {
//         if (midIdx === array.length - 1 || array[midIdx + 1] !== value) {
//           return midIdx;
//         } else {
//           leftIdx = midIdx + 1;
//         }
//       } else {
//         rightIdx = midIdx - 1;
//         if (rightIdx < 0) {
//           return -1;
//         }
//       }
//     }
//     return -1;
//   }

// function findLastValue(array, value) {
//     let leftIdx = 0;
//     let rightIdx = array.length - 1;
//     console.log("rightIdx:", rightIdx)

//     // [2, 3, 3]

//     while(leftIdx <= rightIdx) {
//         let midIdx = Math.floor((rightIdx + leftIdx)/ 2); 
//         console.log("midIdx:", midIdx)

//         if(array[midIdx] === value && (array[midIdx + 1] !== value)) {
//             console.log("if statement is running")
//             return midIdx;
//         }else {
//             console.log("else statement is running")
//           leftIdx = midIdx + 1; 
//           console.log("leftIdx:", leftIdx)
//           if(leftIdx === array.length - 1) {
//             console.log("second if statement is running")
//             return array.length - 1;
//           }

//         }
//     }
//     return -1

// }








// function findLastValue(array, value) {
//     let leftIdx = 0;
//     let rightIdx = array.length - 1;
//     console.log("rightIdx:", rightIdx)

//     // [2, 3, 3]

//     while(leftIdx <= rightIdx) {
//         let midIdx = Math.floor((rightIdx + leftIdx)/ 2); 
//         console.log("midIdx:", midIdx)

//         // console.log(" array[midIdx + 1]:",  array[midIdx + 1])
//         // console.log("!!!!array[midIdx] === value:", array[midIdx] === value)
//         // console.log("!!!!array[midIdx + 1] !== value:", array[midIdx + 1] !== value)
//         // if(array[midIdx] === value && (array[midIdx + 1] !== value) || (array[midIdx + 1] === undefined)) {
//         //     console.log("if statement is running")
//         //     return midIdx;

//         // if(array[midIdx] === value && (array[midIdx + 1] !== value) || (array[midIdx + 1] === undefined)) {

//         if(array[midIdx] === value && (array[midIdx + 1] !== value)) {
//             console.log("if statement is running")
//             return midIdx;
//         }else {
//             console.log("else statement is running")
//           leftIdx = midIdx; 
//           console.log("leftIdx:", leftIdx)
//           if(leftIdx === array.length - 1) {
//             console.log("second if statement is running")
//             return array.length - 1;
//           }

//         }
//     }
//     return -1

// }

// findFirstValue([1, 2, 2, 2, 3], 2) 

// function findFirstValue(array, value) {
//     let leftIdx = 0;
//     console.log("leftIdx:", leftIdx);
//     let rightIdx = array.length - 1;
//     console.log("rightIdx:", rightIdx) 

//     while(leftIdx <= rightIdx) {
//         let midIdx = Math.floor((rightIdx + leftIdx)/ 2);
//         console.log("midIdx:", midIdx)
//         let midVal = array[midIdx]; 

//         console.log("!!!!array[midIdx] === value:", array[midIdx] === value)
//         console.log("!!!!array[midIdx - 1] !== value:", array[midIdx - 1] !== value)
//         if(array[midIdx] === value && array[midIdx - 1] !== value) {
//             console.log("if statement is running")
//             return midIdx;
//         // } else if(array[midIdx] === value) { 
//         }else {
//             console.log("else if statement is running")
//           rightIdx = midIdx; 
//           console.log("rightIdx:", rightIdx)
//           if(rightIdx === 0) {
//             return -1
//           }

//         }
//     }
//     return -1

// }


// [1, 2, 2, 3, 3, 3], 2
// Note that this is working but it seems like it would be O(n) because it would be stepping through each value in the array. 
// function findFirstValue(array, value) {
//     let leftIdx = 0;
//     console.log("leftIdx:", leftIdx);
//     let rightIdx = array.length - 1;
//     console.log("rightIdx:", rightIdx) 

//     while(leftIdx <= rightIdx) {
//         // let midIdx = Math.floor((rightIdx + leftIdx)/ 2);
//         // let midVal = array[midIdx]; 

//         if(array[leftIdx] === value && array[leftIdx - 1] !== value) {
//             return leftIdx;
//         } else {
//           leftIdx = leftIdx + 1; 
//         }
//     }

//     return -1

// }




// function sortedFrequency(array, value) {

//     let leftIdx = 0;
//     console.log("leftIdx:", leftIdx);
//     let rightIdx = array.length - 1;
//     console.log("rightIdx:", rightIdx) 

//     while(leftIdx <= rightIdx) {
        
//         let midIdx = Math.floor((rightIdx + leftIdx)/ 2);
//         console.log("midIdx:", midIdx)
//         let midVal = array[midIdx]; 
//         console.log("midVal:", midVal)

//         if(midVal === value && array[midIdx - 1] !== midVal) {
//             leftIdx = midIdx; 
//             console.log("leftIdx redefined:", leftIdx);
//         } 

//         if(midVal === value && array[midIdx + 1] !== midVal) {
//             console.log("midIdx!!!:", midIdx)
//             rightIdx = midIdx; 
//             console.log("rightIdx redefined:", rightIdx) 
//         } 
//         console.log("midValue!!!:", midVal)
//         console.log("midIdx!!!:", midIdx)
//         console.log("rightIdx:", rightIdx)
//         console.log("leftIdx:", leftIdx)
//         console.log("array[rightIdx + 1]:", array[rightIdx + 1])
//         console.log("array[leftIdx - 1]:", array[leftIdx - 1])
//         // if(midVal === value && array[rightIdx + 1] !== midVal && array[leftIdx - 1] !== midVal){

//         //     return (rightIdx - leftIdx)
//         // }

//         if(midVal === value && array[midIdx + 1] !== midVal && array[midIdx - 1] !== midVal){

//             return (rightIdx - leftIdx)
//         }
        
//     }

//     return ("This is the return statement for now")
// }



// * Working WorkiWorking Working ng Working Working Working Working Working Working 

function countZeroes(array) {

    let leftIdx = 0;
    console.log("leftIdx:", leftIdx);
    let rightIdx = array.length - 1;
    console.log("rightIdx:", rightIdx) 

    while(leftIdx <= rightIdx) {

        let midIdx = Math.floor((rightIdx + leftIdx)/ 2);
        console.log("midIdx:", midIdx)
        let midVal = array[midIdx]; 
        console.log("midVal:", midVal)

        if(midVal === 0 && array[midIdx - 1] === 1) {
            console.log("if is running:")
            console.log("The total zeroes is:", array.length - midIdx)
            return(array.length - midIdx);
        } else if(midVal === 0) {
            console.log("else if 1 is running:")
            rightIdx = midIdx -1;
            console.log("rightIdx:", rightIdx)
            if(rightIdx === -1) {
                return array.length
            }
        } else {
            console.log("else is running:")
            leftIdx = midIdx + 1;
            console.log("Redefined left index:", leftIdx)
        }
    }
    
    return("The total zeroes is 0")

}

