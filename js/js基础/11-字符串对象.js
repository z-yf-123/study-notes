const str = "zxcvca";

//1.根据字符返回位置
console.log(str.indexOf("c")); //2
//从第四个开始往后找
console.log(str.indexOf("c", 3)); //4

//2.根据位置返回字符
console.log(str.charAt(5)); //a
//返回字符对应的ASCII码值
console.log(str.charCodeAt(5)); //97
//H5新增
console.log(str[2]); //c

//3.截取字符串
console.log(str.substring(2, 5)); //cvc

//4.替换字符
//只会替换掉第一个字符
console.log(str.replace("c", "b")); //zxbvca

//5.字符串转数组
console.log(str.split("c")); //[ 'zx', 'v', 'a' ]

//6.startsWith和endsWith
console.log(str.startsWith("zx")); //true
console.log(str.endsWith("ca")); //true

//7.repeat方法将原字符串重复n次
console.log(str.repeat(3));
