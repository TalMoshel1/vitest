import { render, screen } from '@testing-library/react' // itr is a shortcut code snippet for this
import Greet from '../../src/components/Greet'
describe('group', () => {
    it('should render hellpo with the name when the name is provided', () => {
        render(<Greet name="Tal" />)

       const heading = screen.getByRole('heading');
       expect(heading).toBeInTheDocument()
       expect(heading).toHaveTextContent(/tal/i)
    })
    
    it('should render login button when name is not provided', () => {
        render(<Greet/>)

       const button = screen.getByRole('button');
       expect(button).toBeInTheDocument()
       expect(button).toHaveTextContent(/login/i)
    })


})