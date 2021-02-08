declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Comparator from '../../../java/util/Comparator.js'
import Function from '../../../java/util/function/Function.js'
import HelpTopic from './HelpTopic.js'
import HelpTopicComparator$TopicNameComparator from './HelpTopicComparator$TopicNameComparator.js'
import Object from '../../../java/lang/Object.js'
import String from '../../../java/lang/String.js'
import ToDoubleFunction from '../../../java/util/function/ToDoubleFunction.js'
import ToIntFunction from '../../../java/util/function/ToIntFunction.js'
import ToLongFunction from '../../../java/util/function/ToLongFunction.js'

export default interface HelpTopicComparator extends Object, Comparator {
	compare(lhs: HelpTopic, rhs: HelpTopic): number;
	compare(arg0: Object, arg1: Object): number;
	reversed(): Comparator;
	thenComparing(arg0: Function): Comparator;
	thenComparing(arg0: Comparator): Comparator;
	thenComparing(arg0: Function, arg1: Comparator): Comparator;
	thenComparingDouble(arg0: ToDoubleFunction): Comparator;
	thenComparingInt(arg0: ToIntFunction): Comparator;
	thenComparingLong(arg0: ToLongFunction): Comparator;
}

export default class HelpTopicComparator {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.help.HelpTopicComparator');
	}
	public static $isInstance(obj: any): obj is HelpTopicComparator {
		return obj instanceof HelpTopicComparator.$javaClass;
	}

	public static helpTopicComparatorInstance(): HelpTopicComparator;
	public static helpTopicComparatorInstance(...args: any[]): any {
		return HelpTopicComparator.$javaClass.helpTopicComparatorInstance(...args);
	}

	public static topicNameComparatorInstance(): HelpTopicComparator$TopicNameComparator;
	public static topicNameComparatorInstance(...args: any[]): any {
		return HelpTopicComparator.$javaClass.topicNameComparatorInstance(...args);
	}

}

