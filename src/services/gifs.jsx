
const api_key = 'Ox6apmQK51nlSuc2gMLL7kX87oeRd24P'
const limit = 3

export const reqGif = async(categoria) =>{
    try {
        const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${categoria}&limit=${limit}`)
        const {data} = await resp.json()
        const gifs = data.map((gif) =>({
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }))
 
        return gifs
    } catch (err) {
        console.error(err)
    }
   
}       
 

 