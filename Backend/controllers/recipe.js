import {Recipe} from '../Models/Recipe.js'
import {SavedRecipe} from '../Models/SavedRecipe.js'

export const add = async (req,res)=>{
    const { title, ist, ing1, ing2, ing3, ing4, qty1, qty2, qty3, qty4,imgurl } =
      req.body;
      try {
        const recipe = await Recipe.create({
          title,
          ist,
          ing1,
          ing2,
          ing3,
          ing4,
          qty1,
          qty2,
          qty3,
          qty4,
          imgurl,
          user: req.user,
        });

        res.json({message:"Recipe Created Successfully..!",recipe})
      } catch (error) {
        res.json({message:error})
      }
} 


export const getAllRecipe = async (req,res) =>{
    const recipe = await Recipe.find();
    res.json({recipe}) 
}


export const getRecipeById = async (req,res)=>{
    const id = req.params.id
    try { 
        let recipe = await Recipe.findById(id)

        if(!recipe) res.json({message:'recipe not exist'})

        res.json({message:"recipe by id", recipe})
        
    } catch (error) {
        res.json({message:error})
    }
}

export const getRecipeByUserId = async (req,res) =>{
 const userId = req.params.id;
 try {
   let recipe = await Recipe.find({user:userId});

   if (!recipe) res.json({ message: "recipe not exist" });

   res.json({ message: "recipe by userId", recipe });
 } catch (error) {
   res.json({ message: error });
 }
}

export const savedRecipeById = async (req, res) => {
  const id = req.params.id;
  const userId = req.user._id;

  try {
    const existing = await SavedRecipe.findOne({ recipe: id, user: userId });
    if (existing) return res.json({ message: "Recipe already saved" });

    await SavedRecipe.create({ recipe: id, user: userId });

    res.json({ message: "Recipe saved Successfully..!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getSavedRecipe = async (req, res) => {
  try {
    const saved = await SavedRecipe.find({ user: req.user._id }).populate("recipe");

    const validRecipes = saved
      .map((entry) => entry.recipe)
      .filter((recipe) => recipe !== null); // prevent crash if recipe is deleted

    res.json({ recipe: validRecipes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteRecipeById = async (req, res) => {
  const id = req.params.id;
  try {
    const deleted = await Recipe.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Recipe not found" });

    res.json({ message: "Recipe deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
