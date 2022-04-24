//1.数字转换为字符串
var num = 11;
var str1 = num.toString();
var str2 = String(num);
var str3 = num + "";
console.log(typeof str1);
console.log(typeof str2);
console.log(typeof str3);

//2.其他类型转换为数字型
console.log(parseInt("18")); //18
console.log(parseInt("18.23")); //18(取整)
console.log(parseInt("12px")); //12
console.log(parseInt("aa12px")); //NaN

console.log(parseFloat("18")); //18
console.log(parseFloat("18.23")); //18.23
console.log(parseFloat("12px")); //12
console.log(parseFloat("aa12px")); //NaN

console.log(Number("18"));

console.log("18" - 0); //18
console.log("18" * 1); //18
console.log("18" - "15"); //3

//3.转换为布尔型
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(null));
//除了以上五个其他全为true
console.log(Boolean(" "));
console.log(Boolean("aaa"));
