import { useState } from "react";

const GifExpo = ({categories}) =>{
    const [gifsList, setGifsList] = useState([])
    
    const getGifsList = async () => {
        let gifArray = []
        
        categories.forEach(async(category) => {

        const query = encodeURIComponent(category)
        const apikey = "ZuHKFXydNMHzdsLofDqbNM7JZjVsLzX0"
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${query}&limit=10`)
        const gifsList = await response.json()
        
        const urlGifsList = gifsList.data.map((gif)=>{
            return gif.images.fixed_width.url    
        })
        gifArray =[...gifArray, ...urlGifsList]
    })
    setGifsList(...gifArray)
}
///getGifsList()

    return(
        <h4>Gifs Expo</h4>
        
    )

}

export default GifExpo