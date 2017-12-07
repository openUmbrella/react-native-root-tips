## react-native-root-tips

![screen-shoot](https://github.com/openUmbrella/react-native-root-tips/raw/master/example/src/example.gif)

### Features
1. Pure javascript solution.
2. Support both Android and iOS.
3. Lots of custom options for Toast.
4. You can show/hide Toast by calling api or using Component inside render.
5. You can custom icon and text and so on
6. better performance

### Thanks

react-native-root-toast package's author


## Install

`npm install react-native-root-tips --save`


## Simple Useage

```
import Tips from 'react-native-root-tips';

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
    // you can use local Image or net image
    Tips.show('Custom Images', { backgroundColor: 'white',textColor:'black',opacity:0.9,image:{uri:'http://www.sucaijishi.com/uploadfile/2015/0210/20150210104952902.gif'}});
    
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


```


## Settings

Name                | Default                  |  Type    | Description
--------------------|--------------------------|----------|---------------------------
duration            | Toast.durations.SHORT    | Number   | The duration of the toast. (Only for api calling method)
visible             | false                    | Bool     | The visibility of toast. (Only for Toast Component)
position            | Toast.positions.CENTER   | Number   | The position of toast showing on screen (A negative number represents the distance from the bottom of screen. A positive number represents the distance form the top of screen. `0` will position the toast to the middle of screen.)
animation           | true                     | Bool     | Should preform an animation on toast appearing or disappearing.
shadow              | true                     | Bool     | Should drop shadow around Toast element.
backgroundColor     | null                     | String   | The background color of the toast.
shadowColor         | null                     | String   | The shadow color of the toast.
textColor           | null                     | String   | The text color of the toast.
delay               | 0                        | Number   | The delay duration before toast start appearing on screen.
hideOnPress         | false                     | Bool     | Should hide toast that appears by pressing on the toast.
onShow              | null                     | Function | Callback for toast\`s appear animation start
onShown             | null                     | Function | Callback for toast\`s appear animation end
onHide              | null                     | Function | Callback for toast\`s hide animation start
onHidden            | null                     | Function | Callback for toast\`s hide animation end


## adding props
Name                | Default                  |  Type    | Description
--------------------|--------------------------|----------|---------------------------
textFont            | 14                       | Number     | text's font
mask                | false                    | Bool     | If can touch other place when shown
maskColor           | string                   | Bool     | The mask's color
maskOpacity         | false                    | Bool     | The mask's opacity
image               | null                     | Object   | show image icon that you like. notice: if you setting image/showSuccess/showFail/showLoading at once, the priority is descendant
imageStyle          | null                     | Object   | the image style
showText            | true                       | Bool     | If show text
showSuccess         | false                    | Bool     | If show default success icon
showFail            | false                    | Bool     | If show default  fail icon
showLoading         | false                    | Bool     | If show default  loading icon


### Properties

##### Tips.durations

presets of duration of the toast.

1. Tips.durations.SHORT (equals to *2000*)

2. Tips.durations.LONG (equals to *3500*)

##### Tips.positions

presets of position of toast.

1. Tips.positions.TOP (equals to *20*)

2. Tips.positions.BOTTOM (equals to *-20*)

3. Tips.positions.CENTER (equals to *0*)

### Usage

There are two different ways to manage a Toast.



#### **Calling api**

**NOTE: I recommend you to use this way**

```
import Tips from 'react-native-root-tips';

// Add a Tips on screen.
let tips = Tips.show('This is a message', {
    duration: 2500,
    position: Tips.positions.CENTER,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    onShow: () => {
        // calls on toast\`s appear animation start
    },
    onShown: () => {
        // calls on toast\`s appear animation end.
    },
    onHide: () => {
        // calls on toast\`s hide animation start.
    },
    onHidden: () => {
        // calls on toast\`s hide animation end.
    }
});

// You can manually hide the Toast, or it will automatically disappear after a `duration` ms timeout.
setTimeout(function () {
    Tips.hide(tips);
}, 500);

```

#### **Using a Component**

**NOTE:**
Showing a tips by using a Component inside render, The tips will be automatically disappeared when the `<Tips />` is unmounted.

```
import React, {Component} from 'react-native';
import Tips from 'react-native-root-tips';

class Example extends Component{
    constructor() {
        super(...arguments);
        this.state = {
            visible: false
        };
    }

    componentDidMount() {
        setTimeout(() => this.setState({
            visible: true
        }), 2000); // show tips after 2s

        setTimeout(() => this.setState({
            visible: false
        }), 5000); // hide tips after 5s
    };

    render() {
        return <Tips
            visible={this.state.visible}
            position={50}
            shadow={false}
            animation={false}
            hideOnPress={true}
        >This is a message</Tips>;
    }
}

```

