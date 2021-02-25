import {useState} from 'react'

const IndecisionApp = () => {
  
  const title = 'Indecision'
  const subtitle = 'Put your life in the hands of a computer'
  const [options, setOptions] = useState(['thing one', 'thing two', 'thing three'])

  const handleDeleteOptions = () => setOptions([])

  const handlePick = () => {
    const randomNum = Math.floor(Math.random() * options.length);
    const option = options[randomNum]
    alert(option)
  }
  
  return (
    <div>
      <Header title={title} subtitle={subtitle}/>
      <Action 
        hasOptions={options.length > 0}
        handlePick={handlePick} 
      />
      <Options 
        options={options}
        handleDeleteOptions={handleDeleteOptions}
      />
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

const Action = ({hasOptions, handlePick}) => {

  return (
    <div>
      <button 
        disabled={!hasOptions} 
        onClick={handlePick}>
          What should I do?
      </button>
    </div>
  );
}

const Options = ({options, handleDeleteOptions}) => {
  return (
    <div>
      <button onClick={handleDeleteOptions}>Remove all</button>
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
