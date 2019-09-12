import { createAction, NavigationActions, Storage } from '../utils'
import * as readService from '../services/read'

export default {
  namespace: 'parkStatus',
  state: {
    data:{},
    fetching: false,
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state,  ...payload }
    },
  },
  effects: {
      *init(action, {call, put, select}){
        yield put(createAction('updateState')({ fetching: true }))
        const globalState=yield select((state)=>state)
        const res = yield call(readService.fetchParkStatus)
        if(res){
          yield put(createAction('updateState')({ data: res }))
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
