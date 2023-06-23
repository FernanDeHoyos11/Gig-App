import { getGif } from "../../src/helpers/GetGif"


describe('prueba en GetGig', () => {
    test('debe retornar un arreglo de Gif', async() => {
       const gifs = await getGif('snk');
       expect(gifs.length).toBeGreaterThan(0);
       expect(gifs[0]).toEqual({
          id: expect.any(String),
          title: expect.any(String),
          url: expect.any(String)
       })
    })
})