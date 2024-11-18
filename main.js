// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// 27. Remove Element
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝



// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

// Example 1:

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
    let k = 0;

    for (let i = 0; i < nums.length; i++){
        if (nums[i] !== val){
            nums[k] = nums[i]
            k++;
        }
    }

    return k;
};



// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// 88. Merge Sorted Array
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

// Solved
// Easy
// Topics
// Companies
// Hint
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    // nums1 の末尾インデックス
   let p = m + n - 1;
   // nums1 の有効部分の末尾インデックス
   let p1 = m - 1;
   // nums2 の末尾インデックス
   let p2 = n - 1;

   // nums1 と nums2 を逆順に比較してマージ
   while (p1 >= 0 && p2 >= 0) {
       if (nums1[p1] > nums2[p2]) {
           nums1[p] = nums1[p1];
           p1--;
       } else {
           nums1[p] = nums2[p2];
           p2--;
       }
       p--;
   }

   // nums2 にまだ残っている要素を nums1 にコピー
   while (p2 >= 0) {
       nums1[p] = nums2[p2];
       p2--;
       p--;
   }
   
};


// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// ----ここからは自分の勉強用
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝



let nums1 = [10, 20, 30, 40];

// インデックスだけを新しい配列に
let indices = nums1.map((value, index) =>  {
    return {value, index};
});
console.log(indices); // 結果: [0, 1, 2, 3]


let indices2 = nums1.map((value, index) =>  [value, index]);
console.log(indices2); 

// [
//     [10, 0], // 値とインデックスのペア
//     [20, 1],
//     [30, 2],
//     [40, 3]
//   ]



let nums = [1, 2, 3, 2, 4];
let i = 0;

while (i < nums.length) {
    if (nums[i] === 2) {
        nums.splice(i, 1);  // `2` を削除
    }
    i++;
}

console.log("ここ" + nums); 


//*************************************
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// Nov 17 2024
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// 26. Remove Duplicates from Sorted Array
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝


// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.


var removeDuplicates = function(nums) {
    i = 0;

    while (i < nums.length - 1){
        if (nums[i] === nums[i + 1]){
            nums.splice(i + 1, 1)
        }else {
            i++;
        }
    }

    let k = nums.length;
    console.log(k);

};