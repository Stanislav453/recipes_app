import "./Filter.scss"
import React, {useState} from "react"
import { Recipes } from "../Recipes/Recipes"

export const Filter = ({ recipes }) => {

//=== HOOKS
    const [ categoryFilterType, setCategoryFilterType ] = useState("All")

//=== FILTER_ACCORDION
    const filterAccordion = (item) => {
        setCategoryFilterType(item)
    }

//=== FILTER_CUISINE_TYPE_ITEM 
    const cuisineType = ["All", ...new Set(recipes.map((item) => item.recipe.cuisineType[0]))]

//=== FILTER_RECIPES
    const filteredData =  categoryFilterType === "All"
    ? recipes
    : recipes.filter((item) => item.recipe.cuisineType[0] ===  categoryFilterType );
    
//=== FILTER
    return ( 
        <div className="filter-container">
            <div className="filter-cuisine-type-container">
                <h3 className="filter-title">cuisine type filter: </h3>
                <ul className="cuisine-type-item-container">
                    {
                        cuisineType.map((item, key) => {
                            return (
                                <li key={key}>
                                    <button onClick={ () => filterAccordion(item) }
                                            className={categoryFilterType === item ? "cuisine-type-button active" : "cuisine-type-button"}>
                                            {item}
                                    </button>
                                </li>
                            )
                        } )
                    }
                </ul>
            </div>
            <Recipes filteredData={filteredData} />
        </div>
     )
}