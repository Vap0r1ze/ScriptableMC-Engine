declare var Java: any;
import Runnable from '../../../java/lang/Runnable.js'

export default interface Executor {
	execute(arg0: Runnable): void;
}

export default class Executor {
	public static get $javaClass(): any {
		return Java.type('java.util.concurrent.Executor');
	}
	public static $isInstance(obj: any): obj is Executor {
		return obj instanceof Executor.$javaClass;
	}

}

