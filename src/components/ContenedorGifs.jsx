
export const ContenedorGifs = ({gifs}) => {

    return (
        <>
        <div className="d-flex flex-row justify-content-center alig-items-center">
            {gifs.map(({id, titulo, url})=>{
                return (
                    <div key={id}>
                            <img className="w-75 m-5" src={url} alt="image"/>
                    </div>
                )
            })}
        </div>
        </>
    )
}
