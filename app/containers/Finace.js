import React, { Component } from 'react'
import { ActivityIndicator, StyleSheet, ScrollView, FlatList, View, Image, Text, TouchableOpacity } from "react-native";
import { connect } from 'react-redux'
import Loading from './Loading'

// import { Button } from '../components'
import { WhiteSpace, WingBlank, Icon, Card, Button, Grid } from '@ant-design/react-native';
import { ECharts } from 'react-native-echarts-wrapper';
import { NavigationActions, scaleSizeW, scaleSizeH, setSpText } from '../utils'
import {ReadingStatus, SwitchTab, DownFrame, DataTableList} from '../components';
import { Theme } from '../comm'
import {withNavigation} from 'react-navigation'

@connect(({financeDemands})=>({financeDemands}))
class Finace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 1,
    }
  }

  componentDidMount(){
    this.didFocusSubscription = this.props.navigation.addListener(
      'didFocus',
      payload=>{
        this.props.dispatch({type:'financeDemands/init'})
      }
    )
  }

  componentWillUnmount(){
    this.didFocusSubscription.remove()
  }


  render() {
    const {fetching,list} = this.props.financeDemands
    return (
      <View
        style={styles.container}
        //contentContainerStyle={styles.container}
      >
          {fetching ?(
              <Loading />
          ):(
        <View style={{ flex: 1, paddingHorizontal: scaleSizeW(20) }}>
          <View style={{ paddingVertical: scaleSizeH(40), justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <Text style={{ fontSize: setSpText(40), color: Theme.darkTextColor }}>融资需求列表</Text>
            <View style={{ flexDirection: 'row', marginLeft: scaleSizeW(20) }}>
              <TouchableOpacity style={styles.borderSty} onPress = {() => {this.setState({selected: 1})}}>
                <Text style={{ color: this.state.selected === 1 ? Theme.baseColor : Theme.darkTextColor}}>未处理</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.borderSty} onPress = {() => {this.setState({selected: 2})}}>
                <Text style={{ color: this.state.selected === 2 ? Theme.baseColor : Theme.darkTextColor }}>已处理</Text>
              </TouchableOpacity>
            </View>
          </View>
          <DataTableList
            dataType={"finance"}
            daraArr={list}
            headerArr={[
              {name: '序号', width: 1},
              {name: '企业名称', width: 3},
              {name: '行业类型', width: 2},
              {name: '主营业务', width: 2},
              {name: '总资产', width: 2},
              {name: '融资金额', width: 2},
              {name: '融资方式', width: 2},
              {name: '联挂责任部门', width: 3},
            ]}
            onPress={(item) => {
              this.props.navigation.navigate('FinaceDetail', {sourceInfo: item})
            }}
          />
        </View>
          )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  borderSty: {
    borderColor: '#878787',
    borderWidth: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5
  },
})

export default withNavigation(Finace)
