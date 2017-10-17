import React from 'react'

export default class App extends React.Component {

    constructor(props){
        super(props)

        this.start = {
            textAlign: 'center'
        }
    }

    render() {
        return (
            <div style={this.start}>
                <h1>App React</h1>
            </div>
        )
    }
}