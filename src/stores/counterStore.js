// 1. 创建store对象 存储默认状态0
// 2. 将store对象放在一个全局的 组件可以够的到的地方
// 3. 让组件获取store对象中的状态 并将状态显示在组件中

import { observable, configure, action, runInAction, flow, computed, autorun } from 'mobx'
import axios from 'axios'

// observable 将数据变为可观察数据
// configure 通过配置强制使用 action 函数更改应用状态
// action.bound 更改 this 指向
// 异步方法内需要使用 runInAction 来允许在 action 函数内更改应用状态
// flow 可搭配 generator 函数来实现异步
// computed 计算属性
// autorun，初始化的时候运行一次，数据变化时运行，类似 watch

configure({enforceActions: 'observed'})
class CounterStore {
  constructor () {
    autorun (() => {
      try {
        uniqueUsername(this.username)
        console.log('用户名可用')
      }catch (e) {
        console.log(e.message)
      }
    }, {
      delay: 2000
    })
  }
  
  @observable count = 0
  @observable users = []
  @observable username = ''

  @action.bound increment () {
    this.count++
  }

  @action.bound decrement () {
    this.count--
  }

  @action.bound changeUsername (val) {
    this.username = val
  }

  // @action.bound async getData () {
  //   let { data } = await axios.get('https://api.github.com/users')
  //   runInAction(() => {this.users = data})
  // }

  getData = flow(function* () {
    let { data } = yield axios.get('https://api.github.com/users');
    this.users = data
  }).bind(this)

  @computed get getResult () {
    return this.count * 10
  }
}


function uniqueUsername (username) {
  return new Promise((resolve, reject) => {
    if (username === 'admin') {
      reject('用户名已经存在')
    }else {
      resolve()
    }
  })
}

const counter = new CounterStore()
export default counter