import {useState} from 'react'

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
            <button className='button'>Add Option</button>
        </form>
        </div>
    );
}

export default AddOption
