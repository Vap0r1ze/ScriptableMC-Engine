declare var Java: any;
import Class from '../../../java/lang/Class.js'
import Collection from '../../../java/util/Collection.js'
import HelpTopic from './HelpTopic.js'
import HelpTopicFactory from './HelpTopicFactory.js'
import List from '../../../java/util/List.js'
import String from '../../../java/lang/String.js'

export default interface HelpMap {
	addTopic(arg0: HelpTopic): void;
	clear(): void;
	getHelpTopic(arg0: string): HelpTopic;
	getHelpTopics(): Array<HelpTopic>;
	getIgnoredPlugins(): Array<string>;
	registerHelpTopicFactory(arg0: Class, arg1: HelpTopicFactory): void;
}

export default class HelpMap {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.help.HelpMap');
	}
	public static $isInstance(obj: any): obj is HelpMap {
		return obj instanceof HelpMap.$javaClass;
	}

}

