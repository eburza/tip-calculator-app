import React from 'react'
import { percentageData } from '../data/percentageData'

export default function PercentageButtons( {inputData, onInputChange} ) {

    function handleChange(event) {
        event.preventDefault()

        const newData = event.target.value

        onInputChange(newData)
    }
    
    const percentageAmount = percentageData.map(percent => (
        <li key={percent.id}>
          <label htmlFor={percent.amount}>
            <input type='radio' id={percent.amount} name='percent'/>
            {percent.name}
          </label>
        </li>
    ))

    return (
    <div className='container'>
        <label className='form-label'>Select Tip %</label>
        <ul id='tip-percent'>
            {percentageAmount}
            <input type='number' id='percent-custom' name='percent-custom' placeholder='Custom' value={inputData} onInput={handleChange}/>
        </ul>
    </div>
    )
}
