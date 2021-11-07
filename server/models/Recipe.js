const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// columns from API
// https://api.edamam.com/search?app_id=65eb38bf&app_key=7ba37096f7d35dd3b5bd8c65c2dfe698&q=lamb
/*
uri: String // lookup
label: String
image: String
source: String
url: String
shareAs: String
yield: 8   //
dietLabels: [String]  // array
ingredientLines: [String]
calories: float??
cuisineType: [String]
mealType: [String]
dishType: [String]
*/

const subRecipeSchema = new Schema({
  label: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  unit: {
    type: String
  }
})

const totalNutrients = new Schema({
    ENERC_KCAL: subRecipeSchema,

})

const recipeSchema = new Schema({
  uri: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  source: {
    type: String,
  },
  url: {
    type: String,
  },
  shareAs: {
    type: String,
  },
  yield: {
    type: Number,
  },
  calories: {
    type: Number
  },
  dietLabels: {
    type: [String]
  },
  ingredientLines: {
    type: [String]
  },
  cuisineType: {
    type: [String]
  },
  mealType: {
    type: [String]
  },
  dishType: {
    type: [String]
  },
  ratings: {
    type: [Number]
  },
  ratingUsers: {
    type: [String]  // username
  },
  totalTime: {
    type: Number
  },
  // Why is cautions missing?
  healthLabels: {
    type: [String]
  },
  cautions: {
    type: [String]
  },
  
  // nested path v subdocument -- may not need the whole Type thing. e.g. label: String
  // you want subdocumentSchema bc it can have 'undefined'

  // const subdocumentSchema = new mongoose.Schema({
  //   child: new mongoose.Schema({ name: String, age: Number })
  // });
  // const Subdoc = mongoose.model('Subdoc', subdocumentSchema);
  
  // // Nested path
  // const nestedSchema = new mongoose.Schema({
  //   child: { name: String, age: Number }
  // });
  // const Nested = mongoose.model('Nested', nestedSchema);

  // totalNutrients: new Schema({
  //   ENERC_KCAL: subRecipeSchema,

  // }),

  totalNutrients: {
    type: Schema.Types.Mixed,
  },

  // totalNutrients: totalNutrients,

  // {

    // type: [recipeObjectSchema]

    // ENERC_KCAL: {
    //   label: {
    //     type: String
    //   },
    //   quantity: {
    //     type: Number
    //   },
    //   unit: {
    //     type: String
    //   }
    // },

  // },
  // add totalDaily too

  updated: {
    type: Date,
    default: Date.now,
    get: createdAtVal => dateFormat(createdAtVal)
  },

  // SHOULD WE INCLUDE A BLOG SECTION HERE?
  // OR comments for the recipe itself?
  
},
{
  toJSON: {
    virtuals: true,
  },
  strict: false
}
);

recipeSchema.totalNutrients = { any: { 
  ENERC_KCAL: { label: String, quantity: Number, unit: String }
}}

// virtual - average rating
recipeSchema.virtual('avgRating').get(function () {
  sum = this.ratings.reduce((a, b) => a + b, 0);
  if (this.ratings.length === 0) {
    return 0;
  } else {
    return Math.round(sum / this.ratings.length * 10) / 10;
  }
});



// virtual - rating count
recipeSchema.virtual('ratingCount').get(function () {
  return this.ratings.length;
});

recipeSchema.virtual('ingredientCount').get(function () {
  return this.ingredientLines.length;
});

const Recipe = model('Recipe', recipeSchema);


