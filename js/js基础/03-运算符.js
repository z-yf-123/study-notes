//1.算数运算符(+ - * / % **)
console.log(3 + 2);
console.log(3 - 2);
console.log(3 * 2);
console.log(3 ** 2); //9
console.log(3 / 2); //1.5
console.log(3 % 2);

//2.递增递减运算符
//前置递增
var age = 18;
console.log(++age + 4); //23
//后置递增
var height = 180;
console.log(height++ + 5); //185
console.log(height); //181

//3.比较运算符
console.log(3 > 5); //false
console.log(18 == "18"); // true(字符型会转换为数字型)
console.log(18 === "18"); // false(值和数据类型都要一样)

//4.逻辑运算符
console.log(3 > 5 && 3 > 2); //false
console.log(3 > 5 || 3 > 2); //true
console.log(!true); //flase
//短路运算
// 如果第一个表达式为真则返回第二个表达式
// 如果第一个表达式为假则返回第一个表达式
console.log(123 && 456); //456
console.log(0 && 456); //0
// 如果第一个表达式为真则返回第一个表达式
// 如果第一个表达式为假则返回第二个表达式
console.log(123 || 456); //123
console.log(0 || 456); //456

//5.赋值运算符
var num = 18;
num += 4;
console.log(num); //22
num *= 4;
console.log(num); //88
