import ReactDOM from 'react-dom';

// Exercise / Template Three:

let count = 0

// All three of the functions for the button clicks 
// call renderTemplateThree at the end so that the 
// count can be rerendered to the screen:
const addOne = () => {
  count++
  console.log('add one')
  renderTemplateThree()
}

const subtractOne = () => {
  count--
  console.log('minus one')
  renderTemplateThree()
}

const resetCount = () => {
  count = 0
  console.log('reset')
  renderTemplateThree()
}


// Gets called every time we want to render our templateThree.
// For example, after every button click to change the count the templateThree 
// will be rendered. 
var appRoot = document.getElementById('root')

const renderTemplateThree = () => {
  const templateThree = (
    <div>
      <h1>Count: {count}</h1>
      <button id='button-id' className='button' onClick={addOne}>+1</button>
      <button className='button' onClick={subtractOne}>-1</button>
      <button className='button' onClick={resetCount}>reset</button>
    </div>
  )

  ReactDOM.render(templateThree, appRoot);
}

// Initially renders our templateThree:
renderTemplateThree()