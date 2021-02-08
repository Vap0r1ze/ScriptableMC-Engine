declare var Java: any;
import AttributeModifier$Operation from './AttributeModifier$Operation.js'
import Class from '../../../java/lang/Class.js'
import ConfigurationSerializable from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'
import EquipmentSlot from '../../../org/bukkit/inventory/EquipmentSlot.js'
import Map from '../../../java/util/Map.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'
import UUID from '../../../java/util/UUID.js'

export default interface AttributeModifier extends Object, ConfigurationSerializable {
	getAmount(): number;
	getName(): string;
	getOperation(): AttributeModifier$Operation;
	getSlot(): EquipmentSlot;
	getUniqueId(): string;
	serialize(): Map;
}

export default class AttributeModifier {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.attribute.AttributeModifier');
	}
	public static $isInstance(obj: any): obj is AttributeModifier {
		return obj instanceof AttributeModifier.$javaClass;
	}

	constructor(_name: string, amount: number, operation: AttributeModifier$Operation);
	constructor(uuid: string, _name: string, amount: number, operation: AttributeModifier$Operation);
	constructor(uuid: string, _name: string, amount: number, operation: AttributeModifier$Operation, slot: EquipmentSlot);
	constructor(...args: any[]) {
		return new AttributeModifier.$javaClass(...args);
	}

	public static deserialize(args: Map): AttributeModifier;
	public static deserialize(...args: any[]): any {
		return AttributeModifier.$javaClass.deserialize(...args);
	}

}

