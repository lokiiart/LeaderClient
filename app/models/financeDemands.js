import { createAction, NavigationActions, Storage } from '../utils'
import * as readService from '../services/read'

export default {
  namespace: 'financeDemands',
  state: {
    list:[],
    fetching: false,
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state,  ...payload }
    },
  },
  effects: {
      *init(action, {call, put, select}){
        //异步用call, 同步用put，获取全局状态用select
        //yield put({type:"app/updateState", payload: {loading:true}})
        yield put(createAction('updateState')({ fetching: true }))
        const globalState=yield select((state)=>state)
        const res = yield call(readService.fetchFinanceDemands)
        if(res){
        yield put(createAction('updateState')({ list: res }))
        }else{
          console.log("fail",res)
        }
        yield put(createAction('updateState')({ fetching: false }))
      }
  },
  subscriptions: {
    //调用时加载
  },
}
