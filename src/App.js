import ReactDOM from 'react-dom';

// Exercise/Template One: 
const app = {
  title: 'Indecision App',
  subtitle: 'Helps you make those hard decisions',
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault()

  const option = e.target.elements.option.value

  if (option) {
    app.options.push(option)
    e.target.elements.option.value = ''
    render()
  }
}

const onRemoveAll = () => {
  app.options = []
  render()
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum]
  alert(option)
}

var appRoot = document.getElementById('root')

const numbers = [55, 101, 1000]

const render = () => {

  const template = (
    <div className="App">
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <button disabled={app.options.length < 1} onClick={onMakeDecision}>What should I do?</button>
      <button className="button" onClick={onRemoveAll}>Remove All</button>
      {
        // numbers.map((number) => {
        //   return <p key={number}>Number: {number}</p>
        // })
      }
      <ol>
        {
          app.options.map((option) => {
            return <li key={option}>{option}</li>
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option'/>
        <button>Add Option</button>
      </form>
    </div>
  )
  
  ReactDOM.render(template, appRoot);
}

render()

const emptyTemplate = (
  <div></div>
)

function App() {
  return (
    emptyTemplate
  );
}

export default App;
