import React from 'react'

export default function OutputCalculation({label, result}) {
    return (
        <div class="output-element">
            <div>
                <p class="label-top">{label}</p>
                <p class="label-bottom">/ person</p>
            </div>
            <p id="total-result" class="output-result">{result}</p>
        </div>
    )
}