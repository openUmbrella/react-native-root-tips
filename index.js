import Toast from './lib/Toast';
export * from './lib/Toast';
export default Toast;

/**
Properties you can set

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
hideOnPress         | true                     | Bool     | Should hide toast that appears by pressing on the toast.
onShow              | null                     | Function | Callback for toast\`s appear animation start
onShown             | null                     | Function | Callback for toast\`s appear animation end
onHide              | null                     | Function | Callback for toast\`s hide animation start
onHidden            | null                     | Function | Callback for toast\`s hide animation end

textFont            | 14                       | Number   | text's font
mask                | false                    | Bool     | If can touch other place when shown
maskColor           | string                   | Bool     | The mask's color
maskOpacity         | false                    | Bool     | The mask's opacity
image               | null                     | Object   | show image icon that you like. notice: if you setting image/showSuccess/showFail/showLoading at once, the priority is descendant
imageStyle          | null                     | Object   | the image style
showSuccess         | false                    | Bool     | If show default success icon
showFail            | false                    | Bool     | If show default  fail icon
showLoading         | false                    | Bool     | If show default  loading icon

 */
