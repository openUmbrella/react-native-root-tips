import React, {
    Component
} from 'react';
import PropTypes from 'prop-types';
import {
    ViewPropTypes,
    StyleSheet,
    View,
    Text,
    Image,
    ActivityIndicator,
    Animated,
    Dimensions,
    TouchableWithoutFeedback,
    Easing,
    Keyboard
} from 'react-native';
const TOAST_MAX_WIDTH = 0.8;
const TOAST_ANIMATION_DURATION = 200;
const padding_TOP_BOTTOM = 10;
const MARGIN_IMAGE_TEXT = 10;
const DIMENSION = Dimensions.get('window');
let KEYBOARD_HEIGHT = 0;

Keyboard.addListener('keyboardDidChangeFrame', function ({ endCoordinates }) {
    KEYBOARD_HEIGHT = DIMENSION.height - endCoordinates.screenY;
});

const WINDOW_WIDTH = DIMENSION.width;
const positions = {
    TOP: 20,
    BOTTOM: -20,
    CENTER: 0
};

const durations = {
    LONG: 3500,
    SHORT: 2000
};

let styles = StyleSheet.create({
    defaultStyle: {
        position: 'absolute',
        width: WINDOW_WIDTH,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'yellow'
    },
    maskStyle:{
        position: 'absolute',
        width:'100%',
        height:'100%'
    },
    
    containerStyle: {
        padding: padding_TOP_BOTTOM * 2,
        paddingTop: padding_TOP_BOTTOM,
        paddingBottom: padding_TOP_BOTTOM,
        backgroundColor: '#000',
        opacity: 0.85,
        borderRadius: 5,
        marginHorizontal: WINDOW_WIDTH * ((1 - TOAST_MAX_WIDTH) / 2),
        justifyContent: 'center',
        alignItems: 'center',
    },
    shadowStyle: {
        shadowColor: '#000',
        shadowOffset: {
            width: 4,
            height: 4
        },
        shadowOpacity: 0.8,
        shadowRadius: 6,
        elevation: 10
    },
    iconStyle:{
        width: 40,
        height:40,
        marginBottom: MARGIN_IMAGE_TEXT,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 14,
        color: '#fff',
        textAlign: 'center',
        lineHeight:16,
    }
});

class ToastContainer extends Component {
    static displayName = 'ToastContainer';

    static propTypes = {
        ...ViewPropTypes,
        containerStyle: ViewPropTypes.style,
        duration: PropTypes.number,
        visible: PropTypes.bool,
        position: PropTypes.number,
        animation: PropTypes.bool,
        
        delay: PropTypes.number,
        hideOnPress: PropTypes.bool,

        backgroundColor: PropTypes.string,
        opacity: PropTypes.number,

        shadow: PropTypes.bool,
        shadowColor: PropTypes.string,

        mask:PropTypes.bool,
        maskColor:PropTypes.string,
        maskOpacity: PropTypes.number,

        showLoading: PropTypes.bool,
        showSuccess: PropTypes.bool,
        showFail: PropTypes.bool,

        image: PropTypes.any,
        imageLoading: PropTypes.any,
        imageSuccess: PropTypes.any,
        imageFail: PropTypes.any,
        imageWarn: PropTypes.any,
        imageInfo: PropTypes.any,
        imageStyle: PropTypes.any,

        showText: PropTypes.bool, 
        textColor: PropTypes.string,
        textFont: PropTypes.number,
        textStyle: Text.propTypes.style,

        onHide: PropTypes.func,
        onHidden: PropTypes.func,
        onShow: PropTypes.func,
        onShown: PropTypes.func
    };

    static defaultProps = {
        visible: false,
        duration: durations.SHORT,
        animation: true,
        shadow: true,
        showText: true,
        position: positions.CENTER,
        opacity: 0.86,
        maskOpacity: 0.4,
        delay: 0,
        hideOnPress: false,
    };

    constructor() {
        super(...arguments);
        this.state = {
            visible: this.props.visible,
            opacity: new Animated.Value(0)
        };
        
    }

    componentDidMount = () => {
        if (this.state.visible) {
            this._showTimeout = setTimeout(() => this._show(), this.props.delay);
        }
        
    };

    componentWillReceiveProps = nextProps => {
        if (nextProps.visible !== this.props.visible) {
            if (nextProps.visible) {
                clearTimeout(this._showTimeout);
                clearTimeout(this._hideTimeout);
                this._showTimeout = setTimeout(() => this._show(), this.props.delay);
            } else {
                this._hide();
            }

            this.setState({
                visible: nextProps.visible
            });
        }
    };

