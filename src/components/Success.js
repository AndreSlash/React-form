import React, { Component } from 'react'

export class Success extends Component {
    render() {
        return (
            <div>
                <h1>Dzięki {this.props.values.firstName} za rejestrację</h1>
            </div>
        )
    }
}

export default Success
