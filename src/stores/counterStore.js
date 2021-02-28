// 1. 创建store对象 存储默认状态0
// 2. 将store对象放在一个全局的 组件可以够的到的地方
// 3. 让组件获取store对象中的状态 并将状态显示在组件中

import { observable, configure, action, runInAction, flow, computed } from 'mobx'
import axios from 'axios'

// observable 将数据变为可观察数据
// configure 通过配置强制使用 action 函数更改应用状态
// action.bound 更改 this 指向
// 异步方法内需要使用 runInAction 来允许在 action 函数内更改应用状态
// flow 可搭配 generator 函数来实现异步
// computed 计算属性

configure({enforceActions: 'observed'})
class CounterStore {
  @observable count = 0
  @observable users = []

  @action.bound increment () {
    this.count++
  }

  @action.bound decrement () {
    this.count--
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

const counter = new CounterStore()
export default counter