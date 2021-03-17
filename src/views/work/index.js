import React, { Component } from "react"
import { inject, observer } from "mobx-react"
import './appleBasket.scss'
import './appleItem.scss'

class AppleItem extends Component {
  render() {
    const { apple, eat } = this.props
    return (
      <div className="appleItem">
        <div className="apple">
          <img src={require('../../images/apple.png')} alt="" />
        </div>
        <div className="info">
          <div className="name">红苹果 - {apple.id + 1}号</div>
          <div className="weight">{apple.weight}克</div>
        </div>
        <div className="btn-div">
          <button onClick={() => eat(apple.id)}> 吃掉 </button>
        </div>
      </div>
    );
  }
}

@inject("apple")
@observer
class Work extends Component {
  render() {
    const { eat, dropoff, busketApples, eatApples, loading } = this.props.apple
    return (
      <div className="app">
        <div className="appleBusket">
          <div className="title">苹果篮子</div>

          <div className="stats">
            <div className="section">
              <div className="head">当前</div>
              <div className="content">
                {busketApples.sum}个苹果，{busketApples.sumWeight}克
              </div>
            </div>
            <div className="section">
              <div className="head">已吃掉</div>
              <div className="content">
                {eatApples.sum}个苹果，{eatApples.sumWeight}克
              </div>
            </div>
          </div>

          <div className="appleList">
            {
              busketApples.sum
                ? busketApples.apples.map(apple => <AppleItem key={apple.id} eat={eat} apple={apple} />)
                : <div className="empty-tip">苹果篮子空空如也</div>
            }
          </div>

          <div className="btn-div">
            {
              loading
                ? <button className="disabled" disabled>正在采摘...</button>
                : <button onClick={dropoff}>摘苹果</button>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Work
