declare var Java: any;

export default interface Llama$Color {
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Llama$Color {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.entity.Llama$Color');
	}
	public static $isInstance(obj: any): obj is Llama$Color {
		return obj instanceof Llama$Color.$javaClass;
	}

	public static get BROWN(): Llama$Color {
		return this.$javaClass.BROWN;
	}
	public static get CREAMY(): Llama$Color {
		return this.$javaClass.CREAMY;
	}
	public static get GRAY(): Llama$Color {
		return this.$javaClass.GRAY;
	}
	public static get WHITE(): Llama$Color {
		return this.$javaClass.WHITE;
	}
}

