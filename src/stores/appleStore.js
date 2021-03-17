import { observable, configure, action, runInAction, computed } from 'mobx'

configure({enforceActions: 'observed'})
class AppleStore {
  @observable apples = []
  @observable sum = 0
  @observable loading = false

  @action.bound eat (id) {
    this.apples = this.apples.map(apple => ({
      ...apple,
      eat: apple.id === id ? true : apple.eat
    }))
  }

  @action.bound async dropoff () {
    runInAction(() => {
      this.loading = true
    })
    let apple = await dropApple(this.sum)
    runInAction(() => {
      this.sum++
      this.loading = false
      this.apples.push(apple)
    })
  }

  // 篮子内的苹果
  @computed get busketApples () {
    const busketApples = this.apples.filter(apple => !apple.eat)
    const weightInfo = busketApples.reduce((apple1, apple2) => {
      return { weight: apple1.weight + apple2.weight }
    }, {weight: 0})

    return {
      sum: busketApples.length,
      sumWeight: weightInfo.weight,
      apples: busketApples
    }
  }

  // 吃掉的苹果
  @computed get eatApples () {
    const eatApples = this.apples.filter(apple => apple.eat)
    const weightInfo = eatApples.reduce((apple1, apple2) => {
      return { weight: apple1.weight + apple2.weight }
    }, {weight: 0})

    return {
      sum: eatApples.length,
      sumWeight: weightInfo.weight
    }
  }
}

// 摘苹果
function dropApple (id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: id,
        eat: false,
        weight: randomWeight()
      })
    }, 600)
  })
}

// 随机生成苹果重量，200g - 229g
function randomWeight () {
  return 200 + Math.floor(30 * Math.random())
}

const apple = new AppleStore()
export default apple