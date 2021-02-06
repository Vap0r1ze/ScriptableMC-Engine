declare var Java: any;

export default interface ArmorStand$LockType {
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class ArmorStand$LockType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.ArmorStand$LockType');
	}

	public static get ADDING(): ArmorStand$LockType {
		return this.$javaClass.ADDING;
	}
	public static get ADDING_OR_CHANGING(): ArmorStand$LockType {
		return this.$javaClass.ADDING_OR_CHANGING;
	}
	public static get REMOVING_OR_CHANGING(): ArmorStand$LockType {
		return this.$javaClass.REMOVING_OR_CHANGING;
	}
}

