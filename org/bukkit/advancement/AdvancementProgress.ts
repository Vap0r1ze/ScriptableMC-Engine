declare var Java: any;
import Advancement from './Advancement.js'

export default interface AdvancementProgress {
	awardCriteria(arg0: string): boolean;
	getAdvancement(): Advancement;
	getAwardedCriteria(): Array<string>;
	getDateAwarded(arg0: string): any;
	getRemainingCriteria(): Array<string>;
	isDone(): boolean;
	revokeCriteria(arg0: string): boolean;
}

export default class AdvancementProgress {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.advancement.AdvancementProgress');
	}
	public static $isInstance(obj: any): obj is AdvancementProgress {
		return obj instanceof AdvancementProgress.$javaClass;
	}

}

