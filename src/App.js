const IndecisionApp = () => {
  
  const title = 'Indecision'
  const subtitle = 'Put your life in the hands of a computer'
  const options = ['thing one', 'thing two', 'thing three']
  
  return (
    <div>
      <Header title={title} subtitle={subtitle}/>
      <Action />
      <Options options={options}/>
      <AddOption />
    </div>
  );
}

const Header = ({title, subtitle}) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
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

const Options = ({options}) => {
  return (
    <div>
      <p>{options.length} Options: </p>
      {
        options.map((option) => <Option key={option} optionText={option} />)
      }
    </div>
  );
}

const Option = ({optionText}) => {
  return (
    <div>
      {optionText}
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

function App() {
  return (
    <IndecisionApp />
  );
}

export default App;
