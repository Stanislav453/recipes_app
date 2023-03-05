import "./Recipes.scss"
import React, { useState } from "react"
import { Modal } from "../Modal/Modal"

export const Recipes = ({ filteredData }) => {

//=== HOOKS
    const [recipesInfo, setRecipesInfo] = useState({ label: "", img: "", ingredientLines: "" })

//=== SET_RECIPES_INFO_FOR_MODAL
    const recipesInfoForModal = (label,img,ingredientLines) => {
        setRecipesInfo({label,img,ingredientLines})
    }
    
//=== RECIPES
    return (
            <div className="recipes-container">
                <ul className="recipes-box-container">
                    {
                        filteredData.map((item, key) => {
                            const { label, image, cuisineType, calories, ingredientLines } = item.recipe
                                return (
                                    <li key={key} className="recipes-box">
                                        <img src={image} alt={label} />
                                        <h3>{label}</h3>
                                        <h4>cuisine type: <span className="slim-text">{cuisineType}</span></h4>
                                        <h4>calories: <span className="slim-text">{ Math.floor(calories) }kj</span> </h4>
                                        <button onClick={ () => recipesInfoForModal( label, image, ingredientLines ) } >show ingredients</button>
                                    </li>
                                    )
                        } )
                    }
            </ul>
            { recipesInfo.label && <Modal recipesInfo={recipesInfo} setRecipesInfo={setRecipesInfo} />}
            </div>
    )
}