import React from 'react'

export default function ResetButton({ onReset }) {
    return (
        <button id='reset-button' type='button' onClick={onReset}>Reset</button>
    )
}