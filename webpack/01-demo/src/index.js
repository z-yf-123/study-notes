import $ from "jquery";

//在webpack中，一切皆模块,都可以通过ES6导入语法进行导入和使用
import "@/css/index.css";
import "@/less/index.less";

import logo from "./images/image.png";
//给img标签的src动态赋值
console.log(logo); //data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIA…Oy5+lOEkKaV6fpvhnMrf/B/ftu8Kd1fNrAAAAAElFTkSuQmCC
$(".box").attr("src", logo);

//定义jquery入口函数
$(function () {
  $("li:odd").css("background-color", "red");
  $("li:even").css("background-color", "pink");
});

//定义了名为info的装饰器
function info(target) {
  //为目标添加静态属性 info
  target.info = "Person info";
}

//为person类应用info装饰器
@info
class Person {}

//打印Person的静态属性info
console.log(Person.info);
