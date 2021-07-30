import React, { useState } from "react";
import RecipeCard from "../components/RecipeCard";
import { Flex } from "gestalt";
// import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';
import LocalDiningIcon from '@material-ui/icons/LocalDining';

export default function Search() {

  const [searchPages] = useState([
    'Recipes',
    'People',
  ])

  const [currentSearchPage, setCurrentSearchPage] = useState(searchPages[0]);

  return (
    <section
      className="topic-container"
    >

      <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
        <div className="search-selection">
          {/* <div className="search-nav">
            <h2>Search Recipes</h2>
          </div> */}

          <div className="search-nav">
            <button 
              className={`left-nav-button ${currentSearchPage === 'Recipes' && 'nav-active'}`}
              onClick={() => setCurrentSearchPage('Recipes')}
            >
              <LocalDiningIcon fontSize="large"/>&nbsp;&nbsp;Search Recipes
            </button>
          </div>

          <div className="search-nav">
            <button 
              className={`left-nav-button ${currentSearchPage === 'People' && 'nav-active'}`}
              onClick={() => setCurrentSearchPage('People')}
            >
              <FaceIcon fontSize="large"/>&nbsp;&nbsp;Search People&nbsp;
            </button>
          </div>
        </div>

        {
          currentSearchPage === 'Recipes' ? (
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
          ) : ""
        }

      </div>

    </section>
  )
}