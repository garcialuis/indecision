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

function App() {
  return (
    template
  );
}

export default App;
