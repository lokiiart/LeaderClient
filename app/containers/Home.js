import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, Image, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

// import { Button } from '../components'
import { WhiteSpace, WingBlank, Icon, Card, Button, Grid } from '@ant-design/react-native';
import SegmentedControlTab from "react-native-segmented-control-tab"
import ModalDropdown from 'react-native-modal-dropdown'
import { NavigationActions, scaleSizeW, scaleSizeH, setSpText } from '../utils'

import {IconFont} from "../components";

import { ECharts } from 'react-native-echarts-wrapper';
import {ReadingStatus, SwitchTab, DownFrame, DataTableList} from '../components';
import { Theme } from '../comm'
import { Toast } from '@ant-design/react-native';
// "@bang88/china-city-data": "^1.0.0",

@connect(({parkStatus})=>({parkStatus}))
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      selected: 1,
      showChart: 1,
      years:[
        new Date().getFullYear() + '年',
        new Date().getFullYear() + 1 + '年',
        new Date().getFullYear() + 2 + '年',
        new Date().getFullYear() + 3 + '年',
        new Date().getFullYear() + 4 + '年',
        new Date().getFullYear() + 5 + '年',
        new Date().getFullYear() + 6 + '年',
        new Date().getFullYear() + 7 + '年',
        new Date().getFullYear() + 8 + '年',
        new Date().getFullYear() + 9 + '年',
      ],
      startYear: new Date().getFullYear() + '年',
      endYear:  new Date().getFullYear() + '年',
      months: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月',
      ],
      startMonth: '1月',
      endMonth: '1月',

    };
  }



  componentDidMount(){
    this.props.dispatch({type:'parkStatus/init'})
    this.initChart()
  }


  gotoScreen=(routeName) => {
    this.props.dispatch(NavigationActions.navigate({ routeName: routeName }))
  }

 onRef = ref => {
    if (ref) {
      this.chart = ref;
    }
  };

  initChart = () => {
    const option={
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        legend: {
          x: 'left',
          y: 'bottom',
          orient: 'vertical',
          itemGap: 0
        },
        grid: {bottom: '30%',right: '15%'},
        yAxis: [
          {
            type: 'category',
            name: '月份',
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        xAxis: [
          {
            type: 'value',
            name: '万元',
            min: 0,
            max: 1000000,
            interval: 200000,
            axisLabel: {
              formatter: '{value}'
            },
          },
          {
            type: 'value',
            name: '%',
            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
              formatter: '{value}'
            },
          }
        ],
      dataset:{
        source:[]
      },
        series: [
          {
            type: 'bar',
            name: '当月产值',
            xAxisIndex: 0,
            encode:{
              x:1,
              y:9
            }
          },
          {
            type: 'line',
            //areaStyle: {},
            name: '同比增速',
            xAxisIndex: 1,
            encode:{
              x:2,
              y:9
            }
          },
          {
            type: 'line',
            name: '工业增加值增速',
            xAxisIndex: 1,
            encode:{
              x:4,
              y:9
            }
          },
          {
            type: 'bar',
            name: '新兴产业产值',
            xAxisIndex: 0,
            encode:{
              x:6,
              y:9
            }
          },
          {
            type: 'line',
            name: '新兴产业同比增速',
            xAxisIndex: 1,
            encode:{
              x:7,
              y:9
            }
          },
        ],
      }
    //this.chart.setOption(option)
    //this.chart.getOption(option=>{
      //console.log("the chart option", option)
    //})
  }


  render() {
    this.initChart()
    const {data}=this.props.parkStatus
    const  tabs = [
      '工业企业',
      '商贸服务业',
     '农业企业',
     '建筑企业',
    ]
    console.log("fuck echart", data.parkStatuses);
    return (
      <ScrollView
       style={styles.container}
       contentContainerStyle={styles.containerContent}
      >
        <View>
          <ImageBackground style={{
            width: scaleSizeW(750),
            height: scaleSizeH(350),
            justifyContent: 'center',
            alignItems: 'center',
          }} source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564210357065&di=7211c752fb9c3852d6e802ad775895ff&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190613%2Fea7338ac7e9f474b9642f8e628b1d43d.jpeg'}}>
            <Text style={{ fontSize: setSpText(40), color: Theme.whiteColor }}>企业运行分析</Text>
            <View style={{ borderColor: Theme.whiteColor, borderWidth: 1, marginTop: scaleSizeH(10) }}>
              <Text style={{ fontSize: setSpText(28), color: Theme.whiteColor }}>数观企业 尽在指尖</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ paddingHorizontal: scaleSizeW(20), flex: 1}}>

          <WhiteSpace size="lg" />

          <View style={{ marginHorizontal: scaleSizeW(-20) }}>
            <SegmentedControlTab
              values={tabs}
              tabStyle = {{ backgroundColor:Theme.whiteColor, borderColor: Theme.whiteColor }}
              activeTabStyle = {{ backgroundColor:Theme.whiteColor }}
              tabTextStyle = {{ color: Theme.darkTextColor }}
              activeTabTextStyle = {{ color: Theme.baseColor }}
              selectedIndex={this.state.selectedIndex}
              onTabPress={(index) => {
                  this.setState({
                    ...this.state,
                    selectedIndex: index
                  });
              }}
            />
          </View>

          <WhiteSpace size="lg" />

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={styles.borderSty} onPress = {() => {this.setState({selected: 1})}}>
              <Text style={{ color: this.state.selected === 1 ? Theme.baseColor : Theme.darkTextColor}}>汇总数据</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.borderSty} onPress = {() => {this.setState({selected: 2})}}>
              <Text style={{ color: this.state.selected === 2 ? Theme.baseColor : Theme.darkTextColor }}>企业详细数据</Text>
            </TouchableOpacity>
          </View>

          <WhiteSpace size="lg" />

          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{ color: Theme.darkTextColor}}>数据周期:</Text>
              </View>
              <View style={{flex: 4, flexDirection: 'row'}}>
                <ModalDropdown
                  options={this.state.years}
                  dropdownStyle={{marginHorizontal: scaleSizeW(25), width: scaleSizeW(200) }}
                  dropdownTextStyle={{color: Theme.darkTextColor }}
                  onSelect = {(idx) => {
                    this.setState({
                      startYear: this.state.years[idx]
                    })
                  }}
                >
                  <DownFrame
                    width={scaleSizeW(200)}
                    leftStyle={{color: Theme.darkTextColor}}
                    leftTitle={this.state.startYear}
                  />
                </ModalDropdown>
                  <Text>1月 至</Text>
                <ModalDropdown
                  options={this.state.months}
                  dropdownStyle={{marginHorizontal: scaleSizeW(25), width: scaleSizeW(150) }}
                  dropdownTextStyle={{color: Theme.darkTextColor }}
                  onSelect = {(idx) => {
                    this.setState({
                      startMonth: this.state.months[idx]
                    })
                  }}
                >
                  <DownFrame
                    width={scaleSizeW(150)}
                    leftStyle={{color: Theme.darkTextColor}}
                    leftTitle={this.state.startMonth}
                  />
                </ModalDropdown>
              </View>
            </View>
          </View>
          <WhiteSpace size="lg" />

          <View style={styles.echartWrapper}>
              <ECharts ref={this.onRef} option={{}}></ECharts>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerContent: {
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
  borderSty: {
    borderColor: '#878787',
    borderWidth: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5
  },
  echartWrapper: {
    height: 300,
    // paddingLeft: 20,
  },
})

export default Home
