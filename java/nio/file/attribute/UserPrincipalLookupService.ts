declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import GroupPrincipal from './GroupPrincipal.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'
import UserPrincipal from './UserPrincipal.js'

export default interface UserPrincipalLookupService extends Object {
	lookupPrincipalByGroupName(arg0: string): GroupPrincipal;
	lookupPrincipalByName(arg0: string): UserPrincipal;
}

export default class UserPrincipalLookupService {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.attribute.UserPrincipalLookupService');
	}
	public static $isInstance(obj: any): obj is UserPrincipalLookupService {
		return obj instanceof UserPrincipalLookupService.$javaClass;
	}

}

