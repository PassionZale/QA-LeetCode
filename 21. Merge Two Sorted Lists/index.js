// TODO

// 没弄明白题干的具体场景

// 21. 暂时先放放

const mergeTwoLists = (l1, l2) => {

  let result = [];

  l1.forEach((item, index) => {
    if (l2[index] !== undefined) {
      result.push(item);
      result.push(l2[index]);
    }
  });

  return result.join("->");

}

const l1 = [1,2,4];

const l2 = [1,3,4];

const result = mergeTwoLists(l1, l2);

// "1->1->2->3->4->4"
console.log(result);