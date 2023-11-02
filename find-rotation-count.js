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

module.exports = findRotationCount