// search to recipe api
export const searchRecipes = (query) => {
    return fetch(`https://api.edamam.com/search?app_id=65eb38bf&app_key=7ba37096f7d35dd3b5bd8c65c2dfe698&q=${query}`)
  };