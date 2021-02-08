declare var Java: any;
import Class from '../../../java/lang/Class.js'
import ItemStack from './ItemStack.js'
import Keyed from '../../../org/bukkit/Keyed.js'
import Map from '../../../java/util/Map.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'
import NamespacedKey from '../../../org/bukkit/NamespacedKey.js'
import Object from '../../../java/lang/Object.js'
import Recipe from './Recipe.js'
import RecipeChoice from './RecipeChoice.js'
import String from '../../../java/lang/String.js'

export default interface ShapedRecipe extends Object, Recipe, Keyed {
	getChoiceMap(): Map;
	getGroup(): string;
	getIngredientMap(): Map;
	getKey(): NamespacedKey;
	getResult(): ItemStack;
	getShape(): Array<string>;
	setGroup(group: string): void;
	setIngredient(key: string, ingredient: Material): ShapedRecipe;
	setIngredient(key: string, ingredient: RecipeChoice): ShapedRecipe;
	setIngredient(key: string, ingredient: MaterialData): ShapedRecipe;
	setIngredient(key: string, ingredient: Material, raw: number): ShapedRecipe;
	shape(shape: Array<string>): ShapedRecipe;
}

export default class ShapedRecipe {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.ShapedRecipe');
	}
	public static $isInstance(obj: any): obj is ShapedRecipe {
		return obj instanceof ShapedRecipe.$javaClass;
	}

	constructor(result: ItemStack);
	constructor(key: NamespacedKey, result: ItemStack);
	constructor(...args: any[]) {
		return new ShapedRecipe.$javaClass(...args);
	}

}

