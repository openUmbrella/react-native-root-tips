/**
 * typescript definition
 * @author wallel
 */
declare module "react-native-root-tips" {
    import * as React from 'react';
    import * as ReactNative from "react-native";
    import {TextStyle, StyleProp, ViewStyle, ImageStyle} from "react-native";

    export interface ToastOptions {
        containerStyle?: StyleProp<ViewStyle>
        duration?: number
        visible?: boolean,
        position?: number,
        animation?: boolean,
        shadow?: boolean,
        backgroundColor?: string,
        opacity?: number,
        shadowColor?: string,
        textColor?: string,
        textStyle?: StyleProp<TextStyle>,
        delay?: number,
        // keyboardAvoiding?: boolean, 已经写死是监听keyboardDidChangeFrame
        hideOnPress?: boolean,
        onHide?: Function,
        onHidden?: Function,
        onShow?: Function,
        onShown?: Function,
        // onPress?: Function
        showLoading?: boolean,
        showSuccess?: boolean,
        showFail?: boolean,
        image?: any,
        imageLoading?: any,
        imageSuccess?: any,
        imageFail?: any,
        imageWarn?: any,
        imageInfo?: any,
        imageStyle?: StyleProp<ImageStyle>,
        mask?: boolean,
        maskColor?: string,
        maskOpacity?: number,
        showText?: boolean,
        textFont?: number,
    }

    export interface ToastProps extends ToastOptions, ReactNative.ViewProperties {
    }

    export interface Durations {
        LONG: number,
        SHORT: number
    }

    export interface Positions {
        TOP: number,
        BOTTOM: number,
        CENTER: number,
    }

    export default class Toast extends React.Component<ToastProps> {
        static show: (message: string, options?: ToastOptions) => any;
        static hide: (toast: any) => void;
        static durations: Durations;
        static positions: Positions;
    }

    export class ToastContainer extends React.Component<ToastProps> {
    }
}
