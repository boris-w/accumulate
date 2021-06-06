function resolvePromise (promise, x, resolve, reject) {
  if (x === promise) {
    return reject(new TypeError('Chaining cycle detected for promise'));
  }
  let called = false
  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      const then = x.then
      if (typeof then === 'function') {
        then.call(x, res => {
          if (called) {
            return
          }
          called = true
          resolvePromise(promise, res, resolve, reject)
        }, err => {
          if (called) {
            return
          }
          reject(err)
        })
      } else {
        resolve(x)
      }
    } catch (error) {
      if (called) {
        return
      }
      reject(err)
    }
  } else {
    resolve(x)
  }
}

class Promise {
  constructor(executor) {
    this.status = 'pending'
    this.success = undefined
    this.fail = undefined
    this.onResolvedCallbacks = []
    this.onRejectedCallbacks = []
    const resolve = value => {
      if (this.status === 'pending') {
        this.success = value
        this.status = 'fulfilled'
        this.onResolvedCallbacks.forEach(fn => fn())
      }

    }

    const reject = value => {
      if (this.status === 'pending') {
        this.fail = value
        this.status = 'rejected'
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }
  
    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onResolved, onRejected) {
    console.log(onResolved, onRejected)
    // onResolved如果不是函数，就忽略onFulfilled，直接返回value
    onResolved = typeof onResolved === 'function' ? onResolved : value => value
    // onRejected如果不是函数，就忽略onRejected，直接扔出错误
    onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err }

    const resolveFn = (promise, resolve, reject) => {
      try {
        const x = onResolved(this.success)
        resolvePromise(promise, x, resolve, reject)
      } catch (e) {
        reject(e)
      }
    }
    const rejectFn = (promise, resolve, reject) => {
      try {
        const x = onRejected(this.fail)
        resolvePromise(promise, x, resolve, reject)
      } catch (e) {
        reject(e)
      }
    }
    const promise2 = new Promise((resolve, reject) => {
      if (this.status === 'fulfilled') {
        setTimeout(() => {
          resolveFn(promise2, resolve, reject)
        }, 0)
      }
      if (this.status === 'rejected') {
        setTimeout(() => {
          rejectFn(promise2, resolve, reject)
        }, 0)
      }
      if (this.status === 'pending') {
        // onFulfilled传入到成功数组
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            resolveFn(promise2, resolve, reject)
          }, 0)
        })
        // onRejected传入到失败数组
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            rejectFn(promise2, resolve, reject)
          }, 0)
        })
      }
    })
    return promise2
  }
  catch(fn){
    return this.then(null, fn)
  }
}

let a = new Promise((resolve, reject) => {
  resolve('resolve')
})

a.then(res => {
  console.log(0)
  return new Promise((resolve, reject) => {
    reject('reject')
  })
}).then(res => {
  console.log(1)
}).catch(res => {
  console.log(2)
})

a.then(res => {
  console.log(3)
  return new Promise((resolve, reject) => {
    reject('reject')
  })
}).catch(res => {
  console.log(4)
})