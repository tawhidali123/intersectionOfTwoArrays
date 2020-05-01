// Given two arrays, write a function to compute their intersection.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]

function intersectionTwoArrs(arr1, arr2) {
  let frequentHash = {}
  let returnArr = []

  for(i=0; i < arr2.length; i++){
    if(frequentHash[arr2[i]]){
      frequentHash[arr2[i]] = frequentHash[arr2[i]] +1
    } else {
      frequentHash[arr2[i]] = 1
    } 
  }
    
  for(j=0; j < arr1.length; j++){
    if(frequentHash[arr1[j]] > 0){
      returnArr.push(arr1[j])
      frequentHash[arr1[j]] --
    }
  }

  return returnArr
}

intersectionTwoArrs([4,9,5], [9,4,9,8,4])