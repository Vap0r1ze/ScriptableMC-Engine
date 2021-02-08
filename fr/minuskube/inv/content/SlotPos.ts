declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'

export default interface SlotPos extends Object {
	getColumn(): number;
	getRow(): number;
}

export default class SlotPos {
	public static get $javaClass(): any {
		return Java.type('fr.minuskube.inv.content.SlotPos');
	}
	public static $isInstance(obj: any): obj is SlotPos {
		return obj instanceof SlotPos.$javaClass;
	}

	constructor(row: number, column: number);
	constructor(...args: any[]) {
		return new SlotPos.$javaClass(...args);
	}

	public static of(row: number, column: number): SlotPos;
	public static of(...args: any[]): any {
		return SlotPos.$javaClass.of(...args);
	}

}

