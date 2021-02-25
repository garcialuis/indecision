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

  const handlePick = () => {
    alert('handlePick')
  }

  return (
    <div>
      <button onClick={handlePick}>What should I do?</button>
    </div>
  );
}

const Options = ({options}) => {

  const handleRemoveAll = () => {
    alert(options)
  }

  return (
    <div>
      <button onClick={handleRemoveAll}>Remove all</button>
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

  const handleAddOption = (e) => {

    e.preventDefault()
    const option = e.target.elements.option.value.trim()

    if (option) {
      alert(option)
    }
  }

  return (
    <div>
      <form onSubmit={handleAddOption}>
        <input type='text' name='option' placeholder='option here'/>
        <button>Submit</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <IndecisionApp />
  );
}

export default App;
