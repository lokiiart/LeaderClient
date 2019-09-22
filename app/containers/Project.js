import React, { Component } from 'react'
import { StyleSheet, ScrollView, FlatList, View, Image, Text, TouchableOpacity } from "react-native";
import { connect } from 'react-redux'

// import { Button } from '../components'
import { WhiteSpace, WingBlank, Icon, Card, Button, Grid } from '@ant-design/react-native';
import { ECharts } from 'react-native-echarts-wrapper';
import { NavigationActions, scaleSizeW, scaleSizeH, setSpText } from '../utils'
import {ReadingStatus, SwitchTab, DownFrame, DataTableList} from '../components';
import { Theme } from '../comm'


@connect(({projects})=>({projects}))
class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 1,
    }
  }
  componentDidMount(){
    //this.didFocusSubscription = this.props.navigation.addListener(
      //'didFocus',
      //payload=>{
        this.props.dispatch({type:'projects/init'})
      //}
    //)
  }

  componentWillUnmount(){
    //this.didFocusSubscription.remove()
  }

  render() {
    const {fetching,list} = this.props.projects
    console.log("project list", list);
    return (
      <ScrollView
        style={styles.container}
      >
        <View style={{ flex: 1, paddingHorizontal: scaleSizeW(20) }}>
          <View style={{ paddingVertical: scaleSizeH(40), justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <Text style={{ fontSize: setSpText(40), color: Theme.darkTextColor }}>项目协调需求处理</Text>
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
            dataType={"project"}
            daraArr={list}
            headerArr={[
              {name: '序号', width: 1},
              {name: '项目名称', width: 2},
              {name: '业主单位', width: 2},
              {name: '建设地址', width: 2},
              {name: '总投资（万元）', width: 2},
              {name: '主要建设内容', width: 3},
              {name: '存在问题和困难', width: 3},
            ]}
            onPress={(item) => {
              this.props.navigation.navigate('ProjectDetail', {sourceInfo: item})
            }}
          />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default Project
