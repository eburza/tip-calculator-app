import React from 'react'

export default function FormInputComponent({name, label, inputData, onInputChange}) {

    function handleChange(event) {
        event.preventDefault()

        const newData = event.target.value

        console.log(newData)
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
        type='text' 
        placeholder={inputData}
        onInput={handleChange}/>
    </div>
)
}