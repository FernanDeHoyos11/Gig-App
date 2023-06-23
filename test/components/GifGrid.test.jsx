import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"


describe('prueba GifGrid', () => {
    const category = 'snk';
    test('debe mostrar el loading inicialmente', () => {
       render(<GifGrid category={category}/>)
       expect(screen.getByText('Cargando...'))
       expect(screen.getByText(category))
    })

    test('debe mostrar las imagenes cuando se cargue useFetchGif', () => {
        
    })
})