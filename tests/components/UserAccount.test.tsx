import { render, screen } from '@testing-library/react'
import UserAccount from '../../src/components/UserAccount'

describe('group', () => {
    it('should show name', () => {
        render(<UserAccount user={{id: 1234, name:'shai'}}/>)

        const name = screen.getByText(/Name:/i)

        expect(name).toBeInTheDocument()
    })

    it('butotn should exists if user is admin', () => {
        render(<UserAccount user={{id: 1234, name:'shai', isAdmin:true}}/>)

        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent(/edit/i)

    })

    it('butotn shouldnt exists if user isnt admin', () => {
        render(<UserAccount user={{id: 1234, name:'shai'}}/>)

        const button = screen.queryByRole('button')

        expect(button).not.toBeInTheDocument()

    })
})