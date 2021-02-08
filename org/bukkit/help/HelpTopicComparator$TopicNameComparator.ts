declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Comparator from '../../../java/util/Comparator.js'
import Function from '../../../java/util/function/Function.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'
import ToDoubleFunction from '../../../java/util/function/ToDoubleFunction.js'
import ToIntFunction from '../../../java/util/function/ToIntFunction.js'
import ToLongFunction from '../../../java/util/function/ToLongFunction.js'

export default interface HelpTopicComparator$TopicNameComparator extends Object, Comparator {
	compare(lhs: string, rhs: string): number;
	compare(arg0: Object, arg1: Object): number;
	reversed(): Comparator;
	thenComparing(arg0: Function): Comparator;
	thenComparing(arg0: Comparator): Comparator;
	thenComparing(arg0: Function, arg1: Comparator): Comparator;
	thenComparingDouble(arg0: ToDoubleFunction): Comparator;
	thenComparingInt(arg0: ToIntFunction): Comparator;
	thenComparingLong(arg0: ToLongFunction): Comparator;
}

export default class HelpTopicComparator$TopicNameComparator {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.help.HelpTopicComparator$TopicNameComparator');
	}
	public static $isInstance(obj: any): obj is HelpTopicComparator$TopicNameComparator {
		return obj instanceof HelpTopicComparator$TopicNameComparator.$javaClass;
	}

}

