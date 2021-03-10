import React from 'react'

const Option = ({optionText, handleDeleteOption}) => (
  <div>
    {optionText}
    <button 
      className='button button--link'
      onClick={(e) => {
        handleDeleteOption(optionText)
      }}
    > 
      Remove
    </button>
  </div>
);

export default Option
