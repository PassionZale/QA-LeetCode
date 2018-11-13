const longestCommonPrefix = strs => {

  let result = "";

  if (strs.length === 0) return result;

  // 以第一个元素为标识, 并将其序列化为数组
  const refer = strs[0];

  // 从 strs 中移除标识元素
  strs.splice(0, 1);

  // loop flag
  let i = 0;
  while (i < refer.length) {
    // 若 refer = "flower"
    // 每次循环, flag_current_item 将依次变为:
    // "f" "fl" "flo" "flow" "flowe" "flower"
    let flag_current_item = refer.substring(0, i + 1);
    // 在余下的 strs 元素中, 使用 every 判断每个元素是否都以 flag_current_item 开头
    // 如: "flow","flight" 
    // 均以 "f" 开头 result = "f"
    // 均以 "fl" 开头 result = "fl"
    // "flight" 不以 "flo" 开头, 校验失败
    // 使用 break 退出 while loop
    const flag = strs.every(v => (v.startsWith(flag_current_item)));
    if (flag) {
      result = flag_current_item;
      i++;
    } else {
      // 使用 break 结束 while 循环
      // 不要使用 return, return 会直接结束 longestCommonPrefix()
      break;
    }
  }

  return result;
}

const strs = ["flower","flow","flight"];

const result = longestCommonPrefix(strs);

// "fl"
console.log(result);