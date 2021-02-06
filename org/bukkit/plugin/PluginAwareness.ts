declare var Java: any;

export default class PluginAwareness {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.PluginAwareness');
	}
	public static $isInstance(obj: any): obj is PluginAwareness {
		return obj instanceof PluginAwareness.$javaClass;
	}

}

