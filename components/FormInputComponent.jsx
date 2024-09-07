import React from 'react'

export default function FormInputComponent({name, label, inputData, onInputChange}) {

    function handleChange(event) {
        event.preventDefault()

        const newData = event.target.value

        onInputChange(newData)
    }

    return (
    <div className='container'>
        <label 
        htmlFor={name} 
        className='form-label'>
            {label}
        </label>
        <input 
        id={name} 
        className='form-input' 
        name={name} 
        type='number' 
        value={inputData}
        placeholder='0'
        onInput={handleChange}
        required/>
    </div>
)
}