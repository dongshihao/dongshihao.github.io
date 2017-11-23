---
layout: post
title:  "javascript-label使用"
crawlertitle: "herman - javascript-label使用"
categories: posts
tags: 'javascript'
author: shdong
---

今天在写一个海报页面，发现对于多层循环的情况下，`break`无法直接跳出所有循环。经过查文档和标准，了解到了`label`的强大用法。简单来说：label放在任何语句前边，就像定位符一样，可以把程序跳转到某个位置，有点类似于C语言的`goto`语句。

### 语法

`javascript`允许使用`label`来标志程序的位置，把`label`写到某一行语句前边，实现程序的跳转。语法格式如下方：

```yaml
label:
  statement
```

- `label`不能是保留字(`var`、`function`、`if`之类的)。
- `statement`可以是任何语句。

**`label`一般结合`break`和`continue`用于跳出多层循环**

```javascript
first:for (var i = 0; i < 5; i++){
        for (var k = 0; k < 5; k++){
          if (i === 1 && k === 2) {
            break first;
          }
          console.log('i=' + i + ';j=' + k);
        }
      }
// i=0;k=0
// i=0;k=1
// i=0;k=2
// i=0;k=3
// i=0;k=4
// i=1;k=0
// i=1;k=1
```

`continue`案例：

```javascript
first:for (var i = 0; i < 2; i++){
        for (var k = 0; k < 4; k++){
          if (i === 1 && k === 2) {
            continue first;
          }
          console.log('i=' + i + ';j=' + k);
        }
      }
// i=0;j=0
// i=0;j=1
// i=0;j=2
// i=0;j=3
// i=1;j=0
// i=1;j=1
```

参考资料：[Statements/label-MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label)

