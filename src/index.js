import React from 'react'
import ReactDOM from 'react-dom'

class Message extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1 style={{color: this.props.color}}>
                    {this.props.msg}
                </h1>
        <p>I'll check back in {this.props.mins} minutes</p>
            </div>
        )
    }
}



ReactDOM.render(
    <Message color="blue" msg="How are you?" mins={5}/>,
    document.getElementById('root')
)