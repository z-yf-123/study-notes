//创建数组元素
//1.利用new创建数组
var arr1 = new Array(2); //只写一个参数代表数组长度为几
var arr2 = new Array(3, "aaa", "abc");

//2.利用数组字面量创建数组
var arr3 = [1, "asd", 233, "bbb"];

//遍历数组
for (var i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

//检测是否为数组
console.log(arr1 instanceof Array); //true
console.log({} instanceof Array); //false
//H5新增方法:Array.isArray()
console.log(Array.isArray(arr2)); //true
console.log(Array.isArray({})); //false

//数组添加元素(改变原数组)
var arr4 = ["zyf"];
//push是在数组末尾添加元素，返回添加后的长度
console.log(arr4.push(22)); //2
console.log(arr4); //[ 'zyf', 22 ]
//unshift是在数组最前面添加元素，返回添加后的长度
console.log(arr4.unshift("男")); //3
console.log(arr4); //[ '男', 'zyf', 22 ]

//数组删除元素(改变原数组)
//push是在数组末尾删除元素，返回删除的元素
console.log(arr4.pop()); //22
console.log(arr4); //[ '男', 'zyf' ]
//unshift是在数组最前面添加元素，返回添加后的长度
console.log(arr4.shift()); //男
console.log(arr4); //['zyf']

//翻转数组(改变原数组)
var arr5 = [1, 15, 3, 24, 7];
arr5.reverse();
console.log(arr5); //[ 7, 24, 3, 15, 1 ]

//数组排序
arr5.sort(function (a, b) {
  return a - b; //升序排列
});
console.log(arr5); //[ 1, 3, 7, 15, 24 ]

//数组索引
var arr6 = ["aaa", "bbb", "ccc", "bbb"];
//indexOf返回第一个满足条件的索引(从前往后)
console.log(arr6.indexOf("bbb")); //1
console.log(arr6.indexOf("bb")); //-1
//lastIndexOf返回第一个满足条件的索引(从后往前)
console.log(arr6.lastIndexOf("bbb")); //3

//数组转字符串
//1.toString
console.log(arr6.toString()); //aaa,bbb,ccc,bbb
//2.join
console.log(arr6.join()); //aaa,bbb,ccc,bbb
console.log(arr6.join("-")); //aaa-bbb-ccc-bbb
