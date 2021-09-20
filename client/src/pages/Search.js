import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import ProfileCard from "../components/ProfileCard";
import { Flex } from "gestalt";
// import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';
import LocalDiningIcon from '@material-ui/icons/LocalDining';

import { searchRecipes } from '../utils/API';

import { useLocation } from 'react-router-dom';

export default function Search(props) {

  // couldn't get it to log
  // const { searchSubmit } = props;
  // console.log('searchInput', searchInput)

  // const [ newSearch, setNewSearch ] = useState('');

  const [searchPages] = useState([
    'Recipes',
    'People',
  ]);

  const [ searchInput, setSearchInput ] = useState('');

  const [currentSearchPage, setCurrentSearchPage] = useState(searchPages[0]);

  const [searchedRecipes, setSearchedRecipes ] = useState([]);

  // Get Params
  const search = useLocation().search;
  const query = new URLSearchParams(search).get('q');

  // console.log('params', query);

  // Update search input state if its new
  if (searchInput !== query) {
    setSearchInput(query);
  }

  // API search
  const apiSearch = async (searchInput) => {

    try {
      const response = await searchRecipes(searchInput);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
  
      const { hits } = await response.json();
        
      const recipeData = []
      for (let i=0; i<hits.length; i++) {
        let uri = hits[i].recipe.uri;
        let image = hits[i].recipe.image;
        let label = hits[i].recipe.label;
        let ingredientLines = hits[i].recipe.ingredientLines;
        recipeData.push({uri, image, label, ingredientLines});
      };
  
      setSearchedRecipes(recipeData);
    } catch (err) {
      console.log(err);
    }

  }

  // fire API when searchInput changes
  useEffect(() => {

    apiSearch(searchInput);
  }, [searchInput])

  // print search results once received
  useEffect(() => {
    console.log('searched recipes new', searchedRecipes);
  }, [searchedRecipes])

  // useEffect(() => {
  //   apiSearch();   
  //   console.log('search recipes', searchedRecipes);
  // }, [])

  // apiSearch();   
  // console.log('search recipes', searchedRecipes); 



  // setNewSearch(query);
  // console.log('new search', newSearch);


  // if there's no change in state to the search term, don't change the search
  // run the query when the page first loads, i.e. do that trick the guy taught you with use Effect on a react module

  // if user clicks on search there will be no params. so don't run the search. only run it if params are not null
  // and if the params changed since the last search




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
          ) : (
            <div className="search-container">
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />

            </div>
          )
        }

      </div>

    </section>
  )
}