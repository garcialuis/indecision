import React from 'react'
import Modal from 'react-modal'

const OptionModal = ({selectedOption, handleClearSelectedOption}) => (
    <Modal
        isOpen={!!selectedOption}
        contentLabel='Selected Option'
        onRequestClose={handleClearSelectedOption}
        ariaHideApp={false}
    >
        <h3>Selected Option</h3>
        {selectedOption && <p>{selectedOption}</p>}
        <button onClick={handleClearSelectedOption}>Okay</button>

    </Modal>
);

export default OptionModal
