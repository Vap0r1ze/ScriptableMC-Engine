declare var Java: any;
import BiConsumer from './function/BiConsumer.js'
import BiFunction from './function/BiFunction.js'
import Class from '../../java/lang/Class.js'
import Collection from './Collection.js'
import Enumeration from './Enumeration.js'
import Function from './function/Function.js'
import Hashtable from './Hashtable.js'
import InputStream from '../../java/io/InputStream.js'
import Map from './Map.js'
import Object from '../../java/lang/Object.js'
import OutputStream from '../../java/io/OutputStream.js'
import PrintStream from '../../java/io/PrintStream.js'
import PrintWriter from '../../java/io/PrintWriter.js'
import Reader from '../../java/io/Reader.js'
import Set from './Set.js'
import String from '../../java/lang/String.js'
import Writer from '../../java/io/Writer.js'

export default interface Properties extends Hashtable {
	clear(): void;
	clone(): Object;
	compute(arg0: Object, arg1: BiFunction): Object;
	computeIfAbsent(arg0: Object, arg1: Function): Object;
	computeIfPresent(arg0: Object, arg1: BiFunction): Object;
	contains(arg0: Object): boolean;
	containsKey(arg0: Object): boolean;
	containsValue(arg0: Object): boolean;
	elements(): Enumeration;
	entrySet(): Set;
	forEach(arg0: BiConsumer): void;
	get(arg0: Object): Object;
	getOrDefault(arg0: Object, arg1: Object): Object;
	getProperty(arg0: string): string;
	getProperty(arg0: string, arg1: string): string;
	isEmpty(): boolean;
	keySet(): Set;
	keys(): Enumeration;
	list(arg0: PrintWriter): void;
	list(arg0: PrintStream): void;
	load(arg0: Reader): void;
	load(arg0: InputStream): void;
	loadFromXML(arg0: InputStream): void;
	merge(arg0: Object, arg1: Object, arg2: BiFunction): Object;
	propertyNames(): Enumeration;
	put(arg0: Object, arg1: Object): Object;
	putAll(arg0: Map): void;
	putIfAbsent(arg0: Object, arg1: Object): Object;
	remove(arg0: Object): Object;
	remove(arg0: Object, arg1: Object): boolean;
	replace(arg0: Object, arg1: Object): Object;
	replace(arg0: Object, arg1: Object, arg2: Object): boolean;
	replaceAll(arg0: BiFunction): void;
	save(arg0: OutputStream, arg1: string): void;
	setProperty(arg0: string, arg1: string): Object;
	size(): number;
	store(arg0: OutputStream, arg1: string): void;
	store(arg0: Writer, arg1: string): void;
	storeToXML(arg0: OutputStream, arg1: string): void;
	storeToXML(arg0: OutputStream, arg1: string, arg2: string): void;
	stringPropertyNames(): Set;
	values(): Array<any>;
}

export default class Properties {
	public static get $javaClass(): any {
		return Java.type('java.util.Properties');
	}
	public static $isInstance(obj: any): obj is Properties {
		return obj instanceof Properties.$javaClass;
	}

	constructor();
	constructor(arg0: Properties);
	constructor(...args: any[]) {
		return new Properties.$javaClass(...args);
	}

}