    componentWillUnmount = () => {
        this._hide();
    };

    _animating = false;
    _root = null;
    _hideTimeout = null;
    _showTimeout = null;

    _show = () => {
        clearTimeout(this._showTimeout);
        if (!this._animating) {
            clearTimeout(this._hideTimeout);
            this._animating = true;
            this._root.setNativeProps({
                pointerEvents: 'auto'
            });
            this.props.onShow && this.props.onShow(this.props.siblingManager);
            Animated.timing(this.state.opacity, {
                toValue: this.props.opacity,
                duration: this.props.animation ? TOAST_ANIMATION_DURATION : 0,
                easing: Easing.out(Easing.ease)
            }).start(({finished}) => {
                if (finished) {
                    this._animating = !finished;
                    this.props.onShown && this.props.onShown(this.props.siblingManager);
                    if (this.props.duration > 0) {
                        this._hideTimeout = setTimeout(() => this._hide(), this.props.duration);
                    }
                }
            });
        }
    };

    _hide = () => {
        clearTimeout(this._showTimeout);
        clearTimeout(this._hideTimeout);
        if (!this._animating) {
            this._root.setNativeProps({
                pointerEvents: 'none'
            });
            this.props.onHide && this.props.onHide(this.props.siblingManager);
            Animated.timing(this.state.opacity, {
                toValue: 0,
                duration: this.props.animation ? TOAST_ANIMATION_DURATION : 0,
                easing: Easing.in(Easing.ease)
            }).start(({finished}) => {
                if (finished) {
                    this._animating = false;
                    this.props.onHidden && this.props.onHidden(this.props.siblingManager);
                }
            });
        }
    };

    render() {
        let {props} =  this;
        let offset = props.position;
        let position = offset ? {
            [offset < 0 ? 'bottom' : 'top']: offset < 0 ? (KEYBOARD_HEIGHT - offset) : offset
        } : {
            top: 0,
            bottom: KEYBOARD_HEIGHT
        };

        return (this.state.visible || this._animating) ? 
        <Mask mask={props.mask} maskColor={props.maskColor} maskOpacity={props.maskOpacity}>
            <View
            style={[
                styles.defaultStyle,
                position
            ]}
            pointerEvents="box-none"
            >
            <TouchableWithoutFeedback
                onPress={this.props.hideOnPress ? this._hide : null}
            >
                <Animated.View
                    style={[
                        styles.containerStyle,
                         (!props.showText || !props.image && !props.showSuccess && !props.showFail && !props.showLoading) && {paddingTop: padding_TOP_BOTTOM * 2,paddingBottom: padding_TOP_BOTTOM * 2,},
                        props.containerStyle,
                        
                        props.backgroundColor && {backgroundColor: props.backgroundColor},
                        {
                            opacity: this.state.opacity
                        },
                        props.shadow && styles.shadowStyle,
                        props.shadowColor && {shadowColor: props.shadowColor}
                    ]}
                    pointerEvents="none"
                    ref={ele => this._root = ele}
                >
                    {   
                        props.image ? <Image style={[styles.iconStyle, !props.showText && {marginBottom: 0}, props.imageStyle]} source={props.image}></Image> :
                        props.showSuccess ? <Image style={[styles.iconStyle, !props.showText && {marginBottom: 0}, props.imageStyle]} source={require('../src/success.png')}></Image> :
                        props.showFail ? <Image style={[styles.iconStyle, !props.showText && {marginBottom: 0}, props.imageStyle]} source={require('../src/error.png')}></Image> :
                        props.showLoading ? <Image style={[styles.iconStyle, !props.showText && {marginBottom: 0}, props.imageStyle]} source={require('../src/loading.gif')}></Image> : null
                    }
                    {
                        props.showText ?  <Text style={[
                            styles.textStyle,
                            props.textStyle,
                            props.textColor && {color: props.textColor},
                            props.textFont && {fontSize: props.textFont, lineHeight: props.textFont + 2},
                            
                        ]}>
                            {this.props.children}
                        </Text> : null
                    }
                </Animated.View>
            </TouchableWithoutFeedback>
            </View>
        </Mask>
        
         : null;
    }
}

class Mask extends Component{

    render(){
        let { props } = this;
        return props.mask ?
        <View style={styles.maskStyle}>
            <View style={[styles.maskStyle,props.maskColor && {backgroundColor: props.maskColor},props.maskOpacity && {opacity: props.maskOpacity}]}></View>
            {this.props.children}
        </View> :
        this.props.children
        
    }
}

export default ToastContainer;
export {
    positions,
    durations
}
