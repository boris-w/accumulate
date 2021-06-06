# js 相关知识点

## 数据类型

基本类型：
  - number
  - boolean
  - string
  - null
  - undefined

引用类型：
  - object
  - array
  - function
  - Date

symbol
从根本上防止属性名的冲突。这就是 ES6 引入Symbol的原因，凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。

## typeof

用于区分出了引用类型之外的其他的类型。

> typeof null = 'object' 
> typeof NaN = 'number'

如果是引用类型就要用 `instanceof` 运算符

## 类型转换

## 原型 / 构造函数 / 实例

## 原型链

## 执行上下文

## 作用域 / 作用域链

## 闭包

## this

## new 操作原理

``` js
function NewSign () {
  let Constructors = arguments[0]
  if (typeof Constructors !== 'function') {
    return new Error('Constructors is not function !')
  }
  let obj = {}
  obj.__proto__ = Constructors.prototype
  const back = Constructors.apply(obj, Array.prototype.slice.call(arguments, 1))
  return typeof back === 'object' ? back : obj
}

function People (name, age) {
	this.name = name
	this.age = age
}

const people = NewSign(People, 'bob', 18)
console.log(people)
// People { name: 'bob', age: 18 }
```

## inscanceof 原理

## [apply、call 和 bind 的区别， 原理以及实现过程](apply、call%20和%20bind%20的区别，%20原理以及实现过程.md)

## 手写题

- [promise](promise.js)