declare var Java: any;

export default interface SlotIterator$Type {
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class SlotIterator$Type {
	public static get $javaClass(): any {
		return Java.type('fr.minuskube.inv.content.SlotIterator$Type');
	}
	public static $isInstance(obj: any): obj is SlotIterator$Type {
		return obj instanceof SlotIterator$Type.$javaClass;
	}

	public static get HORIZONTAL(): SlotIterator$Type {
		return this.$javaClass.HORIZONTAL;
	}
	public static get VERTICAL(): SlotIterator$Type {
		return this.$javaClass.VERTICAL;
	}
}

