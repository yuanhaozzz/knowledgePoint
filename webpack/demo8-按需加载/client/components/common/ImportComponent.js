import React, { Component } from 'react'

export default function (importComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                dynamicComponent: null,
                mounted: false
            }
        }

        async componentWillMount() {
            let {default: dynamicComponent} = await importComponent()
            if (this.state.mounted) {
                this.setState({
                    dynamicComponent
                })
            }
        }

        componentDidMount () {
            this.setState({
                mounted:true
            })
        }

        render () {
            let C = this.state.dynamicComponent
            return (
                C ? <C/> : <div>null</div>
            );
        }
    };
}