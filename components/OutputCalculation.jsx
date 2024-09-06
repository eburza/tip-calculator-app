import React from 'react'

export default function OutputCalculation({label, result}) {
    return (
        <div className='output-element'>
            <div>
                <p className='label-top'>{label}</p>
                <p className='label-bottom'>/ person</p>
            </div>
            <p id='total-result' className='output-result'>{result}</p>
        </div>
    )
}