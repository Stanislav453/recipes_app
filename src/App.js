import './App.scss';
import { Header } from './components/Header/Header';
import React, { useState, useEffect } from 'react';
import { Recipes } from './components/Recipes/Recipes';

export const App = () => {

    //===HOOKS=========================================================================
    const [ recipes, setRecipes ] = useState([])

    //===API=============================================================================
    const api_id  = "76c5daaa"
    const api_key = "6074617b665371e229a7148394ec6bf2"
    const request = `https://api.edamam.com/api/recipes/v2?type=public&q=hamburger%2Cchicken&app_id=${api_id}&app_key=${api_key}`
  
  
    const [apiRequest, setApiRequest] = useState(request)
  
   //===FETCH_DATA_FROM_API=================================================================
    const dataFromApi = () => {

      fetch(apiRequest)
      .then( (response) => response.json() )
        .then((data) => setRecipes(data["hits"]))
    }

    useEffect(() => {
      dataFromApi()
    }, [])
  

console.log(  recipes )
  
  //===APP================================================================================
  return (
    <div className='app'>
      <Header />
      <Recipes recipes={recipes} />
    </div>
  )
}