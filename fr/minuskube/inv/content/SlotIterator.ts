declare var Java: any;
import ClickableItem from '../../../../fr/minuskube/inv/ClickableItem.js'
import Optional from '../../../../java/util/Optional.js'
import SlotPos from './SlotPos.js'

export default interface SlotIterator {
	allowOverride(arg0: boolean): SlotIterator;
	blacklist(arg0: SlotPos): SlotIterator;
	blacklist(arg0: number, arg1: number): SlotIterator;
	column(): number;
	column(arg0: number): SlotIterator;
	doesAllowOverride(): boolean;
	ended(): boolean;
	get(): Optional;
	next(): SlotIterator;
	previous(): SlotIterator;
	row(): number;
	row(arg0: number): SlotIterator;
	set(arg0: ClickableItem): SlotIterator;
	started(): boolean;
}

export default class SlotIterator {
	public static get $javaClass(): any {
		return Java.type('fr.minuskube.inv.content.SlotIterator');
	}
	public static $isInstance(obj: any): obj is SlotIterator {
		return obj instanceof SlotIterator.$javaClass;
	}

}

