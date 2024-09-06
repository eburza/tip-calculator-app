import React from 'react'
import PrecentageButtons from './components/PrecentageButtons'
import FormInputComponent from './components/FormInputComponent'

export default function App() {

    return (
        <div id='page-wrapper'>
            <header>
                <img id='logo' src='./images/logo.svg' alt='splitter logo' />
            </header>
            <section id="calculator-app">
                <form>
                    <FormInputComponent 
                        name='bill'
                        label='Bill'/>
                    <PrecentageButtons />
                    <FormInputComponent 
                        name='people'
                        label='Number of People'/>
                </form>
            </section>

        </div>
    )
}