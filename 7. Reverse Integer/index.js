const reverse = x => {
  // 32 位正整数区间 [−2147483648,  2147483648 − 1]
  // 最小值
  const min = -Math.pow(2, 31);
  // 最大值
  const max = Math.pow(2, 31) - 1;

  // 若值为 0 或不在区间中, 返回 0
  if(x === 0 || x > max || x < min) {
    return 0;
  }

  // 反转 num
  // 求 x 绝对值, 并转为 string String(Math.abs(x))
  // 转为 array, 并反转, 再转为字符串 Math.abs(x).split("").reverse().join("")
  // 最后将字符串转为 number
  const num = Number(String(Math.abs(x)).split("").reverse().join(""));

  // 若反转后的结果超出最大值, 返回 0
  if(num > max) {
    return 0;
  }

  // 判断返回正整数还是负整数
  const k = x < 0 ? -1 : 1;

  // 返回反转结果
  return num * k;
}

const x = 1534236469;

const result = reverse(x);

console.log(result);