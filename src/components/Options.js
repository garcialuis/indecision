import React from 'react'
import Option from './Option'

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

export default Options
