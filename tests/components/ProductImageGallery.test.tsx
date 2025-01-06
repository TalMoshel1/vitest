import { render, screen } from '@testing-library/react'
import ProductImageGallery from '../../src/components/ProductImageGallery'
import { Product } from '../../src/entities'

describe('group', () => {
    it('should', () => {
        const urls: string[] = []
       const {container} = render(<ProductImageGallery imageUrls={urls}/>)

        expect(container).toBeEmptyDOMElement()
    })

    it('should render a list of images', () => {
        const imageUrls: string[] = ['www.yahoo.com']
        render(<ProductImageGallery imageUrls={imageUrls}/>)

       const images = screen.getAllByRole('img')
       expect(images).toHaveLength(1)
       expect(images[0]).toHaveAttribute('src', imageUrls [0])

    })
})