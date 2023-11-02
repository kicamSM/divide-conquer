
function findFloor(array, value, leftIdx = 0, rightIdx = array.length - 1) {

    if(leftIdx > rightIdx) return -1; 
    if (value >= array[rightIdx]) return array[rightIdx];
    
    let midIdx = Math.floor((leftIdx + rightIdx) / 2); 
    
    if(array[midIdx] === value) return array[midIdx]; 
    
    if(midIdx > 0 && array[midIdx - 1] <= value && value < array[midIdx]) {
        return array[midIdx - 1]
    }
    
    if (value < array[midIdx]) {
        return findFloor(array, value, leftIdx, midIdx - 1);
        // *this is handling the left side of the array
    }
    
    
    return findFloor(array, value, midIdx + 1, rightIdx)
    //   * this is handling the right side of the array
    
    }
      

module.exports = findFloor