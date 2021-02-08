declare var Java: any;
import Object from '../../../java/lang/Object.js'

export default interface Function {
	andThen(arg0: Function): Function;
	apply(arg0: Object): Object;
	compose(arg0: Function): Function;
}

export default class Function {
	public static get $javaClass(): any {
		return Java.type('java.util.function.Function');
	}
	public static $isInstance(obj: any): obj is Function {
		return obj instanceof Function.$javaClass;
	}

	public static identity(): Function;
	public static identity(...args: any[]): any {
		return Function.$javaClass.identity(...args);
	}

}

