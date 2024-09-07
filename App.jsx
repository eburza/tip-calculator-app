import React, { useState } from 'react'
import PrecentageButtons from './components/PrecentageButtons'
import FormInputComponent from './components/FormInputComponent'
import ResetButton from './components/ResetButton'
import OutputCalculation from './components/OutputCalculation'

export default function App() {

    const [ inputBill, setInputBill ] = useState(0)
    const [ inputPeople, setInputPeople ] = useState(0)

    function handleInputChangeBill(newInput) {
        setInputBill(newInput)
    }

    function handleInputChangePeople(newInput) {
        setInputPeople(newInput)
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
                    <PrecentageButtons />
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