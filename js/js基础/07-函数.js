//使用函数分为两步:声明函数和调用函数

// 可以利用函数的参数实现函数重复不同的代码
// function 函数名(形参1, 形参2...) {
//     //在声明函数的小括号里面是形参（形式上的参数)
//     return 函数返回值
// }
// 函数名(实参1,实参2...);//在函数调用的小括号里面是实参(实际的参数)
// 注:函数没有返回值默认返回undifined

function sum() {
  console.log(arguments);
  console.log(arguments[1]);
  console.log(arguments.length);
}
// arguments是伪数组并不是真正意义上的数组
//   1．具有数组的 length属性
//   2．按照索引的方式进行存储的
//   3．它没有真正数组的一些方法pop()push()等等

sum(1, "ccc");
sum("aa", 2, "c");
