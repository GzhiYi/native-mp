import { data as dataA, changeName } from 'store-a.js'
import { data as dataB, changeAge } from 'store-b.js'
const store =  {
  data: {
    a: dataA,
    b: dataB,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    logs: []
  },
  a: { changeName },
  b: { changeAge },
  //无脑全部更新，组件或页面不需要声明 use
  //updateAll: true,
  // debug: true
}
export default store