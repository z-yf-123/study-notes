//创建对象
//1.利用字面量创建对象
const obj = {
  name: "zyf",
  age: 22,
  say() {
    return "吃饭";
  },
};
//2.利用new创建对象
const obj1 = new Object();
obj1.id = 123;
obj1.say = function () {
  return "66666";
};

//调用对象属性和方法
console.log(obj.name);
console.log(obj["age"]);
console.log(obj.say());
console.log(obj1.id);
console.log(obj1.say());

//遍历对象
for (const k in obj) {
  console.log(k); // 遍历的是键
  console.log(obj[k]); // 遍历的是值
}
