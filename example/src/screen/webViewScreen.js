/**
 * WebViewScreen
 *
 * opu
 * 19年10月9日
 */
import React, {Component} from 'react';
import {WebView, StyleSheet, View} from 'react-native';

import WKWebView from 'react-native-webview';

export default class WebViewDemoContainer extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('title', '效果'),
    };
  };
  // 构造函数
  constructor(props) {
    super(props);
    this.state = {
      enableRefresh: true,
      refreshing: false,
    };
    this.webview = React.createRef();
  }
  componentDidMount() {}
  loadData = (data) => {
    this.setState({
      refreshing: true,
    });
    this.webview.reload();
    // 做其他额外的操作...
  };
  onError = () => {
    this.setState({
      refreshing: false,
    });
  };
  onLoad = () => {
    console.log('网页开始加载中');
  };
  onLoadEnd = () => {
    this.setState({
      refreshing: false,
    });
    console.log('网页加载完毕');
  };
  // 渲染组件
  render() {
    let webType = this.props.navigation.getParam('webType');
    // let {refreshing} = this.state;
    return (
      <View style={styles.container}>
        {webType === 'UIWebView' ? (
          // RN提供的WebView
          <WebView
            ref={this.webview}
            source={{uri: 'https://www.baidu.com'}}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            scalesPageToFit={false}
            allowsInlineMediaPlayback={true}
            dataDetectorTypes={'none'}
            onLoad={this.onLoad}
            onLoadEnd={this.onLoadEnd}
            onError={this.onError}
            // 注意 指定值的特殊位置
            nativeConfig={{
              props: {
                enableMJRefresh: true,
                // mjRefreshing: refreshing,
                // onMJRefresh: this.loadData, // 如果指定了onRefresh方法, 那么刷新结束状态就由开发者自己改变
                mjHeaderStyle: this.props.navigation.getParam('headerStyles'),
              },
            }}
          />
        ) : (
          // react-native-webview提供的WKWebView
          <WKWebView
            ref={this.webview}
            source={{uri: 'https://www.baidu.com'}}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            scalesPageToFit={false}
            allowsInlineMediaPlayback={true}
            dataDetectorTypes={'none'}
            onLoad={this.onLoad}
            onLoadEnd={this.onLoadEnd}
            onError={this.onError}
            enableMJRefresh={true}
            // mjRefreshing={refreshing}
            // onMJRefresh={this.loadData} // 如果指定了onRefresh方法, 那么刷新结束状态就由开发者自己改变
            mjHeaderStyle={this.props.navigation.getParam('headerStyles')}
          />
        )}
      </View>
    );
  }
}
// 样式
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f9fa',
  },
});
