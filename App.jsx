import React, { useState } from 'react'
import PercentageButtons from './components/PercentageButtons'
import FormInputComponent from './components/FormInputComponent'
import ResetButton from './components/ResetButton'
import OutputCalculation from './components/OutputCalculation'

export default function App() {

    const [ inputBill, setInputBill ] = useState('')
    const [ inputPeople, setInputPeople ] = useState('')
    const [ customInput, setCustomInput ] = useState('')

    function handleInputChangeBill(newInput) {
        setInputBill(newInput)
    }

    function handleInputChangePeople(newInput) {
        setInputPeople(newInput)
    }

    function handleInputChangeCustom(newInput) {
        setCustomInput(newInput)
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
                        inputData={customInput}
                        onInputChange={handleInputChangeCustom}/>
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
                            result='00'/>
                        <OutputCalculation 
                            label='Total'
                            result='00'/>
                    </div>
                    <ResetButton />
                </div>

            </section>

        </div>
    )
}