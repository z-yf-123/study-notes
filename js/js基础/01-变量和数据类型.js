/**
 * 变量的本质: 变量是程序在内存中申请的一块用来存放数据的空间。
 *            使用变量(即变量的初始化):①声明变量②赋值
 *  */

//js把数据类型分为简单数据类型(Number,Boolean,String,Undefined,Null)和复杂数据类型(Array,Object)

//1.数字型Number
var num1 = 10;
var num2 = 1.1;
//数字型的最大值
var num3 = Number.MAX_VALUE;
//数字型的最小值
var num4 = Number.MIN_VALUE;
console.log(num3, num4);
//无穷大(Infinity)
var num5 = Number.MAX_VALUE * 2;
//无穷小(-Infinity)
var num6 = -Number.MAX_VALUE * 2;
console.log(num5, num6);
//非数字
console.log("aaa" - 3); //NaN
//isNaN()用来判断非数字
console.log(isNaN(111), isNaN("111"), isNaN("aaa" - 3)); //false false true

//2.字符串型String
var str1 = "hello world,zyf";
//字符串长度
console.log(str1.length);
//字符串拼接(字符串+任意类型=拼接后的新字符串)
console.log(str1 + NaN); //hello world,zyfNaN

//3.布尔型Boolean
var flag1 = true;
var flag2 = false;
console.log(flag1 + 1); //2
console.log(flag2 + 1); //0

//4.未定义型Undefined
var a;
// 变量声明后未赋值就是undefined
console.log(a); //undefined
console.log(a + "zyf"); //undefinedzyf
console.log(a + 1); //undefined和数字相加为NaN
console.log(a + true); //NaN

//5.空类型Null
var b = null;
console.log(b + "zyf"); //nullzyf
console.log(b + 1); //1
console.log(b + true); //1

//检测变量数据类型(typeof)
console.log(typeof num1); //number
console.log(typeof str1); //string
console.log(typeof flag1); //boolean
console.log(typeof a); //undefined
console.log(typeof b); //object
