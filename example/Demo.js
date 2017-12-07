/**
 * 组件描述
 * 
 * 作者: opumbrella
 * 日期: XX年XX月XX日
*/

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

import Toast from 'react-native-root-toast';

export default class DemoPage extends Component {

    // 构造函数
    constructor(props){
        super(props);
        this.state={
        
        };
        
    }
    _hello(){
        Toast.show('你好！！',{position:Toast.positions.CENTER});
    }
    _hello2(){
        Toast.show('大家好才是真的好！！', {position:Toast.positions.CENTER});
    }

    // 渲染组件
    render() {
        return (
            <View style={styles.container}>
            <Text onPress={this._hello}> 你好 !! </Text>
            <Text onPress={this._hello2} style={{marginTop:100}}> 大家好才是真的好 !! </Text>
            </View>
        );
    }

}


// 样式
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    
    
});