/** product: calculate the product of an array of numbers. */

function product(nums) {
  if(nums.length === 0) return
  if(nums.length === 1) return nums.pop()
  return nums.pop() * product(nums)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if(words.length === 0) return
  if(words.length === 1) return words.pop().length 
  const num1 = words.pop().length 
  const num2 = longest(words)
  return num1 > num2  ? num1 : num2
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if(str.length < 1) return ''

  const arr = str.split('')

  return str[0] + everyOther(arr.slice(2).join(''))
  
  
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  const arr = str.split('')
  if(str.length <= 1)return false
  if(str.length === 3 || str.length === 2) return arr[0] === arr[arr.length -1]  

  return arr[0] === arr[arr.length -1] && isPalindrome(arr.splice(1,arr.length-2).join(''))
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if(arr.length === 0) return -1
  return arr.pop() === val ? arr.length : findIndex(arr,val)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if(str.length ===0) return ''
  const arr = str.split('')
  return arr.pop() + revString(arr.join(''))
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let arr = []
  for(let k of Object.keys(obj)){
    if(typeof obj[k] === 'string') arr.push(obj[k])
    if(typeof obj[k] === 'object') {
      arr = arr.concat(gatherStrings(obj[k])) 
    }
  }
  return arr
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  const mid = Math.round(arr.length/2)
  console.log(mid)
  console.log(arr)
  if(arr[mid] === val){
    //console.log(mid)
    return mid
  }else if(arr[mid] > val){
    //console.log(arr.slice(0,mid))
    return binarySearch(arr.slice(0,mid))
  }else if(arr[mid] < val){
    //console.log(arr.slice(mid))
    return mid + binarySearch(arr.slice(mid))
  }
  return -1
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
