import React from 'react'
import ReactDOM from 'react-dom'

var appRoot = document.getElementById('root')

let visible = false

const changeVisibility = () => {
    visible = !visible
    Visible()
}

const details = 'Hey, There are some details you can now see!'

const Visible = () => {
    
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={changeVisibility}>{visible ? 'Hide details' : 'Show details'}</button>
            {visible && <p>{details}</p>}
        </div>
    )

    ReactDOM.render(template, appRoot);
}

Visible()



export default Visible
