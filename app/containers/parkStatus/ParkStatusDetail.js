import React, { Component } from 'react'
import { BackHandler, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { connect } from 'react-redux'
import {Icon} from '@ant-design/react-native'

import { NavigationActions, scaleSizeW, scaleSizeH, setSpText } from '../../utils'
import {ReadingStatus, SwitchTab, DownFrame, DataTableList, Button, EditableFrame} from '../../components';
import { Theme } from '../../comm'
import InputScrollView from 'react-native-input-scroll-view'

@connect(({parkStatus})=>({parkStatus}))
class ParkStatusDetail extends Component {
  static navigationOptions = ({navigation})=>({
    title: '园区汇总当月详情',
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
              { "hy" : "当月产值:", "hc":item.outputThisMonth},
              { "hy" : "当月产值同比增速:", "hc":item.speedUpThanLastYear},
              { "hy" : "工业增加值本月增速:", "hc":item.industrySpeedThisMonth},
              { "hy" : "累计工业增加值增速:", "hc":item.industrySumSpeed},
              { "hy" : "新兴产业产值:", "hc":item.newOutputThisMonth},
              { "hy" : "新兴产业同比增速:", "hc":item.newSpeedUpThanLastYear},
              { "hy" : "全市排名情况:", "hc":item.rankInArea},
            ]}
            headerArr={[
              {name: '时间:', width: 1},
              {name: item.year+'年'+item.month+'月', width: 2},
            ]}
            onPress={(item) => {
              this.props.navigation.navigate('ParkStatusDetail', {sourceInfo: item})
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
export default ParkStatusDetail
