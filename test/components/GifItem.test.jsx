import { getByText, render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"


describe('prueba en <GifItem> ', () => {
    const title = 'Saitama God';
    const url = 'https://saitama-god.png/'
    test('debe hacer match con snapshot', () => {
       const {container}  = render(<GifItem title={title} url={url} />);
       expect(container).toMatchSnapshot()
    })

    test('debe mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem title={title} url={url} />);
        const {src, alt} = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(alt)
    })

    test('debe mostrar titulo en el componente', () => {
        render(<GifItem title={title} url={url} />);
        expect(getByText(title)).toBeTruthy();
    })
})