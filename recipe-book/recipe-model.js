const db = require('../data/dbConfig');

// Exports all helper functions for use in the scheme-router
module.exports = {
	getRecipes,
	getShoppingList,
	getInstructions
}

// Returns all recipes in the database
async function getRecipes() {

	return await db('recipes');
}

// Returns a list of all ingredients and quantities for a given recipe
function getShoppingList(recipe_id) {

}

// Returns a list of step by step instructions for preparing a recipe
function getInstructions(recipe_id) {

}