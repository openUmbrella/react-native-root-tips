/* eslint-disable react-native/no-inline-styles */
/**
 * listDemoScreen
 *
 * opu
 * 19年10月9日
 */
import React, {Component} from 'react';
import {FlatList, Text, StyleSheet, View} from 'react-native';

export default class ListViewDemoContianer extends Component {
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

      enableLoadMore: false,
      loadingMore: false,
      isLoadAll: false,
      list: [],
    };
  }
  componentDidMount() {
    // 加载数据
    this.loadDataList();
  }
  loadDataList = () => {
    console.log('调用了请求方法');
    this.setState({
      refreshing: true,
    });
    // 网络请求
    setTimeout(() => {
      let count = Math.floor(Math.random() * 10) + 4;
      let arr = [];
      for (let i = 0; i < count; i++) {
        arr.push(`随机数据${Math.floor(Math.random() * 10000)}`);
      }
      this.setState({
        refreshing: false,
        list: arr,
        enableLoadMore: true,
        isLoadAll: arr.length > 18,
      });
      console.log('刷新结束:');
    }, 1000);
  };
  loadMoreData = () => {
    this.setState({
      loadingMore: true,
    });
    // 网络请求
    setTimeout(() => {
      let count = Math.floor(Math.random() * 10) + 5;
      let arr = [];
      for (let i = 0; i < count; i++) {
        arr.push(`随机数据${Math.floor(Math.random() * 10000)}`);
      }
      let newlist = this.state.list.concat(arr);
      this.setState({
        loadingMore: false,
        list: newlist,
        isLoadAll: newlist.length > 20,
      });
      console.log('加载更多结束:');
    }, 600);
  };
  // 渲染组件
  render() {
    return (
      <FlatList
        style={styles.listview}
        data={this.state.list}
        keyExtractor={(item, index) => '' + index + item}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                height: 44,
                backgroundColor: 'white',
                borderBottomWidth: 1,
                justifyContent: 'center',
                borderBottomColor: '#f2f2f2',
              }}>
              <Text style={{marginLeft: 10}}>{item}</Text>
            </View>
          );
        }}
        enableMJRefresh={true}
        mjRefreshing={this.state.refreshing}
        onMJRefresh={this.loadDataList}
        mjHeaderStyle={this.props.navigation.getParam('headerStyles')}
        enableMJLoadMore={this.state.enableLoadMore}
        mjLoadingMore={this.state.loadingMore}
        mjLoadAll={this.state.isLoadAll}
        onMJLoadMore={this.loadMoreData}
        mjFooterStyle={this.props.navigation.getParam('footerStyles')}
      />
    );
  }
}

const styles = StyleSheet.create({
  listview: {
    flex: 1,
    backgroundColor: '#f5f9fa',
  },
});
