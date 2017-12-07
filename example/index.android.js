/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Text,
  View
} from 'react-native';

import Tips from 'react-native-root-tips';

export default class RootTipsDemo extends Component {

  _sampleSimple(){
    Tips.show('hello world!');
  }
  _sampleDefaultLoading(){
    Tips.show('loading...',{showLoading: true});
  }
  _sampleDefaultSuccess(){
    Tips.show('loading success',{showSuccess: true});
  }
  _sampleDefaultFail(){
    Tips.show('loading fail',{showFail: true});
  }
  
  _sampleCustomImage(){
    // you can use local Image and net image
    Tips.show('Custom Images', { backgroundColor: 'white',textColor:'black',opacity:0.9,image:{uri:'https://github.com/openUmbrella/react-native-root-tips/raw/master/example/src/loading1.gif'}});
    
    // local Image
    // Tips.show('Custom Images',{image: require('./src/loading.gif')});
  }
  _sampleOnlyImage(){
    Tips.show('tips will not show',{showText: false,showLoading:true});
  }
  _sampleMask(){
    //when showing, you can't touch anything
    Tips.show('masking...',{mask:true,showLoading:true, maskColor:'gray'});
  }


  render() {
    return (
      <ScrollView style={{flex:1,backgroundColor:'#F0FFFF'}}>
        <View style={styles.container}>
          <Text style={styles.welcome} onPress={this._sampleSimple}>
          Simple Tips
          </Text>
          <Text style={styles.welcome} onPress={this._sampleDefaultLoading}>
            Default Loading
          </Text>
          <Text style={styles.welcome} onPress={this._sampleDefaultSuccess}>
            Default Success
          </Text>
          <Text style={styles.welcome} onPress={this._sampleDefaultFail}>
            Default Fail
          </Text>
          <Text style={styles.welcome} onPress={this._sampleCustomImage}>
            Custom Image
          </Text>
          <Text style={styles.welcome} onPress={this._sampleOnlyImage}>
            Only Image
          </Text>
          <Text style={styles.welcome} onPress={this._sampleMask}>
            Showing with Mask 
          </Text>
          

        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
    marginTop: 150,
  },
  welcome: {
    fontSize: 20,
    padding: 5,
    marginTop: 10,
    textAlign: 'center',
    backgroundColor: '#E6E6FA',
  },

});

AppRegistry.registerComponent('RootTipsDemo', () => RootTipsDemo);
