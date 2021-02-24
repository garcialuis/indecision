const Header = () => {
  return (
    <div>
      <h1>Indecision</h1>
      <h2>Put your life in the hands of a computer</h2>
    </div>
  );
}

const Action = () => {
  return (
    <div>
      <button>What should I do?</button>
    </div>
  );
}

const Options = () => {
  return (
    <div>
      <p>Option component here</p>
      <Option />
    </div>
  );
}

const Option = () => {
  return (
    <div>
      This is an option
    </div>
  );
}

const AddOption = () => {
  return (
    <div>
      <p>AddOption component here</p>
    </div>
  );
}

const IndecisionApp = () => {
  return (
    <div>
      <Header />
      <Action />
      <Options />
      <AddOption />
    </div>
  );
}


function App() {
  return (
    <IndecisionApp />
  );
}

export default App;
