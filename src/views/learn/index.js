import React, { Component } from "react"
import { inject, observer } from "mobx-react"

// inject 注入状态
// observer 将组件变为观察者

@inject("counter")
@observer
class Learn extends Component {
  componentDidMount () {
    const { getData } = this.props.counter
    getData()
  }

  render() {
    const { counter } = this.props

    return (
      <div>
        <button onClick={counter.increment}>+</button>
        <span>{ counter.count }</span>
        <button onClick={counter.decrement}>-</button>
        <span>{counter.getResult}</span>
        <div>
          <input type="text" value={counter.username} onChange={e => counter.changeUsername(e.target.value)}/>
          <span>{counter.username}</span>
        </div>
        <div>
          {counter.users.map((user) => (
            <div key={user.id}>
              <span>{user.id}</span>
              <span>{user.login}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Learn
