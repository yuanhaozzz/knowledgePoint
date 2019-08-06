import React, { Component } from 'react';

export default function (component) {

    class ImportComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                asyncComponent: null
            };
        }

        async componentWillMount () {
            let { default: asyncComponent } = await component();
            this.setState({
                asyncComponent
            });
        }

        render () {
            let C = this.state.asyncComponent;
            return (
                C ? <C {...this.props} /> : null
            );
        }
    }
    return ImportComponent;
}