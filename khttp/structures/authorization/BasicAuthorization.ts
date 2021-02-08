declare var Java: any;
import Authorization from './Authorization.js'
import Class from '../../../java/lang/Class.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'

export default interface BasicAuthorization extends Object, Authorization {
	component1(): string;
	component2(): string;
	copy(user: string, password: string): BasicAuthorization;
	getHeader(): any;
	getPassword(): string;
	getUser(): string;
}

export default class BasicAuthorization {
	public static get $javaClass(): any {
		return Java.type('khttp.structures.authorization.BasicAuthorization');
	}
	public static $isInstance(obj: any): obj is BasicAuthorization {
		return obj instanceof BasicAuthorization.$javaClass;
	}

	constructor(user: string, password: string);
	constructor(...args: any[]) {
		return new BasicAuthorization.$javaClass(...args);
	}

	public static copy$default(arg0: BasicAuthorization, arg1: string, arg2: string, arg3: number, arg4: Object): BasicAuthorization;
	public static copy$default(...args: any[]): any {
		return BasicAuthorization.$javaClass.copy$default(...args);
	}

}

