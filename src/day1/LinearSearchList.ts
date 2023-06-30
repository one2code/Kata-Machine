// Linear search solved by iterating over an array and checking to see if the value at index i is equal to the needle argument. If it is, return true. If not, return false.

export default function linear_search(haystack: number[], needle: number): boolean {
for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
        return true
    }
  }
    return false
}