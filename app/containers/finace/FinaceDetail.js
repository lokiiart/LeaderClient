import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { connect } from 'react-redux'

import { NavigationActions, scaleSizeW, scaleSizeH, setSpText } from '../../utils'
import {ReadingStatus, SwitchTab, DownFrame, DataTableList, Button, EditableFrame} from '../../components';
import { Theme } from '../../comm'
import InputScrollView from 'react-native-input-scroll-view'

@connect(({financeDemands})=>({financeDemands}))
class FinaceDetail extends Component {
  static navigationOptions = {
    title: '企业项目融资需求详情',
    headerTitleStyle:{
      color: Theme.darkTextColor
    }
  }
  componentDidMount(): void {
    console.info('this.props',this.props)
  }

  goBack = () => {
    this.props.dispatch(NavigationActions.back({ routeName: 'Account' }))
  }

  render() {
    const {navigation} = this.props
    const item=navigation.getParam('sourceInfo','if-null')
    console.log("item Detail", item);
    return (
      <InputScrollView
        style={styles.container}
      >
        <View style={{ flex: 1, paddingHorizontal: scaleSizeW(20), paddingVertical: scaleSizeH(20) }}>
          <DataTableList
            dataType={"detail_display"}
            daraArr={[
              { "hy" : "行业类型:", "hc":item.industryType},
              { "hy" : "主营业务:", "hc":item.majorBusiness},
              { "hy" : "统一社会信用代码:", "hc":item.enterpriseKey},
              { "hy" : "注册资金:", "hc":item.registerAssets},
              { "hy" : "总资产:", "hc":item.totalAssets},
              { "hy" : "上年收入:", "hc":item.incomeLastYear},
              { "hy" : "融资金融:", "hc":item.financeAmount},
              { "hy" : "融资方式:", "hc":item.financeMethod},
              { "hy" : "融资用途:", "hc":item.financePurpose},
              { "hy" : "流动资产:", "hc":item.floatingAssets},
              { "hy" : "总负债:", "hc":item.totalOwes},
              { "hy" : "流动负债:", "hc":item.floatingOwes},
              { "hy" : "民间贷款余额:", "hc":item.owePeopleSaved},
              { "hy" : "银行贷款余额:", "hc":item.oweBankSaved},
              { "hy" : "预计融资时间:", "hc":item.financeTimeExpected},
              { "hy" : "贷款银行:", "hc":item.renterBank},
              { "hy" : "抵押物估值:", "hc":item.valueOfPawn},
              { "hy" : "抵押物类别:", "hc":item.pawnCategory},
              { "hy" : "联系人:", "hc":item.contact},
              { "hy" : "联系电话:", "hc":item.phone},
              { "hy" : "融资进展情况:", "hc":item.financeProcess},
              { "hy" : "联挂责任部门:", "hc":item.department},
              { "hy" : "负责人:", "hc":item.leaderId},
            ]}
            headerArr={[
              {name: '企业名称:', width: 1},
              {name: item.companyName, width: 2},
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
