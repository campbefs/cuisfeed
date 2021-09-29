import React, { useEffect, useState } from "react";
import RecipeCard from "../RecipeCard";
import { Spinner } from "gestalt";


export default function SearchRecipes(props) {

  const {searchedRecipes} = props;

  if (searchedRecipes.length < 1) {
    // return <div>Loading...</div>
    return (
      <>
      <div style={{marginTop: "80px"}}>
        <Spinner show={true} accessibilityLabel="loading"/>
      </div>
      </>
    )
  }

  return (
    <>
      {
        searchedRecipes.map((recipedata) => {
          return (
            <RecipeCard recipedata={recipedata} key={recipedata.uri} />
          )
        })
      }

      {/* <RecipeCard recipedata={searchedRecipes[0]}/>
      <RecipeCard recipedata={searchedRecipes[1]}/> */}

      {/* <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard /> */}
    </>
  )
}