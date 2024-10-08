import React, { useState, useEffect } from 'react'
import logo from './images/logo.svg'
import PercentageButtons from './components/PercentageButtons'
import FormInputComponent from './components/FormInputComponent'
import ResetButton from './components/ResetButton'
import OutputCalculation from './components/OutputCalculation'

export default function App() {

    const [ inputBill, setInputBill ] = useState('')
    const [ inputPeople, setInputPeople ] = useState('')
    const [ percentageSelected, setPercentageSelected ] = useState(15)
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

    function handleInputChangeTipCustom(percentageCustom) {
        setPercentageCustom(percentageCustom)
        setPercentageSelected('')
    }

    function handleReset() {
        setInputBill('')
        setInputPeople('')
        setPercentageSelected(15)
        setPercentageCustom('')
        setTipPerPerson(0)
        setTotalPerPerson(0)
    }

    return (
        <div id='page-wrapper' data-testid='splitter-app'>
            <header>
                <img id='logo' src={logo} alt='splitter logo' />
            </header>

            <section id='calculator-app'>
                <form className='container'>
                    <FormInputComponent 
                        name='bill'
                        label='Bill'
                        inputData={inputBill}
                        onInputChange={handleInputChangeBill}
                        testId='form-input-bill'/>
                    <PercentageButtons 
                        percentageSelected={percentageSelected}
                        onPercentageSelectedChange={handleInputChangeTipSelected}
                        percentageCustom={percentageCustom}
                        onPercentageCustomChange={handleInputChangeTipCustom}
                        testId='percentage'
                        testIdCustom='percentage-custom'/>
                    <FormInputComponent 
                        name='people'
                        label='Number of People'
                        inputData={inputPeople}
                        onInputChange={handleInputChangePeople}
                        testId='form-input-people'/>
                </form>

                <div id='output-section' className='container'>
                    <div id='computation-container' className='container'>
                        <OutputCalculation 
                            label='Tip Amount'
                            result={tipPerPerson}
                            testId='output-tip'/>
                        <OutputCalculation 
                            label='Total'
                            result={totalPerPerson}
                            testId='output-total'/>
                    </div>
                    <ResetButton 
                        onReset={handleReset}
                        testId='reset-button'/>
                </div>

            </section>

        </div>
    )
}