import React, {
    Component,
} from 'react';
import {
    View
} from 'react-native';
import RootSiblings from 'react-native-root-siblings';
import ToastContainer, {positions, durations} from './ToastContainer';


let lastToast = null;

let defaultOptions = {}

class Toast extends Component {
    static displayName = 'Toast';
    static propTypes = ToastContainer.propTypes;
    static positions = positions;
    static durations = durations;
    static setDefaultOptions = (options) => {

        defaultOptions = options;
    }

    //convenience method
    static showLoading = function(message, options) {
        
        let opts = Object.assign({duration: 9007199254740992},options,{image: defaultOptions.imageLoading ? defaultOptions.imageLoading : require('../src/loading.gif')});

        this.show(message,opts);    
    }

    static showSuccess = function(message, options) {
        
        let opts = Object.assign({},options,{image: defaultOptions.imageSuccess ? defaultOptions.imageSuccess : require('../src/success.png')});

        this.show(message,opts);    
    }
    
    static showFail = function(message, options) {
        
        let opts = Object.assign({},options,{image: defaultOptions.imageFail ? defaultOptions.imageFail : require('../src/error.png')});

        this.show(message,opts);    
    }

    static showInfo = function(message, options) {
        
        let opts = Object.assign({},options,{image: defaultOptions.imageInfo ? defaultOptions.imageInfo : require('../src/info.png')});

        this.show(message,opts);    
    }

    static showWarn = function(message, options) {
        
        let opts = Object.assign({},options,{image: defaultOptions.imageWarn ? defaultOptions.imageWarn : require('../src/warn.png')});

        this.show(message,opts);    
    }

    static hide = function(){
        if(lastToast != null){
            lastToast.destroy();
        }
    }


    //raw method
    static show = (message, options) => {

        if(lastToast != null){
            lastToast.destroy();
        }

        let RawDefaultOptions = {
            duration: durations.SHORT,
            position: positions.CENTER,

        }

        let opts = Object.assign(RawDefaultOptions, defaultOptions, options);

        let onHidden = opts.onHidden;

        let hidenFunc = function(){
            toast && toast.destroy();
            onHidden && onHidden();
        }

        opts.onHidden = hidenFunc;

        let toast = new RootSiblings(<ToastContainer
            {...opts}
            visible={true}
        >
            {message}
        </ToastContainer>);

        lastToast = toast;

        return toast;
    };

    static hide = toast => {
        if (toast instanceof RootSiblings) {

            toast.destroy();
        } 

        if(lastToast != null){
            lastToast.destroy();
        }
    };
    

    _toast = null;

    constructor(props){
        super(props);
        
    }
    

    componentWillMount = () => {
        this._toast = new RootSiblings(<ToastContainer
            {...this.props}
            duration={0}
        />);
    };

    componentWillReceiveProps = nextProps => {
        this._toast.update(<ToastContainer
            {...nextProps}
            duration={0}
        />);
    };

    componentWillUnmount = () => {
        this._toast.destroy();
    };

    render() {
        return null;
    }
}

export {
    RootSiblings as Manager
};
export default Toast;
