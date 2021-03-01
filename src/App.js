import {useState, useEffect, useRef} from 'react'

const IndecisionApp = () => {
  
  // const title = 'Indecision' No longer passed down to component, as header has a default prop: title
  const subtitle = 'Put your life in the hands of a computer'
  const [options, setOptions] = useState([])

  // This is needed in order to keep track of the prev state of options
  const prevCountRef = useRef();
  if (options.length === 0) {
    prevCountRef.current = options
  }

  useEffect(() => {
    console.log('componentDidMount/didUpdate/willUnmount')

    // Below was added to act like (didMount):
    try {
      // jsonOptions will be null if there are no values in options:
      const jsonOptions = localStorage.getItem('options')
      const parsedOptions = JSON.parse(jsonOptions)

      if (options.length === 0 && parsedOptions) {
        console.log('options in localstorage but not in state', parsedOptions)
        setOptions(() => (parsedOptions))
      }
      
    } catch (e) {
      // (This catch may be encountered when there is invalid json in localStorage)
      // Do nothing at all. 
    }
    

    // Below is acting like (didUpdate)
    // If useEffect was triggered by the options changing:
    if (prevCountRef.current.length !== options.length) {

      const json = JSON.stringify(options)
      localStorage.setItem('options', json)

      console.log(prevCountRef.current)
    }
    
    prevCountRef.current = options;    

  })

  const handleDeleteOptions = () => {
    setOptions([])
    localStorage.clear()
  }

  const handleDeleteOption = (optionToRemove) => {
    setOptions(options.filter((option) => option !== optionToRemove))
  }

  const handlePick = () => {
    const randomNum = Math.floor(Math.random() * options.length);
    const option = options[randomNum]
    alert(option)
  }

  const handleAddOption = (option) => {

    if(!option) {
      return 'Enter valid value to add item'
    } else if (options.indexOf(option) > -1) {
      return 'This option already exists'
    }

    setOptions(options.concat(option))
  }
  
  return (
    <div>
      <Header subtitle={subtitle}/>
      <Action 
        hasOptions={options.length > 0}
        handlePick={handlePick} 
      />
      <Options 
        options={options}
        handleDeleteOptions={handleDeleteOptions}
        handleDeleteOption={handleDeleteOption}
      />
      <AddOption 
        handleAddOption={handleAddOption}
      />
    </div>
  );
}

const Header = ({title, subtitle}) => {
  return (
    <div>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
    </div>
  );
}

Header.defaultProps = {
  title: 'Indecision'
};

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

const Options = ({options, handleDeleteOptions, handleDeleteOption}) => {
  return (
    <div>
      <button onClick={handleDeleteOptions}>Remove all</button>
      {options.length === 0 && <p>There are no options</p>}
      {
        options.map((option) => (
          <Option key={option} 
            optionText={option} 
            handleDeleteOption={handleDeleteOption}
          />
        ))
      }
    </div>
  );
}

const Option = ({optionText, handleDeleteOption}) => {
  return (
    <div>
      {optionText}
      <button 
        onClick={(e) => {
         handleDeleteOption(optionText)
        }}
      > 
        Remove
      </button>
    </div>
  );
}

const AddOption = ({handleAddOption}) => {

  const [error, setError] = useState()

  const handleAddOptionInput = (e) => {

    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    const errorMsg = handleAddOption(option) // handleAddOption is defined at parent
    setError(errorMsg)

    if (!errorMsg) {
      e.target.elements.option.value = ''
    }

  }

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleAddOptionInput}>
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
