import React from 'react'

const Option = ({optionText, count, handleDeleteOption}) => (
  <div className='option'>
    <p className='option__text'>{count}. {optionText}</p>
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
