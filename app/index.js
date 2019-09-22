import React from 'react'
import { AppRegistry } from 'react-native'

import dva from './utils/dva'
import Router, { routerMiddleware, routerReducer } from './router'
import appModel from './models/app'
import financeDemands from './models/financeDemands'
import parkStatus from './models/parkStatus'
import projects from './models/project'

const app = dva({
  initialState: {},
  models: [appModel, financeDemands, parkStatus, projects],
  extraReducers: { router: routerReducer },
  onAction: [routerMiddleware],
  onError(e) {
    console.log('onError', e)
  },
})

const App = app.start(<Router  />)

console.ignoredYellowBox = ['Warning: BackAndroid is deprecated. Please use BackHandler instead.','source.uri should not be an empty string','Invalid props.style key'];
console.disableYellowBox = true // 关闭全部黄色警告

AppRegistry.registerComponent('antd', () => App)
