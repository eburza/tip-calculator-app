import React from 'react'
import { percentageData } from '../data/percentageData'

export default function PercentageButtons( {percentageSelected, onPercentageSelectedChange, percentageCustom, onPercentageCustomChange} ) {

    function handlePercentageSelectChange (event) {
        event.preventDefault()
        const newData = Number(event.target.value)
        onPercentageSelectedChange(newData)
    }

    function handlePercentageCustomChange(event) {
        event.preventDefault()
        const newData = event.target.value
        onPercentageCustomChange(newData)
    }
    
    const percentageAmount = percentageData.map(percent => (
        <li key={percent.id}>
          <label htmlFor={percent.amount} className={percentageSelected === percent.amount ? "selected" : ''}>
            <input 
                type='radio' 
                id={percent.amount} 
                name='percent'
                value={percent.amount}
                checked={ percentageSelected === percent.amount}
                onChange={handlePercentageSelectChange}/>
            {percent.name}
          </label>
        </li>
    ))

    return (
    <div className='container'>
        <label className='form-label'>Select Tip %</label>
        <ul id='tip-percent'>
            {percentageAmount}
            <input 
                type='number' 
                id='percent-custom' 
                name='percent-custom' 
                placeholder='Custom' 
                value={percentageCustom} 
                onChange={handlePercentageCustomChange}/>
        </ul>
    </div>
    )
}
