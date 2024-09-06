import React from 'react'
import PrecentageButtons from './components/PrecentageButtons'
import FormInputComponent from './components/FormInputComponent'
import ResetButton from './components/ResetButton'
import OutputCalculation from './components/OutputCalculation'

export default function App() {

    return (
        <div id='page-wrapper'>
            <header>
                <img id='logo' src='./images/logo.svg' alt='splitter logo' />
            </header>

            <section id="calculator-app">
                <form class="container">
                    <FormInputComponent 
                        name='bill'
                        label='Bill'/>
                    <PrecentageButtons />
                    <FormInputComponent 
                        name='people'
                        label='Number of People'/>
                </form>

                <div id="output-section" class="container">
                    <div id="computation-container" class="container">
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