import "./GenerateRecipes.scss"

export const GenerateRecipes = ({apiNextLink}) => {
    return (
        <div className="generate-recipes-container">
            <button onClick={() => { apiNextLink() }}
                    className="generate-recipes">
                        generate recipes
            </button>
        </div>
    )
}