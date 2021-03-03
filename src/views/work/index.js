import React, { Component } from "react"
import './appleBasket.scss'
import './appleItem.scss'

class AppleItem extends Component {
  render() {
    return (
      <div className="appleItem">
        <div className="apple">
          <img src={require('../../images/apple.png')} alt="" />
        </div>
        <div className="info">
          <div className="name">红苹果 - 123号</div>
          <div className="weight">224克</div>
        </div>
        <div className="btn-div">
          <button> 吃掉 </button>
        </div>
      </div>
    );
  }
}

class Work extends Component {
  render() {
    return (
      <div className="app">
        <div className="appleBusket">
          <div className="title">苹果篮子</div>

          <div className="stats">
            <div className="section">
              <div className="head">当前</div>
              <div className="content">
                1个苹果，224克
              </div>
            </div>
            <div className="section">
              <div className="head">已吃掉</div>
              <div className="content">
                2个苹果，448克
              </div>
            </div>
          </div>

          <div className="appleList">
            <AppleItem />
            <AppleItem />
            <AppleItem />
          </div>

          <div className="btn-div">
            <button>
              摘苹果
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Work