module.exports = Recipe;






    // FAT: {
    //   label: {
    //     type: String
    //   },
    //   quantity: {
    //     type: Number
    //   },
    //   unit: {
    //     type: String
    //   }
    // },
    // FASAT: {
    //   label: {
    //     type: String
    //   },
    //   quantity: {
    //     type: Number
    //   },
    //   unit: {
    //     type: String
    //   }
    // },
    // FAMS: {
    //   label: {
    //     type: String
    //   },
    //   quantity: {
    //     type: Number
    //   },
    //   unit: {
    //     type: String
    //   }
    // },
    // FAPU: {
    //   label: {
    //     type: String
    //   },
    //   quantity: {
    //     type: Number
    //   },
    //   unit: {
    //     type: String
    //   }
    // },
    // CHOCDF: {
    //   label: {
    //     type: String
    //   },
    //   quantity: {
    //     type: Number
    //   },
    //   unit: {
    //     type: String
    //   }
    // },
    // FIBTG: {
    //   label: {
    //     type: String
    //   },
    //   quantity: {
    //     type: Number
    //   },
    //   unit: {
    //     type: String
    //   }
    // },
    // SUGAR: {
    //   label: {
    //     type: String
    //   },
    //   quantity: {
    //     type: Number
    //   },
    //   unit: {
    //     type: String
    //   }
    // },
    // PROCNT: {
    //   label: {
    //     type: String
    //   },
    //   quantity: {
    //     type: Number
    //   },
    //   unit: {
    //     type: String
    //   }
    // },
    // CHOLE: {
    //   label: {
    //     type: String
    //   },
    //   quantity: {
    //     type: Number
    //   },
    //   unit: {
    //     type: String
    //   }
    // },
    // NA: {
    //   label: {
    //     type: String
    //   },
    //   quantity: {
    //     type: Number
    //   },
    //   unit: {
    //     type: String
    //   }
    // },
    // CA: {
    //   label: {
    //     type: String
    //   },
    //   quantity: {
    //     type: Number
    //   },
    //   unit: {
    //     type: String
    //   }
    // },
    // MG: {
    //   label: {
    //     type: String
    //   },
    //   quantity: {
    //     type: Number
    //   },
    //   unit: {
    //     type: String
    //   }
    // },
    // K: {
    //   label: {
    //     type: String
    //   },
    //   quantity: {
    //     type: Number
    //   },
    //   unit: {
    //     type: String
    //   }
    // },
    // FE: {
    //   label: {
    //     type: String
    //   },
    //   quantity: {
    //     type: Number
    //   },
    //   unit: {
    //     type: String
    //   }
    // },
    // ZN: {
    //   label: {
    //     type: String
    //   },
    //   quantity: {
    //     type: Number
    //   },
    //   unit: {
    //     type: String
    //   }
    // },
    // P: {
    //   label: {
    //     type: String
    //   },
    //   quantity: {
    //     type: Number
    //   },
    //   unit: {
    //     type: String
    //   }
    // },
    // VITA_RAE: {
    //   label: {
    //     type: String
    //   },
    //   quantity: {
    //     type: Number
    //   },
    //   unit: {
    //     type: String
    //   }
    // },
    // VITC: {
    //   label: {
    //     type: String
    //   },
    //   quantity: {
    //     type: Number
    //   },
    //   unit: {
    //     type: String
    //   }
    // },
    // THIA: {
    //   label: {
    //     type: String
    //   },
    //   quantity: {
    //     type: Number
    //   },
    //   unit: {
    //     type: String
    //   }
    // },
    // RIBF: {
    //   label: {
    //     type: String
    //   },
    //   quantity: {
    //     type: Number
    //   },
    //   unit: {
    //     type: String
    //   }
    // },
    // NIA: {
    //   label: {
    //     type: String
    //   },
    //   quantity: {
    //     type: Number
    //   },
    //   unit: {
    //     type: String
    //   }
    // },
    // VITB6A: {
    //   label: {
    //     type: String
    //   },
    //   quantity: {
    //     type: Number
    //   },
    //   unit: {
    //     type: String
    //   }
    // },
    // FOLDFE: {
    //   label: {
    //     type: String
    //   },
    //   quantity: {
    //     type: Number
    //   },
    //   unit: {
    //     type: String
    //   }
    // },
    // FOLFD: {
    //   label: {
    //     type: String
    //   },
    //   quantity: {
    //     type: Number
    //   },
    //   unit: {
    //     type: String
    //   }
    // },
    // FOLAC: {
    //   label: {
    //     type: String
    //   },
    //   quantity: {
    //     type: Number
    //   },
    //   unit: {
    //     type: String
    //   }
    // },
    // VITB12: {
    //   label: {
    //     type: String
    //   },
    //   quantity: {
    //     type: Number
    //   },
    //   unit: {
    //     type: String
    //   }
    // },
    // VITD: {
    //   label: {
    //     type: String
    //   },
    //   quantity: {
    //     type: Number
    //   },
    //   unit: {
    //     type: String
    //   }
    // },
    // TOCPHA: {
    //   label: {
    //     type: String
    //   },
    //   quantity: {
    //     type: Number
    //   },
    //   unit: {
    //     type: String
    //   }
    // },
    // VITK1: {
    //   label: {
    //     type: String
    //   },
    //   quantity: {
    //     type: Number
    //   },
    //   unit: {
    //     type: String
    //   }
    // },
    // WATER: {
    //   label: {
    //     type: String
    //   },
    //   quantity: {
    //     type: Number
    //   },
    //   unit: {
    //     type: String
    //   }
    // },