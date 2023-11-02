function sortedFrequency(array, value) {
    let firstVal = findFirstValue(array, value);
    console.log("firstVal", firstVal)
    let lastVal = findLastValue(array, value)
    console.log("lastVal", lastVal)

    if(firstVal === -1 && lastVal === -1) {
        return -1
    }

    return lastVal - firstVal + 1;
}

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




module.exports = sortedFrequency