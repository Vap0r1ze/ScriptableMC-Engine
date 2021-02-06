declare var Java: any;

export default interface ObjectInputValidation {
	validateObject(): void;
}

export default class ObjectInputValidation {
	public static get $javaClass(): any {
		return Java.type('java.io.ObjectInputValidation');
	}
	public static $isInstance(obj: any): obj is ObjectInputValidation {
		return obj instanceof ObjectInputValidation.$javaClass;
	}

}

