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
            <ul className="cuisineType-container">
                {
                    cuisineType.map((item, key) => {
                        return (
                            <li>
                                <button key={key}
                                        onClick={ () => filterAccordion(item) }
                                        className={categoryFilterType === item ? "cuisineType-button active" : "cuisineType-button"}>
                                            {item}
                                </button>
                            </li>
                        )
                    } )
                }
            </ul>
            <Recipes filteredData={filteredData} />
        </div>
     )
}