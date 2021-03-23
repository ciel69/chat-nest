import { Injectable } from '@nestjs/common';
import { NewRecipeInput } from './dto/new-recipe.input';
import { RecipesArgs } from './dto/recipes.args';
import { Recipe } from './models/recipe.model';

@Injectable()
export class RecipesService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */
  recipes = [];

  async create(data: NewRecipeInput): Promise<Recipe> {
    this.recipes.push(data);
    return data as any;
  }

  async findOneById(id: string): Promise<Recipe> {
    return {} as any;
  }

  async findAll(recipesArgs: RecipesArgs): Promise<Recipe[]> {
    return this.recipes as Recipe[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
