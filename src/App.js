
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


function App() {
  return (
    template
  );
}

export default App;
