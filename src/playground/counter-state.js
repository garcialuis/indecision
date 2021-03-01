import {React, useState} from 'react'
import ReactDOM from 'react-dom'

const Counterstate = ({initialCount}) => {

    const [count, setCount] = useState(initialCount)

    const handleAddOne = () => {
        console.log('handleAddOne')
        setCount(count+1)
    }

    const handleMinusOne = () => {
        console.log('handleMinusOne')
        setCount(count-1)
    }

    const handleReset = () => {
        console.log('handleReset')
        setCount(0)
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleAddOne}>+1</button>
            <button onClick={handleMinusOne}>-1</button>
            <button onClick={handleReset}>reset</button>
            
        </div>
    );
}

Counterstate.defaultProps = {
    initialCount: 0
}

export default Counterstate

// Uncomment to render:
// var appRoot = document.getElementById('root')
// ReactDOM.render(<Counterstate initialCount={0}/>, appRoot);

/*
// How it would be done using classes:
class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    };

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }
}
*/