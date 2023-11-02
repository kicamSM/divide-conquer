function countZeroes(array) {
    
    let leftIdx = 0;
    let rightIdx = array.length - 1;

    while(leftIdx <= rightIdx) {

        let midIdx = Math.floor((rightIdx + leftIdx)/ 2);
        let midVal = array[midIdx]; 
     
        if(midVal === 0 && array[midIdx - 1] === 1) {
            return(array.length - midIdx);

        } else if(midVal === 0) {
            rightIdx = midIdx -1;

            if(rightIdx === -1) {
                return array.length
            }

        } else {
            leftIdx = midIdx + 1;
        }
    }
    
    return 0
 
}

module.exports = countZeroes