declare var Java: any;
import Class from '../../../java/lang/Class.js'
import CookingRecipe from './CookingRecipe.js'
import ItemStack from './ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js'
import Object from '../../../java/lang/Object.js'
import RecipeChoice from './RecipeChoice.js'
import String from '../../../java/lang/String.js'

export default interface CampfireRecipe extends CookingRecipe {
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

export default class CampfireRecipe {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.CampfireRecipe');
	}
	public static $isInstance(obj: any): obj is CampfireRecipe {
		return obj instanceof CampfireRecipe.$javaClass;
	}

	constructor(key: NamespacedKey, result: ItemStack, source: Material, experience: number, cookingTime: number);
	constructor(key: NamespacedKey, result: ItemStack, input: RecipeChoice, experience: number, cookingTime: number);
	constructor(...args: any[]) {
		return new CampfireRecipe.$javaClass(...args);
	}

}

