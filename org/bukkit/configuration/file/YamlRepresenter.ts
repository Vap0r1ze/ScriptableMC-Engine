declare var Java: any;
import Class from '../../../../java/lang/Class.js'
import Object from '../../../../java/lang/Object.js'
import String from '../../../../java/lang/String.js'
import TimeZone from '../../../../java/util/TimeZone.js'

export default interface YamlRepresenter {
	addClassTag(arg0: Class, arg1: any): any;
	addTypeDescription(td: any): any;
	getDefaultFlowStyle(): any;
	getDefaultScalarStyle(): any;
	getPropertyUtils(): any;
	getTimeZone(): TimeZone;
	isExplicitPropertyUtils(): boolean;
	represent(data: Object): any;
	setDefaultFlowStyle(defaultFlowStyle: any): void;
	setDefaultScalarStyle(defaultStyle: any): void;
	setPropertyUtils(propertyUtils: any): void;
	setTimeZone(arg0: TimeZone): void;
}

export default class YamlRepresenter {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.file.YamlRepresenter');
	}
	public static $isInstance(obj: any): obj is YamlRepresenter {
		return obj instanceof YamlRepresenter.$javaClass;
	}

	constructor();
	constructor(...args: any[]) {
		return new YamlRepresenter.$javaClass(...args);
	}

}

