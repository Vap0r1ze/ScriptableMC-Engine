declare var Java: any;
import Cloneable from '../../../java/lang/Cloneable.js'
import ItemStack from './ItemStack.js'
import Object from '../../../java/lang/Object.js'
import Predicate from '../../../java/util/function/Predicate.js'

export default interface RecipeChoice extends Predicate, Cloneable {
	and(arg0: Predicate): Predicate;
	clone(): Object;
	clone(): RecipeChoice;
	getItemStack(): ItemStack;
	negate(): Predicate;
	or(arg0: Predicate): Predicate;
	test(arg0: Object): boolean;
	test(arg0: ItemStack): boolean;
}

export default class RecipeChoice {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.RecipeChoice');
	}
	public static $isInstance(obj: any): obj is RecipeChoice {
		return obj instanceof RecipeChoice.$javaClass;
	}

}

