declare var Java: any;
import String from '../../java/lang/String.js'

export default interface Savepoint {
	getSavepointId(): number;
	getSavepointName(): string;
}

export default class Savepoint {
	public static get $javaClass(): any {
		return Java.type('java.sql.Savepoint');
	}
	public static $isInstance(obj: any): obj is Savepoint {
		return obj instanceof Savepoint.$javaClass;
	}

}

