declare var Java: any;
import PersistentDataContainer from './PersistentDataContainer.js'

export default interface PersistentDataAdapterContext {
	newPersistentDataContainer(): PersistentDataContainer;
}

export default class PersistentDataAdapterContext {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.persistence.PersistentDataAdapterContext');
	}

}

