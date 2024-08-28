import { ContenedorGifs } from './ContenedorGifs'
import { BuscarGif } from './BuscarGif'
import { useGif } from '../hooks/useGif'

//functional component
export const GifApp = () => {
    const {handleGetGif, gifs} = useGif()

    return(
        <>
        {/*props = una propiedad que viaja entre componentes*/}
            <BuscarGif handleGetGif={handleGetGif}/>
            <ContenedorGifs gifs={gifs}/>          
        </>
    )
}




