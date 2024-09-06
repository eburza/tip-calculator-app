import React from 'react'

export default function FormInputComponent({name, label}) {
return (
    <div class='container'>
        <label for={name} class='form-label'>{label}</label>
        <input id={name} class='form-input' name={name} type='text' placeholder='0' />
    </div>
)
}