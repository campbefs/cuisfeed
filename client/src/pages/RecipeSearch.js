import { searchRecipes } from "../utils/API";
import React, { useState, useEffect } from "react";
import {
  Form,
  Grid,
  Button,
  Card,
  Image,
  Segment,
  List, 
  Input
} from "semantic-ui-react";
import { ADD_RECIPE_AND_POST } from '../utils/mutations'
import { useMutation } from '@apollo/client'
import './recipe.css';


const RecipeSearch = () => {
  // state for holding returned recipe api data
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  // state for holding our search field data
  const [searchInput, setSearchInput] = useState("");
  const [addRecipeAndPost] = useMutation(ADD_RECIPE_AND_POST);

  // state to hold saved recipeId values
  // const [savedRecipeIds, setSavedRecipeIds] = useState(getSavedRecipes());

  
  const addRecipe = async (event) => {
    console.log(JSON.parse(event.target.dataset.recipe))
    const { data } = await addRecipeAndPost({
      variables: {...JSON.parse(event.target.dataset.recipe)}
    })
    alert('Post Created!');
    console.log(data)
  }
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await searchRecipes(searchInput);
      if (!response.ok) {
        throw new Error("Something went wrong!");
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
      console.log(recipeData)

    //   const recipeData = hits.map(() => ({
    //     recipeId: recipe.uri,
    //     image: recipe.image,
    //     title: recipe.label,
    //     ingredients: recipe.ingredients.text,
    //     url: recipe.url,
    //   }));
      
      setSearchedRecipes(recipeData);
      setSearchInput("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div class='topic-container'>
      <div className='searchPage'>
        <div className='header'>
        <h1>Search for Recipes!</h1>
        </div>
        <div className='searchForm'>
        <Form onSubmit={handleFormSubmit} >
            <Input
              name="searchInput"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              type="text"
              placeholder="Search for recipes... "
            />
            <Button compact circular basic icon='search' type="submit" variant="success"/>
          
        
        </Form>
        </div>
      </div>

      <Segment>
        <h2 style={{ "text-align":"center" }}>
          {searchedRecipes.length
            ? `Viewing ${searchedRecipes.length} results:`
            : `Search for a recipe to get cookin'!`}
        </h2>
        <Grid centered>
        {searchedRecipes.map((recipeData) => {
          return (
            <Card key={recipeData.uri}>
              <Card.Content>
                <Card.Header>
                <List horizontal>
                    <List.Item key={recipeData.id}>
                    {recipeData.label}
                    </List.Item>
                    {/* <List.Item>
                    <Icon name="heart outline" />
                    </List.Item> */}
                    <List.Item>
                    <Button primary compact  size='small'
                    data-recipe={JSON.stringify(recipeData)} onClick={addRecipe}>Post</Button>
                    </List.Item>
                  </List>
                </Card.Header>
                <Image
                  src={recipeData.image}
                  alt={`Image of ${recipeData.label} finished product`}
                />
              </Card.Content>
            </Card>
          );
        })}
        </Grid>
      </Segment>
    </div>
  );
};

export default RecipeSearch;