const removeDuplicates = nums => {

  if (nums.length == 0) return 0;

  let pointer = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[pointer]) {
      pointer++;
      nums[pointer] = nums[i];
    }
  }

  return pointer + 1;
}

const nums = [1, 1, 2];

const result = removeDuplicates(nums);

// 2
console.log(result);