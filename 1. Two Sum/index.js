const towSum = (nums, target) => {
  // 返回值
  let result = [];

  // 循环 nums
  nums.every((item, index) => {
    console.log(item);
    // 计算 target 与 item 的差值 diff
    let diff = target - item;
    console.log(diff);
    // 在数组中找到 diff 的索引
    let i = nums.indexOf(diff);
    console.log(i);
    if (i > -1 && i !== index) {
      // 若存在, 将 item 的 index 与 diff 的 index 放入返回值 result 中
      result.push(index, nums.indexOf(diff));
      // 结束循环
      return false;
    } else {
      // 否则继续循环
      return true;;
    }
  });

  return result;
}

const nums = [3, 2, 4];

const target = 6;

const result = towSum(nums, target);

// [1, 3]
console.log(result);