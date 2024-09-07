import React from 'react'

export default function FormInputComponent({name, label}) {
return (
    <div className='container'>
        <label htmlFor={name} className='form-label'>{label}</label>
        <input id={name} className='form-input' name={name} type='text' placeholder='0' />
    </div>
)
}