import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'

describe('render App', () => {
    test('renders', () => {
        const {getByTestId} = render(<App />)
        expect(getByTestId('splitter-app')).toBeInTheDocument()
    })
})