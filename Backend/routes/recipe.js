import express from 'express';
import {
  add,
  getAllRecipe,
  getRecipeById,
  getRecipeByUserId,
  getSavedRecipe,
  savedRecipeById,
  deleteRecipeById
} from '../controllers/recipe.js';
import { Authenticate } from '../middlewares/auth.js';

const router = express.Router();

router.post('/add', Authenticate, add);
router.get('/', getAllRecipe);
router.get('/saved', Authenticate, getSavedRecipe); // ✅ protect this route
router.get('/:id', getRecipeById);
router.get('/user/:id', getRecipeByUserId);
router.post('/:id', Authenticate, savedRecipeById);
router.delete('/:id', Authenticate, deleteRecipeById);

export default router;
