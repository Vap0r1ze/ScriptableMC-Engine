declare var Java: any;
import GroupPrincipal from './GroupPrincipal.js'
import UserPrincipal from './UserPrincipal.js'

export default interface UserPrincipalLookupService {
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

