import React, { useState, useEffect } from 'react'
import PercentageButtons from './components/PercentageButtons'
import FormInputComponent from './components/FormInputComponent'
import ResetButton from './components/ResetButton'
import OutputCalculation from './components/OutputCalculation'

export default function App() {

    const [ inputBill, setInputBill ] = useState('')
    const [ inputPeople, setInputPeople ] = useState('')
    const [ percentageSelected, setPercentageSelected ] = useState('')
    const [ percentageCustom, setPercentageCustom ] = useState('')
    const [ tipPerPerson, setTipPerPerson ] = useState(0)
    const [ totalPerPerson, setTotalPerPerson ] = useState(0)

    useEffect( () => {
        calculateTip()
    }, [ inputBill, inputPeople, percentageSelected, percentageCustom ])

    function calculateTip() {
        const bill = parseFloat(inputBill)
        const people = parseInt(inputPeople)
        const percentage = percentageSelected ? parseFloat(percentageSelected) : parseFloat(percentageCustom)

        const tipTotal = (bill * percentage) / 100
        const totalBill = bill + tipTotal

        setTipPerPerson(tipTotal / people)
        setTotalPerPerson(totalBill / people)
    }


    function handleInputChangeBill(newInput) {
        setInputBill(newInput)
    }

    function handleInputChangePeople(newInput) {
        setInputPeople(newInput)
    }

    function handleInputChangeTipSelected(percentage) {
        setPercentageSelected(percentage)
        setPercentageCustom('')
    }

    function handleInputChangeTipCustom(newInput) {
        setPercentageCustom(newInput)
        setPercentageSelected('')
    }

    return (
        <div id='page-wrapper'>
            <header>
                <img id='logo' src='./images/logo.svg' alt='splitter logo' />
            </header>

            <section id='calculator-app'>
                <form className='container'>
                    <FormInputComponent 
                        name='bill'
                        label='Bill'
                        inputData={inputBill}
                        onInputChange={handleInputChangeBill}/>
                    <PercentageButtons 
                        percentageSelected={percentageSelected}
                        onPercentageSelectedChange={handleInputChangeTipSelected}
                        percentageCustom={percentageCustom}
                        onPercentageCustomChange={handleInputChangeTipCustom}/>
                    <FormInputComponent 
                        name='people'
                        label='Number of People'
                        inputData={inputPeople}
                        onInputChange={handleInputChangePeople}/>
                </form>

                <div id='output-section' className='container'>
                    <div id='computation-container' className='container'>
                        <OutputCalculation 
                            label='Tip Amount'
                            result={tipPerPerson}/>
                        <OutputCalculation 
                            label='Total'
                            result={totalPerPerson}/>
                    </div>
                    <ResetButton />
                </div>

            </section>

        </div>
    )
}