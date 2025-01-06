import { render, screen } from '@testing-library/react'
import UserList from '../../src/components/UserList'
import {User} from '../..//src/entities.ts'

describe('group', () => {
    it('should return No Users when list is empty', () => {
        render(<UserList users={[]}/>)
        const users = screen.getByText(/no users/i)
        expect(users).toBeInTheDocument()
    })

    it('should render a list of users', () => {
        const users: User[] = [
            {id: 1, name: 'Mosh'},
            {id:2, name: 'Tal'}
        ];
        render(<UserList users={users}/>)

        users.forEach(user => {
            const link = screen.getByRole('link', {name: user.name})
            expect(link).toBeInTheDocument()
            expect(link).toHaveAttribute('href', `/users/${user.id}`)

        })
    })
})