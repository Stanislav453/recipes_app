import "./Modal.scss"


export const Modal = ({recipesInfo, setRecipesInfo}) => {
    return (
        <div className="modal-container">
            <div className="modal">
                <button onClick={ () => setRecipesInfo("") } className="modal-closed-button">X</button>
                <div className="modal-left">
                    <img className="modal-left-img" src={recipesInfo.img} />
                    <h2 className="modal-left-title">{recipesInfo.label}</h2>
                </div>
                <div className="modal-right">
                    <h2 className="modal-right-title">Indegrients</h2>
                    <ul className="modal-right-list">
                            {recipesInfo.ingredientLines.map((item, key) => {
                                return <li className="modal-right-list-item" key={key} >{item}</li>
                            } ) }              
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}