## bind 的实现过程

``` js
Function.prototype.myBind = function (context) {
  const args1 = Array.prototype.slice.call(arguments, 1)
  const self = this
  const fn = function () {
    const args2 = Array.prototype.slice.call(arguments, 0)
    const args = args1.concat(args2)
    return self.apply(this instanceof F ? this : context, args)
  }
  const F = function () {}
  F.prototype = self.prototype
  fn.prototype = new F()
  return fn
}
let obj = {
  value: 'value'
}
function people (name, age) {
  console.log('value: ', this.value)
  console.log('name', name)
  console.log('age', age)
}

people.myBind(obj, 'bob')('18')
// value:  value
// name bob
// age 18

const peo = people.myBind(obj, 'bob')
new peo(18)
// value:  undefined (this指向people)
// name bob
// age 18

```