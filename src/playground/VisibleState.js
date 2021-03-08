import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const VisibleState = () => {

    const [visible, setVisibility] = useState(false)
    const details = 'These are some details you can now see.'

    const toggleVisibility = () => {
        setVisibility(!visible)
    }

    return (
        <div>
            <h1>Visibility Exercise</h1>
            <button onClick={toggleVisibility}>{visible ? 'Hide details' : 'Show details'}</button>
            {visible && <p>{details}</p>}

        </div>
    )
}

/*
// How it would be done using classes:
class VisibleState extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visible: false
        };

    }
    toggleVisibility() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            }
        });
    }

    render() {

        const details = 'These are some details you can now see.'

        return (
            <div>
                <h1>Visibility Exercise</h1>
                <button onClick={this.toggleVisibility}>{this.state.visible ? 'Hide details' : 'Show details'}</button>
                {this.state.visible && <p>{details}</p>}
            </div>
        );   
    }
}
*/

// Uncomment below to render:
// var appRoot = document.getElementById('root')
// ReactDOM.render(<VisibleState />, appRoot);

export default VisibleState