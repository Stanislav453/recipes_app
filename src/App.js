import "./App.scss";
import { Header } from "./components/Header/Header";
import React, { useState, useEffect } from "react";
import { GenerateRecipes } from "./components/GenerateRecipes/GenerateRecipes";
import { Filter } from "./components/Filter/Filter";
import { Footer } from "./components/Footer/Footer";
import { BackToHomeButton } from "./components/BackToHomeButton/BackToHomeButton";

export const App = () => {

    //=== HOOKS
    const [ recipes, setRecipes ] = useState([])
    const [ nextRecipes, setNextRecipes ] = useState("")

    //=== API
    const api_id  = "76c5daaa"
    const api_key = "6074617b665371e229a7148394ec6bf2"
  const request = `https://api.edamam.com/api/recipes/v2?type=public&q=hamburger%2Cchicken&app_id=${api_id}&app_key=${api_key}`
  

  
  
    const [apiRequest, setApiRequest] = useState(request)
  
   //=== FETCH_DATA_FROM_API
    const dataFromApi = () => {

      fetch(apiRequest)
      .then( (response) => response.json() )
        .then((data) => {
            setRecipes(data["hits"])
            setNextRecipes(data["_links"]["next"]["href"]) 
        }
            
      )
    }

    useEffect(() => {
      dataFromApi()
    }, [apiRequest]) 
  
  //=== NEXT_API_LINK
  const apiNextLink = () => {
    return setApiRequest( nextRecipes )
  }
  //=== APP
  return (
    <div className="app">
      <Header />
      <main className="main-container">
        <GenerateRecipes apiNextLink={apiNextLink} />
        <Filter recipes={recipes} />
        <BackToHomeButton />
      </main>
      <Footer />
      
    </div>
  )
}