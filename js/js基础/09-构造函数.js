//为什么需要构造函数?
//  因为我们一次创建一个对象，里面很多的属性和方法是大量相同的,我们只能复制
//  因此我们可以利用函数的方法重复这些相同的代码我们就把这个函数称为构造函数
//  又因为这个函数不一样，里面封装的不是普通代码，而是对象
//  构造函数就是把我们对象里面一些相同的属性和方法抽象出来封装到函数里面

//构造函数
//   是一种特殊的函数，主要用来初始化对象，即为对象成员变量赋初始值，它总与new运算符一起使用。
//   我们可以把对象中一些公共的属性和方法抽取出来，然后封装到这个函数里面。

function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.say = function (sth) {
    return sth;
  };
}
//注:构造函数不需要return就可以返回结果

//new在执行时会做四件事情:
//  1.在内存中创建一个新的空对象。
//  2.让this指向这个新的对象。
//  3.执行构造函数里面的代码,给这个新对象添加属性和方法。
//  4.返回这个新对象(所以构造函数里面不需要return)。

const person1 = new Person("zs", 18, "男");
const person2 = new Person("ls", 20, "女");

console.log(person1);
console.log(person2);
console.log(typeof person1); //object
console.log(person1.say("阿巴阿巴"));
console.log(person2.say("巴拉巴拉"));
