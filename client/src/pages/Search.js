import React from "react";
import RecipeCard from "../components/RecipeCard";

export default function Search() {


  return (
    <section
      className="topic-container"
    >

      <div style={{display: "flex", flexDirection: "column"}}>
        <div className="search-selection">
          <div className="search-nav">
            <h2>Search Recipes</h2>
          </div>
          <div className="search-nav">
            <h2>Search Chefs</h2>
          </div>
        </div>

        <div className="search-container">
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
      </div>

    </section>
  )
}