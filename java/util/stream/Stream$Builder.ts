declare var Java: any;
import Consumer from '../../../java/util/function/Consumer.js'
import Object from '../../../java/lang/Object.js'
import Stream from './Stream.js'

export default interface Stream$Builder extends Consumer {
	accept(arg0: Object): void;
	add(arg0: Object): Stream$Builder;
	andThen(arg0: Consumer): Consumer;
	build(): Stream;
}

export default class Stream$Builder {
	public static get $javaClass(): any {
		return Java.type('java.util.stream.Stream$Builder');
	}
	public static $isInstance(obj: any): obj is Stream$Builder {
		return obj instanceof Stream$Builder.$javaClass;
	}

}

