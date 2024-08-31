function mostFrequentItem(arr) {
    let maxCount = 0;
    let mostFrequent = null;

    for (let i = 0; i < arr.length; i++) {
        let count = 0;

        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === arr[i]) {
                count++;
            }
        }

        if (count > maxCount) {
            maxCount = count;
            mostFrequent = arr[i];
        }
    }

    return mostFrequent;
}

let array = [1,2,3,4,5,6,5,6,7,5,9,5];
console.log(mostFrequentItem(array)); 
