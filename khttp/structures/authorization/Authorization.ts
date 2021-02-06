declare var Java: any;

export default interface Authorization {
	getHeader(): any;
}

export default class Authorization {
	public static get $javaClass(): any {
		return Java.type('khttp.structures.authorization.Authorization');
	}
	public static $isInstance(obj: any): obj is Authorization {
		return obj instanceof Authorization.$javaClass;
	}

}

