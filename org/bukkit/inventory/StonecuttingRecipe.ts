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

export default interface StonecuttingRecipe extends Object, Recipe, Keyed {
	getGroup(): string;
	getInput(): ItemStack;
	getInputChoice(): RecipeChoice;
	getKey(): NamespacedKey;
	getResult(): ItemStack;
	setGroup(group: string): void;
	setInput(input: Material): StonecuttingRecipe;
	setInputChoice(input: RecipeChoice): StonecuttingRecipe;
}

export default class StonecuttingRecipe {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.StonecuttingRecipe');
	}
	public static $isInstance(obj: any): obj is StonecuttingRecipe {
		return obj instanceof StonecuttingRecipe.$javaClass;
	}

	constructor(key: NamespacedKey, result: ItemStack, source: Material);
	constructor(key: NamespacedKey, result: ItemStack, input: RecipeChoice);
	constructor(...args: any[]) {
		return new StonecuttingRecipe.$javaClass(...args);
	}

}

