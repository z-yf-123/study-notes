//JavaScript中的对象分为3种︰自定义对象、内置对象、浏览器对象

//Math数学对象:不是一个构造函数﹐所以我们不需要new 来调用而是直接使用里面的属性和方法即可
console.log(Math.PI); // 3.141592653589793
console.log(Math.max(2, 8, 4, 6)); // 8
console.log(Math.max(2, 8, 4, 6)); // 2
console.log(Math.abs(-123)); //123
console.log(Math.floor(11.9)); //11
console.log(Math.ceil(11.9)); //12
console.log(Math.round(11.4)); //11
console.log(Math.round(11.5)); //12
console.log(Math.random()); //取一个大于等于0小于1的随机小数
//封装自己的数学对象
const myMath = {
  PI: 3.1415956535,
  max() {
    let maxNum = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
      if (arguments[i] > maxNum) {
        maxNum = arguments[i];
      }
    }
    return maxNum;
  },
};
console.log(myMath.PI);
console.log(myMath.max(2, 8, 4, 6));

//Date()日期对象是一个构造函数必须使用new来调用创建我们的日期对象
const date = new Date();
console.log(date); //如果没有参数则返回当前系统的事件
const date1 = new Date("2022-3-24 15:31:28");
console.log(date1); //2022-03-24T07:31:28.000Z
console.log(date1.getFullYear()); //2022 返回年份
console.log(date1.getMonth()); //2 注意月份要+1才是实际月份
console.log(date1.getDate()); //24 返回几号4
console.log(date1.getDay()); //4 返回星期几,1是周一,6是周六,0是周日
console.log(date1.getHours()); //15
console.log(date1.getMinutes()); //31
console.log(date1.getSeconds()); //28
//获得Date总的毫秒数不是当前时间的毫秒数而是距离1970年1月1号过了多少毫秒数
console.log(date1.valueOf()); //1648107088000
console.log(date1.getTime()); //1648107088000
//简单写法
const date2 = +new Date();
console.log(date2); //1648108627193
//H5新增写法
console.log(Date.now()); //1648108627193
