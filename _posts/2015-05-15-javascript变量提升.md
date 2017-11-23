---
layout: post
title:  "javascript变量提升"
crawlertitle: "herman - javascript变量提升"
categories: posts
tags: 'javascript'
author: shdong
---

之前一直知道`javascript`变量提升，一直使用，但是从来没有深入了解和验证，总是一知半解。本文详细解释`javascript`的变量提升问题，附带一些代码演示。

### 变量提升

有时候我们这么写代码，并不会报错。

```javascript
console.log(test);	// undefined
var test = 'exec me';
```

但是，未声明的变量会报错。

```javascript
console.log(test_no);	// 报错：VM200:1 Uncaught ReferenceError: test_no is not defined
var test = 'exec me';
```

这是为啥呢？这就是`javascript`的变量提升功能，说到这个功能必须要搞清楚解析器怎么工作的。

**javascript解释器对变量提升的解析方式：**

- 先获取代码片段所有的`var`声明的变量。注意的是：`代码片段`受到块级作用域限制；必须是`var`声明的变量。
- 初始化获取的所有变量。
- 按行执行剩下的代码行。

例如这样一段代码：

```javascript
console.log(test1);
var test1 = 'hahaha';
console.log(test2);
var test2 = '我是test2';
```

实际上解释器这么执行的：

```javascript
var test1,test2;
console.log(test1);
test1 = 'hahaha';
console.log(test2);
test2 = '我是test2';
```

是不是很帅！`ES5`中没有块级作用域的概念，只区分`全局作用域`和`函数作用域`。

**变量提升的方式是提升到它所在作用域的最开始的部分**

```javascript
foo(); // undefined
console.log(innerParam); //Uncaught ReferenceError: innerParam is not defined
function foo () {
  	console.log(innerParam);
    var innerParam = '我在这里呢';
}
```
**变量提升只作用在使用`var`声明的变量或者函数上**

```javascript
console.log(param); // Uncaught ReferenceError: param is not defined
param = "I'm here";
```

在`javascript`中函数是特殊的变量，这也是函数式变成的精髓所在，所以变量提升对于函数也是适用的。

```javascript
console.log(testFunc); // undefined
console.log(testFunc()); // Uncaught TypeError: testFunc is not a function (undefined不是函数类型)
var testFunc = function () {
    console.log('hello testFunc');
}
```

**变量提升也不适用于ES6的`let`/`const`声明的变量**

```javascript
console.log(a); // Uncaught ReferenceError: a is not defined
let a =3;
console.log(b); // Uncaught ReferenceError: a is not defined
const b =3;
```



参考资料：[Statements/var - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)

