declare var Java: any;
import PersistentDataContainer from './PersistentDataContainer.js'

export default interface PersistentDataHolder {
	getPersistentDataContainer(): PersistentDataContainer;
}

export default class PersistentDataHolder {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.persistence.PersistentDataHolder');
	}
	public static $isInstance(obj: any): obj is PersistentDataHolder {
		return obj instanceof PersistentDataHolder.$javaClass;
	}

}

