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
        } else {
            console.warn(`Toast.hide expected a \`RootSiblings\` instance as argument.\nBut got \`${typeof toast}\` instead.`);
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
