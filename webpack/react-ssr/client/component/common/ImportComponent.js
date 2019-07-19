export default function () {
    return class extends Component {
        constructor(props) {
            super(props)
            // this.state = {
            //     dynamicComponent: null
            // }
        }

        // static getInitalProps () {
        //     console.log('23asdas21')
        // }

        // async componentDidMount () {
        //     let dynamicComponent = await component()
        //     console.log(dynamicComponent, '------------')
        //     this.setState({
        //         dynamicComponent
        //     })
        // }

        render () {
            return (
                <div>111</div>
            )
        }
    }
}