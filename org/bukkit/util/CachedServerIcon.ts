declare var Java: any;

export default class CachedServerIcon {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.CachedServerIcon');
	}
	public static $isInstance(obj: any): obj is CachedServerIcon {
		return obj instanceof CachedServerIcon.$javaClass;
	}

}

