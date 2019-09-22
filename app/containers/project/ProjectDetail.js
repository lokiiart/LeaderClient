import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { connect } from 'react-redux'

import { NavigationActions, scaleSizeW, scaleSizeH, setSpText } from '../../utils'
import {ReadingStatus, SwitchTab, DownFrame, DataTableList, Button, EditableFrame} from '../../components';
import { Theme } from '../../comm'
import InputScrollView from 'react-native-input-scroll-view'
import {Icon} from '@ant-design/react-native'

@connect(({financeDemands})=>({financeDemands}))
class FinaceDetail extends Component {
  static navigationOptions = ({navigation})=>({
    title: '项目协调需求详情',
    headerTitleStyle:{
      color: Theme.darkTextColor
    },
    headerLeft: (
      <Icon name="arrow-left" style={{marginLeft: 5}} size="md" color={Theme.darkTextColor} onPress={()=>{
        //navigation.dispatch(NavigationActions.back())
        navigation.goBack()
      }} />
    )
  })
  componentDidMount(): void {
    console.info('this.props',this.props)
  }

  goBack = () => {
    this.props.dispatch(NavigationActions.back({ routeName: 'Account' }))
  }

  render() {
    const {navigation} = this.props
    console.log("navigation", navigation);
    const item=navigation.getParam('sourceInfo','if-null')
    console.log("tem Detail", item);
    return (
      <InputScrollView
        style={styles.container}
      >
        <View style={{ flex: 1, paddingHorizontal: scaleSizeW(20), paddingVertical: scaleSizeH(20) }}>
          <DataTableList
            dataType={"detail_display"}
            daraArr={[
              { "hy":     "业主单位:", "hc": item.companyName},
              { "hy":       "联系人:", "hc": item.contact},
              { "hy":   "联系人电话:", "hc": item.phoneNum},
              { "hy":     "所属行业:", "hc": item.industryType},
              { "hy":   "项目总投资:", "hc": item.totalFinance},
              { "hy":     "建设地址:", "hc": item.buildingLocation},
              { "hy":     "开工日期:", "hc": item.startDateTime},
              { "hy":     "建成日期:", "hc": item.planDateTime},
              { "hy": "工程形象进度:", "hc": item.buildingProcess},
              { "hy":   "办理责任人:", "hc": item.responsible},
              { "hy":     "办理部门:", "hc": item.department},
              { "hy":     "主要建设内容", "hc": item.majorBuildingContent},
              { "hy":     "存在问题和困难:", "hc": item.difficultyies},
            ]}
            headerArr={[
              {name: '项目名称:', width: 1},
              {name: item.projectName, width: 2},
            ]}
            onPress={(item) => {
              this.props.navigation.navigate('FinaceDetail', {sourceInfo: item})
            }}
          />
          <EditableFrame
            defaultValue={item.adviseFromLeader}
            goback={() => {
              this.props.navigation.pop()
            }}
            revise={() => {

            }}
            confirm={() => {

            }}
            onChange={value => {

            }}
          />
        </View>
      </InputScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})
// FinaceDetail.navigationOptions(() => {
//   return {
//     headerTitle: '详情',
//   }
// })
export default FinaceDetail
