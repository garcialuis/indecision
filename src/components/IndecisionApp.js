import {useState, useEffect, useRef} from 'react'
import AddOption from './AddOption'
import Header from './Header'
import Options from './Options'
import Action from './Action'
import OptionModal from './OptionModal'

const IndecisionApp = () => {
    // const title = 'Indecision' No longer passed down to component, as header has a default prop: title
  const subtitle = 'Put your life in the hands of a computer'
  const [options, setOptions] = useState([])
  const [selectedOption, setSelectedOption] = useState()

  // This is needed in order to keep track of the prev state of options
  const prevCountRef = useRef();

  // Below was added to act like (didMount):
  useEffect(() => {
    console.log('componentDidMount/didUpdate/willUnmount')
    prevCountRef.current = options

    try {
      // jsonOptions will be null if there are no values in options:
      const jsonOptions = localStorage.getItem('options')
      const parsedOptions = JSON.parse(jsonOptions)

      if (parsedOptions) {
        console.log('options in localstorage but not in state', parsedOptions)
        setOptions(() => (parsedOptions))
      }
      
    } catch (e) {
      // (This catch may be encountered when there is invalid json in localStorage)
      // Do nothing at all. 
    }

  }, [])

  // Below is acting like (didUpdate)
  useEffect(() => {
    // If useEffect was triggered by the options changing:
    if (prevCountRef.current.length !== options.length) {
      const json = JSON.stringify(options)
      localStorage.setItem('options', json)
    }
    
    prevCountRef.current = options;
  })

  const handleClearSelectedOption = () => {
    setSelectedOption(undefined)
  }

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
    // alert(option)
    setSelectedOption(option)
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
      <div className='container'>
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
      <OptionModal 
        selectedOption={selectedOption}
        handleClearSelectedOption={handleClearSelectedOption}
      />
    </div>
  );
}

export default IndecisionApp
