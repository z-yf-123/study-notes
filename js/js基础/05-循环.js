//for循环
for (var i = 0; i < 5; i++) {
  console.log("我今年" + i + "岁了");
}
console.log("当前i值为" + i); //5

//while 循环
var j = 0;
while (j < 5) {
  console.log("我有" + j + "个糖果");
  j++;
}
console.log("当前j值为" + j); //5

//do while 循环
var k = 0;
do {
  console.log("开始就执行一次,当前k值为" + k);
  k++;
} while (k < 5);
console.log("当前k值为" + k); //5

//continue 结束本次循环，继续执行剩余次数循环
//给出1-100以内不能被9整除的数的和
var sum = 0;
for (var num = 0; num < 100; num++) {
  if (num % 7 === 0) {
    continue;
  }
  sum += num;
}
console.log(sum);

//break 跳出整个循环
for (var n = 0; n < 100; n++) {
  if (n === 3) {
    console.log("事不过三，无法原谅");
    break;
  }
  console.log("第" + n + "次，原谅你");
}
