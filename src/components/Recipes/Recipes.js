import "./Recipes.scss"

export const Recipes = ({recipes}) => {
    return (
            <div className="recipes-container">
                <ul className="recipes-box-container">
                    {
                        recipes.map((item, key) => {
                            const { label, image, cuisineType, calories } = item.recipe
                                return (
                                    <li key={key} className="recipes-box">
                                        <img src={image} alt={label} />
                                        <h3>{label}</h3>
                                        <h4>cuisine type: <span className="slim-text">{cuisineType}</span></h4>
                                        <h4>calories: <span className="slim-text">{ Math.floor(calories) }kj</span> </h4>
                                        <button>show detail</button>
                                    </li>
                                    )
                        } )
                    }
                </ul>
            </div>
    )
}