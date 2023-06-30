// Binary search solution of the problem set in linear search list.

// It's important to structure the algorithm correctly by defining a low number, a mid number, and a high number. The low number is the first index of the array, the mid number is the middle index of the array, and the high number is the last index of the array. The mid number is calculated by adding the low number and the high number and dividing by 2. If the mid number is equal to the needle, return true. If the mid number is less than the needle, set the low number to the mid number plus 1. If the mid number is greater than the needle, set the high number to the mid number minus 1. If the low number is greater than the high number, return false.

// "Low is always inclusive, high is always exclusive." In other words, when you have to shift the low value to the mid value to search the upper half of the array, you have to add 1 to the mid value (exclusive). When you have to shift the high value to the mid value to search in the lower half of the array, you DO NOT ADD 1 to the mid value (exclusive). 


export default function bs_list(haystack: number[], needle: number): boolean {

    let low = 0;
    let high = haystack.length;
   
    do {
        let mid = Math.floor((low + (high - low)) / 2);
        const value = haystack[mid];
        if (value === needle) {
            return true;
        } else if (value > needle) {
           high =  mid;
        } else {
            low = mid + 1;
        }
    } while (low < high);
    return false;
    }

 