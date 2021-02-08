declare var Java: any;
import Class from '../../../java/lang/Class.js'
import ItemStack from './ItemStack.js'
import Keyed from '../../../org/bukkit/Keyed.js'
import Material from '../../../org/bukkit/Material.js'
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js'
import Object from '../../../java/lang/Object.js'
import Recipe from './Recipe.js'
import RecipeChoice from './RecipeChoice.js'
import String from '../../../java/lang/String.js'

export default interface CookingRecipe extends Object, Recipe, Keyed {
	getCookingTime(): number;
	getExperience(): number;
	getGroup(): string;
	getInput(): ItemStack;
	getInputChoice(): RecipeChoice;
	getKey(): NamespacedKey;
	getResult(): ItemStack;
	setCookingTime(cookingTime: number): void;
	setExperience(experience: number): void;
	setGroup(group: string): void;
	setInput(input: Material): CookingRecipe;
	setInputChoice(input: RecipeChoice): CookingRecipe;
}

export default class CookingRecipe {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.CookingRecipe');
	}
	public static $isInstance(obj: any): obj is CookingRecipe {
		return obj instanceof CookingRecipe.$javaClass;
	}

	constructor(key: NamespacedKey, result: ItemStack, input: RecipeChoice, experience: number, cookingTime: number);
	constructor(key: NamespacedKey, result: ItemStack, source: Material, experience: number, cookingTime: number);
	constructor(...args: any[]) {
		return new CookingRecipe.$javaClass(...args);
	}

}

