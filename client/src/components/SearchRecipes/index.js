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
        searchedRecipes.map((recipeData) => {
          return (
            <RecipeCard recipeData={recipeData} />
          )
        })
      }

      {/* <RecipeCard recipeData={searchedRecipes[0]}/>
      <RecipeCard recipeData={searchedRecipes[1]}/> */}

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