import { useState } from "react"
import CategoriesList from "./CategoriesList"
import GifExpo from "../GifsExpo"

const Categories = ({categories = [], setCategories}) =>{

    const [inputValue, setInputValue] = useState("")

    const handleInput = ({target}) =>{
        setInputValue(target.value)
    }

    const handleAddCategoryButtom = () =>{
        if (!categories.includes(inputValue)){
            setCategories([inputValue, ...categories])
            setInputValue("")
        }
    }

    return(
        <>
        <input 
        onChange={(e)=> handleInput(e)}
        placeholder="Write Category Name"
        type="text"
        value={inputValue} 
        />
        <button
        className="btn btn-primary btn-sm ms-2 mb-1"
        onClick={handleAddCategoryButtom}
        type="button"
        >
        Add
        </button>
        <br />
        <CategoriesList categories={categories}/>
        <hr />
        <GifExpo categories={categories}/>
        </>
    )
}

export default Categories