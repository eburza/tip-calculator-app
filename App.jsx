import React from 'react'
import { getPercentage } from './api'

export default function App() {

    const [percentage, setPercentage] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
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
        <div key={percent.id}>
            <h1>{percent.name}</h1>
            <p>{percent.amount}</p>
        </div>
    ))

    if (loading) {
        return <h1>Loading...</h1>
    }
    
    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <div>
            {percentageAmount}
            <h1>App tip</h1>
        </div>
    )
}