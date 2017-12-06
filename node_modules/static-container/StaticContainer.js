import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

export default class extends Component {
    props: {
        shouldUpdate: boolean
    };

    static propTypes = {
        shouldUpdate: PropTypes.bool.isRequired
    };

    shouldComponentUpdate(nextProps) {
        return nextProps.shouldUpdate;
    }

    render() {
        const child = this.props.children;
        return (child === null || child === false) ? null : Children.only(child);
    }

}
