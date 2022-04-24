//if else
var age = 17;
if (age >= 18) {
  console.log("已成年,可以进入网吧");
} else {
  console.log("未成年禁止进入网吧");
}

//三元表达式
var a = age >= 18 ? "已成年,可以进入网吧" : "未成年禁止进入网吧";
console.log(a);

//if else if
var score = 90;
if (score >= 90) {
  console.log("成绩优秀");
} else if (score >= 60) {
  console.log("成绩及格");
} else {
  console.log("成绩不及格");
}

//switch
var fruit = "梨子";
switch (fruit) {
  case "苹果":
    console.log("苹果六块一斤");
    break;
  case "梨子":
    console.log("梨子十块一斤");
    break;
  default:
    console.log("你说你买啥？");
}

// switch语句和if else if 语句的区别
//    ①一般情况下，它们两个语句可以相互替换
//    ②switch..case语句通常处理case为比较确定值的情况，而if...else...语句更加灵活，常用于范围判断(大于、
//    等于某个范围)
//    ③switch语句进行条件判断后直接执行到程序的条件语句，效率更高。而if..else语句有几种条件，就得判断多
//    少次。
//    ④当分支比较少时，if...else语句的执行效率比switch语句高。
//    ⑤当分支比较多时，switch语句的执行效率比较高，而且结构更清晰。
