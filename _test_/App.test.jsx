import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'

describe('render App', () => {
    test('app renders correctly', () => {
        const {getByTestId} = render(<App />)
        expect(getByTestId('splitter-app')).toBeInTheDocument()
    })
    test('renders initial state', () => {
        const {getByTestId} = render(<App />)
        const inputElementBill = getByTestId('form-input-bill')
        expect(inputElementBill.value).toBe('')
        const inputElementPeople = getByTestId('form-input-people')
        expect(inputElementPeople.value).toBe('')
        const percentageSelected = getByTestId('percentage-selected')
        const percentage = percentageSelected.querySelector('input[type="radio"]:checked')
        expect(percentage.value).toBe('15')
        const percentageCustom = getByTestId('percentage-custom')
        expect(percentageCustom.value).toBe('')
    })
})