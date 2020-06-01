/* eslint-disable react-native/no-inline-styles */
/**
 * 首页
 *
 * opu
 * 19年10月9日
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

let count = 1;
export default class HomeScreen extends Component {
  // 构造函数
  constructor(props) {
    super(props);
    this.state = {
      refresing: false,
      refreshList: [
        {
          title: '默认样式',
          screen: 'ListDemo',
          styles: {},
        },
        {
          title: '自定义文字/样式',
          screen: 'ListDemo',
          styles: {
            headerType: 'normal',
            stateTitle: {
              idle: '下拉刷新吧吧吧',
              pulling: '你放手，我就刷新',
              refreshing: '正在玩命加载中',
            },
            stateLabelStyle: {
              color: '#FF00FF',
              fontSize: 16,
            },
            timeLabelStyle: {
              color: '#008000',
            },
            labelImageGap: 40,
          },
        },
        {
          title: '隐藏文字',
          screen: 'ListDemo',
          styles: {
            hideTimeLabel: true, // 隐藏 时间标签
            // hideStateLabel: true, // 隐藏状态标签
          },
        },
        {
          title: '隐藏所有文字',
          screen: 'ListDemo',
          styles: {
            hideTimeLabel: true, // 隐藏 时间标签
            hideStateLabel: true, // 隐藏状态标签
          },
        },
        {
          title: '自定义箭头图片',
          screen: 'ListDemo',
          styles: {
            arrowImage: 'yuanquan',
            hideTimeLabel: true, // 隐藏 时间标签
          },
        },
        {
          title: '自定义动画',
          screen: 'ListDemo',
          styles: {
            headerType: 'gif',
            gifImages: {
              idle: [
                'dropdown_anim__0001',
                'dropdown_anim__0002',
                'dropdown_anim__0003',
                'dropdown_anim__0004',
              ],
              pulling: [
                'dropdown_anim__0001',
                'dropdown_anim__0002',
                'dropdown_anim__0003',
                'dropdown_anim__0004',
              ],
              loading: [
                'dropdown_loading_01',
                'dropdown_loading_02',
                'dropdown_loading_03',
              ],
            },
          },
        },
        {
          title: '自定义动画2',
          screen: 'ListDemo',
          styles: {
            headerType: 'gifTop',
            gifImages: {
              idle: [
                'dropdown_anim__0001',
                'dropdown_anim__0002',
                'dropdown_anim__0003',
                'dropdown_anim__0004',
              ],
              pulling: [
                'dropdown_anim__0001',
                'dropdown_anim__0002',
                'dropdown_anim__0003',
                'dropdown_anim__0004',
              ],
              loading: [
                'dropdown_loading_01',
                'dropdown_loading_02',
                'dropdown_loading_03',
              ],
            },
            hideTimeLabel: true,
          },
        },
      ],
      loadMoreList: [
        {
          title: '默认样式(autoNormal)',
          screen: 'ListDemo',
          styles: {
            footerType: 'autoNormal',
          },
        },
        {
          title: 'backNormal',
          screen: 'ListDemo',
          styles: {
            footerType: 'backNormal',
          },
        },
        {
          title: '自定义样式文字样式',
          screen: 'ListDemo',
          styles: {
            stateLabelStyle: {
              color: '#ff0000',
              fontSize: 16,
            },
            indicatorType: 'gray',
            labelImageGap: 10,
          },
        },
        {
          title: '自定义动画(backGif)',
          screen: 'ListDemo',
          styles: {
            footerType: 'backGif',
            gifImages: {
              idle: [
                'dropdown_anim__0001',
                'dropdown_anim__0002',
                'dropdown_anim__0003',
                'dropdown_anim__0004',
              ],
              pulling: [
                'dropdown_anim__0001',
                'dropdown_anim__0002',
                'dropdown_anim__0003',
                'dropdown_anim__0004',
              ],
              loading: [
                'dropdown_loading_01',
                'dropdown_loading_02',
                'dropdown_loading_03',
              ],
            },
          },
        },
      ],
      webViewList: [
        {
          title: '默认样式',
          screen: 'WebView',
          styles: {},
        },
        {
          title: '自定义样式',
          screen: 'WebView',
          styles: {
            // headerType: 'normal',
            // stateTitle: {
            //     idle: '下拉刷新吧吧吧',
            //     pulling: '你放手，我就刷新',
            //     refreshing: '正在玩命加载中',
            // },
            // stateLabelStyle: {
            //     color: '#FF00FF',
            //     fontSize: 16
            // },
            // timeLabelStyle: {
            //     color: '#008000',
            // },
            // labelImageGap: 40,
            headerType: 'gifTop',
            gifImages: {
              idle: [
                'dropdown_anim__0001',
                'dropdown_anim__0002',
                'dropdown_anim__0003',
                'dropdown_anim__0004',
              ],
              pulling: [
                'dropdown_anim__0001',
                'dropdown_anim__0002',
                'dropdown_anim__0003',
                'dropdown_anim__0004',
              ],
              loading: [
                'dropdown_loading_01',
                'dropdown_loading_02',
                'dropdown_loading_03',
              ],
            },
            hideTimeLabel: true,
          },
        },
      ],
    };
  }
  renderDemoCell = (list, type) => {
    return list.map((item, index) => {
      return (
        <TouchableOpacity
          style={styles.itembtn}
          key={'' + index}
          onPress={() => {
            if (type === 'header') {
              this.props.navigation.push('ListDemo', {
                title: item.title,
                headerStyles: item.styles,
              });
            } else if (type === 'footer') {
              this.props.navigation.push('ListDemo', {
                title: item.title,
                footerStyles: item.styles,
              });
            } else if (type === 'webview') {
              this.props.navigation.push('WebView', {
                title: item.title,
                headerStyles: item.styles,
                webType: 'UIWebView',
              });
            } else if (type === 'wkwebview') {
              this.props.navigation.push('WebView', {
                title: item.title,
                headerStyles: item.styles,
                webType: 'WKWebView',
              });
            }
          }}>
          <Text style={styles.btntext}>{item.title}</Text>
        </TouchableOpacity>
      );
    });
  };
  onRefresh = () => {
    console.log('刷新了', count++);
    // 必须先改变刷新状态标识
    this.setState({
      refresing: true,
    });
    setTimeout(() => {
      this.setState({
        refresing: false,
      });
    }, 1000);
  };
  // 渲染组件
  render() {
    let {refresing, refreshList, loadMoreList, webViewList} = this.state;
    return (
      <ScrollView
        style={styles.container}
        enableMJRefresh={true}
        mjRefreshing={refresing}
        onMJRefresh={this.onRefresh}>
        <View style={styles.header}>
          <Text style={styles.headertxt}>下拉刷新</Text>
        </View>
        {this.renderDemoCell(refreshList, 'header')}
        <View style={[styles.header, {backgroundColor: '#7B68EE'}]}>
          <Text style={styles.headertxt}>上拉加载更多</Text>
        </View>
        {this.renderDemoCell(loadMoreList, 'footer')}
        <View style={[styles.header, {backgroundColor: '#20B2AA'}]}>
          <Text style={styles.headertxt}>react-native-webview</Text>
        </View>
        {this.renderDemoCell(webViewList, 'wkwebview')}
        <TouchableOpacity
          style={[styles.header, {height: 44, backgroundColor: '#2f00AA'}]}
          onPress={() => {
            this.props.navigation.push('Tips');
          }}>
          <Text style={styles.headertxt}>提示组件 ></Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

// 样式
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 30,
    backgroundColor: '#32CD32',
    justifyContent: 'center',
  },
  headertxt: {
    color: '#F8F8FF',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },
  itembtn: {
    height: 44,
    justifyContent: 'center',
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 1,
  },
  btntext: {
    fontSize: 15,
    marginLeft: 10,
  },
});
