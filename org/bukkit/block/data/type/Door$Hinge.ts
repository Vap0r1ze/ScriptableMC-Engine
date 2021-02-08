declare var Java: any;

export default interface Door$Hinge {
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Door$Hinge {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Door$Hinge');
	}
	public static $isInstance(obj: any): obj is Door$Hinge {
		return obj instanceof Door$Hinge.$javaClass;
	}

	public static get LEFT(): Door$Hinge {
		return this.$javaClass.LEFT;
	}
	public static get RIGHT(): Door$Hinge {
		return this.$javaClass.RIGHT;
	}
}

