/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, ScrollView, Text, View} from 'react-native';

import Tips from 'react-native-root-tips';

export default class RootTipsDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    //you can set a global default options you like
    Tips.setDefaultOptions({
      backgroundColor: 'black',
      opacity: 0.95,
      textColor: 'white',

      //setting image you like
      // imageLoading: require('./src/loading.gif'),
      // imageLoading: require('xxxxxxxxxx'),
      // imageSuccess: require('xxxxxxxxxx'),
      // imageFail: require('xxxxxxxxxx'),
      // imageInfo: require('xxxxxxxxxx'),
      // imageWarn: require('xxxxxxxxxx'),
    });
  }

  _convenienceUseage() {
    // show a loading tips
    // you need call Tips.hide() to make tips disappear
    Tips.showLoading('loading...');

    // show a successful tips
    // Tips.showSuccess('wow! success');

    // show a failed tips
    // Tips.showFail('em...failed');

    // show a Info tips
    // Tips.showInfo('info tips');

    // show a warning tips
    // Tips.showWarn('warning');

    // ** you can call hide() to hide showing tips **
    // Tips.hide();
  }

  _sampleSimple() {
    Tips.show('hello world!');
  }
  _sampleDefaultLoading() {
    Tips.show('loading...', {showLoading: true});
  }
  _sampleDefaultSuccess() {
    Tips.show('loading success', {showSuccess: true});
  }
  _sampleDefaultFail() {
    Tips.show('loading fail', {showFail: true});
  }

  _sampleCustomImage() {
    // you can use local Image and net image
    // Tips.show('Custom Images', { backgroundColor: 'white',textColor:'black',opacity:0.9, image:{uri:'https://github.com/openUmbrella/react-native-root-tips/raw/master/example/src/loading1.gif'}});

    // local Image
    Tips.show('Custom Images', {
      backgroundColor: 'white',
      textColor: 'black',
      opacity: 0.9,
      image: require('../images/loading1.gif'),
    });
  }
  _sampleOnlyImage() {
    Tips.show('tips will not show', {showText: false, showLoading: true});
  }
  _sampleMask() {
    //when showing, you can't touch anything
    Tips.show('masking...', {mask: true, showLoading: true, maskColor: 'gray'});
  }

  render() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#F0FFFF'}}>
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
          <Text
            style={styles.welcome}
            onPress={() => {
              this.props.navigation.push('Home');
            }}>
            refresh
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
