import React from 'react'

export default function OutputCalculation({label, result}) {

    const formattedResult = isNaN(result) || result === '' 
        ? '$0.00'
        : new Intl.NumberFormat('en-US', { 
            style: 'currency', 
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(result)

    return (
        <div className='output-element'>
            <div>
                <p className='label-top'>{label}</p>
                <p className='label-bottom'>/ person</p>
            </div>
            <p id='total-result' className='output-result'>
                {formattedResult}
            </p>
        </div>
    )
}