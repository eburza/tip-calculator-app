import React, { useEffect, useState } from 'react'
import { getPercentage } from '../api'

export default function PrecentageButtons() {

    const [percentage, setPercentage] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        async function loadPercentage() {
            setLoading(true)
            try {
                const data = await getPercentage()
                console.log('Fetched data:', data)
                setPercentage(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
    
        loadPercentage()
    }, [])
    
    const percentageAmount = percentage.map(percent => (
        <li key={percent.id}>
          <label for={percent.amount}>
            <input type='radio' id={percent.amount} name='percent'/>
            {percent.name}
          </label>
        </li>
    ))
    
    if (loading) {
        return <h1>Loading...</h1>
    }
    
    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
    <div className='container'>
        <label class='form-label'>Select Tip %</label>
        <ul id='tip-percent'>
            {percentageAmount}
            <input type='text' id='percent-custom' name='percent-custom' placeholder='Custom' />
        </ul>
    </div>
    )
}
