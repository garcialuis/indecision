import ReactDOM from 'react-dom';

// Exercise/Template One: 

const app = {
  title: 'Indecision App',
  subtitle: 'Helps you make those hard decisions',
  options: ['One', 'Two']
}

const template = (
  <div className="App">
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
)

// Exercise / Template Two:

const user = {
  name: "Mike Wasauski",
  age: 25,
  location: 'New York'
}

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>
  }
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
)

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
const renderTemplateThree = () => {
  const templateThree = (
    <div>
      <h1>Count: {count}</h1>
      <button id='button-id' className='button' onClick={addOne}>+1</button>
      <button className='button' onClick={subtractOne}>-1</button>
      <button className='button' onClick={resetCount}>reset</button>
    </div>
  )

  var appRoot = document.getElementById('root')
  ReactDOM.render(templateThree, appRoot);
}

function App() {
  return (
    templateTwo
  );
}

// Initially renders our templateThree:
renderTemplateThree()

export default App;
