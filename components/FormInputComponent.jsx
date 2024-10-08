import React from 'react'

export default function FormInputComponent({name, label, inputData, onInputChange, testId}) {

    function handleChange(event) {
        event.preventDefault()

        const newData = event.target.value

        onInputChange(newData)
    }

    return (
    <div 
    className='container'
    >
        <label 
        htmlFor={name} 
        className='form-label'>
            {label}
        <input 
        data-testid={testId}
        id={name} 
        className='form-input' 
        name={name} 
        type='number' 
        value={inputData}
        placeholder='0'
        onChange={handleChange}
        required/>
        </label>
    </div>
)
}