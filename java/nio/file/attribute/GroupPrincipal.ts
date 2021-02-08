declare var Java: any;
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'
import UserPrincipal from './UserPrincipal.js'

export default interface GroupPrincipal extends UserPrincipal {
	getName(): string;
	implies(arg0: any): boolean;
}

export default class GroupPrincipal {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.attribute.GroupPrincipal');
	}
	public static $isInstance(obj: any): obj is GroupPrincipal {
		return obj instanceof GroupPrincipal.$javaClass;
	}

}

